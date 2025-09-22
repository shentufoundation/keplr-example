import { useState, useEffect, useCallback } from 'react';
import { ChainInfo, Key } from '@keplr-wallet/types';
import { getKeplrFromWindow } from '../utils/getKeplrFromWindow';

export interface UseKeplrReturn {
  keplr: any;
  isKeplrAvailable: boolean;
  isLoading: boolean;
  error: string | null;
  connectToChain: (chainInfo: ChainInfo) => Promise<void>;
  getKey: (chainId: string) => Promise<Key | undefined>;
}

export const useKeplr = (): UseKeplrReturn => {
  const [keplr, setKeplr] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initKeplr = async () => {
      try {
        const keplrInstance = await getKeplrFromWindow();
        setKeplr(keplrInstance);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize Keplr');
      } finally {
        setIsLoading(false);
      }
    };

    initKeplr();
  }, []);

  const connectToChain = useCallback(async (chainInfo: ChainInfo) => {
    if (!keplr) {
      throw new Error('Keplr is not available');
    }

    try {
      await keplr.experimentalSuggestChain(chainInfo);
      if (!keplr.ethereum?.isConnected()) {
        await keplr.ethereum?.enable();
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to connect to chain';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, [keplr]);

  const getKey = useCallback(async (chainId: string): Promise<Key | undefined> => {
    if (!keplr) {
      throw new Error('Keplr is not available');
    }

    try {
      return await keplr.getKey(chainId);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get key';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, [keplr]);

  return {
    keplr,
    isKeplrAvailable: !!keplr,
    isLoading,
    error,
    connectToChain,
    getKey,
  };
}; 