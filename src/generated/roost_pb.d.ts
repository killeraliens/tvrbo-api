// package: roost
// file: roost.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetRoostRequest extends jspb.Message { 
    getRoostId(): string;
    setRoostId(value: string): GetRoostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRoostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRoostRequest): GetRoostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRoostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRoostRequest;
    static deserializeBinaryFromReader(message: GetRoostRequest, reader: jspb.BinaryReader): GetRoostRequest;
}

export namespace GetRoostRequest {
    export type AsObject = {
        roostId: string,
    }
}

export class RoostResponse extends jspb.Message { 
    getRoostId(): string;
    setRoostId(value: string): RoostResponse;
    getPlayerId(): string;
    setPlayerId(value: string): RoostResponse;
    getName(): string;
    setName(value: string): RoostResponse;
    getLatitude(): number;
    setLatitude(value: number): RoostResponse;
    getLongitude(): number;
    setLongitude(value: number): RoostResponse;
    clearBirdsList(): void;
    getBirdsList(): Array<string>;
    setBirdsList(value: Array<string>): RoostResponse;
    addBirds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoostResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RoostResponse): RoostResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoostResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoostResponse;
    static deserializeBinaryFromReader(message: RoostResponse, reader: jspb.BinaryReader): RoostResponse;
}

export namespace RoostResponse {
    export type AsObject = {
        roostId: string,
        playerId: string,
        name: string,
        latitude: number,
        longitude: number,
        birdsList: Array<string>,
    }
}

export class CreateRoostRequest extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): CreateRoostRequest;
    getName(): string;
    setName(value: string): CreateRoostRequest;
    getLatitude(): number;
    setLatitude(value: number): CreateRoostRequest;
    getLongitude(): number;
    setLongitude(value: number): CreateRoostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRoostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRoostRequest): CreateRoostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRoostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRoostRequest;
    static deserializeBinaryFromReader(message: CreateRoostRequest, reader: jspb.BinaryReader): CreateRoostRequest;
}

export namespace CreateRoostRequest {
    export type AsObject = {
        playerId: string,
        name: string,
        latitude: number,
        longitude: number,
    }
}

export class AssignBirdRequest extends jspb.Message { 
    getRoostId(): string;
    setRoostId(value: string): AssignBirdRequest;
    getBirdId(): string;
    setBirdId(value: string): AssignBirdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssignBirdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssignBirdRequest): AssignBirdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssignBirdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssignBirdRequest;
    static deserializeBinaryFromReader(message: AssignBirdRequest, reader: jspb.BinaryReader): AssignBirdRequest;
}

export namespace AssignBirdRequest {
    export type AsObject = {
        roostId: string,
        birdId: string,
    }
}
