// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.21.12
// source: shentu/cert/v1alpha1/cert.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "shentu.cert.v1alpha1";

export enum CertificateType {
  CERT_TYPE_UNSPECIFIED = 0,
  CERT_TYPE_COMPILATION = 1,
  CERT_TYPE_AUDITING = 2,
  CERT_TYPE_PROOF = 3,
  CERT_TYPE_ORACLE_OPERATOR = 4,
  CERT_TYPE_SHIELD_POOL_CREATOR = 5,
  CERT_TYPE_IDENTITY = 6,
  CERT_TYPE_GENERAL = 7,
  CERT_TYPE_BOUNTY_ADMIN = 8,
  UNRECOGNIZED = -1,
}

export function certificateTypeFromJSON(object: any): CertificateType {
  switch (object) {
    case 0:
    case "CERT_TYPE_UNSPECIFIED":
      return CertificateType.CERT_TYPE_UNSPECIFIED;
    case 1:
    case "CERT_TYPE_COMPILATION":
      return CertificateType.CERT_TYPE_COMPILATION;
    case 2:
    case "CERT_TYPE_AUDITING":
      return CertificateType.CERT_TYPE_AUDITING;
    case 3:
    case "CERT_TYPE_PROOF":
      return CertificateType.CERT_TYPE_PROOF;
    case 4:
    case "CERT_TYPE_ORACLE_OPERATOR":
      return CertificateType.CERT_TYPE_ORACLE_OPERATOR;
    case 5:
    case "CERT_TYPE_SHIELD_POOL_CREATOR":
      return CertificateType.CERT_TYPE_SHIELD_POOL_CREATOR;
    case 6:
    case "CERT_TYPE_IDENTITY":
      return CertificateType.CERT_TYPE_IDENTITY;
    case 7:
    case "CERT_TYPE_GENERAL":
      return CertificateType.CERT_TYPE_GENERAL;
    case 8:
    case "CERT_TYPE_BOUNTY_ADMIN":
      return CertificateType.CERT_TYPE_BOUNTY_ADMIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CertificateType.UNRECOGNIZED;
  }
}

export function certificateTypeToJSON(object: CertificateType): string {
  switch (object) {
    case CertificateType.CERT_TYPE_UNSPECIFIED:
      return "CERT_TYPE_UNSPECIFIED";
    case CertificateType.CERT_TYPE_COMPILATION:
      return "CERT_TYPE_COMPILATION";
    case CertificateType.CERT_TYPE_AUDITING:
      return "CERT_TYPE_AUDITING";
    case CertificateType.CERT_TYPE_PROOF:
      return "CERT_TYPE_PROOF";
    case CertificateType.CERT_TYPE_ORACLE_OPERATOR:
      return "CERT_TYPE_ORACLE_OPERATOR";
    case CertificateType.CERT_TYPE_SHIELD_POOL_CREATOR:
      return "CERT_TYPE_SHIELD_POOL_CREATOR";
    case CertificateType.CERT_TYPE_IDENTITY:
      return "CERT_TYPE_IDENTITY";
    case CertificateType.CERT_TYPE_GENERAL:
      return "CERT_TYPE_GENERAL";
    case CertificateType.CERT_TYPE_BOUNTY_ADMIN:
      return "CERT_TYPE_BOUNTY_ADMIN";
    case CertificateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Certifier {
  address: string;
  alias: string;
  proposer: string;
  description: string;
}

export interface CompilationContent {
  compiler: string;
  bytecodeHash: string;
}

export interface Certificate {
  certificateId: string;
  content: Any | undefined;
  compilationContent: CompilationContent | undefined;
  description: string;
  certifier: string;
}

/** Library is a type for certified libraries. */
export interface Library {
  address: string;
  publisher: string;
}

export interface Compilation {
  content: string;
}

export interface Auditing {
  content: string;
}

export interface Proof {
  content: string;
}

export interface OracleOperator {
  content: string;
}

export interface ShieldPoolCreator {
  content: string;
}

export interface Identity {
  content: string;
}

export interface General {
  content: string;
}

export interface BountyAdmin {
  content: string;
}

/** Platform is a genesis type for certified platform of a validator */
export interface Platform {
  validatorPubkey: Any | undefined;
  description: string;
}

/** CertifierUpdateProposal adds or removes a certifier */
export interface CertifierUpdateProposal {
  title: string;
  proposer: string;
  alias: string;
  certifier: string;
  description: string;
  addOrRemove: boolean;
}

export interface KVPair {
  key: string;
  value: string;
}

function createBaseCertifier(): Certifier {
  return { address: "", alias: "", proposer: "", description: "" };
}

export const Certifier = {
  encode(message: Certifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Certifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
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

          message.proposer = reader.string();
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

  fromJSON(object: any): Certifier {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      proposer: isSet(object.proposer) ? globalThis.String(object.proposer) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: Certifier): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.proposer !== "") {
      obj.proposer = message.proposer;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Certifier>, I>>(base?: I): Certifier {
    return Certifier.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Certifier>, I>>(object: I): Certifier {
    const message = createBaseCertifier();
    message.address = object.address ?? "";
    message.alias = object.alias ?? "";
    message.proposer = object.proposer ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseCompilationContent(): CompilationContent {
  return { compiler: "", bytecodeHash: "" };
}

export const CompilationContent = {
  encode(message: CompilationContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.compiler !== "") {
      writer.uint32(10).string(message.compiler);
    }
    if (message.bytecodeHash !== "") {
      writer.uint32(18).string(message.bytecodeHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompilationContent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompilationContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.compiler = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bytecodeHash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompilationContent {
    return {
      compiler: isSet(object.compiler) ? globalThis.String(object.compiler) : "",
      bytecodeHash: isSet(object.bytecodeHash) ? globalThis.String(object.bytecodeHash) : "",
    };
  },

  toJSON(message: CompilationContent): unknown {
    const obj: any = {};
    if (message.compiler !== "") {
      obj.compiler = message.compiler;
    }
    if (message.bytecodeHash !== "") {
      obj.bytecodeHash = message.bytecodeHash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompilationContent>, I>>(base?: I): CompilationContent {
    return CompilationContent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompilationContent>, I>>(object: I): CompilationContent {
    const message = createBaseCompilationContent();
    message.compiler = object.compiler ?? "";
    message.bytecodeHash = object.bytecodeHash ?? "";
    return message;
  },
};

function createBaseCertificate(): Certificate {
  return { certificateId: "0", content: undefined, compilationContent: undefined, description: "", certifier: "" };
}

export const Certificate = {
  encode(message: Certificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.certificateId !== "0") {
      writer.uint32(8).uint64(message.certificateId);
    }
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(18).fork()).ldelim();
    }
    if (message.compilationContent !== undefined) {
      CompilationContent.encode(message.compilationContent, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.certifier !== "") {
      writer.uint32(42).string(message.certifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.certificateId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.compilationContent = CompilationContent.decode(reader, reader.uint32());
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

  fromJSON(object: any): Certificate {
    return {
      certificateId: isSet(object.certificateId) ? globalThis.String(object.certificateId) : "0",
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      compilationContent: isSet(object.compilationContent)
        ? CompilationContent.fromJSON(object.compilationContent)
        : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      certifier: isSet(object.certifier) ? globalThis.String(object.certifier) : "",
    };
  },

  toJSON(message: Certificate): unknown {
    const obj: any = {};
    if (message.certificateId !== "0") {
      obj.certificateId = message.certificateId;
    }
    if (message.content !== undefined) {
      obj.content = Any.toJSON(message.content);
    }
    if (message.compilationContent !== undefined) {
      obj.compilationContent = CompilationContent.toJSON(message.compilationContent);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.certifier !== "") {
      obj.certifier = message.certifier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Certificate>, I>>(base?: I): Certificate {
    return Certificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Certificate>, I>>(object: I): Certificate {
    const message = createBaseCertificate();
    message.certificateId = object.certificateId ?? "0";
    message.content = (object.content !== undefined && object.content !== null)
      ? Any.fromPartial(object.content)
      : undefined;
    message.compilationContent = (object.compilationContent !== undefined && object.compilationContent !== null)
      ? CompilationContent.fromPartial(object.compilationContent)
      : undefined;
    message.description = object.description ?? "";
    message.certifier = object.certifier ?? "";
    return message;
  },
};

function createBaseLibrary(): Library {
  return { address: "", publisher: "" };
}

export const Library = {
  encode(message: Library, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.publisher !== "") {
      writer.uint32(18).string(message.publisher);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Library {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLibrary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.publisher = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Library {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      publisher: isSet(object.publisher) ? globalThis.String(object.publisher) : "",
    };
  },

  toJSON(message: Library): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.publisher !== "") {
      obj.publisher = message.publisher;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Library>, I>>(base?: I): Library {
    return Library.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Library>, I>>(object: I): Library {
    const message = createBaseLibrary();
    message.address = object.address ?? "";
    message.publisher = object.publisher ?? "";
    return message;
  },
};

function createBaseCompilation(): Compilation {
  return { content: "" };
}

export const Compilation = {
  encode(message: Compilation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Compilation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompilation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Compilation {
    return { content: isSet(object.content) ? globalThis.String(object.content) : "" };
  },

  toJSON(message: Compilation): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Compilation>, I>>(base?: I): Compilation {
    return Compilation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Compilation>, I>>(object: I): Compilation {
    const message = createBaseCompilation();
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseAuditing(): Auditing {
  return { content: "" };
}

export const Auditing = {
  encode(message: Auditing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Auditing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Auditing {
    return { content: isSet(object.content) ? globalThis.String(object.content) : "" };
  },

  toJSON(message: Auditing): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Auditing>, I>>(base?: I): Auditing {
    return Auditing.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Auditing>, I>>(object: I): Auditing {
    const message = createBaseAuditing();
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseProof(): Proof {
  return { content: "" };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof {
    return { content: isSet(object.content) ? globalThis.String(object.content) : "" };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof>, I>>(base?: I): Proof {
    return Proof.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseOracleOperator(): OracleOperator {
  return { content: "" };
}

export const OracleOperator = {
  encode(message: OracleOperator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleOperator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OracleOperator {
    return { content: isSet(object.content) ? globalThis.String(object.content) : "" };
  },

  toJSON(message: OracleOperator): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OracleOperator>, I>>(base?: I): OracleOperator {
    return OracleOperator.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OracleOperator>, I>>(object: I): OracleOperator {
    const message = createBaseOracleOperator();
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseShieldPoolCreator(): ShieldPoolCreator {
  return { content: "" };
}

export const ShieldPoolCreator = {
  encode(message: ShieldPoolCreator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShieldPoolCreator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShieldPoolCreator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShieldPoolCreator {
    return { content: isSet(object.content) ? globalThis.String(object.content) : "" };
  },

  toJSON(message: ShieldPoolCreator): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShieldPoolCreator>, I>>(base?: I): ShieldPoolCreator {
    return ShieldPoolCreator.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShieldPoolCreator>, I>>(object: I): ShieldPoolCreator {
    const message = createBaseShieldPoolCreator();
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseIdentity(): Identity {
  return { content: "" };
}

export const Identity = {
  encode(message: Identity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Identity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Identity {
    return { content: isSet(object.content) ? globalThis.String(object.content) : "" };
  },

  toJSON(message: Identity): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Identity>, I>>(base?: I): Identity {
    return Identity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Identity>, I>>(object: I): Identity {
    const message = createBaseIdentity();
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseGeneral(): General {
  return { content: "" };
}

export const General = {
  encode(message: General, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): General {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): General {
    return { content: isSet(object.content) ? globalThis.String(object.content) : "" };
  },

  toJSON(message: General): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<General>, I>>(base?: I): General {
    return General.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<General>, I>>(object: I): General {
    const message = createBaseGeneral();
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseBountyAdmin(): BountyAdmin {
  return { content: "" };
}

export const BountyAdmin = {
  encode(message: BountyAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BountyAdmin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBountyAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BountyAdmin {
    return { content: isSet(object.content) ? globalThis.String(object.content) : "" };
  },

  toJSON(message: BountyAdmin): unknown {
    const obj: any = {};
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BountyAdmin>, I>>(base?: I): BountyAdmin {
    return BountyAdmin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BountyAdmin>, I>>(object: I): BountyAdmin {
    const message = createBaseBountyAdmin();
    message.content = object.content ?? "";
    return message;
  },
};

function createBasePlatform(): Platform {
  return { validatorPubkey: undefined, description: "" };
}

export const Platform = {
  encode(message: Platform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorPubkey !== undefined) {
      Any.encode(message.validatorPubkey, writer.uint32(10).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Platform {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlatform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorPubkey = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): Platform {
    return {
      validatorPubkey: isSet(object.validatorPubkey) ? Any.fromJSON(object.validatorPubkey) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: Platform): unknown {
    const obj: any = {};
    if (message.validatorPubkey !== undefined) {
      obj.validatorPubkey = Any.toJSON(message.validatorPubkey);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Platform>, I>>(base?: I): Platform {
    return Platform.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Platform>, I>>(object: I): Platform {
    const message = createBasePlatform();
    message.validatorPubkey = (object.validatorPubkey !== undefined && object.validatorPubkey !== null)
      ? Any.fromPartial(object.validatorPubkey)
      : undefined;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseCertifierUpdateProposal(): CertifierUpdateProposal {
  return { title: "", proposer: "", alias: "", certifier: "", description: "", addOrRemove: false };
}

export const CertifierUpdateProposal = {
  encode(message: CertifierUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    if (message.alias !== "") {
      writer.uint32(26).string(message.alias);
    }
    if (message.certifier !== "") {
      writer.uint32(34).string(message.certifier);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.addOrRemove !== false) {
      writer.uint32(48).bool(message.addOrRemove);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertifierUpdateProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertifierUpdateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proposer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.alias = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.certifier = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.addOrRemove = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CertifierUpdateProposal {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      proposer: isSet(object.proposer) ? globalThis.String(object.proposer) : "",
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      certifier: isSet(object.certifier) ? globalThis.String(object.certifier) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      addOrRemove: isSet(object.addOrRemove) ? globalThis.Boolean(object.addOrRemove) : false,
    };
  },

  toJSON(message: CertifierUpdateProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
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
    if (message.addOrRemove !== false) {
      obj.addOrRemove = message.addOrRemove;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CertifierUpdateProposal>, I>>(base?: I): CertifierUpdateProposal {
    return CertifierUpdateProposal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CertifierUpdateProposal>, I>>(object: I): CertifierUpdateProposal {
    const message = createBaseCertifierUpdateProposal();
    message.title = object.title ?? "";
    message.proposer = object.proposer ?? "";
    message.alias = object.alias ?? "";
    message.certifier = object.certifier ?? "";
    message.description = object.description ?? "";
    message.addOrRemove = object.addOrRemove ?? false;
    return message;
  },
};

function createBaseKVPair(): KVPair {
  return { key: "", value: "" };
}

export const KVPair = {
  encode(message: KVPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KVPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KVPair {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: KVPair): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KVPair>, I>>(base?: I): KVPair {
    return KVPair.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KVPair>, I>>(object: I): KVPair {
    const message = createBaseKVPair();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

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
