import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PoolParams } from "./stableswap_pool";
export declare const protobufPackage = "osmosis.gamm.poolmodels.stableswap.v1beta1";
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPool {
    sender: string;
    poolParams: PoolParams | undefined;
    initialPoolLiquidity: Coin[];
    scalingFactors: string[];
    futurePoolGovernor: string;
    scalingFactorController: string;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponse {
    poolId: string;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactors {
    sender: string;
    poolId: string;
    scalingFactors: string[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {
}
export declare const MsgCreateStableswapPool: {
    encode(message: MsgCreateStableswapPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPool;
    fromJSON(object: any): MsgCreateStableswapPool;
    toJSON(message: MsgCreateStableswapPool): unknown;
    create<I extends {
        sender?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
        };
        initialPoolLiquidity?: {
            denom?: string;
            amount?: string;
        }[];
        scalingFactors?: string[];
        futurePoolGovernor?: string;
        scalingFactorController?: string;
    } & {
        sender?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
        } & {
            swapFee?: string;
            exitFee?: string;
        } & { [K in Exclude<keyof I["poolParams"], keyof PoolParams>]: never; };
        initialPoolLiquidity?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_1 in Exclude<keyof I["initialPoolLiquidity"][number], keyof Coin>]: never; })[] & { [K_2 in Exclude<keyof I["initialPoolLiquidity"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        scalingFactors?: string[] & string[] & { [K_3 in Exclude<keyof I["scalingFactors"], keyof string[]>]: never; };
        futurePoolGovernor?: string;
        scalingFactorController?: string;
    } & { [K_4 in Exclude<keyof I, keyof MsgCreateStableswapPool>]: never; }>(base?: I): MsgCreateStableswapPool;
    fromPartial<I_1 extends {
        sender?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
        };
        initialPoolLiquidity?: {
            denom?: string;
            amount?: string;
        }[];
        scalingFactors?: string[];
        futurePoolGovernor?: string;
        scalingFactorController?: string;
    } & {
        sender?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
        } & {
            swapFee?: string;
            exitFee?: string;
        } & { [K_5 in Exclude<keyof I_1["poolParams"], keyof PoolParams>]: never; };
        initialPoolLiquidity?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_6 in Exclude<keyof I_1["initialPoolLiquidity"][number], keyof Coin>]: never; })[] & { [K_7 in Exclude<keyof I_1["initialPoolLiquidity"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        scalingFactors?: string[] & string[] & { [K_8 in Exclude<keyof I_1["scalingFactors"], keyof string[]>]: never; };
        futurePoolGovernor?: string;
        scalingFactorController?: string;
    } & { [K_9 in Exclude<keyof I_1, keyof MsgCreateStableswapPool>]: never; }>(object: I_1): MsgCreateStableswapPool;
};
export declare const MsgCreateStableswapPoolResponse: {
    encode(message: MsgCreateStableswapPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStableswapPoolResponse;
    fromJSON(object: any): MsgCreateStableswapPoolResponse;
    toJSON(message: MsgCreateStableswapPoolResponse): unknown;
    create<I extends {
        poolId?: string;
    } & {
        poolId?: string;
    } & { [K in Exclude<keyof I, "poolId">]: never; }>(base?: I): MsgCreateStableswapPoolResponse;
    fromPartial<I_1 extends {
        poolId?: string;
    } & {
        poolId?: string;
    } & { [K_1 in Exclude<keyof I_1, "poolId">]: never; }>(object: I_1): MsgCreateStableswapPoolResponse;
};
export declare const MsgStableSwapAdjustScalingFactors: {
    encode(message: MsgStableSwapAdjustScalingFactors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactors;
    fromJSON(object: any): MsgStableSwapAdjustScalingFactors;
    toJSON(message: MsgStableSwapAdjustScalingFactors): unknown;
    create<I extends {
        sender?: string;
        poolId?: string;
        scalingFactors?: string[];
    } & {
        sender?: string;
        poolId?: string;
        scalingFactors?: string[] & string[] & { [K in Exclude<keyof I["scalingFactors"], keyof string[]>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof MsgStableSwapAdjustScalingFactors>]: never; }>(base?: I): MsgStableSwapAdjustScalingFactors;
    fromPartial<I_1 extends {
        sender?: string;
        poolId?: string;
        scalingFactors?: string[];
    } & {
        sender?: string;
        poolId?: string;
        scalingFactors?: string[] & string[] & { [K_2 in Exclude<keyof I_1["scalingFactors"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof MsgStableSwapAdjustScalingFactors>]: never; }>(object: I_1): MsgStableSwapAdjustScalingFactors;
};
export declare const MsgStableSwapAdjustScalingFactorsResponse: {
    encode(_: MsgStableSwapAdjustScalingFactorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactorsResponse;
    fromJSON(_: any): MsgStableSwapAdjustScalingFactorsResponse;
    toJSON(_: MsgStableSwapAdjustScalingFactorsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgStableSwapAdjustScalingFactorsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgStableSwapAdjustScalingFactorsResponse;
};
export interface Msg {
    CreateStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponse>;
    StableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponse>;
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
