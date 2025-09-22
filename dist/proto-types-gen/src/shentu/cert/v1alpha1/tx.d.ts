import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "shentu.cert.v1alpha1";
/** MsgProposeCertifier is the message for proposing new certifier. */
export interface MsgProposeCertifier {
    proposer: string;
    alias: string;
    certifier: string;
    description: string;
}
export interface MsgProposeCertifierResponse {
}
/** MsgCertifyGeneral is the message for issuing a general certificate. */
export interface MsgIssueCertificate {
    content: Any | undefined;
    compiler: string;
    bytecodeHash: string;
    description: string;
    certifier: string;
}
export interface MsgIssueCertificateResponse {
}
/** MsgRevokeCertificate returns a certificate revoking operation. */
export interface MsgRevokeCertificate {
    revoker: string;
    id: string;
    description: string;
}
export interface MsgRevokeCertificateResponse {
}
/** MsgCertifyPlatform is the message for certifying a validator's host platform. */
export interface MsgCertifyPlatform {
    certifier: string;
    validatorPubkey: Any | undefined;
    platform: string;
}
export interface MsgCertifyPlatformResponse {
}
export declare const MsgProposeCertifier: {
    encode(message: MsgProposeCertifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeCertifier;
    fromJSON(object: any): MsgProposeCertifier;
    toJSON(message: MsgProposeCertifier): unknown;
    create<I extends {
        proposer?: string;
        alias?: string;
        certifier?: string;
        description?: string;
    } & {
        proposer?: string;
        alias?: string;
        certifier?: string;
        description?: string;
    } & { [K in Exclude<keyof I, keyof MsgProposeCertifier>]: never; }>(base?: I): MsgProposeCertifier;
    fromPartial<I_1 extends {
        proposer?: string;
        alias?: string;
        certifier?: string;
        description?: string;
    } & {
        proposer?: string;
        alias?: string;
        certifier?: string;
        description?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgProposeCertifier>]: never; }>(object: I_1): MsgProposeCertifier;
};
export declare const MsgProposeCertifierResponse: {
    encode(_: MsgProposeCertifierResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeCertifierResponse;
    fromJSON(_: any): MsgProposeCertifierResponse;
    toJSON(_: MsgProposeCertifierResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgProposeCertifierResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgProposeCertifierResponse;
};
export declare const MsgIssueCertificate: {
    encode(message: MsgIssueCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCertificate;
    fromJSON(object: any): MsgIssueCertificate;
    toJSON(message: MsgIssueCertificate): unknown;
    create<I extends {
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        compiler?: string;
        bytecodeHash?: string;
        description?: string;
        certifier?: string;
    } & {
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K in Exclude<keyof I["content"], keyof Any>]: never; };
        compiler?: string;
        bytecodeHash?: string;
        description?: string;
        certifier?: string;
    } & { [K_1 in Exclude<keyof I, keyof MsgIssueCertificate>]: never; }>(base?: I): MsgIssueCertificate;
    fromPartial<I_1 extends {
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        compiler?: string;
        bytecodeHash?: string;
        description?: string;
        certifier?: string;
    } & {
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["content"], keyof Any>]: never; };
        compiler?: string;
        bytecodeHash?: string;
        description?: string;
        certifier?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof MsgIssueCertificate>]: never; }>(object: I_1): MsgIssueCertificate;
};
export declare const MsgIssueCertificateResponse: {
    encode(_: MsgIssueCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueCertificateResponse;
    fromJSON(_: any): MsgIssueCertificateResponse;
    toJSON(_: MsgIssueCertificateResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgIssueCertificateResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgIssueCertificateResponse;
};
export declare const MsgRevokeCertificate: {
    encode(message: MsgRevokeCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificate;
    fromJSON(object: any): MsgRevokeCertificate;
    toJSON(message: MsgRevokeCertificate): unknown;
    create<I extends {
        revoker?: string;
        id?: string;
        description?: string;
    } & {
        revoker?: string;
        id?: string;
        description?: string;
    } & { [K in Exclude<keyof I, keyof MsgRevokeCertificate>]: never; }>(base?: I): MsgRevokeCertificate;
    fromPartial<I_1 extends {
        revoker?: string;
        id?: string;
        description?: string;
    } & {
        revoker?: string;
        id?: string;
        description?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgRevokeCertificate>]: never; }>(object: I_1): MsgRevokeCertificate;
};
export declare const MsgRevokeCertificateResponse: {
    encode(_: MsgRevokeCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeCertificateResponse;
    fromJSON(_: any): MsgRevokeCertificateResponse;
    toJSON(_: MsgRevokeCertificateResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgRevokeCertificateResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgRevokeCertificateResponse;
};
export declare const MsgCertifyPlatform: {
    encode(message: MsgCertifyPlatform, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCertifyPlatform;
    fromJSON(object: any): MsgCertifyPlatform;
    toJSON(message: MsgCertifyPlatform): unknown;
    create<I extends {
        certifier?: string;
        validatorPubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        platform?: string;
    } & {
        certifier?: string;
        validatorPubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K in Exclude<keyof I["validatorPubkey"], keyof Any>]: never; };
        platform?: string;
    } & { [K_1 in Exclude<keyof I, keyof MsgCertifyPlatform>]: never; }>(base?: I): MsgCertifyPlatform;
    fromPartial<I_1 extends {
        certifier?: string;
        validatorPubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        platform?: string;
    } & {
        certifier?: string;
        validatorPubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["validatorPubkey"], keyof Any>]: never; };
        platform?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof MsgCertifyPlatform>]: never; }>(object: I_1): MsgCertifyPlatform;
};
export declare const MsgCertifyPlatformResponse: {
    encode(_: MsgCertifyPlatformResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCertifyPlatformResponse;
    fromJSON(_: any): MsgCertifyPlatformResponse;
    toJSON(_: MsgCertifyPlatformResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCertifyPlatformResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCertifyPlatformResponse;
};
/** Msg defines the shield Msg service. */
export interface Msg {
    ProposeCertifier(request: MsgProposeCertifier): Promise<MsgProposeCertifierResponse>;
    IssueCertificate(request: MsgIssueCertificate): Promise<MsgIssueCertificateResponse>;
    RevokeCertificate(request: MsgRevokeCertificate): Promise<MsgRevokeCertificateResponse>;
    CertifyPlatform(request: MsgCertifyPlatform): Promise<MsgCertifyPlatformResponse>;
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
