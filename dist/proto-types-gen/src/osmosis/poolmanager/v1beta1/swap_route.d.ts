import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "osmosis.poolmanager.v1beta1";
export interface SwapAmountInRoute {
    poolId: string;
    tokenOutDenom: string;
}
export interface SwapAmountOutRoute {
    poolId: string;
    tokenInDenom: string;
}
export interface SwapAmountInSplitRoute {
    pools: SwapAmountInRoute[];
    tokenInAmount: string;
}
export interface SwapAmountOutSplitRoute {
    pools: SwapAmountOutRoute[];
    tokenOutAmount: string;
}
export declare const SwapAmountInRoute: {
    encode(message: SwapAmountInRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute;
    fromJSON(object: any): SwapAmountInRoute;
    toJSON(message: SwapAmountInRoute): unknown;
    create<I extends {
        poolId?: string;
        tokenOutDenom?: string;
    } & {
        poolId?: string;
        tokenOutDenom?: string;
    } & { [K in Exclude<keyof I, keyof SwapAmountInRoute>]: never; }>(base?: I): SwapAmountInRoute;
    fromPartial<I_1 extends {
        poolId?: string;
        tokenOutDenom?: string;
    } & {
        poolId?: string;
        tokenOutDenom?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof SwapAmountInRoute>]: never; }>(object: I_1): SwapAmountInRoute;
};
export declare const SwapAmountOutRoute: {
    encode(message: SwapAmountOutRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromJSON(object: any): SwapAmountOutRoute;
    toJSON(message: SwapAmountOutRoute): unknown;
    create<I extends {
        poolId?: string;
        tokenInDenom?: string;
    } & {
        poolId?: string;
        tokenInDenom?: string;
    } & { [K in Exclude<keyof I, keyof SwapAmountOutRoute>]: never; }>(base?: I): SwapAmountOutRoute;
    fromPartial<I_1 extends {
        poolId?: string;
        tokenInDenom?: string;
    } & {
        poolId?: string;
        tokenInDenom?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof SwapAmountOutRoute>]: never; }>(object: I_1): SwapAmountOutRoute;
};
export declare const SwapAmountInSplitRoute: {
    encode(message: SwapAmountInSplitRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInSplitRoute;
    fromJSON(object: any): SwapAmountInSplitRoute;
    toJSON(message: SwapAmountInSplitRoute): unknown;
    create<I extends {
        pools?: {
            poolId?: string;
            tokenOutDenom?: string;
        }[];
        tokenInAmount?: string;
    } & {
        pools?: {
            poolId?: string;
            tokenOutDenom?: string;
        }[] & ({
            poolId?: string;
            tokenOutDenom?: string;
        } & {
            poolId?: string;
            tokenOutDenom?: string;
        } & { [K in Exclude<keyof I["pools"][number], keyof SwapAmountInRoute>]: never; })[] & { [K_1 in Exclude<keyof I["pools"], keyof {
            poolId?: string;
            tokenOutDenom?: string;
        }[]>]: never; };
        tokenInAmount?: string;
    } & { [K_2 in Exclude<keyof I, keyof SwapAmountInSplitRoute>]: never; }>(base?: I): SwapAmountInSplitRoute;
    fromPartial<I_1 extends {
        pools?: {
            poolId?: string;
            tokenOutDenom?: string;
        }[];
        tokenInAmount?: string;
    } & {
        pools?: {
            poolId?: string;
            tokenOutDenom?: string;
        }[] & ({
            poolId?: string;
            tokenOutDenom?: string;
        } & {
            poolId?: string;
            tokenOutDenom?: string;
        } & { [K_3 in Exclude<keyof I_1["pools"][number], keyof SwapAmountInRoute>]: never; })[] & { [K_4 in Exclude<keyof I_1["pools"], keyof {
            poolId?: string;
            tokenOutDenom?: string;
        }[]>]: never; };
        tokenInAmount?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof SwapAmountInSplitRoute>]: never; }>(object: I_1): SwapAmountInSplitRoute;
};
export declare const SwapAmountOutSplitRoute: {
    encode(message: SwapAmountOutSplitRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountOutSplitRoute;
    fromJSON(object: any): SwapAmountOutSplitRoute;
    toJSON(message: SwapAmountOutSplitRoute): unknown;
    create<I extends {
        pools?: {
            poolId?: string;
            tokenInDenom?: string;
        }[];
        tokenOutAmount?: string;
    } & {
        pools?: {
            poolId?: string;
            tokenInDenom?: string;
        }[] & ({
            poolId?: string;
            tokenInDenom?: string;
        } & {
            poolId?: string;
            tokenInDenom?: string;
        } & { [K in Exclude<keyof I["pools"][number], keyof SwapAmountOutRoute>]: never; })[] & { [K_1 in Exclude<keyof I["pools"], keyof {
            poolId?: string;
            tokenInDenom?: string;
        }[]>]: never; };
        tokenOutAmount?: string;
    } & { [K_2 in Exclude<keyof I, keyof SwapAmountOutSplitRoute>]: never; }>(base?: I): SwapAmountOutSplitRoute;
    fromPartial<I_1 extends {
        pools?: {
            poolId?: string;
            tokenInDenom?: string;
        }[];
        tokenOutAmount?: string;
    } & {
        pools?: {
            poolId?: string;
            tokenInDenom?: string;
        }[] & ({
            poolId?: string;
            tokenInDenom?: string;
        } & {
            poolId?: string;
            tokenInDenom?: string;
        } & { [K_3 in Exclude<keyof I_1["pools"][number], keyof SwapAmountOutRoute>]: never; })[] & { [K_4 in Exclude<keyof I_1["pools"], keyof {
            poolId?: string;
            tokenInDenom?: string;
        }[]>]: never; };
        tokenOutAmount?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof SwapAmountOutSplitRoute>]: never; }>(object: I_1): SwapAmountOutSplitRoute;
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
