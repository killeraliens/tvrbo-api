// package: roost
// file: roost.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as roost_pb from "./roost_pb";

interface IRoostServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getRoostDetails: IRoostServiceService_IGetRoostDetails;
    createRoost: IRoostServiceService_ICreateRoost;
    assignBirdToRoost: IRoostServiceService_IAssignBirdToRoost;
}

interface IRoostServiceService_IGetRoostDetails extends grpc.MethodDefinition<roost_pb.GetRoostRequest, roost_pb.RoostResponse> {
    path: "/roost.RoostService/GetRoostDetails";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<roost_pb.GetRoostRequest>;
    requestDeserialize: grpc.deserialize<roost_pb.GetRoostRequest>;
    responseSerialize: grpc.serialize<roost_pb.RoostResponse>;
    responseDeserialize: grpc.deserialize<roost_pb.RoostResponse>;
}
interface IRoostServiceService_ICreateRoost extends grpc.MethodDefinition<roost_pb.CreateRoostRequest, roost_pb.RoostResponse> {
    path: "/roost.RoostService/CreateRoost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<roost_pb.CreateRoostRequest>;
    requestDeserialize: grpc.deserialize<roost_pb.CreateRoostRequest>;
    responseSerialize: grpc.serialize<roost_pb.RoostResponse>;
    responseDeserialize: grpc.deserialize<roost_pb.RoostResponse>;
}
interface IRoostServiceService_IAssignBirdToRoost extends grpc.MethodDefinition<roost_pb.AssignBirdRequest, roost_pb.RoostResponse> {
    path: "/roost.RoostService/AssignBirdToRoost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<roost_pb.AssignBirdRequest>;
    requestDeserialize: grpc.deserialize<roost_pb.AssignBirdRequest>;
    responseSerialize: grpc.serialize<roost_pb.RoostResponse>;
    responseDeserialize: grpc.deserialize<roost_pb.RoostResponse>;
}

export const RoostServiceService: IRoostServiceService;

export interface IRoostServiceServer {
    getRoostDetails: grpc.handleUnaryCall<roost_pb.GetRoostRequest, roost_pb.RoostResponse>;
    createRoost: grpc.handleUnaryCall<roost_pb.CreateRoostRequest, roost_pb.RoostResponse>;
    assignBirdToRoost: grpc.handleUnaryCall<roost_pb.AssignBirdRequest, roost_pb.RoostResponse>;
}

export interface IRoostServiceClient {
    getRoostDetails(request: roost_pb.GetRoostRequest, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    getRoostDetails(request: roost_pb.GetRoostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    getRoostDetails(request: roost_pb.GetRoostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    createRoost(request: roost_pb.CreateRoostRequest, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    createRoost(request: roost_pb.CreateRoostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    createRoost(request: roost_pb.CreateRoostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    assignBirdToRoost(request: roost_pb.AssignBirdRequest, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    assignBirdToRoost(request: roost_pb.AssignBirdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    assignBirdToRoost(request: roost_pb.AssignBirdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
}

export class RoostServiceClient extends grpc.Client implements IRoostServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getRoostDetails(request: roost_pb.GetRoostRequest, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    public getRoostDetails(request: roost_pb.GetRoostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    public getRoostDetails(request: roost_pb.GetRoostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    public createRoost(request: roost_pb.CreateRoostRequest, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    public createRoost(request: roost_pb.CreateRoostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    public createRoost(request: roost_pb.CreateRoostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    public assignBirdToRoost(request: roost_pb.AssignBirdRequest, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    public assignBirdToRoost(request: roost_pb.AssignBirdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
    public assignBirdToRoost(request: roost_pb.AssignBirdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: roost_pb.RoostResponse) => void): grpc.ClientUnaryCall;
}
