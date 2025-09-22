import _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "shentu.bounty.v1";
export declare enum ProgramStatus {
    PROGRAM_STATUS_INACTIVE = 0,
    PROGRAM_STATUS_ACTIVE = 1,
    PROGRAM_STATUS_CLOSED = 2,
    UNRECOGNIZED = -1
}
export declare function programStatusFromJSON(object: any): ProgramStatus;
export declare function programStatusToJSON(object: ProgramStatus): string;
export declare enum SeverityLevel {
    SEVERITY_LEVEL_UNSPECIFIED = 0,
    SEVERITY_LEVEL_CRITICAL = 1,
    SEVERITY_LEVEL_HIGH = 2,
    SEVERITY_LEVEL_MEDIUM = 3,
    SEVERITY_LEVEL_LOW = 4,
    SEVERITY_LEVEL_INFORMATIONAL = 5,
    UNRECOGNIZED = -1
}
export declare function severityLevelFromJSON(object: any): SeverityLevel;
export declare function severityLevelToJSON(object: SeverityLevel): string;
export declare enum FindingStatus {
    FINDING_STATUS_SUBMITTED = 0,
    FINDING_STATUS_ACTIVE = 1,
    FINDING_STATUS_CONFIRMED = 2,
    FINDING_STATUS_PAID = 3,
    FINDING_STATUS_CLOSED = 4,
    UNRECOGNIZED = -1
}
export declare function findingStatusFromJSON(object: any): FindingStatus;
export declare function findingStatusToJSON(object: FindingStatus): string;
export declare enum TheoremStatus {
    /** THEOREM_STATUS_UNSPECIFIED - default theorem status. */
    THEOREM_STATUS_UNSPECIFIED = 0,
    /** THEOREM_STATUS_PROOF_PERIOD - theorem status during the proof period. */
    THEOREM_STATUS_PROOF_PERIOD = 1,
    /** THEOREM_STATUS_PASSED - theorem that has passed. */
    THEOREM_STATUS_PASSED = 2,
    /** THEOREM_STATUS_CLOSED - theorem that has closed. */
    THEOREM_STATUS_CLOSED = 3,
    UNRECOGNIZED = -1
}
export declare function theoremStatusFromJSON(object: any): TheoremStatus;
export declare function theoremStatusToJSON(object: TheoremStatus): string;
export declare enum ProofStatus {
    /** PROOF_STATUS_UNSPECIFIED - default proof status. */
    PROOF_STATUS_UNSPECIFIED = 0,
    /** PROOF_STATUS_HASH_LOCK_PERIOD - proof status during the creation period. */
    PROOF_STATUS_HASH_LOCK_PERIOD = 1,
    /** PROOF_STATUS_HASH_LOCK_TIMEOUT - proof status during the upload proof detail period timeout. */
    PROOF_STATUS_HASH_LOCK_TIMEOUT = 2,
    /** PROOF_STATUS_HASH_DETAIL_PERIOD - proof status during the upload proof detail period. */
    PROOF_STATUS_HASH_DETAIL_PERIOD = 3,
    /** PROOF_STATUS_PASSED - theorem that has passed. */
    PROOF_STATUS_PASSED = 4,
    /** PROOF_STATUS_FAILED - theorem that has failed. */
    PROOF_STATUS_FAILED = 5,
    UNRECOGNIZED = -1
}
export declare function proofStatusFromJSON(object: any): ProofStatus;
export declare function proofStatusToJSON(object: ProofStatus): string;
export interface Program {
    programId: string;
    name: string;
    /** JSON by ProgramDetail */
    detail: string;
    adminAddress: string;
    status: ProgramStatus;
    createTime: Date | undefined;
}
export interface Finding {
    programId: string;
    findingId: string;
    title: string;
    description: string;
    proofOfConcept: string;
    /** hash(description + proof_of_concept + submitter) */
    findingHash: string;
    submitterAddress: string;
    severityLevel: SeverityLevel;
    status: FindingStatus;
    /** JSON by FindingDetail */
    detail: string;
    paymentHash: string;
    createTime: Date | undefined;
}
export interface ProgramFingerprint {
    programId: string;
    name: string;
    /** JSON by ProgramDetail */
    detail: string;
    adminAddress: string;
    status: ProgramStatus;
}
export interface FindingFingerprint {
    programId: string;
    findingId: string;
    title: string;
    /** hash(description + proof_of_concept + submitter) */
    findingHash: string;
    severityLevel: SeverityLevel;
    status: FindingStatus;
    /** JSON by FindingDetail */
    detail: string;
    paymentHash: string;
}
/** Theorem defines the core field members of an openmath theorem. */
export interface Theorem {
    /** id defines the unique id of the theorem. */
    id: string;
    /** title is the title of the theorem */
    title: string;
    /** description is the description of the theorem */
    description: string;
    /** code is a summary of the theorem */
    code: string;
    /** status defines the theorem status. */
    status: TheoremStatus;
    /** submit_time is the time of theorem submission. */
    submitTime: Date | undefined;
    endTime: Date | undefined;
    /** total_grant is the total grant on the theorem. */
    totalGrant: Coin[];
    /** proposer is the address of the theorem submitter */
    proposer: string;
}
export interface Proof {
    theoremId: string;
    /** id defines the unique id of the proof. */
    id: string;
    /** detail is the proof data attached to the theorem stored in ipfs */
    detail: string;
    /** status defines the theorem status. */
    status: ProofStatus;
    /** submit_time is the time of proof submission. */
    submitTime: Date | undefined;
    /** end_time is the time of proof timeout. */
    endTime: Date | undefined;
    /** prover is the address of the proof submitter */
    prover: string;
    /** deposit is the amount deposited by the prover */
    Deposit: Coin[];
}
export interface ProofHash {
    theoremId: string;
    detail: string;
    prover: string;
}
/** Grant defines an amount granted by a grantor to an active theorem. */
export interface Grant {
    /** theorem_id defines the unique id of the theorem. */
    theoremId: string;
    /** grantor defines the grant addresses. */
    grantor: string;
    /** amount to be deposited by the grantor. */
    amount: Coin[];
}
/** Deposit defines an amount deposited by a depositor for a proof. */
export interface Deposit {
    /** proof_id defines the unique id of the proof. */
    proofId: string;
    /** depositor defines the deposit addresses. */
    depositor: string;
    /** amount to be deposited by the depositor. */
    amount: Coin[];
}
export interface Params {
    /** Minimum grant for a theorem to enter the proof period. */
    minGrant: Coin[];
    /** Minimum deposit for a proof to enter the proof_hash_lock period. */
    minDeposit: Coin[];
    /** Duration of the theorem proof period. Initial value: 2 weeks. */
    theoremMaxProofPeriod: Duration | undefined;
    /** Duration of the proof max lock period. 10min */
    proofMaxLockPeriod: Duration | undefined;
    /** rate is the checker rate charged to theorem */
    checkerRate: string;
}
export interface Reward {
    address: string;
    reward: DecCoin[];
}
export declare const Program: {
    encode(message: Program, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Program;
    fromJSON(object: any): Program;
    toJSON(message: Program): unknown;
    create<I extends {
        programId?: string;
        name?: string;
        detail?: string;
        adminAddress?: string;
        status?: ProgramStatus;
        createTime?: Date | undefined;
    } & {
        programId?: string;
        name?: string;
        detail?: string;
        adminAddress?: string;
        status?: ProgramStatus;
        createTime?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof Program>]: never; }>(base?: I): Program;
    fromPartial<I_1 extends {
        programId?: string;
        name?: string;
        detail?: string;
        adminAddress?: string;
        status?: ProgramStatus;
        createTime?: Date | undefined;
    } & {
        programId?: string;
        name?: string;
        detail?: string;
        adminAddress?: string;
        status?: ProgramStatus;
        createTime?: Date | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Program>]: never; }>(object: I_1): Program;
};
export declare const Finding: {
    encode(message: Finding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Finding;
    fromJSON(object: any): Finding;
    toJSON(message: Finding): unknown;
    create<I extends {
        programId?: string;
        findingId?: string;
        title?: string;
        description?: string;
        proofOfConcept?: string;
        findingHash?: string;
        submitterAddress?: string;
        severityLevel?: SeverityLevel;
        status?: FindingStatus;
        detail?: string;
        paymentHash?: string;
        createTime?: Date | undefined;
    } & {
        programId?: string;
        findingId?: string;
        title?: string;
        description?: string;
        proofOfConcept?: string;
        findingHash?: string;
        submitterAddress?: string;
        severityLevel?: SeverityLevel;
        status?: FindingStatus;
        detail?: string;
        paymentHash?: string;
        createTime?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof Finding>]: never; }>(base?: I): Finding;
    fromPartial<I_1 extends {
        programId?: string;
        findingId?: string;
        title?: string;
        description?: string;
        proofOfConcept?: string;
        findingHash?: string;
        submitterAddress?: string;
        severityLevel?: SeverityLevel;
        status?: FindingStatus;
        detail?: string;
        paymentHash?: string;
        createTime?: Date | undefined;
    } & {
        programId?: string;
        findingId?: string;
        title?: string;
        description?: string;
        proofOfConcept?: string;
        findingHash?: string;
        submitterAddress?: string;
        severityLevel?: SeverityLevel;
        status?: FindingStatus;
        detail?: string;
        paymentHash?: string;
        createTime?: Date | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Finding>]: never; }>(object: I_1): Finding;
};
export declare const ProgramFingerprint: {
    encode(message: ProgramFingerprint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProgramFingerprint;
    fromJSON(object: any): ProgramFingerprint;
    toJSON(message: ProgramFingerprint): unknown;
    create<I extends {
        programId?: string;
        name?: string;
        detail?: string;
        adminAddress?: string;
        status?: ProgramStatus;
    } & {
        programId?: string;
        name?: string;
        detail?: string;
        adminAddress?: string;
        status?: ProgramStatus;
    } & { [K in Exclude<keyof I, keyof ProgramFingerprint>]: never; }>(base?: I): ProgramFingerprint;
    fromPartial<I_1 extends {
        programId?: string;
        name?: string;
        detail?: string;
        adminAddress?: string;
        status?: ProgramStatus;
    } & {
        programId?: string;
        name?: string;
        detail?: string;
        adminAddress?: string;
        status?: ProgramStatus;
    } & { [K_1 in Exclude<keyof I_1, keyof ProgramFingerprint>]: never; }>(object: I_1): ProgramFingerprint;
};
export declare const FindingFingerprint: {
    encode(message: FindingFingerprint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FindingFingerprint;
    fromJSON(object: any): FindingFingerprint;
    toJSON(message: FindingFingerprint): unknown;
    create<I extends {
        programId?: string;
        findingId?: string;
        title?: string;
        findingHash?: string;
        severityLevel?: SeverityLevel;
        status?: FindingStatus;
        detail?: string;
        paymentHash?: string;
    } & {
        programId?: string;
        findingId?: string;
        title?: string;
        findingHash?: string;
        severityLevel?: SeverityLevel;
        status?: FindingStatus;
        detail?: string;
        paymentHash?: string;
    } & { [K in Exclude<keyof I, keyof FindingFingerprint>]: never; }>(base?: I): FindingFingerprint;
    fromPartial<I_1 extends {
        programId?: string;
        findingId?: string;
        title?: string;
        findingHash?: string;
        severityLevel?: SeverityLevel;
        status?: FindingStatus;
        detail?: string;
        paymentHash?: string;
    } & {
        programId?: string;
        findingId?: string;
        title?: string;
        findingHash?: string;
        severityLevel?: SeverityLevel;
        status?: FindingStatus;
        detail?: string;
        paymentHash?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof FindingFingerprint>]: never; }>(object: I_1): FindingFingerprint;
};
export declare const Theorem: {
    encode(message: Theorem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Theorem;
    fromJSON(object: any): Theorem;
    toJSON(message: Theorem): unknown;
    create<I extends {
        id?: string;
        title?: string;
        description?: string;
        code?: string;
        status?: TheoremStatus;
        submitTime?: Date | undefined;
        endTime?: Date | undefined;
        totalGrant?: {
            denom?: string;
            amount?: string;
        }[];
        proposer?: string;
    } & {
        id?: string;
        title?: string;
        description?: string;
        code?: string;
        status?: TheoremStatus;
        submitTime?: Date | undefined;
        endTime?: Date | undefined;
        totalGrant?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["totalGrant"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["totalGrant"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        proposer?: string;
    } & { [K_2 in Exclude<keyof I, keyof Theorem>]: never; }>(base?: I): Theorem;
    fromPartial<I_1 extends {
        id?: string;
        title?: string;
        description?: string;
        code?: string;
        status?: TheoremStatus;
        submitTime?: Date | undefined;
        endTime?: Date | undefined;
        totalGrant?: {
            denom?: string;
            amount?: string;
        }[];
        proposer?: string;
    } & {
        id?: string;
        title?: string;
        description?: string;
        code?: string;
        status?: TheoremStatus;
        submitTime?: Date | undefined;
        endTime?: Date | undefined;
        totalGrant?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["totalGrant"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["totalGrant"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        proposer?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof Theorem>]: never; }>(object: I_1): Theorem;
};
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    create<I extends {
        theoremId?: string;
        id?: string;
        detail?: string;
        status?: ProofStatus;
        submitTime?: Date | undefined;
        endTime?: Date | undefined;
        prover?: string;
        Deposit?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        theoremId?: string;
        id?: string;
        detail?: string;
        status?: ProofStatus;
        submitTime?: Date | undefined;
        endTime?: Date | undefined;
        prover?: string;
        Deposit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["Deposit"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["Deposit"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof Proof>]: never; }>(base?: I): Proof;
    fromPartial<I_1 extends {
        theoremId?: string;
        id?: string;
        detail?: string;
        status?: ProofStatus;
        submitTime?: Date | undefined;
        endTime?: Date | undefined;
        prover?: string;
        Deposit?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        theoremId?: string;
        id?: string;
        detail?: string;
        status?: ProofStatus;
        submitTime?: Date | undefined;
        endTime?: Date | undefined;
        prover?: string;
        Deposit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["Deposit"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["Deposit"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof Proof>]: never; }>(object: I_1): Proof;
};
export declare const ProofHash: {
    encode(message: ProofHash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofHash;
    fromJSON(object: any): ProofHash;
    toJSON(message: ProofHash): unknown;
    create<I extends {
        theoremId?: string;
        detail?: string;
        prover?: string;
    } & {
        theoremId?: string;
        detail?: string;
        prover?: string;
    } & { [K in Exclude<keyof I, keyof ProofHash>]: never; }>(base?: I): ProofHash;
    fromPartial<I_1 extends {
        theoremId?: string;
        detail?: string;
        prover?: string;
    } & {
        theoremId?: string;
        detail?: string;
        prover?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof ProofHash>]: never; }>(object: I_1): ProofHash;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    create<I extends {
        theoremId?: string;
        grantor?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        theoremId?: string;
        grantor?: string;
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
    } & { [K_2 in Exclude<keyof I, keyof Grant>]: never; }>(base?: I): Grant;
    fromPartial<I_1 extends {
        theoremId?: string;
        grantor?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        theoremId?: string;
        grantor?: string;
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
    } & { [K_5 in Exclude<keyof I_1, keyof Grant>]: never; }>(object: I_1): Grant;
};
export declare const Deposit: {
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
    fromJSON(object: any): Deposit;
    toJSON(message: Deposit): unknown;
    create<I extends {
        proofId?: string;
        depositor?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        proofId?: string;
        depositor?: string;
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
    } & { [K_2 in Exclude<keyof I, keyof Deposit>]: never; }>(base?: I): Deposit;
    fromPartial<I_1 extends {
        proofId?: string;
        depositor?: string;
        amount?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        proofId?: string;
        depositor?: string;
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
    } & { [K_5 in Exclude<keyof I_1, keyof Deposit>]: never; }>(object: I_1): Deposit;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create<I extends {
        minGrant?: {
            denom?: string;
            amount?: string;
        }[];
        minDeposit?: {
            denom?: string;
            amount?: string;
        }[];
        theoremMaxProofPeriod?: {
            seconds?: string;
            nanos?: number;
        };
        proofMaxLockPeriod?: {
            seconds?: string;
            nanos?: number;
        };
        checkerRate?: string;
    } & {
        minGrant?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["minGrant"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["minGrant"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        minDeposit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_2 in Exclude<keyof I["minDeposit"][number], keyof Coin>]: never; })[] & { [K_3 in Exclude<keyof I["minDeposit"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        theoremMaxProofPeriod?: {
            seconds?: string;
            nanos?: number;
        } & {
            seconds?: string;
            nanos?: number;
        } & { [K_4 in Exclude<keyof I["theoremMaxProofPeriod"], keyof Duration>]: never; };
        proofMaxLockPeriod?: {
            seconds?: string;
            nanos?: number;
        } & {
            seconds?: string;
            nanos?: number;
        } & { [K_5 in Exclude<keyof I["proofMaxLockPeriod"], keyof Duration>]: never; };
        checkerRate?: string;
    } & { [K_6 in Exclude<keyof I, keyof Params>]: never; }>(base?: I): Params;
    fromPartial<I_1 extends {
        minGrant?: {
            denom?: string;
            amount?: string;
        }[];
        minDeposit?: {
            denom?: string;
            amount?: string;
        }[];
        theoremMaxProofPeriod?: {
            seconds?: string;
            nanos?: number;
        };
        proofMaxLockPeriod?: {
            seconds?: string;
            nanos?: number;
        };
        checkerRate?: string;
    } & {
        minGrant?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_7 in Exclude<keyof I_1["minGrant"][number], keyof Coin>]: never; })[] & { [K_8 in Exclude<keyof I_1["minGrant"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        minDeposit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_9 in Exclude<keyof I_1["minDeposit"][number], keyof Coin>]: never; })[] & { [K_10 in Exclude<keyof I_1["minDeposit"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        theoremMaxProofPeriod?: {
            seconds?: string;
            nanos?: number;
        } & {
            seconds?: string;
            nanos?: number;
        } & { [K_11 in Exclude<keyof I_1["theoremMaxProofPeriod"], keyof Duration>]: never; };
        proofMaxLockPeriod?: {
            seconds?: string;
            nanos?: number;
        } & {
            seconds?: string;
            nanos?: number;
        } & { [K_12 in Exclude<keyof I_1["proofMaxLockPeriod"], keyof Duration>]: never; };
        checkerRate?: string;
    } & { [K_13 in Exclude<keyof I_1, keyof Params>]: never; }>(object: I_1): Params;
};
export declare const Reward: {
    encode(message: Reward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reward;
    fromJSON(object: any): Reward;
    toJSON(message: Reward): unknown;
    create<I extends {
        address?: string;
        reward?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        address?: string;
        reward?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["reward"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["reward"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof Reward>]: never; }>(base?: I): Reward;
    fromPartial<I_1 extends {
        address?: string;
        reward?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        address?: string;
        reward?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["reward"][number], keyof DecCoin>]: never; })[] & { [K_4 in Exclude<keyof I_1["reward"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof Reward>]: never; }>(object: I_1): Reward;
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
