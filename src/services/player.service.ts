import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import { IPlayerServiceServer } from '../generated/player_grpc_pb';
import {
    GetPlayerRequest,
    PlayerResponse,
    CreatePlayerRequest,
} from '../generated/player_pb';

export const playerService: IPlayerServiceServer = {
    getPlayer: (
        call: ServerUnaryCall<GetPlayerRequest, PlayerResponse>,
        callback: sendUnaryData<PlayerResponse>
    ) => {
        const playerId = call.request.getPlayerId();

        // Mock response
        const response = new PlayerResponse();
        response.setPlayerId(playerId);
        response.setUsername('MockUser');
        response.setEmail('mockuser@example.com');

        callback(null, response);
    },

    createPlayer: (
        call: ServerUnaryCall<CreatePlayerRequest, PlayerResponse>,
        callback: sendUnaryData<PlayerResponse>
    ) => {
        const { getUsername, getEmail } = call.request;

        // Mock response
        const response = new PlayerResponse();
        response.setPlayerId('456'); // Mock ID
        response.setUsername(getUsername());
        response.setEmail(getEmail());

        callback(null, response);
    },
};
