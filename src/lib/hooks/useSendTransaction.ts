import { useState, useCallback } from 'react';
import { ChainInfo, StdFee } from '@keplr-wallet/types';
import { Any } from '../../proto-types-gen/src/google/protobuf/any';
import { sendMsgs } from '../../util/sendMsgs';
import { simulateMsgs } from '../../util/simulateMsgs';

export interface UseSendTransactionReturn {
  isLoading: boolean;
  error: string | null;
  sendTransaction: (
    keplr: any,
    chainInfo: ChainInfo,
    sender: string,
    messages: Any[],
    fee: StdFee,
    memo?: string
  ) => Promise<void>;
  simulateTransaction: (
    chainInfo: ChainInfo,
    sender: string,
    messages: Any[],
    fee: [{ denom: string; amount: string }]
  ) => Promise<number | undefined>;
}

export const useSendTransaction = (): UseSendTransactionReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const simulateTransaction = useCallback(async (
    chainInfo: ChainInfo,
    sender: string,
    messages: Any[],
    fee: [{ denom: string; amount: string }]
  ): Promise<number | undefined> => {
    try {
      return await simulateMsgs(chainInfo, sender, messages, fee);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to simulate transaction';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  const sendTransaction = useCallback(async (
    keplr: any,
    chainInfo: ChainInfo,
    sender: string,
    messages: Any[],
    fee: StdFee,
    memo: string = ''
  ) => {
    if (!keplr || !chainInfo || !sender || !messages.length) {
      throw new Error('Missing required parameters');
    }

    setIsLoading(true);
    setError(null);

    try {
      await sendMsgs(keplr, chainInfo, sender, messages, fee, memo);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send transaction';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    sendTransaction,
    simulateTransaction,
  };
}; 