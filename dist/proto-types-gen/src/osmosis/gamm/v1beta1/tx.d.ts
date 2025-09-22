import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountOutRoute } from "../../poolmanager/v1beta1/swap_route";
export declare const protobufPackage = "osmosis.gamm.v1beta1";
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPool {
    sender: string;
    poolId: string;
    shareOutAmount: string;
    tokenInMaxs: Coin[];
}
export interface MsgJoinPoolResponse {
    shareOutAmount: string;
    tokenIn: Coin[];
}
/** ===================== MsgExitPool */
export interface MsgExitPool {
    sender: string;
    poolId: string;
    shareInAmount: string;
    tokenOutMins: Coin[];
}
export interface MsgExitPoolResponse {
    tokenOut: Coin[];
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn: Coin | undefined;
    tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut: Coin | undefined;
}
export interface MsgSwapExactAmountOutResponse {
    tokenInAmount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountIn {
    sender: string;
    poolId: string;
    tokenIn: Coin | undefined;
    /**
     * repeated cosmos.base.v1beta1.Coin tokensIn = 5 [
     *   (gogoproto.moretags) = "yaml:\"tokens_in\"",
     *   (gogoproto.nullable) = false
     * ];
     */
    shareOutMinAmount: string;
}
export interface MsgJoinSwapExternAmountInResponse {
    shareOutAmount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOut {
    sender: string;
    poolId: string;
    tokenInDenom: string;
    shareOutAmount: string;
    tokenInMaxAmount: string;
}
export interface MsgJoinSwapShareAmountOutResponse {
    tokenInAmount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountIn {
    sender: string;
    poolId: string;
    tokenOutDenom: string;
    shareInAmount: string;
    tokenOutMinAmount: string;
}
export interface MsgExitSwapShareAmountInResponse {
    tokenOutAmount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOut {
    sender: string;
    poolId: string;
    tokenOut: Coin | undefined;
    shareInMaxAmount: string;
}
export interface MsgExitSwapExternAmountOutResponse {
    shareInAmount: string;
}
export declare const MsgJoinPool: {
    encode(message: MsgJoinPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool;
    fromJSON(object: any): MsgJoinPool;
    toJSON(message: MsgJoinPool): unknown;
    create<I extends {
        sender?: string;
        poolId?: string;
        shareOutAmount?: string;
        tokenInMaxs?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        sender?: string;
        poolId?: string;
        shareOutAmount?: string;
        tokenInMaxs?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["tokenInMaxs"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["tokenInMaxs"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgJoinPool>]: never; }>(base?: I): MsgJoinPool;
    fromPartial<I_1 extends {
        sender?: string;
        poolId?: string;
        shareOutAmount?: string;
        tokenInMaxs?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        sender?: string;
        poolId?: string;
        shareOutAmount?: string;
        tokenInMaxs?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["tokenInMaxs"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["tokenInMaxs"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof MsgJoinPool>]: never; }>(object: I_1): MsgJoinPool;
};
export declare const MsgJoinPoolResponse: {
    encode(message: MsgJoinPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponse;
    fromJSON(object: any): MsgJoinPoolResponse;
    toJSON(message: MsgJoinPoolResponse): unknown;
    create<I extends {
        shareOutAmount?: string;
        tokenIn?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        shareOutAmount?: string;
        tokenIn?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["tokenIn"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["tokenIn"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgJoinPoolResponse>]: never; }>(base?: I): MsgJoinPoolResponse;
    fromPartial<I_1 extends {
        shareOutAmount?: string;
        tokenIn?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        shareOutAmount?: string;
        tokenIn?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["tokenIn"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["tokenIn"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof MsgJoinPoolResponse>]: never; }>(object: I_1): MsgJoinPoolResponse;
};
export declare const MsgExitPool: {
    encode(message: MsgExitPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPool;
    fromJSON(object: any): MsgExitPool;
    toJSON(message: MsgExitPool): unknown;
    create<I extends {
        sender?: string;
        poolId?: string;
        shareInAmount?: string;
        tokenOutMins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        sender?: string;
        poolId?: string;
        shareInAmount?: string;
        tokenOutMins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["tokenOutMins"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["tokenOutMins"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgExitPool>]: never; }>(base?: I): MsgExitPool;
    fromPartial<I_1 extends {
        sender?: string;
        poolId?: string;
        shareInAmount?: string;
        tokenOutMins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        sender?: string;
        poolId?: string;
        shareInAmount?: string;
        tokenOutMins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["tokenOutMins"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["tokenOutMins"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof MsgExitPool>]: never; }>(object: I_1): MsgExitPool;
};
export declare const MsgExitPoolResponse: {
    encode(message: MsgExitPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPoolResponse;
    fromJSON(object: any): MsgExitPoolResponse;
    toJSON(message: MsgExitPoolResponse): unknown;
    create<I extends {
        tokenOut?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        tokenOut?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["tokenOut"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["tokenOut"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "tokenOut">]: never; }>(base?: I): MsgExitPoolResponse;
    fromPartial<I_1 extends {
        tokenOut?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        tokenOut?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["tokenOut"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["tokenOut"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "tokenOut">]: never; }>(object: I_1): MsgExitPoolResponse;
};
export declare const MsgSwapExactAmountIn: {
    encode(message: MsgSwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromJSON(object: any): MsgSwapExactAmountIn;
    toJSON(message: MsgSwapExactAmountIn): unknown;
    create<I extends {
        sender?: string;
        routes?: {
            poolId?: string;
            tokenOutDenom?: string;
        }[];
        tokenIn?: {
            denom?: string;
            amount?: string;
        };
        tokenOutMinAmount?: string;
    } & {
        sender?: string;
        routes?: {
            poolId?: string;
            tokenOutDenom?: string;
        }[] & ({
            poolId?: string;
            tokenOutDenom?: string;
        } & {
            poolId?: string;
            tokenOutDenom?: string;
        } & { [K in Exclude<keyof I["routes"][number], keyof SwapAmountInRoute>]: never; })[] & { [K_1 in Exclude<keyof I["routes"], keyof {
            poolId?: string;
            tokenOutDenom?: string;
        }[]>]: never; };
        tokenIn?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I["tokenIn"], keyof Coin>]: never; };
        tokenOutMinAmount?: string;
    } & { [K_3 in Exclude<keyof I, keyof MsgSwapExactAmountIn>]: never; }>(base?: I): MsgSwapExactAmountIn;
    fromPartial<I_1 extends {
        sender?: string;
        routes?: {
            poolId?: string;
            tokenOutDenom?: string;
        }[];
        tokenIn?: {
            denom?: string;
            amount?: string;
        };
        tokenOutMinAmount?: string;
    } & {
        sender?: string;
        routes?: {
            poolId?: string;
            tokenOutDenom?: string;
        }[] & ({
            poolId?: string;
            tokenOutDenom?: string;
        } & {
            poolId?: string;
            tokenOutDenom?: string;
        } & { [K_4 in Exclude<keyof I_1["routes"][number], keyof SwapAmountInRoute>]: never; })[] & { [K_5 in Exclude<keyof I_1["routes"], keyof {
            poolId?: string;
            tokenOutDenom?: string;
        }[]>]: never; };
        tokenIn?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_6 in Exclude<keyof I_1["tokenIn"], keyof Coin>]: never; };
        tokenOutMinAmount?: string;
    } & { [K_7 in Exclude<keyof I_1, keyof MsgSwapExactAmountIn>]: never; }>(object: I_1): MsgSwapExactAmountIn;
};
export declare const MsgSwapExactAmountInResponse: {
    encode(message: MsgSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountInResponse;
    fromJSON(object: any): MsgSwapExactAmountInResponse;
    toJSON(message: MsgSwapExactAmountInResponse): unknown;
    create<I extends {
        tokenOutAmount?: string;
    } & {
        tokenOutAmount?: string;
    } & { [K in Exclude<keyof I, "tokenOutAmount">]: never; }>(base?: I): MsgSwapExactAmountInResponse;
    fromPartial<I_1 extends {
        tokenOutAmount?: string;
    } & {
        tokenOutAmount?: string;
    } & { [K_1 in Exclude<keyof I_1, "tokenOutAmount">]: never; }>(object: I_1): MsgSwapExactAmountInResponse;
};
export declare const MsgSwapExactAmountOut: {
    encode(message: MsgSwapExactAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOut;
    fromJSON(object: any): MsgSwapExactAmountOut;
    toJSON(message: MsgSwapExactAmountOut): unknown;
    create<I extends {
        sender?: string;
        routes?: {
            poolId?: string;
            tokenInDenom?: string;
        }[];
        tokenInMaxAmount?: string;
        tokenOut?: {
            denom?: string;
            amount?: string;
        };
    } & {
        sender?: string;
        routes?: {
            poolId?: string;
            tokenInDenom?: string;
        }[] & ({
            poolId?: string;
            tokenInDenom?: string;
        } & {
            poolId?: string;
            tokenInDenom?: string;
        } & { [K in Exclude<keyof I["routes"][number], keyof SwapAmountOutRoute>]: never; })[] & { [K_1 in Exclude<keyof I["routes"], keyof {
            poolId?: string;
            tokenInDenom?: string;
        }[]>]: never; };
        tokenInMaxAmount?: string;
        tokenOut?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I["tokenOut"], keyof Coin>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof MsgSwapExactAmountOut>]: never; }>(base?: I): MsgSwapExactAmountOut;
    fromPartial<I_1 extends {
        sender?: string;
        routes?: {
            poolId?: string;
            tokenInDenom?: string;
        }[];
        tokenInMaxAmount?: string;
        tokenOut?: {
            denom?: string;
            amount?: string;
        };
    } & {
        sender?: string;
        routes?: {
            poolId?: string;
            tokenInDenom?: string;
        }[] & ({
            poolId?: string;
            tokenInDenom?: string;
        } & {
            poolId?: string;
            tokenInDenom?: string;
        } & { [K_4 in Exclude<keyof I_1["routes"][number], keyof SwapAmountOutRoute>]: never; })[] & { [K_5 in Exclude<keyof I_1["routes"], keyof {
            poolId?: string;
            tokenInDenom?: string;
        }[]>]: never; };
        tokenInMaxAmount?: string;
        tokenOut?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_6 in Exclude<keyof I_1["tokenOut"], keyof Coin>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof MsgSwapExactAmountOut>]: never; }>(object: I_1): MsgSwapExactAmountOut;
};
export declare const MsgSwapExactAmountOutResponse: {
    encode(message: MsgSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse;
    fromJSON(object: any): MsgSwapExactAmountOutResponse;
    toJSON(message: MsgSwapExactAmountOutResponse): unknown;
    create<I extends {
        tokenInAmount?: string;
    } & {
        tokenInAmount?: string;
    } & { [K in Exclude<keyof I, "tokenInAmount">]: never; }>(base?: I): MsgSwapExactAmountOutResponse;
    fromPartial<I_1 extends {
        tokenInAmount?: string;
    } & {
        tokenInAmount?: string;
    } & { [K_1 in Exclude<keyof I_1, "tokenInAmount">]: never; }>(object: I_1): MsgSwapExactAmountOutResponse;
};
export declare const MsgJoinSwapExternAmountIn: {
    encode(message: MsgJoinSwapExternAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn;
    fromJSON(object: any): MsgJoinSwapExternAmountIn;
    toJSON(message: MsgJoinSwapExternAmountIn): unknown;
    create<I extends {
        sender?: string;
        poolId?: string;
        tokenIn?: {
            denom?: string;
            amount?: string;
        };
        shareOutMinAmount?: string;
    } & {
        sender?: string;
        poolId?: string;
        tokenIn?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["tokenIn"], keyof Coin>]: never; };
        shareOutMinAmount?: string;
    } & { [K_1 in Exclude<keyof I, keyof MsgJoinSwapExternAmountIn>]: never; }>(base?: I): MsgJoinSwapExternAmountIn;
    fromPartial<I_1 extends {
        sender?: string;
        poolId?: string;
        tokenIn?: {
            denom?: string;
            amount?: string;
        };
        shareOutMinAmount?: string;
    } & {
        sender?: string;
        poolId?: string;
        tokenIn?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I_1["tokenIn"], keyof Coin>]: never; };
        shareOutMinAmount?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof MsgJoinSwapExternAmountIn>]: never; }>(object: I_1): MsgJoinSwapExternAmountIn;
};
export declare const MsgJoinSwapExternAmountInResponse: {
    encode(message: MsgJoinSwapExternAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse;
    fromJSON(object: any): MsgJoinSwapExternAmountInResponse;
    toJSON(message: MsgJoinSwapExternAmountInResponse): unknown;
    create<I extends {
        shareOutAmount?: string;
    } & {
        shareOutAmount?: string;
    } & { [K in Exclude<keyof I, "shareOutAmount">]: never; }>(base?: I): MsgJoinSwapExternAmountInResponse;
    fromPartial<I_1 extends {
        shareOutAmount?: string;
    } & {
        shareOutAmount?: string;
    } & { [K_1 in Exclude<keyof I_1, "shareOutAmount">]: never; }>(object: I_1): MsgJoinSwapExternAmountInResponse;
};
export declare const MsgJoinSwapShareAmountOut: {
    encode(message: MsgJoinSwapShareAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut;
    fromJSON(object: any): MsgJoinSwapShareAmountOut;
    toJSON(message: MsgJoinSwapShareAmountOut): unknown;
    create<I extends {
        sender?: string;
        poolId?: string;
        tokenInDenom?: string;
        shareOutAmount?: string;
        tokenInMaxAmount?: string;
    } & {
        sender?: string;
        poolId?: string;
        tokenInDenom?: string;
        shareOutAmount?: string;
        tokenInMaxAmount?: string;
    } & { [K in Exclude<keyof I, keyof MsgJoinSwapShareAmountOut>]: never; }>(base?: I): MsgJoinSwapShareAmountOut;
    fromPartial<I_1 extends {
        sender?: string;
        poolId?: string;
        tokenInDenom?: string;
        shareOutAmount?: string;
        tokenInMaxAmount?: string;
    } & {
        sender?: string;
        poolId?: string;
        tokenInDenom?: string;
        shareOutAmount?: string;
        tokenInMaxAmount?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgJoinSwapShareAmountOut>]: never; }>(object: I_1): MsgJoinSwapShareAmountOut;
};
export declare const MsgJoinSwapShareAmountOutResponse: {
    encode(message: MsgJoinSwapShareAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse;
    fromJSON(object: any): MsgJoinSwapShareAmountOutResponse;
    toJSON(message: MsgJoinSwapShareAmountOutResponse): unknown;
    create<I extends {
        tokenInAmount?: string;
    } & {
        tokenInAmount?: string;
    } & { [K in Exclude<keyof I, "tokenInAmount">]: never; }>(base?: I): MsgJoinSwapShareAmountOutResponse;
    fromPartial<I_1 extends {
        tokenInAmount?: string;
    } & {
        tokenInAmount?: string;
    } & { [K_1 in Exclude<keyof I_1, "tokenInAmount">]: never; }>(object: I_1): MsgJoinSwapShareAmountOutResponse;
};
export declare const MsgExitSwapShareAmountIn: {
    encode(message: MsgExitSwapShareAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountIn;
    fromJSON(object: any): MsgExitSwapShareAmountIn;
    toJSON(message: MsgExitSwapShareAmountIn): unknown;
    create<I extends {
        sender?: string;
        poolId?: string;
        tokenOutDenom?: string;
        shareInAmount?: string;
        tokenOutMinAmount?: string;
    } & {
        sender?: string;
        poolId?: string;
        tokenOutDenom?: string;
        shareInAmount?: string;
        tokenOutMinAmount?: string;
    } & { [K in Exclude<keyof I, keyof MsgExitSwapShareAmountIn>]: never; }>(base?: I): MsgExitSwapShareAmountIn;
    fromPartial<I_1 extends {
        sender?: string;
        poolId?: string;
        tokenOutDenom?: string;
        shareInAmount?: string;
        tokenOutMinAmount?: string;
    } & {
        sender?: string;
        poolId?: string;
        tokenOutDenom?: string;
        shareInAmount?: string;
        tokenOutMinAmount?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgExitSwapShareAmountIn>]: never; }>(object: I_1): MsgExitSwapShareAmountIn;
};
export declare const MsgExitSwapShareAmountInResponse: {
    encode(message: MsgExitSwapShareAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse;
    fromJSON(object: any): MsgExitSwapShareAmountInResponse;
    toJSON(message: MsgExitSwapShareAmountInResponse): unknown;
    create<I extends {
        tokenOutAmount?: string;
    } & {
        tokenOutAmount?: string;
    } & { [K in Exclude<keyof I, "tokenOutAmount">]: never; }>(base?: I): MsgExitSwapShareAmountInResponse;
    fromPartial<I_1 extends {
        tokenOutAmount?: string;
    } & {
        tokenOutAmount?: string;
    } & { [K_1 in Exclude<keyof I_1, "tokenOutAmount">]: never; }>(object: I_1): MsgExitSwapShareAmountInResponse;
};
export declare const MsgExitSwapExternAmountOut: {
    encode(message: MsgExitSwapExternAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOut;
    fromJSON(object: any): MsgExitSwapExternAmountOut;
    toJSON(message: MsgExitSwapExternAmountOut): unknown;
    create<I extends {
        sender?: string;
        poolId?: string;
        tokenOut?: {
            denom?: string;
            amount?: string;
        };
        shareInMaxAmount?: string;
    } & {
        sender?: string;
        poolId?: string;
        tokenOut?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["tokenOut"], keyof Coin>]: never; };
        shareInMaxAmount?: string;
    } & { [K_1 in Exclude<keyof I, keyof MsgExitSwapExternAmountOut>]: never; }>(base?: I): MsgExitSwapExternAmountOut;
    fromPartial<I_1 extends {
        sender?: string;
        poolId?: string;
        tokenOut?: {
            denom?: string;
            amount?: string;
        };
        shareInMaxAmount?: string;
    } & {
        sender?: string;
        poolId?: string;
        tokenOut?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I_1["tokenOut"], keyof Coin>]: never; };
        shareInMaxAmount?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof MsgExitSwapExternAmountOut>]: never; }>(object: I_1): MsgExitSwapExternAmountOut;
};
export declare const MsgExitSwapExternAmountOutResponse: {
    encode(message: MsgExitSwapExternAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse;
    fromJSON(object: any): MsgExitSwapExternAmountOutResponse;
    toJSON(message: MsgExitSwapExternAmountOutResponse): unknown;
    create<I extends {
        shareInAmount?: string;
    } & {
        shareInAmount?: string;
    } & { [K in Exclude<keyof I, "shareInAmount">]: never; }>(base?: I): MsgExitSwapExternAmountOutResponse;
    fromPartial<I_1 extends {
        shareInAmount?: string;
    } & {
        shareInAmount?: string;
    } & { [K_1 in Exclude<keyof I_1, "shareInAmount">]: never; }>(object: I_1): MsgExitSwapExternAmountOutResponse;
};
export interface Msg {
    JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    ExitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
    SwapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
    SwapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
    JoinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse>;
    JoinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse>;
    ExitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse>;
    ExitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse>;
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
