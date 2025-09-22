import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "shentu.shield.v1alpha1";
/** MsgWithdrawForeignRewards defines attribute of withdraw rewards transaction. */
export interface MsgWithdrawRewards {
    from: string;
}
export interface MsgWithdrawRewardsResponse {
}
export declare const MsgWithdrawRewards: {
    encode(message: MsgWithdrawRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewards;
    fromJSON(object: any): MsgWithdrawRewards;
    toJSON(message: MsgWithdrawRewards): unknown;
    create<I extends {
        from?: string;
    } & {
        from?: string;
    } & { [K in Exclude<keyof I, "from">]: never; }>(base?: I): MsgWithdrawRewards;
    fromPartial<I_1 extends {
        from?: string;
    } & {
        from?: string;
    } & { [K_1 in Exclude<keyof I_1, "from">]: never; }>(object: I_1): MsgWithdrawRewards;
};
export declare const MsgWithdrawRewardsResponse: {
    encode(_: MsgWithdrawRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewardsResponse;
    fromJSON(_: any): MsgWithdrawRewardsResponse;
    toJSON(_: MsgWithdrawRewardsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgWithdrawRewardsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgWithdrawRewardsResponse;
};
/** Msg defines the shield Msg service. */
export interface Msg {
    WithdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse>;
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
