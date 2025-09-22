import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
import { BaseVestingAccount } from "../../vesting/v1beta1/vesting";
export declare const protobufPackage = "cosmos.auth.v1alpha1";
/** ManualVestingAccount implements the VestingAccount interface. */
export interface ManualVestingAccount {
    baseVestingAccount: BaseVestingAccount | undefined;
    vestedCoins: Coin[];
    unlocker: string;
}
export declare const ManualVestingAccount: {
    encode(message: ManualVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManualVestingAccount;
    fromJSON(object: any): ManualVestingAccount;
    toJSON(message: ManualVestingAccount): unknown;
    create<I extends {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: string;
                sequence?: string;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: string;
        };
        vestedCoins?: {
            denom?: string;
            amount?: string;
        }[];
        unlocker?: string;
    } & {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: string;
                sequence?: string;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: string;
        } & {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: string;
                sequence?: string;
            } & {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & { [K in Exclude<keyof I["baseVestingAccount"]["baseAccount"]["pubKey"], keyof import("../../../../..").Any>]: never; };
                accountNumber?: string;
                sequence?: string;
            } & { [K_1 in Exclude<keyof I["baseVestingAccount"]["baseAccount"], keyof import("../v1beta1/auth").BaseAccount>]: never; };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_2 in Exclude<keyof I["baseVestingAccount"]["originalVesting"][number], keyof Coin>]: never; })[] & { [K_3 in Exclude<keyof I["baseVestingAccount"]["originalVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_4 in Exclude<keyof I["baseVestingAccount"]["delegatedFree"][number], keyof Coin>]: never; })[] & { [K_5 in Exclude<keyof I["baseVestingAccount"]["delegatedFree"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_6 in Exclude<keyof I["baseVestingAccount"]["delegatedVesting"][number], keyof Coin>]: never; })[] & { [K_7 in Exclude<keyof I["baseVestingAccount"]["delegatedVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
            endTime?: string;
        } & { [K_8 in Exclude<keyof I["baseVestingAccount"], keyof BaseVestingAccount>]: never; };
        vestedCoins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_9 in Exclude<keyof I["vestedCoins"][number], keyof Coin>]: never; })[] & { [K_10 in Exclude<keyof I["vestedCoins"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        unlocker?: string;
    } & { [K_11 in Exclude<keyof I, keyof ManualVestingAccount>]: never; }>(base?: I): ManualVestingAccount;
    fromPartial<I_1 extends {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: string;
                sequence?: string;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: string;
        };
        vestedCoins?: {
            denom?: string;
            amount?: string;
        }[];
        unlocker?: string;
    } & {
        baseVestingAccount?: {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: string;
                sequence?: string;
            };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[];
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[];
            endTime?: string;
        } & {
            baseAccount?: {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                accountNumber?: string;
                sequence?: string;
            } & {
                address?: string;
                pubKey?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & { [K_12 in Exclude<keyof I_1["baseVestingAccount"]["baseAccount"]["pubKey"], keyof import("../../../../..").Any>]: never; };
                accountNumber?: string;
                sequence?: string;
            } & { [K_13 in Exclude<keyof I_1["baseVestingAccount"]["baseAccount"], keyof import("../v1beta1/auth").BaseAccount>]: never; };
            originalVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_14 in Exclude<keyof I_1["baseVestingAccount"]["originalVesting"][number], keyof Coin>]: never; })[] & { [K_15 in Exclude<keyof I_1["baseVestingAccount"]["originalVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
            delegatedFree?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_16 in Exclude<keyof I_1["baseVestingAccount"]["delegatedFree"][number], keyof Coin>]: never; })[] & { [K_17 in Exclude<keyof I_1["baseVestingAccount"]["delegatedFree"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
            delegatedVesting?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & { [K_18 in Exclude<keyof I_1["baseVestingAccount"]["delegatedVesting"][number], keyof Coin>]: never; })[] & { [K_19 in Exclude<keyof I_1["baseVestingAccount"]["delegatedVesting"], keyof {
                denom?: string;
                amount?: string;
            }[]>]: never; };
            endTime?: string;
        } & { [K_20 in Exclude<keyof I_1["baseVestingAccount"], keyof BaseVestingAccount>]: never; };
        vestedCoins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_21 in Exclude<keyof I_1["vestedCoins"][number], keyof Coin>]: never; })[] & { [K_22 in Exclude<keyof I_1["vestedCoins"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        unlocker?: string;
    } & { [K_23 in Exclude<keyof I_1, keyof ManualVestingAccount>]: never; }>(object: I_1): ManualVestingAccount;
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
