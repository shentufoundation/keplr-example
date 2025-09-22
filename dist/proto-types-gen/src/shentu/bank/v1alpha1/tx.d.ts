import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "shentu.bank.v1alpha1";
/**
 * MsgLockedSend represents a message to send and lock coins from one account to
 * another.
 */
export interface MsgLockedSend {
    fromAddress: string;
    toAddress: string;
    unlockerAddress: string;
    amount: Coin[];
}
/** MsgLockedSendResponse defines the Msg/LockedSend response type. */
export interface MsgLockedSendResponse {
}
export declare const MsgLockedSend: {
    encode(message: MsgLockedSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockedSend;
    fromJSON(object: any): MsgLockedSend;
    toJSON(message: MsgLockedSend): unknown;
    create<I extends {
        fromAddress?: string;
        toAddress?: string;
        unlockerAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        fromAddress?: string;
        toAddress?: string;
        unlockerAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["amount"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgLockedSend>]: never; }>(base?: I): MsgLockedSend;
    fromPartial<I_1 extends {
        fromAddress?: string;
        toAddress?: string;
        unlockerAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        fromAddress?: string;
        toAddress?: string;
        unlockerAddress?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["amount"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof MsgLockedSend>]: never; }>(object: I_1): MsgLockedSend;
};
export declare const MsgLockedSendResponse: {
    encode(_: MsgLockedSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockedSendResponse;
    fromJSON(_: any): MsgLockedSendResponse;
    toJSON(_: MsgLockedSendResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgLockedSendResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgLockedSendResponse;
};
/** Msg defines the bank Msg service. */
export interface Msg {
    /**
     * LockedSend defines a method for sending coins and locking them from one
     * account to another account.
     */
    LockedSend(request: MsgLockedSend): Promise<MsgLockedSendResponse>;
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
