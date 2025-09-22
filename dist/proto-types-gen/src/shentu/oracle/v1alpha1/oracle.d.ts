import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "shentu.oracle.v1alpha1";
/** TaskStatus enumerates the valid statuses of a task. */
export declare enum TaskStatus {
    TASK_STATUS_UNSPECIFIED = 0,
    TASK_STATUS_PENDING = 1,
    TASK_STATUS_SUCCEEDED = 2,
    TASK_STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function taskStatusFromJSON(object: any): TaskStatus;
export declare function taskStatusToJSON(object: TaskStatus): string;
/** Withdraw stores a withdraw of "Amount" scheduled for a given "DueBlock." */
export interface Withdraw {
    address: string;
    amount: Coin[];
    dueBlock: string;
}
export interface Task {
    contract: string;
    function: string;
    beginBlock: string;
    bounty: Coin[];
    description: string;
    expiration: Date | undefined;
    creator: string;
    responses: Response[];
    result: string;
    expireHeight: string;
    waitingBlocks: string;
    status: TaskStatus;
}
export interface Response {
    operator: string;
    score: string;
    weight: string;
    reward: Coin[];
}
export interface Operator {
    address: string;
    proposer: string;
    collateral: Coin[];
    accumulatedRewards: Coin[];
    name: string;
}
export interface TaskParams {
    expirationDuration: Duration | undefined;
    aggregationWindow: string;
    aggregationResult: string;
    thresholdScore: string;
    epsilon1: string;
    epsilon2: string;
    shortcutQuorum: Uint8Array;
}
export interface LockedPoolParams {
    lockedInBlocks: string;
    minimumCollateral: string;
}
export interface TaskID {
    tid: Uint8Array;
}
export interface TaskIDs {
    taskIds: TaskID[];
}
export interface CoinsProto {
    coins: Coin[];
}
export interface TxTask {
    atxHash: Uint8Array;
    creator: string;
    bounty: Coin[];
    validTime: Date | undefined;
    expiration: Date | undefined;
    responses: Response[];
    score: string;
    status: TaskStatus;
}
export declare const Withdraw: {
    encode(message: Withdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Withdraw;
    fromJSON(object: any): Withdraw;
    toJSON(message: Withdraw): unknown;
    create<I extends {
        address?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
        dueBlock?: string;
    } & {
        address?: string;
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
        dueBlock?: string;
    } & { [K_2 in Exclude<keyof I, keyof Withdraw>]: never; }>(base?: I): Withdraw;
    fromPartial<I_1 extends {
        address?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
        dueBlock?: string;
    } & {
        address?: string;
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
        dueBlock?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof Withdraw>]: never; }>(object: I_1): Withdraw;
};
export declare const Task: {
    encode(message: Task, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Task;
    fromJSON(object: any): Task;
    toJSON(message: Task): unknown;
    create<I extends {
        contract?: string;
        function?: string;
        beginBlock?: string;
        bounty?: {
            denom?: string;
            amount?: string;
        }[];
        description?: string;
        expiration?: Date | undefined;
        creator?: string;
        responses?: {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        result?: string;
        expireHeight?: string;
        waitingBlocks?: string;
        status?: TaskStatus;
    } & {
        contract?: string;
        function?: string;
        beginBlock?: string;
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
        expiration?: Date | undefined;
        creator?: string;
        responses?: {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_2 in Exclude<keyof I["responses"][number]["reward"][number], keyof Coin>]: never; })[] & { [K_3 in Exclude<keyof I["responses"][number]["reward"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
        } & { [K_4 in Exclude<keyof I["responses"][number], keyof Response>]: never; })[] & { [K_5 in Exclude<keyof I["responses"], keyof {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>]: never; };
        result?: string;
        expireHeight?: string;
        waitingBlocks?: string;
        status?: TaskStatus;
    } & { [K_6 in Exclude<keyof I, keyof Task>]: never; }>(base?: I): Task;
    fromPartial<I_1 extends {
        contract?: string;
        function?: string;
        beginBlock?: string;
        bounty?: {
            denom?: string;
            amount?: string;
        }[];
        description?: string;
        expiration?: Date | undefined;
        creator?: string;
        responses?: {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        result?: string;
        expireHeight?: string;
        waitingBlocks?: string;
        status?: TaskStatus;
    } & {
        contract?: string;
        function?: string;
        beginBlock?: string;
        bounty?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_7 in Exclude<keyof I_1["bounty"][number], keyof Coin>]: never; })[] & { [K_8 in Exclude<keyof I_1["bounty"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        description?: string;
        expiration?: Date | undefined;
        creator?: string;
        responses?: {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_9 in Exclude<keyof I_1["responses"][number]["reward"][number], keyof Coin>]: never; })[] & { [K_10 in Exclude<keyof I_1["responses"][number]["reward"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
        } & { [K_11 in Exclude<keyof I_1["responses"][number], keyof Response>]: never; })[] & { [K_12 in Exclude<keyof I_1["responses"], keyof {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>]: never; };
        result?: string;
        expireHeight?: string;
        waitingBlocks?: string;
        status?: TaskStatus;
    } & { [K_13 in Exclude<keyof I_1, keyof Task>]: never; }>(object: I_1): Task;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends {
        operator?: string;
        score?: string;
        weight?: string;
        reward?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        operator?: string;
        score?: string;
        weight?: string;
        reward?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["reward"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["reward"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof Response>]: never; }>(base?: I): Response;
    fromPartial<I_1 extends {
        operator?: string;
        score?: string;
        weight?: string;
        reward?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        operator?: string;
        score?: string;
        weight?: string;
        reward?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["reward"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["reward"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof Response>]: never; }>(object: I_1): Response;
};
export declare const Operator: {
    encode(message: Operator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Operator;
    fromJSON(object: any): Operator;
    toJSON(message: Operator): unknown;
    create<I extends {
        address?: string;
        proposer?: string;
        collateral?: {
            denom?: string;
            amount?: string;
        }[];
        accumulatedRewards?: {
            denom?: string;
            amount?: string;
        }[];
        name?: string;
    } & {
        address?: string;
        proposer?: string;
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
        accumulatedRewards?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I["accumulatedRewards"][number], keyof Coin>]: never; })[] & { [K_3 in Exclude<keyof I["accumulatedRewards"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        name?: string;
    } & { [K_4 in Exclude<keyof I, keyof Operator>]: never; }>(base?: I): Operator;
    fromPartial<I_1 extends {
        address?: string;
        proposer?: string;
        collateral?: {
            denom?: string;
            amount?: string;
        }[];
        accumulatedRewards?: {
            denom?: string;
            amount?: string;
        }[];
        name?: string;
    } & {
        address?: string;
        proposer?: string;
        collateral?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_5 in Exclude<keyof I_1["collateral"][number], keyof Coin>]: never; })[] & { [K_6 in Exclude<keyof I_1["collateral"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        accumulatedRewards?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_7 in Exclude<keyof I_1["accumulatedRewards"][number], keyof Coin>]: never; })[] & { [K_8 in Exclude<keyof I_1["accumulatedRewards"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        name?: string;
    } & { [K_9 in Exclude<keyof I_1, keyof Operator>]: never; }>(object: I_1): Operator;
};
export declare const TaskParams: {
    encode(message: TaskParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TaskParams;
    fromJSON(object: any): TaskParams;
    toJSON(message: TaskParams): unknown;
    create<I extends {
        expirationDuration?: {
            seconds?: string;
            nanos?: number;
        };
        aggregationWindow?: string;
        aggregationResult?: string;
        thresholdScore?: string;
        epsilon1?: string;
        epsilon2?: string;
        shortcutQuorum?: Uint8Array;
    } & {
        expirationDuration?: {
            seconds?: string;
            nanos?: number;
        } & {
            seconds?: string;
            nanos?: number;
        } & { [K in Exclude<keyof I["expirationDuration"], keyof Duration>]: never; };
        aggregationWindow?: string;
        aggregationResult?: string;
        thresholdScore?: string;
        epsilon1?: string;
        epsilon2?: string;
        shortcutQuorum?: Uint8Array;
    } & { [K_1 in Exclude<keyof I, keyof TaskParams>]: never; }>(base?: I): TaskParams;
    fromPartial<I_1 extends {
        expirationDuration?: {
            seconds?: string;
            nanos?: number;
        };
        aggregationWindow?: string;
        aggregationResult?: string;
        thresholdScore?: string;
        epsilon1?: string;
        epsilon2?: string;
        shortcutQuorum?: Uint8Array;
    } & {
        expirationDuration?: {
            seconds?: string;
            nanos?: number;
        } & {
            seconds?: string;
            nanos?: number;
        } & { [K_2 in Exclude<keyof I_1["expirationDuration"], keyof Duration>]: never; };
        aggregationWindow?: string;
        aggregationResult?: string;
        thresholdScore?: string;
        epsilon1?: string;
        epsilon2?: string;
        shortcutQuorum?: Uint8Array;
    } & { [K_3 in Exclude<keyof I_1, keyof TaskParams>]: never; }>(object: I_1): TaskParams;
};
export declare const LockedPoolParams: {
    encode(message: LockedPoolParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockedPoolParams;
    fromJSON(object: any): LockedPoolParams;
    toJSON(message: LockedPoolParams): unknown;
    create<I extends {
        lockedInBlocks?: string;
        minimumCollateral?: string;
    } & {
        lockedInBlocks?: string;
        minimumCollateral?: string;
    } & { [K in Exclude<keyof I, keyof LockedPoolParams>]: never; }>(base?: I): LockedPoolParams;
    fromPartial<I_1 extends {
        lockedInBlocks?: string;
        minimumCollateral?: string;
    } & {
        lockedInBlocks?: string;
        minimumCollateral?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof LockedPoolParams>]: never; }>(object: I_1): LockedPoolParams;
};
export declare const TaskID: {
    encode(message: TaskID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TaskID;
    fromJSON(object: any): TaskID;
    toJSON(message: TaskID): unknown;
    create<I extends {
        tid?: Uint8Array;
    } & {
        tid?: Uint8Array;
    } & { [K in Exclude<keyof I, "tid">]: never; }>(base?: I): TaskID;
    fromPartial<I_1 extends {
        tid?: Uint8Array;
    } & {
        tid?: Uint8Array;
    } & { [K_1 in Exclude<keyof I_1, "tid">]: never; }>(object: I_1): TaskID;
};
export declare const TaskIDs: {
    encode(message: TaskIDs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TaskIDs;
    fromJSON(object: any): TaskIDs;
    toJSON(message: TaskIDs): unknown;
    create<I extends {
        taskIds?: {
            tid?: Uint8Array;
        }[];
    } & {
        taskIds?: {
            tid?: Uint8Array;
        }[] & ({
            tid?: Uint8Array;
        } & {
            tid?: Uint8Array;
        } & { [K in Exclude<keyof I["taskIds"][number], "tid">]: never; })[] & { [K_1 in Exclude<keyof I["taskIds"], keyof {
            tid?: Uint8Array;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "taskIds">]: never; }>(base?: I): TaskIDs;
    fromPartial<I_1 extends {
        taskIds?: {
            tid?: Uint8Array;
        }[];
    } & {
        taskIds?: {
            tid?: Uint8Array;
        }[] & ({
            tid?: Uint8Array;
        } & {
            tid?: Uint8Array;
        } & { [K_3 in Exclude<keyof I_1["taskIds"][number], "tid">]: never; })[] & { [K_4 in Exclude<keyof I_1["taskIds"], keyof {
            tid?: Uint8Array;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "taskIds">]: never; }>(object: I_1): TaskIDs;
};
export declare const CoinsProto: {
    encode(message: CoinsProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinsProto;
    fromJSON(object: any): CoinsProto;
    toJSON(message: CoinsProto): unknown;
    create<I extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["coins"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "coins">]: never; }>(base?: I): CoinsProto;
    fromPartial<I_1 extends {
        coins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["coins"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "coins">]: never; }>(object: I_1): CoinsProto;
};
export declare const TxTask: {
    encode(message: TxTask, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxTask;
    fromJSON(object: any): TxTask;
    toJSON(message: TxTask): unknown;
    create<I extends {
        atxHash?: Uint8Array;
        creator?: string;
        bounty?: {
            denom?: string;
            amount?: string;
        }[];
        validTime?: Date | undefined;
        expiration?: Date | undefined;
        responses?: {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        score?: string;
        status?: TaskStatus;
    } & {
        atxHash?: Uint8Array;
        creator?: string;
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
        expiration?: Date | undefined;
        responses?: {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_2 in Exclude<keyof I["responses"][number]["reward"][number], keyof Coin>]: never; })[] & { [K_3 in Exclude<keyof I["responses"][number]["reward"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
        } & { [K_4 in Exclude<keyof I["responses"][number], keyof Response>]: never; })[] & { [K_5 in Exclude<keyof I["responses"], keyof {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>]: never; };
        score?: string;
        status?: TaskStatus;
    } & { [K_6 in Exclude<keyof I, keyof TxTask>]: never; }>(base?: I): TxTask;
    fromPartial<I_1 extends {
        atxHash?: Uint8Array;
        creator?: string;
        bounty?: {
            denom?: string;
            amount?: string;
        }[];
        validTime?: Date | undefined;
        expiration?: Date | undefined;
        responses?: {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        score?: string;
        status?: TaskStatus;
    } & {
        atxHash?: Uint8Array;
        creator?: string;
        bounty?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_7 in Exclude<keyof I_1["bounty"][number], keyof Coin>]: never; })[] & { [K_8 in Exclude<keyof I_1["bounty"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        validTime?: Date | undefined;
        expiration?: Date | undefined;
        responses?: {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_9 in Exclude<keyof I_1["responses"][number]["reward"][number], keyof Coin>]: never; })[] & { [K_10 in Exclude<keyof I_1["responses"][number]["reward"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
        } & { [K_11 in Exclude<keyof I_1["responses"][number], keyof Response>]: never; })[] & { [K_12 in Exclude<keyof I_1["responses"], keyof {
            operator?: string;
            score?: string;
            weight?: string;
            reward?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>]: never; };
        score?: string;
        status?: TaskStatus;
    } & { [K_13 in Exclude<keyof I_1, keyof TxTask>]: never; }>(object: I_1): TxTask;
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
