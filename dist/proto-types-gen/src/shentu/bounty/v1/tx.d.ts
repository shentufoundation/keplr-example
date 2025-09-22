import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { ProofStatus, SeverityLevel } from "./bounty";
export declare const protobufPackage = "shentu.bounty.v1";
/** MsgCreateProgram defines a SDK message for creating a new program. */
export interface MsgCreateProgram {
    programId: string;
    name: string;
    detail: string;
    operatorAddress: string;
}
/** MsgEditProgram defines a SDK message for editing a program. */
export interface MsgEditProgram {
    programId: string;
    name: string;
    detail: string;
    operatorAddress: string;
}
/** MsgCreateProgramResponse defines the Msg/CreateProgram response type. */
export interface MsgCreateProgramResponse {
}
/** MsgEditProgramResponse defines the Msg/EditProgram response type. */
export interface MsgEditProgramResponse {
}
export interface MsgActivateProgram {
    programId: string;
    operatorAddress: string;
}
export interface MsgActivateProgramResponse {
}
export interface MsgCloseProgram {
    programId: string;
    operatorAddress: string;
}
export interface MsgCloseProgramResponse {
}
/** MsgSubmitFinding defines a message to submit a finding. */
export interface MsgSubmitFinding {
    programId: string;
    findingId: string;
    findingHash: string;
    operatorAddress: string;
    severityLevel: SeverityLevel;
}
/** MsgSubmitFindingResponse defines the MsgSubmitFinding response type. */
export interface MsgSubmitFindingResponse {
}
/** MsgEditFinding defines a message to edit a finding. */
export interface MsgEditFinding {
    findingId: string;
    findingHash: string;
    operatorAddress: string;
    severityLevel: SeverityLevel;
    paymentHash: string;
}
/** MsgEditFindingResponse defines the MsgEditFinding response type. */
export interface MsgEditFindingResponse {
}
/** MsgConfirmFinding defines a message to confirm a finding to an existing finding. */
export interface MsgConfirmFinding {
    findingId: string;
    operatorAddress: string;
    fingerprint: string;
}
/** MsgConfirmFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgConfirmFindingResponse {
}
/** MsgActivateFinding defines a message to activate a finding to an existing finding. */
export interface MsgActivateFinding {
    findingId: string;
    operatorAddress: string;
}
/** MsgActivateFindingResponse defines the Msg/AcceptFinding response type. */
export interface MsgActivateFindingResponse {
}
/** MsgConfirmFindingPaid defines a message to confirm a finding has been paid. */
export interface MsgConfirmFindingPaid {
    findingId: string;
    operatorAddress: string;
}
/** MsgConfirmFindingPaidResponse defines the Msg/ConfirmFindingPaid response type. */
export interface MsgConfirmFindingPaidResponse {
}
/** MsgCloseFinding defines a message to close a finding. */
export interface MsgCloseFinding {
    findingId: string;
    operatorAddress: string;
}
/** MsgCloseFindingResponse defines the Msg/CloseFinding response type. */
export interface MsgCloseFindingResponse {
}
/** MsgPublishFinding defines a message to publish a finding. */
export interface MsgPublishFinding {
    findingId: string;
    title: string;
    detail: string;
    description: string;
    proofOfConcept: string;
    operatorAddress: string;
}
/** MsgPublishFindingResponse defines the MsgPublishFinding response type. */
export interface MsgPublishFindingResponse {
}
/** MsgCreateTheorem defines a message to create a new theorem. */
export interface MsgCreateTheorem {
    title: string;
    description: string;
    code: string;
    initialGrant: Coin[];
    proposer: string;
}
/** MsgCreateTheoremResponse defines the Msg/CreateTheorem response type. */
export interface MsgCreateTheoremResponse {
    theoremId: string;
}
/** MsgGrant defines a message to grant funds to a theorem. */
export interface MsgGrant {
    /** theorem_id defines the unique id of the theorem. */
    theoremId: string;
    grantor: string;
    amount: Coin[];
}
/** MsgGrantResponse defines the Msg/Grant response type. */
export interface MsgGrantResponse {
}
/** MsgSubmitProofHash defines a message to submit a proof hash. */
export interface MsgSubmitProofHash {
    theoremId: string;
    prover: string;
    proofHash: string;
    deposit: Coin[];
}
/** MsgSubmitProofHashResponse defines the Msg/SubmitProofHash response type. */
export interface MsgSubmitProofHashResponse {
}
/** MsgSubmitProofDetail defines a message to submit proof details. */
export interface MsgSubmitProofDetail {
    proofId: string;
    prover: string;
    detail: string;
}
/** MsgSubmitProofDetailResponse defines the Msg/SubmitProofDetail response type. */
export interface MsgSubmitProofDetailResponse {
}
/** MsgSubmitProofVerification defines a message to submit proof verification. */
export interface MsgSubmitProofVerification {
    proofId: string;
    status: ProofStatus;
    checker: string;
}
/** MsgSubmitProofVerificationResponse defines the Msg/SubmitProofVerification response type. */
export interface MsgSubmitProofVerificationResponse {
}
/** MsgWithdrawReward defines a message to withdraw rewards. */
export interface MsgWithdrawReward {
    address: string;
}
export interface MsgWithdrawRewardResponse {
}
export declare const MsgCreateProgram: {
    encode(message: MsgCreateProgram, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProgram;
    fromJSON(object: any): MsgCreateProgram;
    toJSON(message: MsgCreateProgram): unknown;
    create<I extends {
        programId?: string;
        name?: string;
        detail?: string;
        operatorAddress?: string;
    } & {
        programId?: string;
        name?: string;
        detail?: string;
        operatorAddress?: string;
    } & { [K in Exclude<keyof I, keyof MsgCreateProgram>]: never; }>(base?: I): MsgCreateProgram;
    fromPartial<I_1 extends {
        programId?: string;
        name?: string;
        detail?: string;
        operatorAddress?: string;
    } & {
        programId?: string;
        name?: string;
        detail?: string;
        operatorAddress?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreateProgram>]: never; }>(object: I_1): MsgCreateProgram;
};
export declare const MsgEditProgram: {
    encode(message: MsgEditProgram, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditProgram;
    fromJSON(object: any): MsgEditProgram;
    toJSON(message: MsgEditProgram): unknown;
    create<I extends {
        programId?: string;
        name?: string;
        detail?: string;
        operatorAddress?: string;
    } & {
        programId?: string;
        name?: string;
        detail?: string;
        operatorAddress?: string;
    } & { [K in Exclude<keyof I, keyof MsgEditProgram>]: never; }>(base?: I): MsgEditProgram;
    fromPartial<I_1 extends {
        programId?: string;
        name?: string;
        detail?: string;
        operatorAddress?: string;
    } & {
        programId?: string;
        name?: string;
        detail?: string;
        operatorAddress?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgEditProgram>]: never; }>(object: I_1): MsgEditProgram;
};
export declare const MsgCreateProgramResponse: {
    encode(_: MsgCreateProgramResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProgramResponse;
    fromJSON(_: any): MsgCreateProgramResponse;
    toJSON(_: MsgCreateProgramResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCreateProgramResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCreateProgramResponse;
};
export declare const MsgEditProgramResponse: {
    encode(_: MsgEditProgramResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditProgramResponse;
    fromJSON(_: any): MsgEditProgramResponse;
    toJSON(_: MsgEditProgramResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgEditProgramResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgEditProgramResponse;
};
export declare const MsgActivateProgram: {
    encode(message: MsgActivateProgram, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateProgram;
    fromJSON(object: any): MsgActivateProgram;
    toJSON(message: MsgActivateProgram): unknown;
    create<I extends {
        programId?: string;
        operatorAddress?: string;
    } & {
        programId?: string;
        operatorAddress?: string;
    } & { [K in Exclude<keyof I, keyof MsgActivateProgram>]: never; }>(base?: I): MsgActivateProgram;
    fromPartial<I_1 extends {
        programId?: string;
        operatorAddress?: string;
    } & {
        programId?: string;
        operatorAddress?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgActivateProgram>]: never; }>(object: I_1): MsgActivateProgram;
};
export declare const MsgActivateProgramResponse: {
    encode(_: MsgActivateProgramResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateProgramResponse;
    fromJSON(_: any): MsgActivateProgramResponse;
    toJSON(_: MsgActivateProgramResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgActivateProgramResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgActivateProgramResponse;
};
export declare const MsgCloseProgram: {
    encode(message: MsgCloseProgram, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseProgram;
    fromJSON(object: any): MsgCloseProgram;
    toJSON(message: MsgCloseProgram): unknown;
    create<I extends {
        programId?: string;
        operatorAddress?: string;
    } & {
        programId?: string;
        operatorAddress?: string;
    } & { [K in Exclude<keyof I, keyof MsgCloseProgram>]: never; }>(base?: I): MsgCloseProgram;
    fromPartial<I_1 extends {
        programId?: string;
        operatorAddress?: string;
    } & {
        programId?: string;
        operatorAddress?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCloseProgram>]: never; }>(object: I_1): MsgCloseProgram;
};
export declare const MsgCloseProgramResponse: {
    encode(_: MsgCloseProgramResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseProgramResponse;
    fromJSON(_: any): MsgCloseProgramResponse;
    toJSON(_: MsgCloseProgramResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCloseProgramResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCloseProgramResponse;
};
export declare const MsgSubmitFinding: {
    encode(message: MsgSubmitFinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitFinding;
    fromJSON(object: any): MsgSubmitFinding;
    toJSON(message: MsgSubmitFinding): unknown;
    create<I extends {
        programId?: string;
        findingId?: string;
        findingHash?: string;
        operatorAddress?: string;
        severityLevel?: SeverityLevel;
    } & {
        programId?: string;
        findingId?: string;
        findingHash?: string;
        operatorAddress?: string;
        severityLevel?: SeverityLevel;
    } & { [K in Exclude<keyof I, keyof MsgSubmitFinding>]: never; }>(base?: I): MsgSubmitFinding;
    fromPartial<I_1 extends {
        programId?: string;
        findingId?: string;
        findingHash?: string;
        operatorAddress?: string;
        severityLevel?: SeverityLevel;
    } & {
        programId?: string;
        findingId?: string;
        findingHash?: string;
        operatorAddress?: string;
        severityLevel?: SeverityLevel;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgSubmitFinding>]: never; }>(object: I_1): MsgSubmitFinding;
};
export declare const MsgSubmitFindingResponse: {
    encode(_: MsgSubmitFindingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitFindingResponse;
    fromJSON(_: any): MsgSubmitFindingResponse;
    toJSON(_: MsgSubmitFindingResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgSubmitFindingResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSubmitFindingResponse;
};
export declare const MsgEditFinding: {
    encode(message: MsgEditFinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditFinding;
    fromJSON(object: any): MsgEditFinding;
    toJSON(message: MsgEditFinding): unknown;
    create<I extends {
        findingId?: string;
        findingHash?: string;
        operatorAddress?: string;
        severityLevel?: SeverityLevel;
        paymentHash?: string;
    } & {
        findingId?: string;
        findingHash?: string;
        operatorAddress?: string;
        severityLevel?: SeverityLevel;
        paymentHash?: string;
    } & { [K in Exclude<keyof I, keyof MsgEditFinding>]: never; }>(base?: I): MsgEditFinding;
    fromPartial<I_1 extends {
        findingId?: string;
        findingHash?: string;
        operatorAddress?: string;
        severityLevel?: SeverityLevel;
        paymentHash?: string;
    } & {
        findingId?: string;
        findingHash?: string;
        operatorAddress?: string;
        severityLevel?: SeverityLevel;
        paymentHash?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgEditFinding>]: never; }>(object: I_1): MsgEditFinding;
};
export declare const MsgEditFindingResponse: {
    encode(_: MsgEditFindingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditFindingResponse;
    fromJSON(_: any): MsgEditFindingResponse;
    toJSON(_: MsgEditFindingResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgEditFindingResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgEditFindingResponse;
};
export declare const MsgConfirmFinding: {
    encode(message: MsgConfirmFinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmFinding;
    fromJSON(object: any): MsgConfirmFinding;
    toJSON(message: MsgConfirmFinding): unknown;
    create<I extends {
        findingId?: string;
        operatorAddress?: string;
        fingerprint?: string;
    } & {
        findingId?: string;
        operatorAddress?: string;
        fingerprint?: string;
    } & { [K in Exclude<keyof I, keyof MsgConfirmFinding>]: never; }>(base?: I): MsgConfirmFinding;
    fromPartial<I_1 extends {
        findingId?: string;
        operatorAddress?: string;
        fingerprint?: string;
    } & {
        findingId?: string;
        operatorAddress?: string;
        fingerprint?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgConfirmFinding>]: never; }>(object: I_1): MsgConfirmFinding;
};
export declare const MsgConfirmFindingResponse: {
    encode(_: MsgConfirmFindingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmFindingResponse;
    fromJSON(_: any): MsgConfirmFindingResponse;
    toJSON(_: MsgConfirmFindingResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgConfirmFindingResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgConfirmFindingResponse;
};
export declare const MsgActivateFinding: {
    encode(message: MsgActivateFinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateFinding;
    fromJSON(object: any): MsgActivateFinding;
    toJSON(message: MsgActivateFinding): unknown;
    create<I extends {
        findingId?: string;
        operatorAddress?: string;
    } & {
        findingId?: string;
        operatorAddress?: string;
    } & { [K in Exclude<keyof I, keyof MsgActivateFinding>]: never; }>(base?: I): MsgActivateFinding;
    fromPartial<I_1 extends {
        findingId?: string;
        operatorAddress?: string;
    } & {
        findingId?: string;
        operatorAddress?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgActivateFinding>]: never; }>(object: I_1): MsgActivateFinding;
};
export declare const MsgActivateFindingResponse: {
    encode(_: MsgActivateFindingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateFindingResponse;
    fromJSON(_: any): MsgActivateFindingResponse;
    toJSON(_: MsgActivateFindingResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgActivateFindingResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgActivateFindingResponse;
};
export declare const MsgConfirmFindingPaid: {
    encode(message: MsgConfirmFindingPaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmFindingPaid;
    fromJSON(object: any): MsgConfirmFindingPaid;
    toJSON(message: MsgConfirmFindingPaid): unknown;
    create<I extends {
        findingId?: string;
        operatorAddress?: string;
    } & {
        findingId?: string;
        operatorAddress?: string;
    } & { [K in Exclude<keyof I, keyof MsgConfirmFindingPaid>]: never; }>(base?: I): MsgConfirmFindingPaid;
    fromPartial<I_1 extends {
        findingId?: string;
        operatorAddress?: string;
    } & {
        findingId?: string;
        operatorAddress?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgConfirmFindingPaid>]: never; }>(object: I_1): MsgConfirmFindingPaid;
};
export declare const MsgConfirmFindingPaidResponse: {
    encode(_: MsgConfirmFindingPaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmFindingPaidResponse;
    fromJSON(_: any): MsgConfirmFindingPaidResponse;
    toJSON(_: MsgConfirmFindingPaidResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgConfirmFindingPaidResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgConfirmFindingPaidResponse;
};
export declare const MsgCloseFinding: {
    encode(message: MsgCloseFinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseFinding;
    fromJSON(object: any): MsgCloseFinding;
    toJSON(message: MsgCloseFinding): unknown;
    create<I extends {
        findingId?: string;
        operatorAddress?: string;
    } & {
        findingId?: string;
        operatorAddress?: string;
    } & { [K in Exclude<keyof I, keyof MsgCloseFinding>]: never; }>(base?: I): MsgCloseFinding;
    fromPartial<I_1 extends {
        findingId?: string;
        operatorAddress?: string;
    } & {
        findingId?: string;
        operatorAddress?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCloseFinding>]: never; }>(object: I_1): MsgCloseFinding;
};
export declare const MsgCloseFindingResponse: {
    encode(_: MsgCloseFindingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseFindingResponse;
    fromJSON(_: any): MsgCloseFindingResponse;
    toJSON(_: MsgCloseFindingResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgCloseFindingResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgCloseFindingResponse;
};
export declare const MsgPublishFinding: {
    encode(message: MsgPublishFinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPublishFinding;
    fromJSON(object: any): MsgPublishFinding;
    toJSON(message: MsgPublishFinding): unknown;
    create<I extends {
        findingId?: string;
        title?: string;
        detail?: string;
        description?: string;
        proofOfConcept?: string;
        operatorAddress?: string;
    } & {
        findingId?: string;
        title?: string;
        detail?: string;
        description?: string;
        proofOfConcept?: string;
        operatorAddress?: string;
    } & { [K in Exclude<keyof I, keyof MsgPublishFinding>]: never; }>(base?: I): MsgPublishFinding;
    fromPartial<I_1 extends {
        findingId?: string;
        title?: string;
        detail?: string;
        description?: string;
        proofOfConcept?: string;
        operatorAddress?: string;
    } & {
        findingId?: string;
        title?: string;
        detail?: string;
        description?: string;
        proofOfConcept?: string;
        operatorAddress?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgPublishFinding>]: never; }>(object: I_1): MsgPublishFinding;
};
export declare const MsgPublishFindingResponse: {
    encode(_: MsgPublishFindingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPublishFindingResponse;
    fromJSON(_: any): MsgPublishFindingResponse;
    toJSON(_: MsgPublishFindingResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgPublishFindingResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgPublishFindingResponse;
};
export declare const MsgCreateTheorem: {
    encode(message: MsgCreateTheorem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTheorem;
    fromJSON(object: any): MsgCreateTheorem;
    toJSON(message: MsgCreateTheorem): unknown;
    create<I extends {
        title?: string;
        description?: string;
        code?: string;
        initialGrant?: {
            denom?: string;
            amount?: string;
        }[];
        proposer?: string;
    } & {
        title?: string;
        description?: string;
        code?: string;
        initialGrant?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["initialGrant"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["initialGrant"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        proposer?: string;
    } & { [K_2 in Exclude<keyof I, keyof MsgCreateTheorem>]: never; }>(base?: I): MsgCreateTheorem;
    fromPartial<I_1 extends {
        title?: string;
        description?: string;
        code?: string;
        initialGrant?: {
            denom?: string;
            amount?: string;
        }[];
        proposer?: string;
    } & {
        title?: string;
        description?: string;
        code?: string;
        initialGrant?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["initialGrant"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["initialGrant"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
        proposer?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof MsgCreateTheorem>]: never; }>(object: I_1): MsgCreateTheorem;
};
export declare const MsgCreateTheoremResponse: {
    encode(message: MsgCreateTheoremResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTheoremResponse;
    fromJSON(object: any): MsgCreateTheoremResponse;
    toJSON(message: MsgCreateTheoremResponse): unknown;
    create<I extends {
        theoremId?: string;
    } & {
        theoremId?: string;
    } & { [K in Exclude<keyof I, "theoremId">]: never; }>(base?: I): MsgCreateTheoremResponse;
    fromPartial<I_1 extends {
        theoremId?: string;
    } & {
        theoremId?: string;
    } & { [K_1 in Exclude<keyof I_1, "theoremId">]: never; }>(object: I_1): MsgCreateTheoremResponse;
};
export declare const MsgGrant: {
    encode(message: MsgGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrant;
    fromJSON(object: any): MsgGrant;
    toJSON(message: MsgGrant): unknown;
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
    } & { [K_2 in Exclude<keyof I, keyof MsgGrant>]: never; }>(base?: I): MsgGrant;
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
    } & { [K_5 in Exclude<keyof I_1, keyof MsgGrant>]: never; }>(object: I_1): MsgGrant;
};
export declare const MsgGrantResponse: {
    encode(_: MsgGrantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantResponse;
    fromJSON(_: any): MsgGrantResponse;
    toJSON(_: MsgGrantResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgGrantResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgGrantResponse;
};
export declare const MsgSubmitProofHash: {
    encode(message: MsgSubmitProofHash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProofHash;
    fromJSON(object: any): MsgSubmitProofHash;
    toJSON(message: MsgSubmitProofHash): unknown;
    create<I extends {
        theoremId?: string;
        prover?: string;
        proofHash?: string;
        deposit?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        theoremId?: string;
        prover?: string;
        proofHash?: string;
        deposit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K in Exclude<keyof I["deposit"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["deposit"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof MsgSubmitProofHash>]: never; }>(base?: I): MsgSubmitProofHash;
    fromPartial<I_1 extends {
        theoremId?: string;
        prover?: string;
        proofHash?: string;
        deposit?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        theoremId?: string;
        prover?: string;
        proofHash?: string;
        deposit?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & { [K_3 in Exclude<keyof I_1["deposit"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["deposit"], keyof {
            denom?: string;
            amount?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof MsgSubmitProofHash>]: never; }>(object: I_1): MsgSubmitProofHash;
};
export declare const MsgSubmitProofHashResponse: {
    encode(_: MsgSubmitProofHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProofHashResponse;
    fromJSON(_: any): MsgSubmitProofHashResponse;
    toJSON(_: MsgSubmitProofHashResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgSubmitProofHashResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSubmitProofHashResponse;
};
export declare const MsgSubmitProofDetail: {
    encode(message: MsgSubmitProofDetail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProofDetail;
    fromJSON(object: any): MsgSubmitProofDetail;
    toJSON(message: MsgSubmitProofDetail): unknown;
    create<I extends {
        proofId?: string;
        prover?: string;
        detail?: string;
    } & {
        proofId?: string;
        prover?: string;
        detail?: string;
    } & { [K in Exclude<keyof I, keyof MsgSubmitProofDetail>]: never; }>(base?: I): MsgSubmitProofDetail;
    fromPartial<I_1 extends {
        proofId?: string;
        prover?: string;
        detail?: string;
    } & {
        proofId?: string;
        prover?: string;
        detail?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgSubmitProofDetail>]: never; }>(object: I_1): MsgSubmitProofDetail;
};
export declare const MsgSubmitProofDetailResponse: {
    encode(_: MsgSubmitProofDetailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProofDetailResponse;
    fromJSON(_: any): MsgSubmitProofDetailResponse;
    toJSON(_: MsgSubmitProofDetailResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgSubmitProofDetailResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSubmitProofDetailResponse;
};
export declare const MsgSubmitProofVerification: {
    encode(message: MsgSubmitProofVerification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProofVerification;
    fromJSON(object: any): MsgSubmitProofVerification;
    toJSON(message: MsgSubmitProofVerification): unknown;
    create<I extends {
        proofId?: string;
        status?: ProofStatus;
        checker?: string;
    } & {
        proofId?: string;
        status?: ProofStatus;
        checker?: string;
    } & { [K in Exclude<keyof I, keyof MsgSubmitProofVerification>]: never; }>(base?: I): MsgSubmitProofVerification;
    fromPartial<I_1 extends {
        proofId?: string;
        status?: ProofStatus;
        checker?: string;
    } & {
        proofId?: string;
        status?: ProofStatus;
        checker?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgSubmitProofVerification>]: never; }>(object: I_1): MsgSubmitProofVerification;
};
export declare const MsgSubmitProofVerificationResponse: {
    encode(_: MsgSubmitProofVerificationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProofVerificationResponse;
    fromJSON(_: any): MsgSubmitProofVerificationResponse;
    toJSON(_: MsgSubmitProofVerificationResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgSubmitProofVerificationResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgSubmitProofVerificationResponse;
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
/** Msg defines the staking Msg service. */
export interface Msg {
    /** CreateProgram defines a method for creating a new program. */
    CreateProgram(request: MsgCreateProgram): Promise<MsgCreateProgramResponse>;
    /** EditProgram defines a method for modifying a program. */
    EditProgram(request: MsgEditProgram): Promise<MsgEditProgramResponse>;
    /** Activate a program status by program_id */
    ActivateProgram(request: MsgActivateProgram): Promise<MsgActivateProgramResponse>;
    /** Closed a program status by program_id */
    CloseProgram(request: MsgCloseProgram): Promise<MsgCloseProgramResponse>;
    /** SubmitFinding defines a method for submitting a new finding. */
    SubmitFinding(request: MsgSubmitFinding): Promise<MsgSubmitFindingResponse>;
    /** EditFinding defines a method for editing a new finding. */
    EditFinding(request: MsgEditFinding): Promise<MsgEditFindingResponse>;
    /** ActivateFinding defines a method for activate a new finding. */
    ActivateFinding(request: MsgActivateFinding): Promise<MsgActivateFindingResponse>;
    /** ConfirmFinding defines a method for host confirm a finding. */
    ConfirmFinding(request: MsgConfirmFinding): Promise<MsgConfirmFindingResponse>;
    /** ConfirmFindingPaid defines a method for submitter confirm a finding paid */
    ConfirmFindingPaid(request: MsgConfirmFindingPaid): Promise<MsgConfirmFindingPaidResponse>;
    /** CloseFinding defines a method for submitter or certifier close a finding */
    CloseFinding(request: MsgCloseFinding): Promise<MsgCloseFindingResponse>;
    /** PublishFinding defines a method for publish a finding. */
    PublishFinding(request: MsgPublishFinding): Promise<MsgPublishFindingResponse>;
    /** CreateTheorem defines a method to create new theorem given the messages. */
    CreateTheorem(request: MsgCreateTheorem): Promise<MsgCreateTheoremResponse>;
    /** SubmitProofHash defines a method to submit a proof with hash. */
    SubmitProofHash(request: MsgSubmitProofHash): Promise<MsgSubmitProofHashResponse>;
    /** SubmitProofDetail defines a method to submit a proof with detail. */
    SubmitProofDetail(request: MsgSubmitProofDetail): Promise<MsgSubmitProofDetailResponse>;
    /** SubmitProofVerification defines a method to submit a proof result. */
    SubmitProofVerification(request: MsgSubmitProofVerification): Promise<MsgSubmitProofVerificationResponse>;
    /** Grant defines a method to grant theorem given the messages. */
    Grant(request: MsgGrant): Promise<MsgGrantResponse>;
    /** WithdrawReward defines a method to withdraw reward given the messages. */
    WithdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse>;
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
