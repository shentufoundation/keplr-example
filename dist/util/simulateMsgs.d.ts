import { ChainInfo } from "@keplr-wallet/types";
import { Any } from "../proto-types-gen/src/google/protobuf/any";
export declare const simulateMsgs: (chainInfo: ChainInfo, sender: string, proto: Any[], fee: [
    {
        denom: string;
        amount: string;
    }
], memo?: string) => Promise<number>;
