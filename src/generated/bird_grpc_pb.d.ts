// package: bird
// file: bird.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as bird_pb from "./bird_pb";

interface IBirdServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBirdDetails: IBirdServiceService_IGetBirdDetails;
    feedBird: IBirdServiceService_IFeedBird;
    scoutBird: IBirdServiceService_IScoutBird;
    createBird: IBirdServiceService_ICreateBird;
    incrementEvolvedStatus: IBirdServiceService_IIncrementEvolvedStatus;
}

interface IBirdServiceService_IGetBirdDetails extends grpc.MethodDefinition<bird_pb.GetBirdRequest, bird_pb.BirdResponse> {
    path: "/bird.BirdService/GetBirdDetails";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bird_pb.GetBirdRequest>;
    requestDeserialize: grpc.deserialize<bird_pb.GetBirdRequest>;
    responseSerialize: grpc.serialize<bird_pb.BirdResponse>;
    responseDeserialize: grpc.deserialize<bird_pb.BirdResponse>;
}
interface IBirdServiceService_IFeedBird extends grpc.MethodDefinition<bird_pb.FeedBirdRequest, bird_pb.BirdResponse> {
    path: "/bird.BirdService/FeedBird";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bird_pb.FeedBirdRequest>;
    requestDeserialize: grpc.deserialize<bird_pb.FeedBirdRequest>;
    responseSerialize: grpc.serialize<bird_pb.BirdResponse>;
    responseDeserialize: grpc.deserialize<bird_pb.BirdResponse>;
}
interface IBirdServiceService_IScoutBird extends grpc.MethodDefinition<bird_pb.ScoutRequest, bird_pb.ScoutResponse> {
    path: "/bird.BirdService/ScoutBird";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bird_pb.ScoutRequest>;
    requestDeserialize: grpc.deserialize<bird_pb.ScoutRequest>;
    responseSerialize: grpc.serialize<bird_pb.ScoutResponse>;
    responseDeserialize: grpc.deserialize<bird_pb.ScoutResponse>;
}
interface IBirdServiceService_ICreateBird extends grpc.MethodDefinition<bird_pb.CreateBirdRequest, bird_pb.BirdResponse> {
    path: "/bird.BirdService/CreateBird";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bird_pb.CreateBirdRequest>;
    requestDeserialize: grpc.deserialize<bird_pb.CreateBirdRequest>;
    responseSerialize: grpc.serialize<bird_pb.BirdResponse>;
    responseDeserialize: grpc.deserialize<bird_pb.BirdResponse>;
}
interface IBirdServiceService_IIncrementEvolvedStatus extends grpc.MethodDefinition<bird_pb.IncrementEvolvedStatusRequest, bird_pb.BirdResponse> {
    path: "/bird.BirdService/IncrementEvolvedStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bird_pb.IncrementEvolvedStatusRequest>;
    requestDeserialize: grpc.deserialize<bird_pb.IncrementEvolvedStatusRequest>;
    responseSerialize: grpc.serialize<bird_pb.BirdResponse>;
    responseDeserialize: grpc.deserialize<bird_pb.BirdResponse>;
}

export const BirdServiceService: IBirdServiceService;

export interface IBirdServiceServer {
    getBirdDetails: grpc.handleUnaryCall<bird_pb.GetBirdRequest, bird_pb.BirdResponse>;
    feedBird: grpc.handleUnaryCall<bird_pb.FeedBirdRequest, bird_pb.BirdResponse>;
    scoutBird: grpc.handleUnaryCall<bird_pb.ScoutRequest, bird_pb.ScoutResponse>;
    createBird: grpc.handleUnaryCall<bird_pb.CreateBirdRequest, bird_pb.BirdResponse>;
    incrementEvolvedStatus: grpc.handleUnaryCall<bird_pb.IncrementEvolvedStatusRequest, bird_pb.BirdResponse>;
}

export interface IBirdServiceClient {
    getBirdDetails(request: bird_pb.GetBirdRequest, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    getBirdDetails(request: bird_pb.GetBirdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    getBirdDetails(request: bird_pb.GetBirdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    feedBird(request: bird_pb.FeedBirdRequest, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    feedBird(request: bird_pb.FeedBirdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    feedBird(request: bird_pb.FeedBirdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    scoutBird(request: bird_pb.ScoutRequest, callback: (error: grpc.ServiceError | null, response: bird_pb.ScoutResponse) => void): grpc.ClientUnaryCall;
    scoutBird(request: bird_pb.ScoutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bird_pb.ScoutResponse) => void): grpc.ClientUnaryCall;
    scoutBird(request: bird_pb.ScoutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bird_pb.ScoutResponse) => void): grpc.ClientUnaryCall;
    createBird(request: bird_pb.CreateBirdRequest, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    createBird(request: bird_pb.CreateBirdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    createBird(request: bird_pb.CreateBirdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    incrementEvolvedStatus(request: bird_pb.IncrementEvolvedStatusRequest, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    incrementEvolvedStatus(request: bird_pb.IncrementEvolvedStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    incrementEvolvedStatus(request: bird_pb.IncrementEvolvedStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
}

export class BirdServiceClient extends grpc.Client implements IBirdServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getBirdDetails(request: bird_pb.GetBirdRequest, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public getBirdDetails(request: bird_pb.GetBirdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public getBirdDetails(request: bird_pb.GetBirdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public feedBird(request: bird_pb.FeedBirdRequest, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public feedBird(request: bird_pb.FeedBirdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public feedBird(request: bird_pb.FeedBirdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public scoutBird(request: bird_pb.ScoutRequest, callback: (error: grpc.ServiceError | null, response: bird_pb.ScoutResponse) => void): grpc.ClientUnaryCall;
    public scoutBird(request: bird_pb.ScoutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bird_pb.ScoutResponse) => void): grpc.ClientUnaryCall;
    public scoutBird(request: bird_pb.ScoutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bird_pb.ScoutResponse) => void): grpc.ClientUnaryCall;
    public createBird(request: bird_pb.CreateBirdRequest, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public createBird(request: bird_pb.CreateBirdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public createBird(request: bird_pb.CreateBirdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public incrementEvolvedStatus(request: bird_pb.IncrementEvolvedStatusRequest, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public incrementEvolvedStatus(request: bird_pb.IncrementEvolvedStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
    public incrementEvolvedStatus(request: bird_pb.IncrementEvolvedStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bird_pb.BirdResponse) => void): grpc.ClientUnaryCall;
}
