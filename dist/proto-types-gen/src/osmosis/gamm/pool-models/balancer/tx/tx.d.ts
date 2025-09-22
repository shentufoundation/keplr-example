import _m0 from "protobufjs/minimal";
import { PoolAsset, PoolParams } from "../balancerPool";
export declare const protobufPackage = "osmosis.gamm.poolmodels.balancer.v1beta1";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
    sender: string;
    poolParams: PoolParams | undefined;
    poolAssets: PoolAsset[];
    futurePoolGovernor: string;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponse {
    poolId: string;
}
export declare const MsgCreateBalancerPool: {
    encode(message: MsgCreateBalancerPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPool;
    fromJSON(object: any): MsgCreateBalancerPool;
    toJSON(message: MsgCreateBalancerPool): unknown;
    create<I extends {
        sender?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
            smoothWeightChangeParams?: {
                startTime?: Date;
                duration?: {
                    seconds?: string;
                    nanos?: number;
                };
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
            };
        };
        poolAssets?: {
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        }[];
        futurePoolGovernor?: string;
    } & {
        sender?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
            smoothWeightChangeParams?: {
                startTime?: Date;
                duration?: {
                    seconds?: string;
                    nanos?: number;
                };
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
            };
        } & {
            swapFee?: string;
            exitFee?: string;
            smoothWeightChangeParams?: {
                startTime?: Date;
                duration?: {
                    seconds?: string;
                    nanos?: number;
                };
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
            } & {
                startTime?: Date;
                duration?: {
                    seconds?: string;
                    nanos?: number;
                } & {
                    seconds?: string;
                    nanos?: number;
                } & { [K in Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["duration"], keyof import("../../../../../google/protobuf/duration").Duration>]: never; };
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[] & ({
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                } & {
                    token?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & { [K_1 in Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number]["token"], keyof import("../../../../../..").Coin>]: never; };
                    weight?: string;
                } & { [K_2 in Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number], keyof PoolAsset>]: never; })[] & { [K_3 in Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"], keyof {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[]>]: never; };
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[] & ({
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                } & {
                    token?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & { [K_4 in Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number]["token"], keyof import("../../../../../..").Coin>]: never; };
                    weight?: string;
                } & { [K_5 in Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number], keyof PoolAsset>]: never; })[] & { [K_6 in Exclude<keyof I["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"], keyof {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[]>]: never; };
            } & { [K_7 in Exclude<keyof I["poolParams"]["smoothWeightChangeParams"], keyof import("../balancerPool").SmoothWeightChangeParams>]: never; };
        } & { [K_8 in Exclude<keyof I["poolParams"], keyof PoolParams>]: never; };
        poolAssets?: {
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        }[] & ({
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        } & {
            token?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_9 in Exclude<keyof I["poolAssets"][number]["token"], keyof import("../../../../../..").Coin>]: never; };
            weight?: string;
        } & { [K_10 in Exclude<keyof I["poolAssets"][number], keyof PoolAsset>]: never; })[] & { [K_11 in Exclude<keyof I["poolAssets"], keyof {
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        }[]>]: never; };
        futurePoolGovernor?: string;
    } & { [K_12 in Exclude<keyof I, keyof MsgCreateBalancerPool>]: never; }>(base?: I): MsgCreateBalancerPool;
    fromPartial<I_1 extends {
        sender?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
            smoothWeightChangeParams?: {
                startTime?: Date;
                duration?: {
                    seconds?: string;
                    nanos?: number;
                };
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
            };
        };
        poolAssets?: {
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        }[];
        futurePoolGovernor?: string;
    } & {
        sender?: string;
        poolParams?: {
            swapFee?: string;
            exitFee?: string;
            smoothWeightChangeParams?: {
                startTime?: Date;
                duration?: {
                    seconds?: string;
                    nanos?: number;
                };
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
            };
        } & {
            swapFee?: string;
            exitFee?: string;
            smoothWeightChangeParams?: {
                startTime?: Date;
                duration?: {
                    seconds?: string;
                    nanos?: number;
                };
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[];
            } & {
                startTime?: Date;
                duration?: {
                    seconds?: string;
                    nanos?: number;
                } & {
                    seconds?: string;
                    nanos?: number;
                } & { [K_13 in Exclude<keyof I_1["poolParams"]["smoothWeightChangeParams"]["duration"], keyof import("../../../../../google/protobuf/duration").Duration>]: never; };
                initialPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[] & ({
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                } & {
                    token?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & { [K_14 in Exclude<keyof I_1["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number]["token"], keyof import("../../../../../..").Coin>]: never; };
                    weight?: string;
                } & { [K_15 in Exclude<keyof I_1["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"][number], keyof PoolAsset>]: never; })[] & { [K_16 in Exclude<keyof I_1["poolParams"]["smoothWeightChangeParams"]["initialPoolWeights"], keyof {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[]>]: never; };
                targetPoolWeights?: {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[] & ({
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                } & {
                    token?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & { [K_17 in Exclude<keyof I_1["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number]["token"], keyof import("../../../../../..").Coin>]: never; };
                    weight?: string;
                } & { [K_18 in Exclude<keyof I_1["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"][number], keyof PoolAsset>]: never; })[] & { [K_19 in Exclude<keyof I_1["poolParams"]["smoothWeightChangeParams"]["targetPoolWeights"], keyof {
                    token?: {
                        denom?: string;
                        amount?: string;
                    };
                    weight?: string;
                }[]>]: never; };
            } & { [K_20 in Exclude<keyof I_1["poolParams"]["smoothWeightChangeParams"], keyof import("../balancerPool").SmoothWeightChangeParams>]: never; };
        } & { [K_21 in Exclude<keyof I_1["poolParams"], keyof PoolParams>]: never; };
        poolAssets?: {
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        }[] & ({
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        } & {
            token?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_22 in Exclude<keyof I_1["poolAssets"][number]["token"], keyof import("../../../../../..").Coin>]: never; };
            weight?: string;
        } & { [K_23 in Exclude<keyof I_1["poolAssets"][number], keyof PoolAsset>]: never; })[] & { [K_24 in Exclude<keyof I_1["poolAssets"], keyof {
            token?: {
                denom?: string;
                amount?: string;
            };
            weight?: string;
        }[]>]: never; };
        futurePoolGovernor?: string;
    } & { [K_25 in Exclude<keyof I_1, keyof MsgCreateBalancerPool>]: never; }>(object: I_1): MsgCreateBalancerPool;
};
export declare const MsgCreateBalancerPoolResponse: {
    encode(message: MsgCreateBalancerPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBalancerPoolResponse;
    fromJSON(object: any): MsgCreateBalancerPoolResponse;
    toJSON(message: MsgCreateBalancerPoolResponse): unknown;
    create<I extends {
        poolId?: string;
    } & {
        poolId?: string;
    } & { [K in Exclude<keyof I, "poolId">]: never; }>(base?: I): MsgCreateBalancerPoolResponse;
    fromPartial<I_1 extends {
        poolId?: string;
    } & {
        poolId?: string;
    } & { [K_1 in Exclude<keyof I_1, "poolId">]: never; }>(object: I_1): MsgCreateBalancerPoolResponse;
};
export interface Msg {
    CreateBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
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
