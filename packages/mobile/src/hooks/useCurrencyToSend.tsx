import { formatAmount } from '$utils';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { walletSelector } from '$store/wallet';
import { CryptoCurrency, Decimals } from '$shared/constants';
import { CurrencyIcon } from '$uikit';
import { jettonsSelector } from '$store/jettons';
import { JettonBalanceModel } from '$store/models';
import { useStakingStore } from '$store';
import { shallow } from 'zustand/shallow';
import { Address } from '@tonkeeper/core';

export function useCurrencyToSend(
  currency: CryptoCurrency | string,
  isJetton?: boolean,
  logoSize: number = 32,
) {
  const { balances } = useSelector(walletSelector);
  const { jettonBalances } = useSelector(jettonsSelector);

  const stakingPools = useStakingStore((s) => s.pools, shallow);

  const jetton = useMemo(() => {
    return (isJetton &&
      jettonBalances.find(
        (item) => item.jettonAddress === currency,
      )) as JettonBalanceModel;
  }, [currency, isJetton, jettonBalances]);

  const decimals = useMemo(() => {
    return isJetton ? jetton?.metadata?.decimals || 0 : Decimals[currency];
  }, [currency, isJetton, jetton]);

  const Logo = useMemo(
    () => (
      <CurrencyIcon
        isJetton={isJetton}
        uri={jetton?.metadata?.image}
        currency={currency}
        size={logoSize}
      />
    ),
    [currency, isJetton, jetton?.metadata?.image, logoSize],
  );

  const currencyToSend = useMemo(() => {
    if (isJetton) {
      return {
        decimals: jetton?.metadata?.decimals || 0,
        balance: formatAmount(jetton?.balance, decimals),
        currencyTitle:
          jetton?.metadata?.symbol?.toUpperCase() ||
          Address.toShort(jetton?.jettonAddress),
        Logo,
        jettonWalletAddress: jetton?.walletAddress,
        isLiquidJetton: stakingPools.some(
          (pool) =>
            pool.liquidJettonMaster ===
            Address(jetton!.jettonAddress).toRaw(),
        ),
      };
    } else {
      return {
        decimals: Decimals[currency],
        balance: formatAmount(balances[currency], decimals),
        currencyTitle: currency.toUpperCase(),
        Logo,
        jettonWalletAddress: undefined,
        isLiquidJetton: false,
      };
    }
  }, [isJetton, jetton, decimals, Logo, stakingPools, currency, balances]);

  return currencyToSend;
}
