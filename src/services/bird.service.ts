import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import { IBirdServiceServer } from '../generated/bird_grpc_pb';
import {
    GetBirdRequest,
    BirdResponse,
    FeedBirdRequest,
    ScoutRequest,
    ScoutResponse,
    CreateBirdRequest,
    IncrementEvolvedStatusRequest,
} from '../generated/bird_pb';

export const birdService: IBirdServiceServer = {
    getBirdDetails: (
        call: ServerUnaryCall<GetBirdRequest, BirdResponse>,
        callback: sendUnaryData<BirdResponse>
    ) => {
        const birdId = call.request.getBirdId();

        // Mock response
        const response = new BirdResponse();
        response.setBirdId(birdId);
        response.setName('MockBird');
        response.setPersonality('Curious');
        response.setHunger(50);
        response.setSpeed(10);
        response.setClumsiness(5);
        response.setEvolvedStatus(1);

        callback(null, response);
    },

    feedBird: (
        call: ServerUnaryCall<FeedBirdRequest, BirdResponse>,
        callback: sendUnaryData<BirdResponse>
    ) => {
        const { getBirdId, getFoodAmount } = call.request;

        // Mock response
        const response = new BirdResponse();
        response.setBirdId(getBirdId());
        response.setHunger(Math.max(0, 100 - getFoodAmount()));

        callback(null, response);
    },

    scoutBird: (
        call: ServerUnaryCall<ScoutRequest, ScoutResponse>,
        callback: sendUnaryData<ScoutResponse>
    ) => {
        const { getBirdId, getTargetRoostId } = call.request;

        // Mock response
        const response = new ScoutResponse();
        response.setStatus('success');
        response.setMessage(
            `Bird ${getBirdId()} successfully scouted target roost ${getTargetRoostId()}.`
        );

        callback(null, response);
    },

    createBird: (
        call: ServerUnaryCall<CreateBirdRequest, BirdResponse>,
        callback: sendUnaryData<BirdResponse>
    ) => {
        const { getName, getPersonality } = call.request;

        // Mock response
        const response = new BirdResponse();
        response.setBirdId('789'); // Mock ID
        response.setName(getName());
        response.setPersonality(getPersonality());
        response.setHunger(100);
        response.setSpeed(5);
        response.setClumsiness(10);
        response.setEvolvedStatus(0); // Starts as an egg

        callback(null, response);
    },

    incrementEvolvedStatus: (
        call: ServerUnaryCall<IncrementEvolvedStatusRequest, BirdResponse>,
        callback: sendUnaryData<BirdResponse>
    ) => {
        const { getBirdId, getIncrementValue } = call.request;

        // Mock response
        const response = new BirdResponse();
        response.setBirdId(getBirdId());
        response.setEvolvedStatus(getIncrementValue()); // Increment logic can be more complex later

        callback(null, response);
    },
};
