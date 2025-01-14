import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as S from './NFT.style';
import { Button, Icon, NavBar, Text } from '$uikit';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { ImageWithTitle } from '$core/NFT/ImageWithTitle/ImageWithTitle';
import {
  ONE_YEAR_MILISEC,
  checkIsTelegramNumbersNFT,
  checkIsTonDiamondsNFT,
  ns,
} from '$utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { t } from '@tonkeeper/shared/i18n';
import { Properties } from '$core/NFT/Properties/Properties';
import { Details } from '$core/NFT/Details/Details';
import { About } from '$core/NFT/About/About';
import { NFTProps } from '$core/NFT/NFT.interface';
import { useNFT } from '$hooks/useNFT';
import { Platform, Share, View, TouchableOpacity } from 'react-native';
import { TonDiamondFeature } from './TonDiamondFeature/TonDiamondFeature';
import { useDispatch, useSelector } from 'react-redux';
import { walletAddressSelector } from '$store/wallet';
import { NFTModel, TonDiamondMetadata } from '$store/models';
import { useFlags } from '$utils/flags';
import { LinkingDomainButton } from './LinkingDomainButton';
import { nftsActions } from '$store/nfts';
import { SheetActions, navigation, useNavigation } from '@tonkeeper/router';
import { openDAppBrowser } from '$navigation';
import { RenewDomainButton, RenewDomainButtonRef } from './RenewDomainButton';
import { Tonapi } from '$libs/Tonapi';
import { Toast } from '$store';
import { useExpiringDomains } from '$store/zustand/domains/useExpiringDomains';
import { usePrivacyStore } from '$store/zustand/privacy/usePrivacyStore';
import { Address } from '@tonkeeper/core';
import { NftItem } from '@tonkeeper/core/src/TonAPI';
import { tk } from '@tonkeeper/shared/tonkeeper';

export const NFT: React.FC<NFTProps> = ({ route }) => {
  const { address: nftAddress } = route.params.keyPair;
  const flags = useFlags(['disable_nft_markets', 'disable_apperance']);
  const hiddenAmounts = usePrivacyStore((state) => state.hiddenAmounts);
  const dispatch = useDispatch();
  const nav = useNavigation();
  const address = useSelector(walletAddressSelector);
  const nftFromHistory = useNFT(route.params.keyPair);
  const [nft, setNft] = useState(nftFromHistory);

  // const { data: nftFromHistory } = useNftItemByAddress(nftAddress);
  // const [nft, setNft] = useState(nftFromHistory!);

  const [expiringAt, setExpiringAt] = useState(0);
  const [lastFill, setLastFill] = useState(0);

  const setOwnerAddress = React.useCallback(
    (options: { ownerAddress: string }) => {
      if (!nft.ownerAddress) {
        const updatedNft = { ...nft, ownerAddress: options.ownerAddress };
        dispatch(nftsActions.setNFT({ nft: updatedNft }));
        setNft(updatedNft);
      }
    },
    [nft],
  );

  const isTG = (nft.dns || nft.name)?.endsWith('.t.me');
  const isDNS = !!nft.dns && !isTG;
  const isTonDiamondsNft = checkIsTonDiamondsNFT(nft);
  const isNumbersNft = checkIsTelegramNumbersNFT(nft);

  useEffect(() => {
    if (isDNS) {
      Tonapi.getDNSLastFillTime(nft.address).then((utime) => {
        const timeInMilisec = utime * 1000;
        setExpiringAt(timeInMilisec + ONE_YEAR_MILISEC);
        setLastFill(timeInMilisec);
      });
    }
  }, []);

  const renewDomainButtonRef = useRef<RenewDomainButtonRef>(null);
  const expiringDomains = useExpiringDomains((s) => s.actions);

  const handleRenewDNSSend = useCallback(() => {
    const timer = setInterval(async () => {
      const utime = await Tonapi.getDNSLastFillTime(nft.address);
      const timeInMilisec = utime * 1000;
      if (timeInMilisec !== lastFill) {
        setExpiringAt(timeInMilisec + ONE_YEAR_MILISEC);
        setLastFill(timeInMilisec);
        renewDomainButtonRef.current?.renewUpdated();
        Toast.show(t('dns_renew_toast_success'));
        expiringDomains.remove(nft.address);

        clearInterval(timer);
      }
    }, 5000);
  }, [lastFill]);

  const scrollTop = useSharedValue(0);
  const scrollRef = useRef<Animated.ScrollView>(null);
  const { bottom: bottomInset } = useSafeAreaInsets();
  const canTransfer = useMemo(
    () => Address.compare(nft.ownerAddress, address.ton),
    [nft.ownerAddress, address.ton],
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollTop.value = event.contentOffset.y;
    },
  });

  const handleOpenInMarketplace = useCallback(() => {
    if (!nft.marketplaceURL) {
      return;
    }
    openDAppBrowser(nft.marketplaceURL);
  }, [nft.marketplaceURL]);

  const handleOpenFragment = useCallback(() => {
    openDAppBrowser('https://fragment.com');
  }, []);

  const handleTransferNft = useCallback(() => {
    nav.openModal('NFTTransferInputAddress', {
      nftAddress: nft.address,
    });
  }, [nft.address]);

  const handleShare = useCallback(() => {
    if (!nft.marketplaceURL) {
      return;
    }
    Share.share({
      url: nft.marketplaceURL,
      title: nft.name,
      message: Platform.OS === 'android' ? nft.marketplaceURL : undefined,
    });
  }, [nft.marketplaceURL, nft.name]);

  const isOnSale = useMemo(() => !!nft.sale, [nft.sale]);

  const lottieUri = isTonDiamondsNft ? nft.metadata?.lottie : undefined;

  const videoUri = isTonDiamondsNft ? nft.metadata?.animation_url : undefined;

  const title = useMemo(() => {
    if (isDNS) {
      return nft.dns;
    }

    return nft.name || Address.toShort(nft.address);
  }, [isDNS, nft.dns, nft.name, nft.address]);

  return (
    <S.Wrap>
      <NavBar
        rightContent={
          nft.marketplaceURL && (
            <Button
              onPress={handleShare}
              size="navbar_icon"
              mode="secondary"
              before={<Icon name="ic-share-16" color="foregroundPrimary" />}
            />
          )
        }
        isModal
        scrollTop={scrollTop}
        titleProps={{ numberOfLines: 1 }}
      >
        {hiddenAmounts ? '* * * *' : title}
      </NavBar>
      <S.ContentWrap>
        <Animated.ScrollView
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="none"
          ref={scrollRef}
          contentContainerStyle={{
            paddingHorizontal: ns(16),
            paddingBottom: bottomInset,
          }}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        >
          {nft.name || nft.collection?.name || nft.content.image.baseUrl ? (
            <ImageWithTitle
              copyableTitle={isNumbersNft}
              uri={nft.content.image.baseUrl}
              lottieUri={lottieUri}
              videoUri={videoUri}
              title={(!isTG && nft.dns) || nft.name}
              collection={isDNS ? 'TON DNS' : nft.collection?.name}
              isVerified={isDNS || nft.isApproved}
              description={!hiddenAmounts ? nft.description : '* * *'}
              isOnSale={isOnSale}
              bottom={
                isTG ? (
                  <View style={{ marginTop: ns(8), flexDirection: 'row' }}>
                    <Text variant="body2" color="foregroundSecondary">
                      {t('username_issued_by_telegram')}
                    </Text>
                    <TouchableOpacity activeOpacity={0.6} onPress={handleOpenFragment}>
                      <Text variant="body2" color="accentPrimary">
                        {t('username_manage_name_button')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : null
              }
            />
          ) : null}
          {!hiddenAmounts && nft.collection ? (
            <About
              collection={isDNS ? 'TON DNS' : nft.collection.name}
              description={isDNS ? t('nft_about_dns') : nft.collection.description}
            />
          ) : null}
          {isTonDiamondsNft && !flags.disable_apperance ? (
            <TonDiamondFeature nft={nft as NFTModel<TonDiamondMetadata>} />
          ) : null}
          <S.ButtonWrap>
            {nft.ownerAddress && (
              <Button
                style={{ marginBottom: ns(16) }}
                onPress={handleTransferNft}
                disabled={!canTransfer}
                size="large"
              >
                {isDNS ? t('nft_transfer_dns') : t('nft_transfer_nft')}
              </Button>
            )}
            {isOnSale ? (
              <S.OnSaleText>
                <Text variant="body2" color="foregroundSecondary">
                  {isDNS ? t('dns_on_sale_text') : t('nft_on_sale_text')}
                </Text>
              </S.OnSaleText>
            ) : null}
            {(isDNS || isTG) && (
              <LinkingDomainButton
                disabled={isOnSale}
                onLink={setOwnerAddress}
                ownerAddress={nft.ownerAddress}
                domainAddress={nft.address}
                domain={nft.dns! || nft.name!}
                isTGUsername={isTG}
              />
            )}
            {isDNS && (
              <RenewDomainButton
                disabled={isOnSale}
                ref={renewDomainButtonRef}
                ownerAddress={nft.ownerAddress}
                domainAddress={nft.address}
                expiringAt={expiringAt}
                loading={expiringAt === 0}
                onSend={handleRenewDNSSend}
              />
            )}
            {nft.marketplaceURL && !flags.disable_nft_markets ? (
              <Button
                style={{ marginBottom: ns(16) }}
                mode={'secondary'}
                onPress={handleOpenInMarketplace}
                size="large"
              >
                {t('nft_open_in_marketplace')}
              </Button>
            ) : null}
          </S.ButtonWrap>
          {!hiddenAmounts && <Properties properties={nft.attributes} />}
          <Details
            ownerAddress={nft.ownerAddressToDisplay || nft.ownerAddress}
            contractAddress={nft.address}
            expiringAt={expiringAt}
          />
        </Animated.ScrollView>
      </S.ContentWrap>
    </S.Wrap>
  );
};

export async function openNftModal(nftAddress: string, nftItem?: NftItem) {
  const openModal = (nftItem: NftItem) => {
    navigation.push('SheetsProvider', {
      $$action: SheetActions.ADD,
      component: NFT,
      params: { nftItem },
      path: 'NFT_MODAL',
    });
  };

  try {
    const cachedNftItem = tk.wallet.nfts.getCachedByAddress(nftAddress, nftItem);
    if (cachedNftItem) {
      // openModal(cachedNftItem);
    } else {
      Toast.loading();
      const item = await tk.wallet.nfts.fetchByAddress(nftAddress);
      // openModal(item);
      Toast.hide();
    }
  } catch (err) {
    console.log(err);
    Toast.fail('Error load nft');
  }
}
