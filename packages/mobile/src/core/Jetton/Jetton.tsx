import React, { useCallback, useMemo } from 'react';
import { JettonProps } from './Jetton.interface';
import * as S from './Jetton.style';
import {
  Icon,
  IconButton,
  PopupMenu,
  PopupMenuItem,
  ScrollHandler,
  Skeleton,
  SwapIcon,
  Text,
} from '$uikit';
import { delay, ns } from '$utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useJetton } from '$hooks/useJetton';
import { useTheme } from '$hooks/useTheme';
import { useTokenPrice } from '$hooks/useTokenPrice';
import { openDAppBrowser, openReceive, openSend } from '$navigation';
import { CryptoCurrencies, getServerConfig } from '$shared/constants';
import { useSelector } from 'react-redux';
import { useJettonEvents } from '$hooks/useJettonEvents';
// import { TransactionsList } from '$core/Balances/TransactionsList/TransactionsList';
import { RefreshControl } from 'react-native';
import { walletAddressSelector } from '$store/wallet';
import { formatter } from '$utils/formatter';
import { useNavigation } from '@tonkeeper/router';
import { useSwapStore } from '$store/zustand/swap';
import { shallow } from 'zustand/shallow';
import { useFlags } from '$utils/flags';
import { HideableAmount } from '$core/HideableAmount/HideableAmount';
import { Events, SendAnalyticsFrom } from '$store/models';
import { t } from '@tonkeeper/shared/i18n';
import { trackEvent } from '$utils/stats';
import { Address } from '@tonkeeper/core';
import { Screen, View } from '@tonkeeper/uikit';
import { TransactionsList } from '@tonkeeper/shared/components';
import { AccountEventsMapper } from '@tonkeeper/shared/mappers/AccountEventsMapper';
import { LegacyAccountEventsMapper } from '@tonkeeper/shared/mappers/AccountEventsMapper/LegacyAccountEventsMapper';
import { useWallet } from '../../tabs/useWallet';

export const Jetton: React.FC<JettonProps> = ({ route }) => {
  const theme = useTheme();
  const flags = useFlags(['disable_swap']);
  const { bottom: bottomInset } = useSafeAreaInsets();
  const jetton = useJetton(route.params.jettonAddress);
  const { events, isRefreshing, isLoading, refreshJettonEvents } = useJettonEvents(
    jetton.jettonAddress,
  );
  const address = useSelector(walletAddressSelector);
  const jettonPrice = useTokenPrice(jetton.jettonAddress, jetton.balance);

  const nav = useNavigation();

  const showSwap = useSwapStore((s) => !!s.assets[jetton.jettonAddress], shallow);

  const walletAddr = useWallet();

  const handleSend = useCallback(() => {
    trackEvent(Events.SendOpen, { from: SendAnalyticsFrom.TokenScreen });
    openSend({
      currency: jetton.jettonAddress,
      isJetton: true,
      from: SendAnalyticsFrom.TokenScreen,
    });
  }, [jetton.jettonAddress]);

  const handleReceive = useCallback(() => {
    openReceive(CryptoCurrencies.Ton, true, jetton.jettonAddress);
  }, [jetton.jettonAddress]);

  const handlePressSwap = React.useCallback(() => {
    nav.openModal('Swap', { jettonAddress: jetton.jettonAddress });
  }, [jetton.jettonAddress, nav]);

  const handleOpenExplorer = useCallback(async () => {
    console.log('Press');
    await delay(200);
    openDAppBrowser(
      getServerConfig('accountExplorer').replace('%s', address.ton) +
        `/jetton/${jetton.jettonAddress}`,
    );
  }, [address.ton, jetton.jettonAddress]);

  const renderHeader = useMemo(() => {
    if (!jetton) {
      return null;
    }
    return (
      <S.HeaderWrap>
        <S.FlexRow>
          <S.JettonAmountWrapper>
            <HideableAmount variant="h2">
              {formatter.format(jetton.balance, {
                decimals: jetton.metadata.decimals,
                currency: jetton.metadata.symbol,
                currencySeparator: 'wide',
              })}
            </HideableAmount>
            <HideableAmount
              style={{ marginTop: 2 }}
              variant="body2"
              color="foregroundSecondary"
            >
              {jettonPrice.formatted.totalFiat || t('jetton_token')}
            </HideableAmount>
            {jettonPrice.formatted.fiat ? (
              <Text style={{ marginTop: 12 }} variant="body2" color="foregroundSecondary">
                {t('jetton_price')} {jettonPrice.formatted.fiat}
              </Text>
            ) : null}
          </S.JettonAmountWrapper>
          {jetton.metadata.image ? (
            <S.Logo source={{ uri: jetton.metadata.image }} />
          ) : null}
        </S.FlexRow>
        <S.Divider style={{ marginBottom: ns(16) }} />
        <S.ActionsContainer>
          <IconButton
            onPress={handleSend}
            iconName="ic-arrow-up-28"
            title={t('wallet.send_btn')}
          />
          <IconButton
            onPress={handleReceive}
            iconName="ic-arrow-down-28"
            title={t('wallet.receive_btn')}
          />
          {showSwap && !flags.disable_swap ? (
            <IconButton
              onPress={handlePressSwap}
              icon={<SwapIcon />}
              title={t('wallet.swap_btn')}
            />
          ) : null}
        </S.ActionsContainer>
        <S.Divider style={{ marginBottom: 10 }} />
      </S.HeaderWrap>
    );
  }, [
    jetton,
    t,
    jettonPrice,
    handleSend,
    handleReceive,
    showSwap,
    flags.disable_swap,
    handlePressSwap,
  ]);

  const renderFooter = useCallback(() => {
    if (Object.values(events).length === 0 && isLoading) {
      return <View style={{ margin: 16, }}><Skeleton.List /></View>;
    }
    return <View style={{ height: bottomInset }} />;
  }, [events, isLoading, bottomInset]);

  // const renderContent = useCallback(() => {
  //   return (
  //     <TransactionsList
  //       refreshControl={
  //         <RefreshControl
  //           onRefresh={refreshJettonEvents}
  //           refreshing={isRefreshing}
  //           tintColor={theme.colors.foregroundPrimary}
  //         />
  //       }
  //       withoutMarginForFirstHeader
  //       eventsInfo={events}
  //       initialData={[]}
  //       renderHeader={renderHeader}
  //       contentContainerStyle={{
  //         paddingHorizontal: ns(16),
  //         paddingBottom: bottomInset,
  //       }}
  //       renderFooter={renderFooter}
  //     />
  //   );
  // }, [
  //   renderFooter,
  //   refreshJettonEvents,
  //   isRefreshing,
  //   events,
  //   renderHeader,
  //   bottomInset,
  //   theme.colors.foregroundPrimary,
  // ]);

  const mappedEvents = useMemo(() => {
    return AccountEventsMapper(LegacyAccountEventsMapper(events), walletAddr.address.raw);
  }, [events, walletAddr]);

  if (!jetton) {
    return null;
  }

  return (
    <Screen>
      <Screen.Header
        title={jetton.metadata?.name || Address.toShort(jetton.jettonAddress)}
        rightContent={
          <PopupMenu
            items={[
              <PopupMenuItem
                shouldCloseMenu
                onPress={handleOpenExplorer}
                text={t('jetton_open_explorer')}
                icon={<Icon name="ic-globe-16" color="accentPrimary" />}
              />,
            ]}
          >
            <S.HeaderViewDetailsButton onPress={() => null}>
              <Icon name="ic-ellipsis-16" color="foregroundPrimary" />
            </S.HeaderViewDetailsButton>
          </PopupMenu>
        }
      />
      <TransactionsList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        
        // fetchMoreEnd={events.fetchMoreEnd}
        // onFetchMore={events.fetchMore}
        refreshing={isRefreshing}
        onRefresh={refreshJettonEvents}
        loading={false}
        events={mappedEvents}
      />
    </Screen>
  );
};
