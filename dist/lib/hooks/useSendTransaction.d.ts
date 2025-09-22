import { ChainInfo, StdFee } from '@keplr-wallet/types';
import { Any } from '../../proto-types-gen/src/google/protobuf/any';
export interface UseSendTransactionReturn {
    isLoading: boolean;
    error: string | null;
    sendTransaction: (keplr: any, chainInfo: ChainInfo, sender: string, messages: Any[], fee: StdFee, memo?: string) => Promise<void>;
    simulateTransaction: (chainInfo: ChainInfo, sender: string, messages: Any[], fee: [{
        denom: string;
        amount: string;
    }]) => Promise<number | undefined>;
}
export declare const useSendTransaction: () => UseSendTransactionReturn;
