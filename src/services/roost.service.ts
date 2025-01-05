import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import { IRoostServiceServer } from '../generated/roost_grpc_pb';
import {
    GetRoostRequest,
    RoostResponse,
    CreateRoostRequest,
    AssignBirdRequest,
} from '../generated/roost_pb';

export const roostService: IRoostServiceServer = {
    getRoostDetails: (
        call: ServerUnaryCall<GetRoostRequest, RoostResponse>,
        callback: sendUnaryData<RoostResponse>
    ) => {
        const roostId = call.request.getRoostId();

        // Mock response
        const response = new RoostResponse();
        response.setRoostId(roostId);
        response.setPlayerId('123');
        response.setName('Mock Roost');
        response.setLatitude(40.7128);
        response.setLongitude(-74.0060);
        response.setBirdsList(['bird1', 'bird2']);

        callback(null, response);
    },

    createRoost: (
        call: ServerUnaryCall<CreateRoostRequest, RoostResponse>,
        callback: sendUnaryData<RoostResponse>
    ) => {
        const { getPlayerId, getName, getLatitude, getLongitude } = call.request;

        // Mock response
        const response = new RoostResponse();
        response.setRoostId('456');
        response.setPlayerId(getPlayerId());
        response.setName(getName());
        response.setLatitude(getLatitude());
        response.setLongitude(getLongitude());
        response.setBirdsList([]);

        callback(null, response);
    },

    assignBirdToRoost: (
        call: ServerUnaryCall<AssignBirdRequest, RoostResponse>,
        callback: sendUnaryData<RoostResponse>
    ) => {
        const { getRoostId, getBirdId } = call.request;

        // Mock response
        const response = new RoostResponse();
        response.setRoostId(getRoostId());
        response.setBirdsList([getBirdId()]);

        callback(null, response);
    },
};
