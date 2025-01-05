// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var roost_pb = require('./roost_pb.js');

function serialize_roost_AssignBirdRequest(arg) {
  if (!(arg instanceof roost_pb.AssignBirdRequest)) {
    throw new Error('Expected argument of type roost.AssignBirdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_roost_AssignBirdRequest(buffer_arg) {
  return roost_pb.AssignBirdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_roost_CreateRoostRequest(arg) {
  if (!(arg instanceof roost_pb.CreateRoostRequest)) {
    throw new Error('Expected argument of type roost.CreateRoostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_roost_CreateRoostRequest(buffer_arg) {
  return roost_pb.CreateRoostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_roost_GetRoostRequest(arg) {
  if (!(arg instanceof roost_pb.GetRoostRequest)) {
    throw new Error('Expected argument of type roost.GetRoostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_roost_GetRoostRequest(buffer_arg) {
  return roost_pb.GetRoostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_roost_RoostResponse(arg) {
  if (!(arg instanceof roost_pb.RoostResponse)) {
    throw new Error('Expected argument of type roost.RoostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_roost_RoostResponse(buffer_arg) {
  return roost_pb.RoostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RoostServiceService = exports.RoostServiceService = {
  // Get details of a specific roost
getRoostDetails: {
    path: '/roost.RoostService/GetRoostDetails',
    requestStream: false,
    responseStream: false,
    requestType: roost_pb.GetRoostRequest,
    responseType: roost_pb.RoostResponse,
    requestSerialize: serialize_roost_GetRoostRequest,
    requestDeserialize: deserialize_roost_GetRoostRequest,
    responseSerialize: serialize_roost_RoostResponse,
    responseDeserialize: deserialize_roost_RoostResponse,
  },
  // Create a new roost
createRoost: {
    path: '/roost.RoostService/CreateRoost',
    requestStream: false,
    responseStream: false,
    requestType: roost_pb.CreateRoostRequest,
    responseType: roost_pb.RoostResponse,
    requestSerialize: serialize_roost_CreateRoostRequest,
    requestDeserialize: deserialize_roost_CreateRoostRequest,
    responseSerialize: serialize_roost_RoostResponse,
    responseDeserialize: deserialize_roost_RoostResponse,
  },
  // Assign a bird to a roost
assignBirdToRoost: {
    path: '/roost.RoostService/AssignBirdToRoost',
    requestStream: false,
    responseStream: false,
    requestType: roost_pb.AssignBirdRequest,
    responseType: roost_pb.RoostResponse,
    requestSerialize: serialize_roost_AssignBirdRequest,
    requestDeserialize: deserialize_roost_AssignBirdRequest,
    responseSerialize: serialize_roost_RoostResponse,
    responseDeserialize: deserialize_roost_RoostResponse,
  },
};

exports.RoostServiceClient = grpc.makeGenericClientConstructor(RoostServiceService);
