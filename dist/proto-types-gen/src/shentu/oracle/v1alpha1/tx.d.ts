import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "shentu.oracle.v1alpha1";
export interface MsgCreateOperator {
    address: string;
    collateral: Coin[];
    proposer: string;
    name: string;
}
export interface MsgCreateOperatorResponse {
}
export interface MsgRemoveOperator {
    address: string;
    proposer: string;
}
export interface MsgRemoveOperatorResponse {
}
export interface MsgAddCollateral {
    address: string;
    collateralIncrement: Coin[];
}
export interface MsgAddCollateralResponse {
}
export interface MsgReduceCollateral {
    address: string;
    collateralDecrement: Coin[];
}
export interface MsgReduceCollateralResponse {
}
export interface MsgWithdrawReward {
    address: string;
}
export interface MsgWithdrawRewardResponse {
}
export interface MsgCreateTask {
    contract: string;
    function: string;
    bounty: Coin[];
    description: string;
    creator: string;
    wait: string;
    validDuration: Duration | undefined;
}
export interface MsgCreateTaskResponse {
}
export interface MsgTaskResponse {
    contract: string;
    function: string;
    score: string;
    operator: string;
}
export interface MsgTaskResponseResponse {
}
export interface MsgDeleteTask {
    contract: string;
    function: string;
    force: boolean;
    from: string;
}
export interface MsgDeleteTaskResponse {
}
export interface MsgCreateTxTask {
    creator: string;
    chainId: string;
    /** the bytes of application chain transaction that is going to be evaluated */
    atxBytes: Uint8Array;
    bounty: Coin[];
    validTime: Date | undefined;
}
export interface MsgCreateTxTaskResponse {
    /** sha256 hash of the application chain transaction */
    atxHash: Uint8Array;
}
export interface MsgTxTaskResponse {
    /** sha256 hash of the application chain transaction */
    atxHash: Uint8Array;
    score: string;
    operator: string;
}
export interface MsgTxTaskResponseResponse {
}
export interface MsgDeleteTxTask {
    /** sha256 hash of the application chain transaction */
    atxHash: Uint8Array;
    from: string;
}
export interface MsgDeleteTxTaskResponse {
}
export declare const MsgCreateOperator: {
    encode(message: MsgCreateOperator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOperator;
    fromJSON(object: any): MsgCreateOperator;
    toJSON(message: MsgCreateOperator): unknown;
    create<I extends {
        address?: string;
        collateral?: {
            denom?: string;
            amount?: string;
        }[];
        proposer?: string;
        name?: string;
    } & {
        address?: string;
        collateral?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["collateral"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["collateral"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        proposer?: string;
        name?: string;
    } & { [K_2 in Exclude<keyof I, keyof MsgCreateOperator>]: never; }>(base?: I): MsgCreateOperator;
    fromPartial<I_1 extends {
        address?: string;
        collateral?: {
            denom?: string;
            amount?: string;
        }[];
        proposer?: string;
        name?: string;
    } & {
        address?: string;
        collateral?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["collateral"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["collateral"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        proposer?: string;
        name?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof MsgCreateOperator>]: never; }>(object: I_1): MsgCreateOperator;
};
export declare const MsgCreateOperatorResponse: {
    encode(_: MsgCreateOperatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOperatorResponse;
    fromJSON(_: any): MsgCreateOperatorResponse;
    toJSON(_: MsgCreateOperatorResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCreateOperatorResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCreateOperatorResponse;
};
export declare const MsgRemoveOperator: {
    encode(message: MsgRemoveOperator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveOperator;
    fromJSON(object: any): MsgRemoveOperator;
    toJSON(message: MsgRemoveOperator): unknown;
    create<I extends {
        address?: string;
        proposer?: string;
    } & {
        address?: string;
        proposer?: string;
    } & { [K in Exclude<keyof I, keyof MsgRemoveOperator>]: never; }>(base?: I): MsgRemoveOperator;
    fromPartial<I_1 extends {
        address?: string;
        proposer?: string;
    } & {
        address?: string;
        proposer?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgRemoveOperator>]: never; }>(object: I_1): MsgRemoveOperator;
};
export declare const MsgRemoveOperatorResponse: {
    encode(_: MsgRemoveOperatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveOperatorResponse;
    fromJSON(_: any): MsgRemoveOperatorResponse;
    toJSON(_: MsgRemoveOperatorResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgRemoveOperatorResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgRemoveOperatorResponse;
};
export declare const MsgAddCollateral: {
    encode(message: MsgAddCollateral, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCollateral;
    fromJSON(object: any): MsgAddCollateral;
    toJSON(message: MsgAddCollateral): unknown;
    create<I extends {
        address?: string;
        collateralIncrement?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        address?: string;
        collateralIncrement?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["collateralIncrement"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["collateralIncrement"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgAddCollateral>]: never; }>(base?: I): MsgAddCollateral;
    fromPartial<I_1 extends {
        address?: string;
        collateralIncrement?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        address?: string;
        collateralIncrement?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["collateralIncrement"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["collateralIncrement"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof MsgAddCollateral>]: never; }>(object: I_1): MsgAddCollateral;
};
export declare const MsgAddCollateralResponse: {
    encode(_: MsgAddCollateralResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCollateralResponse;
    fromJSON(_: any): MsgAddCollateralResponse;
    toJSON(_: MsgAddCollateralResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgAddCollateralResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgAddCollateralResponse;
};
export declare const MsgReduceCollateral: {
    encode(message: MsgReduceCollateral, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReduceCollateral;
    fromJSON(object: any): MsgReduceCollateral;
    toJSON(message: MsgReduceCollateral): unknown;
    create<I extends {
        address?: string;
        collateralDecrement?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        address?: string;
        collateralDecrement?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["collateralDecrement"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["collateralDecrement"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgReduceCollateral>]: never; }>(base?: I): MsgReduceCollateral;
    fromPartial<I_1 extends {
        address?: string;
        collateralDecrement?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        address?: string;
        collateralDecrement?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["collateralDecrement"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["collateralDecrement"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof MsgReduceCollateral>]: never; }>(object: I_1): MsgReduceCollateral;
};
export declare const MsgReduceCollateralResponse: {
    encode(_: MsgReduceCollateralResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReduceCollateralResponse;
    fromJSON(_: any): MsgReduceCollateralResponse;
    toJSON(_: MsgReduceCollateralResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgReduceCollateralResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgReduceCollateralResponse;
};
export declare const MsgWithdrawReward: {
    encode(message: MsgWithdrawReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReward;
    fromJSON(object: any): MsgWithdrawReward;
    toJSON(message: MsgWithdrawReward): unknown;
    create<I extends {
        address?: string;
    } & {
        address?: string;
    } & { [K in Exclude<keyof I, "address">]: never; }>(base?: I): MsgWithdrawReward;
    fromPartial<I_1 extends {
        address?: string;
    } & {
        address?: string;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never; }>(object: I_1): MsgWithdrawReward;
};
export declare const MsgWithdrawRewardResponse: {
    encode(_: MsgWithdrawRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewardResponse;
    fromJSON(_: any): MsgWithdrawRewardResponse;
    toJSON(_: MsgWithdrawRewardResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgWithdrawRewardResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgWithdrawRewardResponse;
};
export declare const MsgCreateTask: {
    encode(message: MsgCreateTask, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTask;
    fromJSON(object: any): MsgCreateTask;
    toJSON(message: MsgCreateTask): unknown;
    create<I extends {
        contract?: string;
        function?: string;
        bounty?: {
            denom?: string;
            amount?: string;
        }[];
        description?: string;
        creator?: string;
        wait?: string;
        validDuration?: {
            seconds?: string;
            nanos?: number;
        };
    } & {
        contract?: string;
        function?: string;
        bounty?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["bounty"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["bounty"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        description?: string;
        creator?: string;
        wait?: string;
        validDuration?: {
            seconds?: string;
            nanos?: number;
        } & {
            seconds?: string;
            nanos?: number;
        } & { [K_2 in Exclude<keyof I["validDuration"], keyof Duration>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof MsgCreateTask>]: never; }>(base?: I): MsgCreateTask;
    fromPartial<I_1 extends {
        contract?: string;
        function?: string;
        bounty?: {
            denom?: string;
            amount?: string;
        }[];
        description?: string;
        creator?: string;
        wait?: string;
        validDuration?: {
            seconds?: string;
            nanos?: number;
        };
    } & {
        contract?: string;
        function?: string;
        bounty?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_4 in Exclude<keyof I_1["bounty"][number], keyof Coin>]: never; })[] & { [K_5 in Exclude<keyof I_1["bounty"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        description?: string;
        creator?: string;
        wait?: string;
        validDuration?: {
            seconds?: string;
            nanos?: number;
        } & {
            seconds?: string;
            nanos?: number;
        } & { [K_6 in Exclude<keyof I_1["validDuration"], keyof Duration>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof MsgCreateTask>]: never; }>(object: I_1): MsgCreateTask;
};
export declare const MsgCreateTaskResponse: {
    encode(_: MsgCreateTaskResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTaskResponse;
    fromJSON(_: any): MsgCreateTaskResponse;
    toJSON(_: MsgCreateTaskResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCreateTaskResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCreateTaskResponse;
};
export declare const MsgTaskResponse: {
    encode(message: MsgTaskResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTaskResponse;
    fromJSON(object: any): MsgTaskResponse;
    toJSON(message: MsgTaskResponse): unknown;
    create<I extends {
        contract?: string;
        function?: string;
        score?: string;
        operator?: string;
    } & {
        contract?: string;
        function?: string;
        score?: string;
        operator?: string;
    } & { [K in Exclude<keyof I, keyof MsgTaskResponse>]: never; }>(base?: I): MsgTaskResponse;
    fromPartial<I_1 extends {
        contract?: string;
        function?: string;
        score?: string;
        operator?: string;
    } & {
        contract?: string;
        function?: string;
        score?: string;
        operator?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgTaskResponse>]: never; }>(object: I_1): MsgTaskResponse;
};
export declare const MsgTaskResponseResponse: {
    encode(_: MsgTaskResponseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTaskResponseResponse;
    fromJSON(_: any): MsgTaskResponseResponse;
    toJSON(_: MsgTaskResponseResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgTaskResponseResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgTaskResponseResponse;
};
export declare const MsgDeleteTask: {
    encode(message: MsgDeleteTask, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTask;
    fromJSON(object: any): MsgDeleteTask;
    toJSON(message: MsgDeleteTask): unknown;
    create<I extends {
        contract?: string;
        function?: string;
        force?: boolean;
        from?: string;
    } & {
        contract?: string;
        function?: string;
        force?: boolean;
        from?: string;
    } & { [K in Exclude<keyof I, keyof MsgDeleteTask>]: never; }>(base?: I): MsgDeleteTask;
    fromPartial<I_1 extends {
        contract?: string;
        function?: string;
        force?: boolean;
        from?: string;
    } & {
        contract?: string;
        function?: string;
        force?: boolean;
        from?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgDeleteTask>]: never; }>(object: I_1): MsgDeleteTask;
};
export declare const MsgDeleteTaskResponse: {
    encode(_: MsgDeleteTaskResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTaskResponse;
    fromJSON(_: any): MsgDeleteTaskResponse;
    toJSON(_: MsgDeleteTaskResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgDeleteTaskResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgDeleteTaskResponse;
};
export declare const MsgCreateTxTask: {
    encode(message: MsgCreateTxTask, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTxTask;
    fromJSON(object: any): MsgCreateTxTask;
    toJSON(message: MsgCreateTxTask): unknown;
    create<I extends {
        creator?: string;
        chainId?: string;
        atxBytes?: Uint8Array;
        bounty?: {
            denom?: string;
            amount?: string;
        }[];
        validTime?: Date | undefined;
    } & {
        creator?: string;
        chainId?: string;
        atxBytes?: Uint8Array;
        bounty?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["bounty"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["bounty"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        validTime?: Date | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgCreateTxTask>]: never; }>(base?: I): MsgCreateTxTask;
    fromPartial<I_1 extends {
        creator?: string;
        chainId?: string;
        atxBytes?: Uint8Array;
        bounty?: {
            denom?: string;
            amount?: string;
        }[];
        validTime?: Date | undefined;
    } & {
        creator?: string;
        chainId?: string;
        atxBytes?: Uint8Array;
        bounty?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["bounty"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["bounty"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        validTime?: Date | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof MsgCreateTxTask>]: never; }>(object: I_1): MsgCreateTxTask;
};
export declare const MsgCreateTxTaskResponse: {
    encode(message: MsgCreateTxTaskResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTxTaskResponse;
    fromJSON(object: any): MsgCreateTxTaskResponse;
    toJSON(message: MsgCreateTxTaskResponse): unknown;
    create<I extends {
        atxHash?: Uint8Array;
    } & {
        atxHash?: Uint8Array;
    } & { [K in Exclude<keyof I, "atxHash">]: never; }>(base?: I): MsgCreateTxTaskResponse;
    fromPartial<I_1 extends {
        atxHash?: Uint8Array;
    } & {
        atxHash?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "atxHash">]: never; }>(object: I_1): MsgCreateTxTaskResponse;
};
export declare const MsgTxTaskResponse: {
    encode(message: MsgTxTaskResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTxTaskResponse;
    fromJSON(object: any): MsgTxTaskResponse;
    toJSON(message: MsgTxTaskResponse): unknown;
    create<I extends {
        atxHash?: Uint8Array;
        score?: string;
        operator?: string;
    } & {
        atxHash?: Uint8Array;
        score?: string;
        operator?: string;
    } & { [K in Exclude<keyof I, keyof MsgTxTaskResponse>]: never; }>(base?: I): MsgTxTaskResponse;
    fromPartial<I_1 extends {
        atxHash?: Uint8Array;
        score?: string;
        operator?: string;
    } & {
        atxHash?: Uint8Array;
        score?: string;
        operator?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgTxTaskResponse>]: never; }>(object: I_1): MsgTxTaskResponse;
};
export declare const MsgTxTaskResponseResponse: {
    encode(_: MsgTxTaskResponseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTxTaskResponseResponse;
    fromJSON(_: any): MsgTxTaskResponseResponse;
    toJSON(_: MsgTxTaskResponseResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgTxTaskResponseResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgTxTaskResponseResponse;
};
export declare const MsgDeleteTxTask: {
    encode(message: MsgDeleteTxTask, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTxTask;
    fromJSON(object: any): MsgDeleteTxTask;
    toJSON(message: MsgDeleteTxTask): unknown;
    create<I extends {
        atxHash?: Uint8Array;
        from?: string;
    } & {
        atxHash?: Uint8Array;
        from?: string;
    } & { [K in Exclude<keyof I, keyof MsgDeleteTxTask>]: never; }>(base?: I): MsgDeleteTxTask;
    fromPartial<I_1 extends {
        atxHash?: Uint8Array;
        from?: string;
    } & {
        atxHash?: Uint8Array;
        from?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgDeleteTxTask>]: never; }>(object: I_1): MsgDeleteTxTask;
};
export declare const MsgDeleteTxTaskResponse: {
    encode(_: MsgDeleteTxTaskResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteTxTaskResponse;
    fromJSON(_: any): MsgDeleteTxTaskResponse;
    toJSON(_: MsgDeleteTxTaskResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgDeleteTxTaskResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgDeleteTxTaskResponse;
};
/** Msg defines the shield Msg service. */
export interface Msg {
    CreateOperator(request: MsgCreateOperator): Promise<MsgCreateOperatorResponse>;
    RemoveOperator(request: MsgRemoveOperator): Promise<MsgRemoveOperatorResponse>;
    AddCollateral(request: MsgAddCollateral): Promise<MsgAddCollateralResponse>;
    ReduceCollateral(request: MsgReduceCollateral): Promise<MsgReduceCollateralResponse>;
    WithdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse>;
    CreateTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
    TaskResponse(request: MsgTaskResponse): Promise<MsgTaskResponseResponse>;
    DeleteTask(request: MsgDeleteTask): Promise<MsgDeleteTaskResponse>;
    CreateTxTask(request: MsgCreateTxTask): Promise<MsgCreateTxTaskResponse>;
    TxTaskResponse(request: MsgTxTaskResponse): Promise<MsgTxTaskResponseResponse>;
    DeleteTxTask(request: MsgDeleteTxTask): Promise<MsgDeleteTxTaskResponse>;
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
