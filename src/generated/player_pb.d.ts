// package: player
// file: player.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetPlayerRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): GetPlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlayerRequest): GetPlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlayerRequest;
    static deserializeBinaryFromReader(message: GetPlayerRequest, reader: jspb.BinaryReader): GetPlayerRequest;
}

export namespace GetPlayerRequest {
    export type AsObject = {
        playerId: string,
    }
}

export class CreatePlayerRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): CreatePlayerRequest;
    getEmail(): string;
    setEmail(value: string): CreatePlayerRequest;
    getPassword(): string;
    setPassword(value: string): CreatePlayerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlayerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlayerRequest): CreatePlayerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlayerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlayerRequest;
    static deserializeBinaryFromReader(message: CreatePlayerRequest, reader: jspb.BinaryReader): CreatePlayerRequest;
}

export namespace CreatePlayerRequest {
    export type AsObject = {
        username: string,
        email: string,
        password: string,
    }
}

export class PlayerResponse extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): PlayerResponse;
    getUsername(): string;
    setUsername(value: string): PlayerResponse;
    getEmail(): string;
    setEmail(value: string): PlayerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerResponse): PlayerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerResponse;
    static deserializeBinaryFromReader(message: PlayerResponse, reader: jspb.BinaryReader): PlayerResponse;
}

export namespace PlayerResponse {
    export type AsObject = {
        playerId: string,
        username: string,
        email: string,
    }
}
