// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var player_pb = require('./player_pb.js');

function serialize_player_CreatePlayerRequest(arg) {
  if (!(arg instanceof player_pb.CreatePlayerRequest)) {
    throw new Error('Expected argument of type player.CreatePlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_CreatePlayerRequest(buffer_arg) {
  return player_pb.CreatePlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_GetPlayerRequest(arg) {
  if (!(arg instanceof player_pb.GetPlayerRequest)) {
    throw new Error('Expected argument of type player.GetPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_GetPlayerRequest(buffer_arg) {
  return player_pb.GetPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_player_PlayerResponse(arg) {
  if (!(arg instanceof player_pb.PlayerResponse)) {
    throw new Error('Expected argument of type player.PlayerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_player_PlayerResponse(buffer_arg) {
  return player_pb.PlayerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PlayerServiceService = exports.PlayerServiceService = {
  getPlayer: {
    path: '/player.PlayerService/GetPlayer',
    requestStream: false,
    responseStream: false,
    requestType: player_pb.GetPlayerRequest,
    responseType: player_pb.PlayerResponse,
    requestSerialize: serialize_player_GetPlayerRequest,
    requestDeserialize: deserialize_player_GetPlayerRequest,
    responseSerialize: serialize_player_PlayerResponse,
    responseDeserialize: deserialize_player_PlayerResponse,
  },
  createPlayer: {
    path: '/player.PlayerService/CreatePlayer',
    requestStream: false,
    responseStream: false,
    requestType: player_pb.CreatePlayerRequest,
    responseType: player_pb.PlayerResponse,
    requestSerialize: serialize_player_CreatePlayerRequest,
    requestDeserialize: deserialize_player_CreatePlayerRequest,
    responseSerialize: serialize_player_PlayerResponse,
    responseDeserialize: deserialize_player_PlayerResponse,
  },
};

exports.PlayerServiceClient = grpc.makeGenericClientConstructor(PlayerServiceService);
