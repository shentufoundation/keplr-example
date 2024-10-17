// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v3.21.12
// source: cosmos/auth/v1alpha1/vesting.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
import { BaseVestingAccount } from "../../vesting/v1beta1/vesting";

export const protobufPackage = "cosmos.auth.v1alpha1";

/** ManualVestingAccount implements the VestingAccount interface. */
export interface ManualVestingAccount {
  baseVestingAccount: BaseVestingAccount | undefined;
  vestedCoins: Coin[];
  unlocker: string;
}

function createBaseManualVestingAccount(): ManualVestingAccount {
  return { baseVestingAccount: undefined, vestedCoins: [], unlocker: "" };
}

export const ManualVestingAccount = {
  encode(message: ManualVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vestedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.unlocker !== "") {
      writer.uint32(26).string(message.unlocker);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManualVestingAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManualVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.vestedCoins.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unlocker = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ManualVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
      vestedCoins: globalThis.Array.isArray(object?.vestedCoins)
        ? object.vestedCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      unlocker: isSet(object.unlocker) ? globalThis.String(object.unlocker) : "",
    };
  },

  toJSON(message: ManualVestingAccount): unknown {
    const obj: any = {};
    if (message.baseVestingAccount !== undefined) {
      obj.baseVestingAccount = BaseVestingAccount.toJSON(message.baseVestingAccount);
    }
    if (message.vestedCoins?.length) {
      obj.vestedCoins = message.vestedCoins.map((e) => Coin.toJSON(e));
    }
    if (message.unlocker !== "") {
      obj.unlocker = message.unlocker;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ManualVestingAccount>, I>>(base?: I): ManualVestingAccount {
    return ManualVestingAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ManualVestingAccount>, I>>(object: I): ManualVestingAccount {
    const message = createBaseManualVestingAccount();
    message.baseVestingAccount = (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null)
      ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
      : undefined;
    message.vestedCoins = object.vestedCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.unlocker = object.unlocker ?? "";
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
