import { usePoolInfo } from '$hooks/usePoolInfo';
import { useStakingRefreshControl } from '$hooks/useStakingRefreshControl';
import { MainStackRouteNames, openDAppBrowser, openSend } from '$navigation';
import { MainStackParamList } from '$navigation/MainStack';
import {
  BottomButtonWrap,
  BottomButtonWrapHelper,
  NextCycle,
  StakingWarning,
} from '$shared/components';
import { getServerConfig, KNOWN_STAKING_IMPLEMENTATIONS } from '$shared/constants';
import {
  getStakingPoolByAddress,
  getStakingPoolsByProvider,
  getStakingProviderById,
  useStakingStore,
} from '$store';
import { Button, Highlight, Icon, ScrollHandler, Separator, Spacer, Text } from '$uikit';
import { stakingFormatter } from '$utils/formatter';
import { RouteProp } from '@react-navigation/native';
import React, { FC, useCallback, useState } from 'react';
import { RefreshControl } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { shallow } from 'zustand/shallow';
import * as S from './StakingPoolDetails.style';
import { HideableAmount } from '$core/HideableAmount/HideableAmount';
import { trackEvent } from '$utils/stats';
import { Events, SendAnalyticsFrom } from '$store/models';
import { t } from '@tonkeeper/shared/i18n';
import { useFlag } from '$utils/flags';

interface Props {
  route: RouteProp<MainStackParamList, MainStackRouteNames.StakingPoolDetails>;
}

const TONSTAKERS_URL = 'https://tonstakers.com';

export const StakingPoolDetails: FC<Props> = (props) => {
  const {
    route: {
      params: { poolAddress },
    },
  } = props;

  const tonstakersBeta = useFlag('tonstakers_beta');

  const pool = useStakingStore((s) => getStakingPoolByAddress(s, poolAddress), shallow);
  const poolStakingInfo = useStakingStore((s) => s.stakingInfo[pool.address], shallow);
  const provider = useStakingStore(
    (s) => ({
      ...getStakingProviderById(s, pool.implementation),
      poolsCount: getStakingPoolsByProvider(s, pool.implementation).length,
    }),
    shallow,
  );

  const refreshControl = useStakingRefreshControl();

  const {
    infoRows,
    stakingJetton,
    balance,
    pendingDeposit,
    pendingWithdraw,
    readyWithdraw,
    hasDeposit,
    hasPendingDeposit,
    hasPendingWithdraw,
    hasReadyWithdraw,
    isWithdrawDisabled,
    handleTopUpPress,
    handleWithdrawalPress,
    handleConfirmWithdrawalPress,
  } = usePoolInfo(pool, poolStakingInfo);

  const hasAnyBalance = hasDeposit || hasPendingDeposit;

  const [detailsVisible, setDetailsVisible] = useState(!hasAnyBalance);

  const handleDetailsButtonPress = useCallback(() => setDetailsVisible(true), []);

  const handleOpenExplorer = useCallback(() => {
    openDAppBrowser(getServerConfig('accountExplorer').replace('%s', pool.address));
  }, [pool.address]);

  const handleSendPress = useCallback(() => {
    if (!stakingJetton) {
      return;
    }

    trackEvent(Events.SendOpen, { from: SendAnalyticsFrom.StakingPoolDetails });
    openSend({
      currency: stakingJetton.jettonAddress,
      isJetton: true,
      from: SendAnalyticsFrom.StakingPoolDetails,
    });
  }, [stakingJetton]);

  const isImplemeted = KNOWN_STAKING_IMPLEMENTATIONS.includes(pool.implementation);

  return (
    <S.Wrap>
      <ScrollHandler
        isLargeNavBar={false}
        navBarTitle={pool.name}
        navBarRight={
          <Button
            onPress={handleOpenExplorer}
            size="navbar_icon"
            mode="secondary"
            before={<Icon name="ic-information-circle-16" color="foregroundPrimary" />}
          />
        }
      >
        <Animated.ScrollView
          refreshControl={<RefreshControl {...refreshControl} />}
          showsVerticalScrollIndicator={false}
        >
          <S.Content>
            {!hasAnyBalance && provider.id === 'liquidTF' ? (
              <>
                <StakingWarning
                  title={`${pool.name} Beta`}
                  name={pool.name}
                  url={TONSTAKERS_URL}
                  beta={tonstakersBeta}
                  accent={true}
                />
                <Spacer y={16} />
              </>
            ) : null}
            <S.BalanceContainer>
              <Text variant="label1">{t('staking.details.balance')}</Text>
              <S.BalanceRight>
                <HideableAmount variant="label1">
                  {stakingFormatter.format(balance.amount)} {balance.symbol}
                </HideableAmount>
                <HideableAmount variant="body2" color="foregroundSecondary">
                  {!!stakingJetton && balance.formatted.totalTon ? (
                    <>
                      {balance.formatted.totalTon}
                      <Text color="textTertiary"> · </Text>
                    </>
                  ) : null}
                  {balance.formatted.totalFiat ?? '-'}
                </HideableAmount>
              </S.BalanceRight>
            </S.BalanceContainer>
            {!!stakingJetton && hasDeposit ? (
              <>
                <Spacer y={16} />
                <Button mode="secondary" onPress={handleSendPress}>
                  {t('send_title', { currency: balance.symbol })}
                </Button>
              </>
            ) : null}
            <Spacer y={16} />
            {hasPendingDeposit ? (
              <>
                <S.BalanceContainer>
                  <Text variant="label1">{t('staking.details.pendingDeposit')}</Text>
                  <S.BalanceRight>
                    <HideableAmount variant="label1">
                      {stakingFormatter.format(pendingDeposit.amount)} TON
                    </HideableAmount>
                    <HideableAmount variant="body2" color="foregroundSecondary">
                      {pendingDeposit.formatted.totalFiat}
                    </HideableAmount>
                  </S.BalanceRight>
                </S.BalanceContainer>
                <Spacer y={16} />
              </>
            ) : null}
            {hasPendingWithdraw ? (
              <>
                <S.BalanceContainer>
                  <Text variant="label1">{t('staking.details.pendingWithdraw')}</Text>
                  <S.BalanceRight>
                    <HideableAmount variant="label1">
                      {stakingFormatter.format(pendingWithdraw.amount)} TON
                    </HideableAmount>
                    <HideableAmount variant="body2" color="foregroundSecondary">
                      {pendingWithdraw.formatted.totalFiat}
                    </HideableAmount>
                  </S.BalanceRight>
                </S.BalanceContainer>
                <Spacer y={16} />
              </>
            ) : null}
            {hasReadyWithdraw ? (
              <>
                <S.BalanceTouchableContainer>
                  <S.BalanceTouchable
                    onPress={handleConfirmWithdrawalPress}
                    isDisabled={!isImplemeted}
                  >
                    <S.BalanceTouchableContent>
                      <S.Flex>
                        <Text variant="label1">{t('staking.details.readyWithdraw')}</Text>
                        <Text variant="body2" color="foregroundSecondary">
                          {t('staking.details.tap_to_collect')}
                        </Text>
                      </S.Flex>
                      <S.BalanceRight>
                        <HideableAmount variant="label1">
                          {stakingFormatter.format(readyWithdraw.amount)} TON
                        </HideableAmount>
                        <HideableAmount variant="body2" color="foregroundSecondary">
                          {readyWithdraw.formatted.totalFiat}
                        </HideableAmount>
                      </S.BalanceRight>
                    </S.BalanceTouchableContent>
                  </S.BalanceTouchable>
                </S.BalanceTouchableContainer>
                <Spacer y={16} />
              </>
            ) : null}
            <NextCycle pool={pool} />
            <Spacer y={16} />
            {detailsVisible ? (
              <>
                <S.TitleContainer>
                  <Text variant="label1">{t('staking.details.about_pool')}</Text>
                </S.TitleContainer>
                {hasAnyBalance && provider.id === 'liquidTF' ? (
                  <>
                    <StakingWarning
                      title={`${pool.name} Beta`}
                      name={pool.name}
                      url={TONSTAKERS_URL}
                      beta={tonstakersBeta}
                    />
                    <Spacer y={16} />
                  </>
                ) : null}
                <S.Table>
                  {infoRows.map((item, i) => [
                    <React.Fragment key={item.label}>
                      {i > 0 ? <Separator /> : null}
                      <Highlight onPress={item.onPress} isDisabled={!item.onPress}>
                        <S.Item>
                          <S.ItemLabel numberOfLines={1}>{item.label}</S.ItemLabel>
                          <S.ItemValue>{item.value}</S.ItemValue>
                        </S.Item>
                      </Highlight>
                    </React.Fragment>,
                  ])}
                </S.Table>
              </>
            ) : (
              <S.DetailsButtonContainer>
                <Button mode="secondary" size="small" onPress={handleDetailsButtonPress}>
                  {t('staking.details.show_details')}
                </Button>
              </S.DetailsButtonContainer>
            )}
            <Spacer y={16} />
          </S.Content>
          <BottomButtonWrapHelper />
        </Animated.ScrollView>
      </ScrollHandler>
      <BottomButtonWrap>
        <S.Row>
          {hasDeposit ? (
            <>
              <S.Flex>
                <Button
                  onPress={handleWithdrawalPress}
                  disabled={!isImplemeted || isWithdrawDisabled}
                  mode="secondary"
                >
                  {t('staking.withdraw')}
                </Button>
              </S.Flex>
              <Spacer x={16} />
            </>
          ) : null}
          <S.Flex>
            <Button onPress={handleTopUpPress} disabled={!isImplemeted}>
              {t('staking.top_up')}
            </Button>
          </S.Flex>
        </S.Row>
      </BottomButtonWrap>
    </S.Wrap>
  );
};
