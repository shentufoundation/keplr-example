// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v5.29.3
// source: shentu/oracle/v1alpha1/oracle.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "shentu.oracle.v1alpha1";

/** TaskStatus enumerates the valid statuses of a task. */
export enum TaskStatus {
  TASK_STATUS_UNSPECIFIED = 0,
  TASK_STATUS_PENDING = 1,
  TASK_STATUS_SUCCEEDED = 2,
  TASK_STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}

export function taskStatusFromJSON(object: any): TaskStatus {
  switch (object) {
    case 0:
    case "TASK_STATUS_UNSPECIFIED":
      return TaskStatus.TASK_STATUS_UNSPECIFIED;
    case 1:
    case "TASK_STATUS_PENDING":
      return TaskStatus.TASK_STATUS_PENDING;
    case 2:
    case "TASK_STATUS_SUCCEEDED":
      return TaskStatus.TASK_STATUS_SUCCEEDED;
    case 3:
    case "TASK_STATUS_FAILED":
      return TaskStatus.TASK_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskStatus.UNRECOGNIZED;
  }
}

export function taskStatusToJSON(object: TaskStatus): string {
  switch (object) {
    case TaskStatus.TASK_STATUS_UNSPECIFIED:
      return "TASK_STATUS_UNSPECIFIED";
    case TaskStatus.TASK_STATUS_PENDING:
      return "TASK_STATUS_PENDING";
    case TaskStatus.TASK_STATUS_SUCCEEDED:
      return "TASK_STATUS_SUCCEEDED";
    case TaskStatus.TASK_STATUS_FAILED:
      return "TASK_STATUS_FAILED";
    case TaskStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Withdraw stores a withdraw of "Amount" scheduled for a given "DueBlock." */
export interface Withdraw {
  address: string;
  amount: Coin[];
  dueBlock: string;
}

export interface Task {
  contract: string;
  function: string;
  beginBlock: string;
  bounty: Coin[];
  description: string;
  expiration: Date | undefined;
  creator: string;
  responses: Response[];
  result: string;
  expireHeight: string;
  waitingBlocks: string;
  status: TaskStatus;
}

export interface Response {
  operator: string;
  score: string;
  weight: string;
  reward: Coin[];
}

export interface Operator {
  address: string;
  proposer: string;
  collateral: Coin[];
  accumulatedRewards: Coin[];
  name: string;
}

export interface TaskParams {
  expirationDuration: Duration | undefined;
  aggregationWindow: string;
  aggregationResult: string;
  thresholdScore: string;
  epsilon1: string;
  epsilon2: string;
  shortcutQuorum: Uint8Array;
}

export interface LockedPoolParams {
  lockedInBlocks: string;
  minimumCollateral: string;
}

export interface TaskID {
  tid: Uint8Array;
}

export interface TaskIDs {
  taskIds: TaskID[];
}

export interface CoinsProto {
  coins: Coin[];
}

export interface TxTask {
  atxHash: Uint8Array;
  creator: string;
  bounty: Coin[];
  validTime: Date | undefined;
  expiration: Date | undefined;
  responses: Response[];
  score: string;
  status: TaskStatus;
}

function createBaseWithdraw(): Withdraw {
  return { address: "", amount: [], dueBlock: "0" };
}

export const Withdraw = {
  encode(message: Withdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.dueBlock !== "0") {
      writer.uint32(24).int64(message.dueBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Withdraw {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdraw();
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

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.dueBlock = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Withdraw {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      amount: globalThis.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      dueBlock: isSet(object.dueBlock) ? globalThis.String(object.dueBlock) : "0",
    };
  },

  toJSON(message: Withdraw): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount?.length) {
      obj.amount = message.amount.map((e) => Coin.toJSON(e));
    }
    if (message.dueBlock !== "0") {
      obj.dueBlock = message.dueBlock;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Withdraw>, I>>(base?: I): Withdraw {
    return Withdraw.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Withdraw>, I>>(object: I): Withdraw {
    const message = createBaseWithdraw();
    message.address = object.address ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.dueBlock = object.dueBlock ?? "0";
    return message;
  },
};

function createBaseTask(): Task {
  return {
    contract: "",
    function: "",
    beginBlock: "0",
    bounty: [],
    description: "",
    expiration: undefined,
    creator: "",
    responses: [],
    result: "",
    expireHeight: "0",
    waitingBlocks: "0",
    status: 0,
  };
}

export const Task = {
  encode(message: Task, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    if (message.beginBlock !== "0") {
      writer.uint32(24).int64(message.beginBlock);
    }
    for (const v of message.bounty) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(50).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    for (const v of message.responses) {
      Response.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.result !== "") {
      writer.uint32(74).string(message.result);
    }
    if (message.expireHeight !== "0") {
      writer.uint32(80).int64(message.expireHeight);
    }
    if (message.waitingBlocks !== "0") {
      writer.uint32(88).int64(message.waitingBlocks);
    }
    if (message.status !== 0) {
      writer.uint32(96).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contract = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.function = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.beginBlock = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bounty.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.responses.push(Response.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.result = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.expireHeight = longToString(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.waitingBlocks = longToString(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
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

  fromJSON(object: any): Task {
    return {
      contract: isSet(object.contract) ? globalThis.String(object.contract) : "",
      function: isSet(object.function) ? globalThis.String(object.function) : "",
      beginBlock: isSet(object.beginBlock) ? globalThis.String(object.beginBlock) : "0",
      bounty: globalThis.Array.isArray(object?.bounty) ? object.bounty.map((e: any) => Coin.fromJSON(e)) : [],
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      responses: globalThis.Array.isArray(object?.responses)
        ? object.responses.map((e: any) => Response.fromJSON(e))
        : [],
      result: isSet(object.result) ? globalThis.String(object.result) : "",
      expireHeight: isSet(object.expireHeight) ? globalThis.String(object.expireHeight) : "0",
      waitingBlocks: isSet(object.waitingBlocks) ? globalThis.String(object.waitingBlocks) : "0",
      status: isSet(object.status) ? taskStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    if (message.contract !== "") {
      obj.contract = message.contract;
    }
    if (message.function !== "") {
      obj.function = message.function;
    }
    if (message.beginBlock !== "0") {
      obj.beginBlock = message.beginBlock;
    }
    if (message.bounty?.length) {
      obj.bounty = message.bounty.map((e) => Coin.toJSON(e));
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.expiration !== undefined) {
      obj.expiration = message.expiration.toISOString();
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    if (message.result !== "") {
      obj.result = message.result;
    }
    if (message.expireHeight !== "0") {
      obj.expireHeight = message.expireHeight;
    }
    if (message.waitingBlocks !== "0") {
      obj.waitingBlocks = message.waitingBlocks;
    }
    if (message.status !== 0) {
      obj.status = taskStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Task>, I>>(base?: I): Task {
    return Task.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Task>, I>>(object: I): Task {
    const message = createBaseTask();
    message.contract = object.contract ?? "";
    message.function = object.function ?? "";
    message.beginBlock = object.beginBlock ?? "0";
    message.bounty = object.bounty?.map((e) => Coin.fromPartial(e)) || [];
    message.description = object.description ?? "";
    message.expiration = object.expiration ?? undefined;
    message.creator = object.creator ?? "";
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    message.result = object.result ?? "";
    message.expireHeight = object.expireHeight ?? "0";
    message.waitingBlocks = object.waitingBlocks ?? "0";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseResponse(): Response {
  return { operator: "", score: "", weight: "", reward: [] };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.score !== "") {
      writer.uint32(18).string(message.score);
    }
    if (message.weight !== "") {
      writer.uint32(26).string(message.weight);
    }
    for (const v of message.reward) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.score = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.weight = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.reward.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      operator: isSet(object.operator) ? globalThis.String(object.operator) : "",
      score: isSet(object.score) ? globalThis.String(object.score) : "",
      weight: isSet(object.weight) ? globalThis.String(object.weight) : "",
      reward: globalThis.Array.isArray(object?.reward) ? object.reward.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.operator !== "") {
      obj.operator = message.operator;
    }
    if (message.score !== "") {
      obj.score = message.score;
    }
    if (message.weight !== "") {
      obj.weight = message.weight;
    }
    if (message.reward?.length) {
      obj.reward = message.reward.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.operator = object.operator ?? "";
    message.score = object.score ?? "";
    message.weight = object.weight ?? "";
    message.reward = object.reward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperator(): Operator {
  return { address: "", proposer: "", collateral: [], accumulatedRewards: [], name: "" };
}

export const Operator = {
  encode(message: Operator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.accumulatedRewards) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperator();
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

          message.proposer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.collateral.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.accumulatedRewards.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Operator {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      proposer: isSet(object.proposer) ? globalThis.String(object.proposer) : "",
      collateral: globalThis.Array.isArray(object?.collateral)
        ? object.collateral.map((e: any) => Coin.fromJSON(e))
        : [],
      accumulatedRewards: globalThis.Array.isArray(object?.accumulatedRewards)
        ? object.accumulatedRewards.map((e: any) => Coin.fromJSON(e))
        : [],
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Operator): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.proposer !== "") {
      obj.proposer = message.proposer;
    }
    if (message.collateral?.length) {
      obj.collateral = message.collateral.map((e) => Coin.toJSON(e));
    }
    if (message.accumulatedRewards?.length) {
      obj.accumulatedRewards = message.accumulatedRewards.map((e) => Coin.toJSON(e));
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Operator>, I>>(base?: I): Operator {
    return Operator.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Operator>, I>>(object: I): Operator {
    const message = createBaseOperator();
    message.address = object.address ?? "";
    message.proposer = object.proposer ?? "";
    message.collateral = object.collateral?.map((e) => Coin.fromPartial(e)) || [];
    message.accumulatedRewards = object.accumulatedRewards?.map((e) => Coin.fromPartial(e)) || [];
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseTaskParams(): TaskParams {
  return {
    expirationDuration: undefined,
    aggregationWindow: "0",
    aggregationResult: "",
    thresholdScore: "",
    epsilon1: "",
    epsilon2: "",
    shortcutQuorum: new Uint8Array(0),
  };
}

export const TaskParams = {
  encode(message: TaskParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expirationDuration !== undefined) {
      Duration.encode(message.expirationDuration, writer.uint32(10).fork()).ldelim();
    }
    if (message.aggregationWindow !== "0") {
      writer.uint32(16).int64(message.aggregationWindow);
    }
    if (message.aggregationResult !== "") {
      writer.uint32(26).string(message.aggregationResult);
    }
    if (message.thresholdScore !== "") {
      writer.uint32(34).string(message.thresholdScore);
    }
    if (message.epsilon1 !== "") {
      writer.uint32(42).string(message.epsilon1);
    }
    if (message.epsilon2 !== "") {
      writer.uint32(50).string(message.epsilon2);
    }
    if (message.shortcutQuorum.length !== 0) {
      writer.uint32(58).bytes(message.shortcutQuorum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.expirationDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.aggregationWindow = longToString(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.aggregationResult = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.thresholdScore = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.epsilon1 = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.epsilon2 = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.shortcutQuorum = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskParams {
    return {
      expirationDuration: isSet(object.expirationDuration) ? Duration.fromJSON(object.expirationDuration) : undefined,
      aggregationWindow: isSet(object.aggregationWindow) ? globalThis.String(object.aggregationWindow) : "0",
      aggregationResult: isSet(object.aggregationResult) ? globalThis.String(object.aggregationResult) : "",
      thresholdScore: isSet(object.thresholdScore) ? globalThis.String(object.thresholdScore) : "",
      epsilon1: isSet(object.epsilon1) ? globalThis.String(object.epsilon1) : "",
      epsilon2: isSet(object.epsilon2) ? globalThis.String(object.epsilon2) : "",
      shortcutQuorum: isSet(object.shortcutQuorum) ? bytesFromBase64(object.shortcutQuorum) : new Uint8Array(0),
    };
  },

  toJSON(message: TaskParams): unknown {
    const obj: any = {};
    if (message.expirationDuration !== undefined) {
      obj.expirationDuration = Duration.toJSON(message.expirationDuration);
    }
    if (message.aggregationWindow !== "0") {
      obj.aggregationWindow = message.aggregationWindow;
    }
    if (message.aggregationResult !== "") {
      obj.aggregationResult = message.aggregationResult;
    }
    if (message.thresholdScore !== "") {
      obj.thresholdScore = message.thresholdScore;
    }
    if (message.epsilon1 !== "") {
      obj.epsilon1 = message.epsilon1;
    }
    if (message.epsilon2 !== "") {
      obj.epsilon2 = message.epsilon2;
    }
    if (message.shortcutQuorum.length !== 0) {
      obj.shortcutQuorum = base64FromBytes(message.shortcutQuorum);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskParams>, I>>(base?: I): TaskParams {
    return TaskParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskParams>, I>>(object: I): TaskParams {
    const message = createBaseTaskParams();
    message.expirationDuration = (object.expirationDuration !== undefined && object.expirationDuration !== null)
      ? Duration.fromPartial(object.expirationDuration)
      : undefined;
    message.aggregationWindow = object.aggregationWindow ?? "0";
    message.aggregationResult = object.aggregationResult ?? "";
    message.thresholdScore = object.thresholdScore ?? "";
    message.epsilon1 = object.epsilon1 ?? "";
    message.epsilon2 = object.epsilon2 ?? "";
    message.shortcutQuorum = object.shortcutQuorum ?? new Uint8Array(0);
    return message;
  },
};

function createBaseLockedPoolParams(): LockedPoolParams {
  return { lockedInBlocks: "0", minimumCollateral: "0" };
}

export const LockedPoolParams = {
  encode(message: LockedPoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockedInBlocks !== "0") {
      writer.uint32(8).int64(message.lockedInBlocks);
    }
    if (message.minimumCollateral !== "0") {
      writer.uint32(16).int64(message.minimumCollateral);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedPoolParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedPoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.lockedInBlocks = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minimumCollateral = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LockedPoolParams {
    return {
      lockedInBlocks: isSet(object.lockedInBlocks) ? globalThis.String(object.lockedInBlocks) : "0",
      minimumCollateral: isSet(object.minimumCollateral) ? globalThis.String(object.minimumCollateral) : "0",
    };
  },

  toJSON(message: LockedPoolParams): unknown {
    const obj: any = {};
    if (message.lockedInBlocks !== "0") {
      obj.lockedInBlocks = message.lockedInBlocks;
    }
    if (message.minimumCollateral !== "0") {
      obj.minimumCollateral = message.minimumCollateral;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LockedPoolParams>, I>>(base?: I): LockedPoolParams {
    return LockedPoolParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LockedPoolParams>, I>>(object: I): LockedPoolParams {
    const message = createBaseLockedPoolParams();
    message.lockedInBlocks = object.lockedInBlocks ?? "0";
    message.minimumCollateral = object.minimumCollateral ?? "0";
    return message;
  },
};

function createBaseTaskID(): TaskID {
  return { tid: new Uint8Array(0) };
}

export const TaskID = {
  encode(message: TaskID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tid.length !== 0) {
      writer.uint32(10).bytes(message.tid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tid = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskID {
    return { tid: isSet(object.tid) ? bytesFromBase64(object.tid) : new Uint8Array(0) };
  },

  toJSON(message: TaskID): unknown {
    const obj: any = {};
    if (message.tid.length !== 0) {
      obj.tid = base64FromBytes(message.tid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskID>, I>>(base?: I): TaskID {
    return TaskID.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskID>, I>>(object: I): TaskID {
    const message = createBaseTaskID();
    message.tid = object.tid ?? new Uint8Array(0);
    return message;
  },
};

function createBaseTaskIDs(): TaskIDs {
  return { taskIds: [] };
}

export const TaskIDs = {
  encode(message: TaskIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.taskIds) {
      TaskID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskIDs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taskIds.push(TaskID.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskIDs {
    return {
      taskIds: globalThis.Array.isArray(object?.taskIds) ? object.taskIds.map((e: any) => TaskID.fromJSON(e)) : [],
    };
  },

  toJSON(message: TaskIDs): unknown {
    const obj: any = {};
    if (message.taskIds?.length) {
      obj.taskIds = message.taskIds.map((e) => TaskID.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskIDs>, I>>(base?: I): TaskIDs {
    return TaskIDs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskIDs>, I>>(object: I): TaskIDs {
    const message = createBaseTaskIDs();
    message.taskIds = object.taskIds?.map((e) => TaskID.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCoinsProto(): CoinsProto {
  return { coins: [] };
}

export const CoinsProto = {
  encode(message: CoinsProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinsProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinsProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.coins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CoinsProto {
    return { coins: globalThis.Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: CoinsProto): unknown {
    const obj: any = {};
    if (message.coins?.length) {
      obj.coins = message.coins.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CoinsProto>, I>>(base?: I): CoinsProto {
    return CoinsProto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CoinsProto>, I>>(object: I): CoinsProto {
    const message = createBaseCoinsProto();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTxTask(): TxTask {
  return {
    atxHash: new Uint8Array(0),
    creator: "",
    bounty: [],
    validTime: undefined,
    expiration: undefined,
    responses: [],
    score: "0",
    status: 0,
  };
}

export const TxTask = {
  encode(message: TxTask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.atxHash.length !== 0) {
      writer.uint32(10).bytes(message.atxHash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    for (const v of message.bounty) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.validTime !== undefined) {
      Timestamp.encode(toTimestamp(message.validTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.responses) {
      Response.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.score !== "0") {
      writer.uint32(56).int64(message.score);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxTask {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.atxHash = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bounty.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.validTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.responses.push(Response.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.score = longToString(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
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

  fromJSON(object: any): TxTask {
    return {
      atxHash: isSet(object.atxHash) ? bytesFromBase64(object.atxHash) : new Uint8Array(0),
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      bounty: globalThis.Array.isArray(object?.bounty) ? object.bounty.map((e: any) => Coin.fromJSON(e)) : [],
      validTime: isSet(object.validTime) ? fromJsonTimestamp(object.validTime) : undefined,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      responses: globalThis.Array.isArray(object?.responses)
        ? object.responses.map((e: any) => Response.fromJSON(e))
        : [],
      score: isSet(object.score) ? globalThis.String(object.score) : "0",
      status: isSet(object.status) ? taskStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: TxTask): unknown {
    const obj: any = {};
    if (message.atxHash.length !== 0) {
      obj.atxHash = base64FromBytes(message.atxHash);
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.bounty?.length) {
      obj.bounty = message.bounty.map((e) => Coin.toJSON(e));
    }
    if (message.validTime !== undefined) {
      obj.validTime = message.validTime.toISOString();
    }
    if (message.expiration !== undefined) {
      obj.expiration = message.expiration.toISOString();
    }
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    if (message.score !== "0") {
      obj.score = message.score;
    }
    if (message.status !== 0) {
      obj.status = taskStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TxTask>, I>>(base?: I): TxTask {
    return TxTask.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TxTask>, I>>(object: I): TxTask {
    const message = createBaseTxTask();
    message.atxHash = object.atxHash ?? new Uint8Array(0);
    message.creator = object.creator ?? "";
    message.bounty = object.bounty?.map((e) => Coin.fromPartial(e)) || [];
    message.validTime = object.validTime ?? undefined;
    message.expiration = object.expiration ?? undefined;
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    message.score = object.score ?? "0";
    message.status = object.status ?? 0;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
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
