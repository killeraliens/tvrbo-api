import { ServerUnaryCall, sendUnaryData, status } from '@grpc/grpc-js';
import axios from 'axios';
import * as jwt from 'jsonwebtoken';
import { promisify } from 'util';

const verifyAsync = promisify(jwt.verify);

interface KeycloakConfig {
    url: string;
    realm: string;
    clientId: string;
    clientSecret: string;
}

interface KeycloakCerts {
    keys: {
        kid: string;
        x5c: string[];
    }[];
}

export interface AuthenticatedCall extends ServerUnaryCall<any, any> {
    user?: {
        sub: string;
        preferred_username: string;
        email?: string;
        realm_access?: {
            roles: string[];
        };
    };
}

class KeycloakMiddleware {
    private config: KeycloakConfig;
    private certsCache: {
        certs?: KeycloakCerts;
        expiresAt?: number;
    } = {};

    constructor() {
        this.config = {
            url: process.env.KEYCLOAK_URL || 'http://localhost:8080',
            realm: process.env.KEYCLOAK_REALM || 'tvrbo-realm',
            clientId: process.env.KEYCLOAK_CLIENT_ID || 'tvrbo-api',
            clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || '',
        };
    }

    private async getCerts(): Promise<KeycloakCerts> {
        try {
            // Use cached certs if available and not expired
            if (
                this.certsCache.certs &&
                this.certsCache.expiresAt &&
                Date.now() < this.certsCache.expiresAt
            ) {
                return this.certsCache.certs;
            }

            const response = await axios.get<KeycloakCerts>(
                `${this.config.url}/realms/${this.config.realm}/protocol/openid-connect/certs`
            );

            // Cache for 24 hours
            this.certsCache = {
                certs: response.data,
                expiresAt: Date.now() + 24 * 60 * 60 * 1000,
            };

            return response.data;
        } catch (error) {
            console.error('Failed to fetch Keycloak certs:', error);
            throw new Error('Failed to fetch Keycloak certificates');
        }
    }

    private async verifyToken(token: string): Promise<any> {
        try {
            const certs = await this.getCerts();
            
            // Decode token without verification to get the key ID
            const decodedToken = jwt.decode(token, { complete: true });
            
            if (!decodedToken || typeof decodedToken === 'string') {
                throw new Error('Invalid token format');
            }

            // Find the matching certificate using key ID
            const kid = decodedToken.header.kid;
            const cert = certs.keys.find(key => key.kid === kid);

            if (!cert) {
                throw new Error('No matching key found');
            }

            // Create PEM certificate from x5c
            const certPEM = `-----BEGIN CERTIFICATE-----\n${cert.x5c[0]}\n-----END CERTIFICATE-----`;

            // Verify the token
            return jwt.verify(token, certPEM, {
                algorithms: ['RS256'],
                issuer: `${this.config.url}/realms/${this.config.realm}`,
                audience: this.config.clientId
            });
            
        } catch (error) {
            console.error('Token verification failed:', error);
            throw error;
        }
    }

    async authenticate(call: AuthenticatedCall, callback: sendUnaryData<any>): Promise<boolean> {
        try {
            const metadata = call.metadata;
            const authHeader = metadata.get('authorization')[0] as string;

            if (!authHeader) {
                throw new Error('No authorization header');
            }

            const [bearer, token] = authHeader.split(' ');
            
            if (bearer !== 'Bearer' || !token) {
                throw new Error('Invalid authorization header format');
            }

            const decoded = await this.verifyToken(token);
            call.user = decoded;
            return true;
        } catch (error) {
            let errorMessage = 'Authentication failed';
            let errorCode = status.UNAUTHENTICATED;

            if (error instanceof Error) {
                if (error.message === 'jwt expired') {
                    errorMessage = 'Token has expired';
                } else if (error.message.includes('invalid signature')) {
                    errorMessage = 'Invalid token signature';
                }
            }

            callback({
                code: errorCode,
                message: errorMessage
            });
            return false;
        }
    }

    hasRole(call: AuthenticatedCall, requiredRole: string): boolean {
        return call.user?.realm_access?.roles.includes(requiredRole) || false;
    }
}

export const keycloakMiddleware = new KeycloakMiddleware(); 