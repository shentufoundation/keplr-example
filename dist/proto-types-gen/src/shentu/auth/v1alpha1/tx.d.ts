import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "shentu.auth.v1alpha1";
/**
 * MsgUnlock defines a message for unlocking coins from a manual vesting
 * account.
 */
export interface MsgUnlock {
    issuer: string;
    account: string;
    unlockAmount: Coin[];
}
/** MsgUnlockResponse defines the Msg/Unlock response type. */
export interface MsgUnlockResponse {
}
export declare const MsgUnlock: {
    encode(message: MsgUnlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlock;
    fromJSON(object: any): MsgUnlock;
    toJSON(message: MsgUnlock): unknown;
    create<I extends {
        issuer?: string;
        account?: string;
        unlockAmount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        issuer?: string;
        account?: string;
        unlockAmount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["unlockAmount"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["unlockAmount"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgUnlock>]: never; }>(base?: I): MsgUnlock;
    fromPartial<I_1 extends {
        issuer?: string;
        account?: string;
        unlockAmount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        issuer?: string;
        account?: string;
        unlockAmount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["unlockAmount"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["unlockAmount"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof MsgUnlock>]: never; }>(object: I_1): MsgUnlock;
};
export declare const MsgUnlockResponse: {
    encode(_: MsgUnlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlockResponse;
    fromJSON(_: any): MsgUnlockResponse;
    toJSON(_: MsgUnlockResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgUnlockResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUnlockResponse;
};
/** Msg defines the auth Msg service. */
export interface Msg {
    /**
     * Unlock defines a method for unlocking coins from a manual vesting
     * account.
     */
    Unlock(request: MsgUnlock): Promise<MsgUnlockResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
