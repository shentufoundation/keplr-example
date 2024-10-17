// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v3.21.12
// source: shentu/bounty/v1/bounty.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "shentu.bounty.v1";

export enum ProgramStatus {
  PROGRAM_STATUS_INACTIVE = 0,
  PROGRAM_STATUS_ACTIVE = 1,
  PROGRAM_STATUS_CLOSED = 2,
  UNRECOGNIZED = -1,
}

export function programStatusFromJSON(object: any): ProgramStatus {
  switch (object) {
    case 0:
    case "PROGRAM_STATUS_INACTIVE":
      return ProgramStatus.PROGRAM_STATUS_INACTIVE;
    case 1:
    case "PROGRAM_STATUS_ACTIVE":
      return ProgramStatus.PROGRAM_STATUS_ACTIVE;
    case 2:
    case "PROGRAM_STATUS_CLOSED":
      return ProgramStatus.PROGRAM_STATUS_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProgramStatus.UNRECOGNIZED;
  }
}

export function programStatusToJSON(object: ProgramStatus): string {
  switch (object) {
    case ProgramStatus.PROGRAM_STATUS_INACTIVE:
      return "PROGRAM_STATUS_INACTIVE";
    case ProgramStatus.PROGRAM_STATUS_ACTIVE:
      return "PROGRAM_STATUS_ACTIVE";
    case ProgramStatus.PROGRAM_STATUS_CLOSED:
      return "PROGRAM_STATUS_CLOSED";
    case ProgramStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SeverityLevel {
  SEVERITY_LEVEL_UNSPECIFIED = 0,
  SEVERITY_LEVEL_CRITICAL = 1,
  SEVERITY_LEVEL_HIGH = 2,
  SEVERITY_LEVEL_MEDIUM = 3,
  SEVERITY_LEVEL_LOW = 4,
  SEVERITY_LEVEL_INFORMATIONAL = 5,
  UNRECOGNIZED = -1,
}

export function severityLevelFromJSON(object: any): SeverityLevel {
  switch (object) {
    case 0:
    case "SEVERITY_LEVEL_UNSPECIFIED":
      return SeverityLevel.SEVERITY_LEVEL_UNSPECIFIED;
    case 1:
    case "SEVERITY_LEVEL_CRITICAL":
      return SeverityLevel.SEVERITY_LEVEL_CRITICAL;
    case 2:
    case "SEVERITY_LEVEL_HIGH":
      return SeverityLevel.SEVERITY_LEVEL_HIGH;
    case 3:
    case "SEVERITY_LEVEL_MEDIUM":
      return SeverityLevel.SEVERITY_LEVEL_MEDIUM;
    case 4:
    case "SEVERITY_LEVEL_LOW":
      return SeverityLevel.SEVERITY_LEVEL_LOW;
    case 5:
    case "SEVERITY_LEVEL_INFORMATIONAL":
      return SeverityLevel.SEVERITY_LEVEL_INFORMATIONAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SeverityLevel.UNRECOGNIZED;
  }
}

export function severityLevelToJSON(object: SeverityLevel): string {
  switch (object) {
    case SeverityLevel.SEVERITY_LEVEL_UNSPECIFIED:
      return "SEVERITY_LEVEL_UNSPECIFIED";
    case SeverityLevel.SEVERITY_LEVEL_CRITICAL:
      return "SEVERITY_LEVEL_CRITICAL";
    case SeverityLevel.SEVERITY_LEVEL_HIGH:
      return "SEVERITY_LEVEL_HIGH";
    case SeverityLevel.SEVERITY_LEVEL_MEDIUM:
      return "SEVERITY_LEVEL_MEDIUM";
    case SeverityLevel.SEVERITY_LEVEL_LOW:
      return "SEVERITY_LEVEL_LOW";
    case SeverityLevel.SEVERITY_LEVEL_INFORMATIONAL:
      return "SEVERITY_LEVEL_INFORMATIONAL";
    case SeverityLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FindingStatus {
  FINDING_STATUS_SUBMITTED = 0,
  FINDING_STATUS_ACTIVE = 1,
  FINDING_STATUS_CONFIRMED = 2,
  FINDING_STATUS_PAID = 3,
  FINDING_STATUS_CLOSED = 4,
  UNRECOGNIZED = -1,
}

export function findingStatusFromJSON(object: any): FindingStatus {
  switch (object) {
    case 0:
    case "FINDING_STATUS_SUBMITTED":
      return FindingStatus.FINDING_STATUS_SUBMITTED;
    case 1:
    case "FINDING_STATUS_ACTIVE":
      return FindingStatus.FINDING_STATUS_ACTIVE;
    case 2:
    case "FINDING_STATUS_CONFIRMED":
      return FindingStatus.FINDING_STATUS_CONFIRMED;
    case 3:
    case "FINDING_STATUS_PAID":
      return FindingStatus.FINDING_STATUS_PAID;
    case 4:
    case "FINDING_STATUS_CLOSED":
      return FindingStatus.FINDING_STATUS_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FindingStatus.UNRECOGNIZED;
  }
}

export function findingStatusToJSON(object: FindingStatus): string {
  switch (object) {
    case FindingStatus.FINDING_STATUS_SUBMITTED:
      return "FINDING_STATUS_SUBMITTED";
    case FindingStatus.FINDING_STATUS_ACTIVE:
      return "FINDING_STATUS_ACTIVE";
    case FindingStatus.FINDING_STATUS_CONFIRMED:
      return "FINDING_STATUS_CONFIRMED";
    case FindingStatus.FINDING_STATUS_PAID:
      return "FINDING_STATUS_PAID";
    case FindingStatus.FINDING_STATUS_CLOSED:
      return "FINDING_STATUS_CLOSED";
    case FindingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Program {
  programId: string;
  name: string;
  /** JSON by ProgramDetail */
  detail: string;
  adminAddress: string;
  status: ProgramStatus;
  createTime: Date | undefined;
}

export interface Finding {
  programId: string;
  findingId: string;
  title: string;
  description: string;
  proofOfConcept: string;
  /** hash(description + proof_of_concept + submitter) */
  findingHash: string;
  submitterAddress: string;
  severityLevel: SeverityLevel;
  status: FindingStatus;
  /** JSON by FindingDetail */
  detail: string;
  paymentHash: string;
  createTime: Date | undefined;
}

export interface ProgramFingerprint {
  programId: string;
  name: string;
  /** JSON by ProgramDetail */
  detail: string;
  adminAddress: string;
  status: ProgramStatus;
}

export interface FindingFingerprint {
  programId: string;
  findingId: string;
  title: string;
  /** hash(description + proof_of_concept + submitter) */
  findingHash: string;
  severityLevel: SeverityLevel;
  status: FindingStatus;
  /** JSON by FindingDetail */
  detail: string;
  paymentHash: string;
}

function createBaseProgram(): Program {
  return { programId: "", name: "", detail: "", adminAddress: "", status: 0, createTime: undefined };
}

export const Program = {
  encode(message: Program, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.detail !== "") {
      writer.uint32(26).string(message.detail);
    }
    if (message.adminAddress !== "") {
      writer.uint32(34).string(message.adminAddress);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Program {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProgram();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.programId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.detail = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.adminAddress = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Program {
    return {
      programId: isSet(object.programId) ? globalThis.String(object.programId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      detail: isSet(object.detail) ? globalThis.String(object.detail) : "",
      adminAddress: isSet(object.adminAddress) ? globalThis.String(object.adminAddress) : "",
      status: isSet(object.status) ? programStatusFromJSON(object.status) : 0,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
    };
  },

  toJSON(message: Program): unknown {
    const obj: any = {};
    if (message.programId !== "") {
      obj.programId = message.programId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.detail !== "") {
      obj.detail = message.detail;
    }
    if (message.adminAddress !== "") {
      obj.adminAddress = message.adminAddress;
    }
    if (message.status !== 0) {
      obj.status = programStatusToJSON(message.status);
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Program>, I>>(base?: I): Program {
    return Program.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Program>, I>>(object: I): Program {
    const message = createBaseProgram();
    message.programId = object.programId ?? "";
    message.name = object.name ?? "";
    message.detail = object.detail ?? "";
    message.adminAddress = object.adminAddress ?? "";
    message.status = object.status ?? 0;
    message.createTime = object.createTime ?? undefined;
    return message;
  },
};

function createBaseFinding(): Finding {
  return {
    programId: "",
    findingId: "",
    title: "",
    description: "",
    proofOfConcept: "",
    findingHash: "",
    submitterAddress: "",
    severityLevel: 0,
    status: 0,
    detail: "",
    paymentHash: "",
    createTime: undefined,
  };
}

export const Finding = {
  encode(message: Finding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.findingId !== "") {
      writer.uint32(18).string(message.findingId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.proofOfConcept !== "") {
      writer.uint32(42).string(message.proofOfConcept);
    }
    if (message.findingHash !== "") {
      writer.uint32(50).string(message.findingHash);
    }
    if (message.submitterAddress !== "") {
      writer.uint32(58).string(message.submitterAddress);
    }
    if (message.severityLevel !== 0) {
      writer.uint32(64).int32(message.severityLevel);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.detail !== "") {
      writer.uint32(82).string(message.detail);
    }
    if (message.paymentHash !== "") {
      writer.uint32(90).string(message.paymentHash);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Finding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.programId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.findingId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
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

          message.proofOfConcept = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.findingHash = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.submitterAddress = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.severityLevel = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.detail = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.paymentHash = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Finding {
    return {
      programId: isSet(object.programId) ? globalThis.String(object.programId) : "",
      findingId: isSet(object.findingId) ? globalThis.String(object.findingId) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      proofOfConcept: isSet(object.proofOfConcept) ? globalThis.String(object.proofOfConcept) : "",
      findingHash: isSet(object.findingHash) ? globalThis.String(object.findingHash) : "",
      submitterAddress: isSet(object.submitterAddress) ? globalThis.String(object.submitterAddress) : "",
      severityLevel: isSet(object.severityLevel) ? severityLevelFromJSON(object.severityLevel) : 0,
      status: isSet(object.status) ? findingStatusFromJSON(object.status) : 0,
      detail: isSet(object.detail) ? globalThis.String(object.detail) : "",
      paymentHash: isSet(object.paymentHash) ? globalThis.String(object.paymentHash) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
    };
  },

  toJSON(message: Finding): unknown {
    const obj: any = {};
    if (message.programId !== "") {
      obj.programId = message.programId;
    }
    if (message.findingId !== "") {
      obj.findingId = message.findingId;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.proofOfConcept !== "") {
      obj.proofOfConcept = message.proofOfConcept;
    }
    if (message.findingHash !== "") {
      obj.findingHash = message.findingHash;
    }
    if (message.submitterAddress !== "") {
      obj.submitterAddress = message.submitterAddress;
    }
    if (message.severityLevel !== 0) {
      obj.severityLevel = severityLevelToJSON(message.severityLevel);
    }
    if (message.status !== 0) {
      obj.status = findingStatusToJSON(message.status);
    }
    if (message.detail !== "") {
      obj.detail = message.detail;
    }
    if (message.paymentHash !== "") {
      obj.paymentHash = message.paymentHash;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Finding>, I>>(base?: I): Finding {
    return Finding.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Finding>, I>>(object: I): Finding {
    const message = createBaseFinding();
    message.programId = object.programId ?? "";
    message.findingId = object.findingId ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.proofOfConcept = object.proofOfConcept ?? "";
    message.findingHash = object.findingHash ?? "";
    message.submitterAddress = object.submitterAddress ?? "";
    message.severityLevel = object.severityLevel ?? 0;
    message.status = object.status ?? 0;
    message.detail = object.detail ?? "";
    message.paymentHash = object.paymentHash ?? "";
    message.createTime = object.createTime ?? undefined;
    return message;
  },
};

function createBaseProgramFingerprint(): ProgramFingerprint {
  return { programId: "", name: "", detail: "", adminAddress: "", status: 0 };
}

export const ProgramFingerprint = {
  encode(message: ProgramFingerprint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.detail !== "") {
      writer.uint32(26).string(message.detail);
    }
    if (message.adminAddress !== "") {
      writer.uint32(34).string(message.adminAddress);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProgramFingerprint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProgramFingerprint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.programId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.detail = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.adminAddress = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProgramFingerprint {
    return {
      programId: isSet(object.programId) ? globalThis.String(object.programId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      detail: isSet(object.detail) ? globalThis.String(object.detail) : "",
      adminAddress: isSet(object.adminAddress) ? globalThis.String(object.adminAddress) : "",
      status: isSet(object.status) ? programStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: ProgramFingerprint): unknown {
    const obj: any = {};
    if (message.programId !== "") {
      obj.programId = message.programId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.detail !== "") {
      obj.detail = message.detail;
    }
    if (message.adminAddress !== "") {
      obj.adminAddress = message.adminAddress;
    }
    if (message.status !== 0) {
      obj.status = programStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProgramFingerprint>, I>>(base?: I): ProgramFingerprint {
    return ProgramFingerprint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProgramFingerprint>, I>>(object: I): ProgramFingerprint {
    const message = createBaseProgramFingerprint();
    message.programId = object.programId ?? "";
    message.name = object.name ?? "";
    message.detail = object.detail ?? "";
    message.adminAddress = object.adminAddress ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseFindingFingerprint(): FindingFingerprint {
  return {
    programId: "",
    findingId: "",
    title: "",
    findingHash: "",
    severityLevel: 0,
    status: 0,
    detail: "",
    paymentHash: "",
  };
}

export const FindingFingerprint = {
  encode(message: FindingFingerprint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.programId !== "") {
      writer.uint32(10).string(message.programId);
    }
    if (message.findingId !== "") {
      writer.uint32(18).string(message.findingId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.findingHash !== "") {
      writer.uint32(34).string(message.findingHash);
    }
    if (message.severityLevel !== 0) {
      writer.uint32(40).int32(message.severityLevel);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.detail !== "") {
      writer.uint32(58).string(message.detail);
    }
    if (message.paymentHash !== "") {
      writer.uint32(66).string(message.paymentHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindingFingerprint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindingFingerprint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.programId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.findingId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.findingHash = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.severityLevel = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.detail = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.paymentHash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindingFingerprint {
    return {
      programId: isSet(object.programId) ? globalThis.String(object.programId) : "",
      findingId: isSet(object.findingId) ? globalThis.String(object.findingId) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      findingHash: isSet(object.findingHash) ? globalThis.String(object.findingHash) : "",
      severityLevel: isSet(object.severityLevel) ? severityLevelFromJSON(object.severityLevel) : 0,
      status: isSet(object.status) ? findingStatusFromJSON(object.status) : 0,
      detail: isSet(object.detail) ? globalThis.String(object.detail) : "",
      paymentHash: isSet(object.paymentHash) ? globalThis.String(object.paymentHash) : "",
    };
  },

  toJSON(message: FindingFingerprint): unknown {
    const obj: any = {};
    if (message.programId !== "") {
      obj.programId = message.programId;
    }
    if (message.findingId !== "") {
      obj.findingId = message.findingId;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.findingHash !== "") {
      obj.findingHash = message.findingHash;
    }
    if (message.severityLevel !== 0) {
      obj.severityLevel = severityLevelToJSON(message.severityLevel);
    }
    if (message.status !== 0) {
      obj.status = findingStatusToJSON(message.status);
    }
    if (message.detail !== "") {
      obj.detail = message.detail;
    }
    if (message.paymentHash !== "") {
      obj.paymentHash = message.paymentHash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindingFingerprint>, I>>(base?: I): FindingFingerprint {
    return FindingFingerprint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindingFingerprint>, I>>(object: I): FindingFingerprint {
    const message = createBaseFindingFingerprint();
    message.programId = object.programId ?? "";
    message.findingId = object.findingId ?? "";
    message.title = object.title ?? "";
    message.findingHash = object.findingHash ?? "";
    message.severityLevel = object.severityLevel ?? 0;
    message.status = object.status ?? 0;
    message.detail = object.detail ?? "";
    message.paymentHash = object.paymentHash ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
