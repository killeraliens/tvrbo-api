import { ServerUnaryCall, sendUnaryData, status } from '@grpc/grpc-js';
import { IPlayerServiceServer } from '../generated/player_grpc_pb';
import {
    GetPlayerRequest,
    PlayerResponse,
    CreatePlayerRequest,
} from '../generated/player_pb';
import { keycloakMiddleware, AuthenticatedCall } from '../middleware/keycloak.middleware';

export const playerService: IPlayerServiceServer = {
    getPlayer: async (
        call: ServerUnaryCall<GetPlayerRequest, PlayerResponse>,
        callback: sendUnaryData<PlayerResponse>
    ) => {
        try {
            // Authenticate the request
            const isAuthenticated = await keycloakMiddleware.authenticate(call as AuthenticatedCall, callback);
            if (!isAuthenticated) {
                return;
            }

            // Check if user has required role
            if (!keycloakMiddleware.hasRole(call as AuthenticatedCall, 'player-read')) {
                callback({
                    code: status.PERMISSION_DENIED,
                    message: 'Insufficient permissions'
                });
                return;
            }

            const playerId = call.request.getPlayerId();

            // Mock response
            const response = new PlayerResponse();
            response.setPlayerId(playerId);
            response.setUsername('MockUser');
            response.setEmail('mockuser@example.com');

            callback(null, response);
        } catch (error) {
            console.error('Error in getPlayer:', error);
            callback({
                code: status.INTERNAL,
                message: 'Internal server error'
            });
        }
    },

    createPlayer: async (
        call: ServerUnaryCall<CreatePlayerRequest, PlayerResponse>,
        callback: sendUnaryData<PlayerResponse>
    ) => {
        try {
            // Authenticate the request
            const isAuthenticated = await keycloakMiddleware.authenticate(call as AuthenticatedCall, callback);
            if (!isAuthenticated) {
                return;
            }

            // Check if user has required role
            if (!keycloakMiddleware.hasRole(call as AuthenticatedCall, 'player-create')) {
                callback({
                    code: status.PERMISSION_DENIED,
                    message: 'Insufficient permissions'
                });
                return;
            }

            const { getUsername, getEmail } = call.request;

            // Mock response
            const response = new PlayerResponse();
            response.setPlayerId('456');
            response.setUsername(getUsername());
            response.setEmail(getEmail());

            callback(null, response);
        } catch (error) {
            console.error('Error in createPlayer:', error);
            callback({
                code: status.INTERNAL,
                message: 'Internal server error'
            });
        }
    },
};
