import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "osmosis.gamm.poolmodels.stableswap.v1beta1";
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
    swapFee: string;
    /**
     * N.B.: exit fee is disabled during pool creation in x/poolmanager. While old
     * pools can maintain a non-zero fee. No new pool can be created with non-zero
     * fee anymore
     */
    exitFee: string;
}
/** Pool is the stableswap Pool struct */
export interface Pool {
    address: string;
    id: string;
    poolParams: PoolParams | undefined;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     */
    futurePoolGovernor: string;
    /** sum of all LP shares */
    totalShares: Coin | undefined;
    /** assets in the pool */
    poolLiquidity: Coin[];
    /** for calculation amognst assets with different precisions */
    scalingFactors: string[];
    /** scaling_factor_controller is the address can adjust pool scaling factors */
    scalingFactorController: string;
}
export declare const PoolParams: {
    encode(message: PoolParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolParams;
    fromJSON(object: any): PoolParams;
    toJSON(message: PoolParams): unknown;
    create<I extends {
        swapFee?: string;
        exitFee?: string;
    } & {
        swapFee?: string;
        exitFee?: string;
    } & { [K in Exclude<keyof I, keyof PoolParams>]: never; }>(base?: I): PoolParams;
    fromPartial<I_1 extends {
        swapFee?: string;
        exitFee?: string;
    } & {
        swapFee?: string;
        exitFee?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof PoolParams>]: never; }>(object: I_1): PoolParams;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    create<I extends {
        address?: string;
        id?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
        };
        futurePoolGovernor?: string;
        totalShares?: {
            denom?: string;
            amount?: string;
        };
        poolLiquidity?: {
            denom?: string;
            amount?: string;
        }[];
        scalingFactors?: string[];
        scalingFactorController?: string;
    } & {
        address?: string;
        id?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
        } & {
            swapFee?: string;
            exitFee?: string;
        } & { [K in Exclude<keyof I["poolParams"], keyof PoolParams>]: never; };
        futurePoolGovernor?: string;
        totalShares?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_1 in Exclude<keyof I["totalShares"], keyof Coin>]: never; };
        poolLiquidity?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I["poolLiquidity"][number], keyof Coin>]: never; })[] & { [K_3 in Exclude<keyof I["poolLiquidity"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        scalingFactors?: string[] & string[] & { [K_4 in Exclude<keyof I["scalingFactors"], keyof string[]>]: never; };
        scalingFactorController?: string;
    } & { [K_5 in Exclude<keyof I, keyof Pool>]: never; }>(base?: I): Pool;
    fromPartial<I_1 extends {
        address?: string;
        id?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
        };
        futurePoolGovernor?: string;
        totalShares?: {
            denom?: string;
            amount?: string;
        };
        poolLiquidity?: {
            denom?: string;
            amount?: string;
        }[];
        scalingFactors?: string[];
        scalingFactorController?: string;
    } & {
        address?: string;
        id?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
        } & {
            swapFee?: string;
            exitFee?: string;
        } & { [K_6 in Exclude<keyof I_1["poolParams"], keyof PoolParams>]: never; };
        futurePoolGovernor?: string;
        totalShares?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_7 in Exclude<keyof I_1["totalShares"], keyof Coin>]: never; };
        poolLiquidity?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_8 in Exclude<keyof I_1["poolLiquidity"][number], keyof Coin>]: never; })[] & { [K_9 in Exclude<keyof I_1["poolLiquidity"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        scalingFactors?: string[] & string[] & { [K_10 in Exclude<keyof I_1["scalingFactors"], keyof string[]>]: never; };
        scalingFactorController?: string;
    } & { [K_11 in Exclude<keyof I_1, keyof Pool>]: never; }>(object: I_1): Pool;
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
