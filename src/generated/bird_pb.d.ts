// package: bird
// file: bird.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetBirdRequest extends jspb.Message { 
    getBirdId(): string;
    setBirdId(value: string): GetBirdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBirdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBirdRequest): GetBirdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBirdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBirdRequest;
    static deserializeBinaryFromReader(message: GetBirdRequest, reader: jspb.BinaryReader): GetBirdRequest;
}

export namespace GetBirdRequest {
    export type AsObject = {
        birdId: string,
    }
}

export class BirdResponse extends jspb.Message { 
    getBirdId(): string;
    setBirdId(value: string): BirdResponse;
    getName(): string;
    setName(value: string): BirdResponse;
    getPersonality(): string;
    setPersonality(value: string): BirdResponse;
    getHunger(): number;
    setHunger(value: number): BirdResponse;
    getSpeed(): number;
    setSpeed(value: number): BirdResponse;
    getClumsiness(): number;
    setClumsiness(value: number): BirdResponse;
    getEvolvedStatus(): number;
    setEvolvedStatus(value: number): BirdResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BirdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BirdResponse): BirdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BirdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BirdResponse;
    static deserializeBinaryFromReader(message: BirdResponse, reader: jspb.BinaryReader): BirdResponse;
}

export namespace BirdResponse {
    export type AsObject = {
        birdId: string,
        name: string,
        personality: string,
        hunger: number,
        speed: number,
        clumsiness: number,
        evolvedStatus: number,
    }
}

export class FeedBirdRequest extends jspb.Message { 
    getBirdId(): string;
    setBirdId(value: string): FeedBirdRequest;
    getFoodAmount(): number;
    setFoodAmount(value: number): FeedBirdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedBirdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FeedBirdRequest): FeedBirdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedBirdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedBirdRequest;
    static deserializeBinaryFromReader(message: FeedBirdRequest, reader: jspb.BinaryReader): FeedBirdRequest;
}

export namespace FeedBirdRequest {
    export type AsObject = {
        birdId: string,
        foodAmount: number,
    }
}

export class ScoutRequest extends jspb.Message { 
    getBirdId(): string;
    setBirdId(value: string): ScoutRequest;
    getTargetRoostId(): string;
    setTargetRoostId(value: string): ScoutRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScoutRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScoutRequest): ScoutRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScoutRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScoutRequest;
    static deserializeBinaryFromReader(message: ScoutRequest, reader: jspb.BinaryReader): ScoutRequest;
}

export namespace ScoutRequest {
    export type AsObject = {
        birdId: string,
        targetRoostId: string,
    }
}

export class ScoutResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): ScoutResponse;
    getMessage(): string;
    setMessage(value: string): ScoutResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScoutResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ScoutResponse): ScoutResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScoutResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScoutResponse;
    static deserializeBinaryFromReader(message: ScoutResponse, reader: jspb.BinaryReader): ScoutResponse;
}

export namespace ScoutResponse {
    export type AsObject = {
        status: string,
        message: string,
    }
}

export class CreateBirdRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateBirdRequest;
    getPersonality(): string;
    setPersonality(value: string): CreateBirdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBirdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBirdRequest): CreateBirdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBirdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBirdRequest;
    static deserializeBinaryFromReader(message: CreateBirdRequest, reader: jspb.BinaryReader): CreateBirdRequest;
}

export namespace CreateBirdRequest {
    export type AsObject = {
        name: string,
        personality: string,
    }
}

export class IncrementEvolvedStatusRequest extends jspb.Message { 
    getBirdId(): string;
    setBirdId(value: string): IncrementEvolvedStatusRequest;
    getIncrementValue(): number;
    setIncrementValue(value: number): IncrementEvolvedStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IncrementEvolvedStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IncrementEvolvedStatusRequest): IncrementEvolvedStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IncrementEvolvedStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IncrementEvolvedStatusRequest;
    static deserializeBinaryFromReader(message: IncrementEvolvedStatusRequest, reader: jspb.BinaryReader): IncrementEvolvedStatusRequest;
}

export namespace IncrementEvolvedStatusRequest {
    export type AsObject = {
        birdId: string,
        incrementValue: number,
    }
}
