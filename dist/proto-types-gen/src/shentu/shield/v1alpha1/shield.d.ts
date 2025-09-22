import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "shentu.shield.v1alpha1";
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
export declare const Fees: {
    encode(message: Fees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fees;
    fromJSON(object: any): Fees;
    toJSON(message: Fees): unknown;
    create<I extends {
        fees?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        fees?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["fees"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["fees"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "fees">]: never; }>(base?: I): Fees;
    fromPartial<I_1 extends {
        fees?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        fees?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["fees"][number], keyof DecCoin>]: never; })[] & { [K_4 in Exclude<keyof I_1["fees"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "fees">]: never; }>(object: I_1): Fees;
};
export declare const Provider: {
    encode(message: Provider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Provider;
    fromJSON(object: any): Provider;
    toJSON(message: Provider): unknown;
    create<I extends {
        address?: string;
        delegationBonded?: string;
        collateral?: string;
        totalLocked?: string;
        withdrawing?: string;
        rewards?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        address?: string;
        delegationBonded?: string;
        collateral?: string;
        totalLocked?: string;
        withdrawing?: string;
        rewards?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["rewards"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["rewards"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof Provider>]: never; }>(base?: I): Provider;
    fromPartial<I_1 extends {
        address?: string;
        delegationBonded?: string;
        collateral?: string;
        totalLocked?: string;
        withdrawing?: string;
        rewards?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        address?: string;
        delegationBonded?: string;
        collateral?: string;
        totalLocked?: string;
        withdrawing?: string;
        rewards?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["rewards"][number], keyof DecCoin>]: never; })[] & { [K_4 in Exclude<keyof I_1["rewards"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof Provider>]: never; }>(object: I_1): Provider;
};
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
