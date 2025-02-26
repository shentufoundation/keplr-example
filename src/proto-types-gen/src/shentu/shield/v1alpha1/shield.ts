// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v5.29.3
// source: shentu/shield/v1alpha1/shield.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "shentu.shield.v1alpha1";

/** Fees proto wrapper for pool.go methods */
export interface Fees {
  fees: DecCoin[];
}

/** Provider tracks total delegation, total collateral, and rewards of a provider. */
export interface Provider {
  /** Address is the address of the provider. */
  address: string;
  /** DelegationBonded is the amount of bonded delegation. */
  delegationBonded: string;
  /**
   * Collateral is amount of all collaterals for the provider, including
   * those in withdraw queue but excluding those currently locked, in all
   * pools.
   */
  collateral: string;
  /** TotalLocked is the amount locked for pending claims. */
  totalLocked: string;
  /** Withdrawing is the amount of collateral in withdraw queues. */
  withdrawing: string;
  /** Rewards is the pooling rewards to be collected. */
  rewards: DecCoin[];
}

function createBaseFees(): Fees {
  return { fees: [] };
}

export const Fees = {
  encode(message: Fees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fees) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fees {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fees.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Fees {
    return { fees: globalThis.Array.isArray(object?.fees) ? object.fees.map((e: any) => DecCoin.fromJSON(e)) : [] };
  },

  toJSON(message: Fees): unknown {
    const obj: any = {};
    if (message.fees?.length) {
      obj.fees = message.fees.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Fees>, I>>(base?: I): Fees {
    return Fees.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Fees>, I>>(object: I): Fees {
    const message = createBaseFees();
    message.fees = object.fees?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProvider(): Provider {
  return { address: "", delegationBonded: "", collateral: "", totalLocked: "", withdrawing: "", rewards: [] };
}

export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.delegationBonded !== "") {
      writer.uint32(18).string(message.delegationBonded);
    }
    if (message.collateral !== "") {
      writer.uint32(26).string(message.collateral);
    }
    if (message.totalLocked !== "") {
      writer.uint32(34).string(message.totalLocked);
    }
    if (message.withdrawing !== "") {
      writer.uint32(42).string(message.withdrawing);
    }
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
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

          message.delegationBonded = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.collateral = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.totalLocked = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.withdrawing = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Provider {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      delegationBonded: isSet(object.delegationBonded) ? globalThis.String(object.delegationBonded) : "",
      collateral: isSet(object.collateral) ? globalThis.String(object.collateral) : "",
      totalLocked: isSet(object.totalLocked) ? globalThis.String(object.totalLocked) : "",
      withdrawing: isSet(object.withdrawing) ? globalThis.String(object.withdrawing) : "",
      rewards: globalThis.Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: Provider): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.delegationBonded !== "") {
      obj.delegationBonded = message.delegationBonded;
    }
    if (message.collateral !== "") {
      obj.collateral = message.collateral;
    }
    if (message.totalLocked !== "") {
      obj.totalLocked = message.totalLocked;
    }
    if (message.withdrawing !== "") {
      obj.withdrawing = message.withdrawing;
    }
    if (message.rewards?.length) {
      obj.rewards = message.rewards.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Provider>, I>>(base?: I): Provider {
    return Provider.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Provider>, I>>(object: I): Provider {
    const message = createBaseProvider();
    message.address = object.address ?? "";
    message.delegationBonded = object.delegationBonded ?? "";
    message.collateral = object.collateral ?? "";
    message.totalLocked = object.totalLocked ?? "";
    message.withdrawing = object.withdrawing ?? "";
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
