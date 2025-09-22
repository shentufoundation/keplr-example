import { ChainInfo, Keplr, StdFee } from "@keplr-wallet/types";
import { Any } from "../proto-types-gen/src/google/protobuf/any";
export declare const sendMsgs: (keplr: Keplr, chainInfo: ChainInfo, sender: string, proto: Any[], fee: StdFee, memo?: string) => Promise<void>;
export declare const fetchAccountInfo: (chainInfo: ChainInfo, address: string) => Promise<import("../types/account").Account>;
export declare const broadcastTxSync: (keplr: Keplr, chainId: string, tx: Uint8Array) => Promise<Uint8Array>;
