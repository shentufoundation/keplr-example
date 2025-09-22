import { ChainInfo } from '@keplr-wallet/types';
export interface UseBalanceReturn {
    balance: string;
    isLoading: boolean;
    error: string | null;
    getBalance: (chainInfo: ChainInfo, address: string, denom: string) => Promise<void>;
}
export declare const useBalance: () => UseBalanceReturn;
