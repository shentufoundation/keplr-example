// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.21.12
// source: shentu/cert/v1alpha1/tx.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "shentu.cert.v1alpha1";

/** MsgProposeCertifier is the message for proposing new certifier. */
export interface MsgProposeCertifier {
  proposer: string;
  alias: string;
  certifier: string;
  description: string;
}

export interface MsgProposeCertifierResponse {
}

/** MsgCertifyGeneral is the message for issuing a general certificate. */
export interface MsgIssueCertificate {
  content: Any | undefined;
  compiler: string;
  bytecodeHash: string;
  description: string;
  certifier: string;
}

export interface MsgIssueCertificateResponse {
}

/** MsgRevokeCertificate returns a certificate revoking operation. */
export interface MsgRevokeCertificate {
  revoker: string;
  id: string;
  description: string;
}

export interface MsgRevokeCertificateResponse {
}

/** MsgCertifyPlatform is the message for certifying a validator's host platform. */
export interface MsgCertifyPlatform {
  certifier: string;
  validatorPubkey: Any | undefined;
  platform: string;
}

export interface MsgCertifyPlatformResponse {
}

function createBaseMsgProposeCertifier(): MsgProposeCertifier {
  return { proposer: "", alias: "", certifier: "", description: "" };
}

export const MsgProposeCertifier = {
  encode(message: MsgProposeCertifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    if (message.certifier !== "") {
      writer.uint32(26).string(message.certifier);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeCertifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeCertifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.alias = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.certifier = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgProposeCertifier {
    return {
      proposer: isSet(object.proposer) ? globalThis.String(object.proposer) : "",
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      certifier: isSet(object.certifier) ? globalThis.String(object.certifier) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: MsgProposeCertifier): unknown {
    const obj: any = {};
    if (message.proposer !== "") {
      obj.proposer = message.proposer;
    }
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.certifier !== "") {
      obj.certifier = message.certifier;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgProposeCertifier>, I>>(base?: I): MsgProposeCertifier {
    return MsgProposeCertifier.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgProposeCertifier>, I>>(object: I): MsgProposeCertifier {
    const message = createBaseMsgProposeCertifier();
    message.proposer = object.proposer ?? "";
    message.alias = object.alias ?? "";
    message.certifier = object.certifier ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgProposeCertifierResponse(): MsgProposeCertifierResponse {
  return {};
}

export const MsgProposeCertifierResponse = {
  encode(_: MsgProposeCertifierResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeCertifierResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeCertifierResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgProposeCertifierResponse {
    return {};
  },

  toJSON(_: MsgProposeCertifierResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgProposeCertifierResponse>, I>>(base?: I): MsgProposeCertifierResponse {
    return MsgProposeCertifierResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgProposeCertifierResponse>, I>>(_: I): MsgProposeCertifierResponse {
    const message = createBaseMsgProposeCertifierResponse();
    return message;
  },
};

function createBaseMsgIssueCertificate(): MsgIssueCertificate {
  return { content: undefined, compiler: "", bytecodeHash: "", description: "", certifier: "" };
}

export const MsgIssueCertificate = {
  encode(message: MsgIssueCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    if (message.compiler !== "") {
      writer.uint32(18).string(message.compiler);
    }
    if (message.bytecodeHash !== "") {
      writer.uint32(26).string(message.bytecodeHash);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.certifier !== "") {
      writer.uint32(42).string(message.certifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.compiler = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bytecodeHash = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.certifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgIssueCertificate {
    return {
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      compiler: isSet(object.compiler) ? globalThis.String(object.compiler) : "",
      bytecodeHash: isSet(object.bytecodeHash) ? globalThis.String(object.bytecodeHash) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      certifier: isSet(object.certifier) ? globalThis.String(object.certifier) : "",
    };
  },

  toJSON(message: MsgIssueCertificate): unknown {
    const obj: any = {};
    if (message.content !== undefined) {
      obj.content = Any.toJSON(message.content);
    }
    if (message.compiler !== "") {
      obj.compiler = message.compiler;
    }
    if (message.bytecodeHash !== "") {
      obj.bytecodeHash = message.bytecodeHash;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.certifier !== "") {
      obj.certifier = message.certifier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgIssueCertificate>, I>>(base?: I): MsgIssueCertificate {
    return MsgIssueCertificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgIssueCertificate>, I>>(object: I): MsgIssueCertificate {
    const message = createBaseMsgIssueCertificate();
    message.content = (object.content !== undefined && object.content !== null)
      ? Any.fromPartial(object.content)
      : undefined;
    message.compiler = object.compiler ?? "";
    message.bytecodeHash = object.bytecodeHash ?? "";
    message.description = object.description ?? "";
    message.certifier = object.certifier ?? "";
    return message;
  },
};

function createBaseMsgIssueCertificateResponse(): MsgIssueCertificateResponse {
  return {};
}

export const MsgIssueCertificateResponse = {
  encode(_: MsgIssueCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgIssueCertificateResponse {
    return {};
  },

  toJSON(_: MsgIssueCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgIssueCertificateResponse>, I>>(base?: I): MsgIssueCertificateResponse {
    return MsgIssueCertificateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgIssueCertificateResponse>, I>>(_: I): MsgIssueCertificateResponse {
    const message = createBaseMsgIssueCertificateResponse();
    return message;
  },
};

function createBaseMsgRevokeCertificate(): MsgRevokeCertificate {
  return { revoker: "", id: "0", description: "" };
}

export const MsgRevokeCertificate = {
  encode(message: MsgRevokeCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revoker !== "") {
      writer.uint32(10).string(message.revoker);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.revoker = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeCertificate {
    return {
      revoker: isSet(object.revoker) ? globalThis.String(object.revoker) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: MsgRevokeCertificate): unknown {
    const obj: any = {};
    if (message.revoker !== "") {
      obj.revoker = message.revoker;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRevokeCertificate>, I>>(base?: I): MsgRevokeCertificate {
    return MsgRevokeCertificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevokeCertificate>, I>>(object: I): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    message.revoker = object.revoker ?? "";
    message.id = object.id ?? "0";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgRevokeCertificateResponse(): MsgRevokeCertificateResponse {
  return {};
}

export const MsgRevokeCertificateResponse = {
  encode(_: MsgRevokeCertificateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRevokeCertificateResponse {
    return {};
  },

  toJSON(_: MsgRevokeCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRevokeCertificateResponse>, I>>(base?: I): MsgRevokeCertificateResponse {
    return MsgRevokeCertificateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevokeCertificateResponse>, I>>(_: I): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  },
};

function createBaseMsgCertifyPlatform(): MsgCertifyPlatform {
  return { certifier: "", validatorPubkey: undefined, platform: "" };
}

export const MsgCertifyPlatform = {
  encode(message: MsgCertifyPlatform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certifier !== "") {
      writer.uint32(10).string(message.certifier);
    }
    if (message.validatorPubkey !== undefined) {
      Any.encode(message.validatorPubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.platform !== "") {
      writer.uint32(26).string(message.platform);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCertifyPlatform {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCertifyPlatform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.certifier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorPubkey = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.platform = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCertifyPlatform {
    return {
      certifier: isSet(object.certifier) ? globalThis.String(object.certifier) : "",
      validatorPubkey: isSet(object.validatorPubkey) ? Any.fromJSON(object.validatorPubkey) : undefined,
      platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
    };
  },

  toJSON(message: MsgCertifyPlatform): unknown {
    const obj: any = {};
    if (message.certifier !== "") {
      obj.certifier = message.certifier;
    }
    if (message.validatorPubkey !== undefined) {
      obj.validatorPubkey = Any.toJSON(message.validatorPubkey);
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCertifyPlatform>, I>>(base?: I): MsgCertifyPlatform {
    return MsgCertifyPlatform.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCertifyPlatform>, I>>(object: I): MsgCertifyPlatform {
    const message = createBaseMsgCertifyPlatform();
    message.certifier = object.certifier ?? "";
    message.validatorPubkey = (object.validatorPubkey !== undefined && object.validatorPubkey !== null)
      ? Any.fromPartial(object.validatorPubkey)
      : undefined;
    message.platform = object.platform ?? "";
    return message;
  },
};

function createBaseMsgCertifyPlatformResponse(): MsgCertifyPlatformResponse {
  return {};
}

export const MsgCertifyPlatformResponse = {
  encode(_: MsgCertifyPlatformResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCertifyPlatformResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCertifyPlatformResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCertifyPlatformResponse {
    return {};
  },

  toJSON(_: MsgCertifyPlatformResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCertifyPlatformResponse>, I>>(base?: I): MsgCertifyPlatformResponse {
    return MsgCertifyPlatformResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCertifyPlatformResponse>, I>>(_: I): MsgCertifyPlatformResponse {
    const message = createBaseMsgCertifyPlatformResponse();
    return message;
  },
};

/** Msg defines the shield Msg service. */
export interface Msg {
  ProposeCertifier(request: MsgProposeCertifier): Promise<MsgProposeCertifierResponse>;
  IssueCertificate(request: MsgIssueCertificate): Promise<MsgIssueCertificateResponse>;
  RevokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
  CertifyPlatform(request: MsgCertifyPlatform): Promise<MsgCertifyPlatformResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
