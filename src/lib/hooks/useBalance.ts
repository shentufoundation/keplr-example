import { useState, useCallback } from 'react';
import { ChainInfo } from '@keplr-wallet/types';
import { Dec } from '@keplr-wallet/unit';
import { Balances } from '../../types/balance';
import { api } from '../../util/api';

export interface UseBalanceReturn {
  balance: string;
  isLoading: boolean;
  error: string | null;
  getBalance: (chainInfo: ChainInfo, address: string, denom: string) => Promise<void>;
}

export const useBalance = (): UseBalanceReturn => {
  const [balance, setBalance] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getBalance = useCallback(async (chainInfo: ChainInfo, address: string, denom: string) => {
    if (!chainInfo || !address || !denom) {
      setError('Missing required parameters');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const uri = `${chainInfo.rest}/cosmos/bank/v1beta1/balances/${address}?pagination.limit=1000`;
      const data = await api<Balances>(uri);
      
      const tokenBalance = data.balances.find((balance) => balance.denom === denom);
      const currency = chainInfo.currencies.find((currency) => currency.coinMinimalDenom === denom);

      if (tokenBalance && currency) {
        const amount = new Dec(tokenBalance.amount, currency.coinDecimals);
        setBalance(`${amount.toString(currency.coinDecimals)} ${currency.coinDenom}`);
      } else {
        setBalance(`0 ${currency?.coinDenom || denom.toUpperCase()}`);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch balance';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    balance,
    isLoading,
    error,
    getBalance,
  };
}; 