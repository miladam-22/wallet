import { useReanimatedKeyboardHeight } from '$hooks/useKeyboardHeight';
import { Button, Spacer } from '$uikit';
import React, { FC, memo, useEffect, useMemo, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as S from './AmountStep.style';
import { parseLocaleNumber } from '$utils';
import { useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';
import { AmountStepProps } from './AmountStep.interface';
import { walletWalletSelector } from '$store/wallet';
import { AmountInput, AmountInputRef } from '$shared/components';
import { CoinDropdown } from './CoinDropdown';
import { t } from '@tonkeeper/shared/i18n';

const AmountStepComponent: FC<AmountStepProps> = (props) => {
  const {
    recipient,
    decimals,
    balance,
    currency,
    currencyTitle,
    active,
    amount,
    fiatRate,
    isPreparing,
    setAmount,
    onContinue,
    onChangeCurrency,
  } = props;

  const wallet = useSelector(walletWalletSelector);

  const isLockup = !!wallet?.ton.isLockup();

  const { isReadyToContinue } = useMemo(() => {
    const bigNum = new BigNumber(parseLocaleNumber(amount.value));
    return {
      isReadyToContinue:
        bigNum.isGreaterThan(0) && (isLockup || bigNum.isLessThanOrEqualTo(balance)),
    };
  }, [amount.value, balance, isLockup]);

  const { keyboardHeightStyle } = useReanimatedKeyboardHeight();

  const { bottom: bottomInset } = useSafeAreaInsets();

  const isFirstRender = useRef(true);

  const textInputRef = useRef<AmountInputRef>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (active) {
        const timeoutId = setTimeout(() => {
          textInputRef.current?.focus();
        }, 400);

        return () => clearTimeout(timeoutId);
      }
    }

    if (active) {
      textInputRef.current?.focus();
      return;
    }

    const timeoutId = setTimeout(() => {
      textInputRef.current?.blur();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [active]);

  if (!recipient) {
    return null;
  }

  return (
    <S.Container bottomInset={bottomInset} style={keyboardHeightStyle}>
      <S.AmountContainer>
        <AmountInput
          innerRef={textInputRef}
          withCoinSelector={true}
          disabled={isPreparing}
          {...{ decimals, balance, currencyTitle, amount, fiatRate, setAmount }}
        />
        <S.CoinContainer>
          <CoinDropdown
            currency={currency}
            currencyTitle={currencyTitle}
            onChangeCurrency={onChangeCurrency}
          />
        </S.CoinContainer>
      </S.AmountContainer>
      <Spacer y={40} />
      <Button disabled={!isReadyToContinue} isLoading={isPreparing} onPress={onContinue}>
        {t('continue')}
      </Button>
    </S.Container>
  );
};

export const AmountStep = memo(AmountStepComponent);
