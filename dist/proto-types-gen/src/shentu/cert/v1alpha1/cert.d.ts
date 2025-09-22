import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "shentu.cert.v1alpha1";
export declare enum CertificateType {
    CERT_TYPE_UNSPECIFIED = 0,
    CERT_TYPE_COMPILATION = 1,
    CERT_TYPE_AUDITING = 2,
    CERT_TYPE_PROOF = 3,
    CERT_TYPE_ORACLE_OPERATOR = 4,
    CERT_TYPE_SHIELD_POOL_CREATOR = 5,
    CERT_TYPE_IDENTITY = 6,
    CERT_TYPE_GENERAL = 7,
    CERT_TYPE_BOUNTY_ADMIN = 8,
    UNRECOGNIZED = -1
}
export declare function certificateTypeFromJSON(object: any): CertificateType;
export declare function certificateTypeToJSON(object: CertificateType): string;
export interface Certifier {
    address: string;
    alias: string;
    proposer: string;
    description: string;
}
export interface CompilationContent {
    compiler: string;
    bytecodeHash: string;
}
export interface Certificate {
    certificateId: string;
    content: Any | undefined;
    compilationContent: CompilationContent | undefined;
    description: string;
    certifier: string;
}
/** Library is a type for certified libraries. */
export interface Library {
    address: string;
    publisher: string;
}
export interface Compilation {
    content: string;
}
export interface Auditing {
    content: string;
}
export interface Proof {
    content: string;
}
export interface OracleOperator {
    content: string;
}
export interface ShieldPoolCreator {
    content: string;
}
export interface Identity {
    content: string;
}
export interface General {
    content: string;
}
export interface BountyAdmin {
    content: string;
}
/** Platform is a genesis type for certified platform of a validator */
export interface Platform {
    validatorPubkey: Any | undefined;
    description: string;
}
/** CertifierUpdateProposal adds or removes a certifier */
export interface CertifierUpdateProposal {
    title: string;
    proposer: string;
    alias: string;
    certifier: string;
    description: string;
    addOrRemove: boolean;
}
export interface KVPair {
    key: string;
    value: string;
}
export declare const Certifier: {
    encode(message: Certifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Certifier;
    fromJSON(object: any): Certifier;
    toJSON(message: Certifier): unknown;
    create<I extends {
        address?: string;
        alias?: string;
        proposer?: string;
        description?: string;
    } & {
        address?: string;
        alias?: string;
        proposer?: string;
        description?: string;
    } & { [K in Exclude<keyof I, keyof Certifier>]: never; }>(base?: I): Certifier;
    fromPartial<I_1 extends {
        address?: string;
        alias?: string;
        proposer?: string;
        description?: string;
    } & {
        address?: string;
        alias?: string;
        proposer?: string;
        description?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof Certifier>]: never; }>(object: I_1): Certifier;
};
export declare const CompilationContent: {
    encode(message: CompilationContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CompilationContent;
    fromJSON(object: any): CompilationContent;
    toJSON(message: CompilationContent): unknown;
    create<I extends {
        compiler?: string;
        bytecodeHash?: string;
    } & {
        compiler?: string;
        bytecodeHash?: string;
    } & { [K in Exclude<keyof I, keyof CompilationContent>]: never; }>(base?: I): CompilationContent;
    fromPartial<I_1 extends {
        compiler?: string;
        bytecodeHash?: string;
    } & {
        compiler?: string;
        bytecodeHash?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof CompilationContent>]: never; }>(object: I_1): CompilationContent;
};
export declare const Certificate: {
    encode(message: Certificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Certificate;
    fromJSON(object: any): Certificate;
    toJSON(message: Certificate): unknown;
    create<I extends {
        certificateId?: string;
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        compilationContent?: {
            compiler?: string;
            bytecodeHash?: string;
        };
        description?: string;
        certifier?: string;
    } & {
        certificateId?: string;
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K in Exclude<keyof I["content"], keyof Any>]: never; };
        compilationContent?: {
            compiler?: string;
            bytecodeHash?: string;
        } & {
            compiler?: string;
            bytecodeHash?: string;
        } & { [K_1 in Exclude<keyof I["compilationContent"], keyof CompilationContent>]: never; };
        description?: string;
        certifier?: string;
    } & { [K_2 in Exclude<keyof I, keyof Certificate>]: never; }>(base?: I): Certificate;
    fromPartial<I_1 extends {
        certificateId?: string;
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        compilationContent?: {
            compiler?: string;
            bytecodeHash?: string;
        };
        description?: string;
        certifier?: string;
    } & {
        certificateId?: string;
        content?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K_3 in Exclude<keyof I_1["content"], keyof Any>]: never; };
        compilationContent?: {
            compiler?: string;
            bytecodeHash?: string;
        } & {
            compiler?: string;
            bytecodeHash?: string;
        } & { [K_4 in Exclude<keyof I_1["compilationContent"], keyof CompilationContent>]: never; };
        description?: string;
        certifier?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof Certificate>]: never; }>(object: I_1): Certificate;
};
export declare const Library: {
    encode(message: Library, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Library;
    fromJSON(object: any): Library;
    toJSON(message: Library): unknown;
    create<I extends {
        address?: string;
        publisher?: string;
    } & {
        address?: string;
        publisher?: string;
    } & { [K in Exclude<keyof I, keyof Library>]: never; }>(base?: I): Library;
    fromPartial<I_1 extends {
        address?: string;
        publisher?: string;
    } & {
        address?: string;
        publisher?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof Library>]: never; }>(object: I_1): Library;
};
export declare const Compilation: {
    encode(message: Compilation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Compilation;
    fromJSON(object: any): Compilation;
    toJSON(message: Compilation): unknown;
    create<I extends {
        content?: string;
    } & {
        content?: string;
    } & { [K in Exclude<keyof I, "content">]: never; }>(base?: I): Compilation;
    fromPartial<I_1 extends {
        content?: string;
    } & {
        content?: string;
    } & { [K_1 in Exclude<keyof I_1, "content">]: never; }>(object: I_1): Compilation;
};
export declare const Auditing: {
    encode(message: Auditing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Auditing;
    fromJSON(object: any): Auditing;
    toJSON(message: Auditing): unknown;
    create<I extends {
        content?: string;
    } & {
        content?: string;
    } & { [K in Exclude<keyof I, "content">]: never; }>(base?: I): Auditing;
    fromPartial<I_1 extends {
        content?: string;
    } & {
        content?: string;
    } & { [K_1 in Exclude<keyof I_1, "content">]: never; }>(object: I_1): Auditing;
};
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    create<I extends {
        content?: string;
    } & {
        content?: string;
    } & { [K in Exclude<keyof I, "content">]: never; }>(base?: I): Proof;
    fromPartial<I_1 extends {
        content?: string;
    } & {
        content?: string;
    } & { [K_1 in Exclude<keyof I_1, "content">]: never; }>(object: I_1): Proof;
};
export declare const OracleOperator: {
    encode(message: OracleOperator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleOperator;
    fromJSON(object: any): OracleOperator;
    toJSON(message: OracleOperator): unknown;
    create<I extends {
        content?: string;
    } & {
        content?: string;
    } & { [K in Exclude<keyof I, "content">]: never; }>(base?: I): OracleOperator;
    fromPartial<I_1 extends {
        content?: string;
    } & {
        content?: string;
    } & { [K_1 in Exclude<keyof I_1, "content">]: never; }>(object: I_1): OracleOperator;
};
export declare const ShieldPoolCreator: {
    encode(message: ShieldPoolCreator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ShieldPoolCreator;
    fromJSON(object: any): ShieldPoolCreator;
    toJSON(message: ShieldPoolCreator): unknown;
    create<I extends {
        content?: string;
    } & {
        content?: string;
    } & { [K in Exclude<keyof I, "content">]: never; }>(base?: I): ShieldPoolCreator;
    fromPartial<I_1 extends {
        content?: string;
    } & {
        content?: string;
    } & { [K_1 in Exclude<keyof I_1, "content">]: never; }>(object: I_1): ShieldPoolCreator;
};
export declare const Identity: {
    encode(message: Identity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Identity;
    fromJSON(object: any): Identity;
    toJSON(message: Identity): unknown;
    create<I extends {
        content?: string;
    } & {
        content?: string;
    } & { [K in Exclude<keyof I, "content">]: never; }>(base?: I): Identity;
    fromPartial<I_1 extends {
        content?: string;
    } & {
        content?: string;
    } & { [K_1 in Exclude<keyof I_1, "content">]: never; }>(object: I_1): Identity;
};
export declare const General: {
    encode(message: General, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): General;
    fromJSON(object: any): General;
    toJSON(message: General): unknown;
    create<I extends {
        content?: string;
    } & {
        content?: string;
    } & { [K in Exclude<keyof I, "content">]: never; }>(base?: I): General;
    fromPartial<I_1 extends {
        content?: string;
    } & {
        content?: string;
    } & { [K_1 in Exclude<keyof I_1, "content">]: never; }>(object: I_1): General;
};
export declare const BountyAdmin: {
    encode(message: BountyAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BountyAdmin;
    fromJSON(object: any): BountyAdmin;
    toJSON(message: BountyAdmin): unknown;
    create<I extends {
        content?: string;
    } & {
        content?: string;
    } & { [K in Exclude<keyof I, "content">]: never; }>(base?: I): BountyAdmin;
    fromPartial<I_1 extends {
        content?: string;
    } & {
        content?: string;
    } & { [K_1 in Exclude<keyof I_1, "content">]: never; }>(object: I_1): BountyAdmin;
};
export declare const Platform: {
    encode(message: Platform, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Platform;
    fromJSON(object: any): Platform;
    toJSON(message: Platform): unknown;
    create<I extends {
        validatorPubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        description?: string;
    } & {
        validatorPubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K in Exclude<keyof I["validatorPubkey"], keyof Any>]: never; };
        description?: string;
    } & { [K_1 in Exclude<keyof I, keyof Platform>]: never; }>(base?: I): Platform;
    fromPartial<I_1 extends {
        validatorPubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
        description?: string;
    } & {
        validatorPubkey?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K_2 in Exclude<keyof I_1["validatorPubkey"], keyof Any>]: never; };
        description?: string;
    } & { [K_3 in Exclude<keyof I_1, keyof Platform>]: never; }>(object: I_1): Platform;
};
export declare const CertifierUpdateProposal: {
    encode(message: CertifierUpdateProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CertifierUpdateProposal;
    fromJSON(object: any): CertifierUpdateProposal;
    toJSON(message: CertifierUpdateProposal): unknown;
    create<I extends {
        title?: string;
        proposer?: string;
        alias?: string;
        certifier?: string;
        description?: string;
        addOrRemove?: boolean;
    } & {
        title?: string;
        proposer?: string;
        alias?: string;
        certifier?: string;
        description?: string;
        addOrRemove?: boolean;
    } & { [K in Exclude<keyof I, keyof CertifierUpdateProposal>]: never; }>(base?: I): CertifierUpdateProposal;
    fromPartial<I_1 extends {
        title?: string;
        proposer?: string;
        alias?: string;
        certifier?: string;
        description?: string;
        addOrRemove?: boolean;
    } & {
        title?: string;
        proposer?: string;
        alias?: string;
        certifier?: string;
        description?: string;
        addOrRemove?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof CertifierUpdateProposal>]: never; }>(object: I_1): CertifierUpdateProposal;
};
export declare const KVPair: {
    encode(message: KVPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KVPair;
    fromJSON(object: any): KVPair;
    toJSON(message: KVPair): unknown;
    create<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & { [K in Exclude<keyof I, keyof KVPair>]: never; }>(base?: I): KVPair;
    fromPartial<I_1 extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof KVPair>]: never; }>(object: I_1): KVPair;
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
