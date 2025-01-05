// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var bird_pb = require('./bird_pb.js');

function serialize_bird_BirdResponse(arg) {
  if (!(arg instanceof bird_pb.BirdResponse)) {
    throw new Error('Expected argument of type bird.BirdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bird_BirdResponse(buffer_arg) {
  return bird_pb.BirdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bird_CreateBirdRequest(arg) {
  if (!(arg instanceof bird_pb.CreateBirdRequest)) {
    throw new Error('Expected argument of type bird.CreateBirdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bird_CreateBirdRequest(buffer_arg) {
  return bird_pb.CreateBirdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bird_FeedBirdRequest(arg) {
  if (!(arg instanceof bird_pb.FeedBirdRequest)) {
    throw new Error('Expected argument of type bird.FeedBirdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bird_FeedBirdRequest(buffer_arg) {
  return bird_pb.FeedBirdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bird_GetBirdRequest(arg) {
  if (!(arg instanceof bird_pb.GetBirdRequest)) {
    throw new Error('Expected argument of type bird.GetBirdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bird_GetBirdRequest(buffer_arg) {
  return bird_pb.GetBirdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bird_IncrementEvolvedStatusRequest(arg) {
  if (!(arg instanceof bird_pb.IncrementEvolvedStatusRequest)) {
    throw new Error('Expected argument of type bird.IncrementEvolvedStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bird_IncrementEvolvedStatusRequest(buffer_arg) {
  return bird_pb.IncrementEvolvedStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bird_ScoutRequest(arg) {
  if (!(arg instanceof bird_pb.ScoutRequest)) {
    throw new Error('Expected argument of type bird.ScoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bird_ScoutRequest(buffer_arg) {
  return bird_pb.ScoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bird_ScoutResponse(arg) {
  if (!(arg instanceof bird_pb.ScoutResponse)) {
    throw new Error('Expected argument of type bird.ScoutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bird_ScoutResponse(buffer_arg) {
  return bird_pb.ScoutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BirdServiceService = exports.BirdServiceService = {
  // Get details of a specific bird
getBirdDetails: {
    path: '/bird.BirdService/GetBirdDetails',
    requestStream: false,
    responseStream: false,
    requestType: bird_pb.GetBirdRequest,
    responseType: bird_pb.BirdResponse,
    requestSerialize: serialize_bird_GetBirdRequest,
    requestDeserialize: deserialize_bird_GetBirdRequest,
    responseSerialize: serialize_bird_BirdResponse,
    responseDeserialize: deserialize_bird_BirdResponse,
  },
  // Feed a bird
feedBird: {
    path: '/bird.BirdService/FeedBird',
    requestStream: false,
    responseStream: false,
    requestType: bird_pb.FeedBirdRequest,
    responseType: bird_pb.BirdResponse,
    requestSerialize: serialize_bird_FeedBirdRequest,
    requestDeserialize: deserialize_bird_FeedBirdRequest,
    responseSerialize: serialize_bird_BirdResponse,
    responseDeserialize: deserialize_bird_BirdResponse,
  },
  // Send a bird to scout
scoutBird: {
    path: '/bird.BirdService/ScoutBird',
    requestStream: false,
    responseStream: false,
    requestType: bird_pb.ScoutRequest,
    responseType: bird_pb.ScoutResponse,
    requestSerialize: serialize_bird_ScoutRequest,
    requestDeserialize: deserialize_bird_ScoutRequest,
    responseSerialize: serialize_bird_ScoutResponse,
    responseDeserialize: deserialize_bird_ScoutResponse,
  },
  // Create a new bird (egg)
createBird: {
    path: '/bird.BirdService/CreateBird',
    requestStream: false,
    responseStream: false,
    requestType: bird_pb.CreateBirdRequest,
    responseType: bird_pb.BirdResponse,
    requestSerialize: serialize_bird_CreateBirdRequest,
    requestDeserialize: deserialize_bird_CreateBirdRequest,
    responseSerialize: serialize_bird_BirdResponse,
    responseDeserialize: deserialize_bird_BirdResponse,
  },
  // Increment the evolved status of a bird
incrementEvolvedStatus: {
    path: '/bird.BirdService/IncrementEvolvedStatus',
    requestStream: false,
    responseStream: false,
    requestType: bird_pb.IncrementEvolvedStatusRequest,
    responseType: bird_pb.BirdResponse,
    requestSerialize: serialize_bird_IncrementEvolvedStatusRequest,
    requestDeserialize: deserialize_bird_IncrementEvolvedStatusRequest,
    responseSerialize: serialize_bird_BirdResponse,
    responseDeserialize: deserialize_bird_BirdResponse,
  },
};

exports.BirdServiceClient = grpc.makeGenericClientConstructor(BirdServiceService);
