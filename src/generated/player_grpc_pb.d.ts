// package: player
// file: player.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as player_pb from "./player_pb";

interface IPlayerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPlayer: IPlayerServiceService_IGetPlayer;
    createPlayer: IPlayerServiceService_ICreatePlayer;
}

interface IPlayerServiceService_IGetPlayer extends grpc.MethodDefinition<player_pb.GetPlayerRequest, player_pb.PlayerResponse> {
    path: "/player.PlayerService/GetPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<player_pb.GetPlayerRequest>;
    requestDeserialize: grpc.deserialize<player_pb.GetPlayerRequest>;
    responseSerialize: grpc.serialize<player_pb.PlayerResponse>;
    responseDeserialize: grpc.deserialize<player_pb.PlayerResponse>;
}
interface IPlayerServiceService_ICreatePlayer extends grpc.MethodDefinition<player_pb.CreatePlayerRequest, player_pb.PlayerResponse> {
    path: "/player.PlayerService/CreatePlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<player_pb.CreatePlayerRequest>;
    requestDeserialize: grpc.deserialize<player_pb.CreatePlayerRequest>;
    responseSerialize: grpc.serialize<player_pb.PlayerResponse>;
    responseDeserialize: grpc.deserialize<player_pb.PlayerResponse>;
}

export const PlayerServiceService: IPlayerServiceService;

export interface IPlayerServiceServer {
    getPlayer: grpc.handleUnaryCall<player_pb.GetPlayerRequest, player_pb.PlayerResponse>;
    createPlayer: grpc.handleUnaryCall<player_pb.CreatePlayerRequest, player_pb.PlayerResponse>;
}

export interface IPlayerServiceClient {
    getPlayer(request: player_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: player_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: player_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: player_pb.CreatePlayerRequest, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: player_pb.CreatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
    createPlayer(request: player_pb.CreatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
}

export class PlayerServiceClient extends grpc.Client implements IPlayerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPlayer(request: player_pb.GetPlayerRequest, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: player_pb.GetPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: player_pb.GetPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: player_pb.CreatePlayerRequest, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: player_pb.CreatePlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
    public createPlayer(request: player_pb.CreatePlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: player_pb.PlayerResponse) => void): grpc.ClientUnaryCall;
}
