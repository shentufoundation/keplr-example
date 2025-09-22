import { ChainInfo, Key } from '@keplr-wallet/types';
export interface UseKeplrReturn {
    keplr: any;
    isKeplrAvailable: boolean;
    isLoading: boolean;
    error: string | null;
    connectToChain: (chainInfo: ChainInfo) => Promise<void>;
    getKey: (chainId: string) => Promise<Key | undefined>;
}
export declare const useKeplr: () => UseKeplrReturn;
