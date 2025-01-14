import React, { useCallback, useRef } from 'react';
import {
  InternalNotification,
  Screen,
  Separator,
  Spacer,
  SwitchItem,
  Text,
  View,
} from '$uikit';
import { ns } from '$utils';
import { debugLog } from '$utils/debugLog';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Linking } from 'react-native';
import { CellSection } from '$shared/components';
import { getSubscribeStatus, SUBSCRIBE_STATUS } from '$utils/messaging';
import { useSelector } from 'react-redux';
import { NotificationsStatus, useNotificationStatus } from '$hooks/useNotificationStatus';
import messaging from '@react-native-firebase/messaging';
import { useNotifications } from '$hooks/useNotifications';
import { t } from '@tonkeeper/shared/i18n';
import { useNotificationsBadge } from '$hooks/useNotificationsBadge';
import { Toast, ToastSize, useConnectedAppsList, useConnectedAppsStore } from '$store';
import { Steezy } from '$styles';
import { getChainName } from '$shared/dynamicConfig';
import { walletAddressSelector } from '$store/wallet';
import { SwitchDAppNotifications } from '$core/Notifications/SwitchDAppNotifications';

export const Notifications: React.FC = () => {
  const address = useSelector(walletAddressSelector);
  const handleOpenSettings = useCallback(() => Linking.openSettings(), []);
  const notifications = useNotifications();
  const tabBarHeight = useBottomTabBarHeight();
  const isSwitchFrozen = useRef(false);
  const notificationStatus = useNotificationStatus();
  const notificationsBadge = useNotificationsBadge();
  const shouldEnableNotifications = notificationStatus === NotificationsStatus.DENIED;
  const updateNotificationsSubscription = useConnectedAppsStore(
    (state) => state.actions.updateNotificationsSubscription,
  );
  const [isSubscribeNotifications, setIsSubscribeNotifications] = React.useState(false);

  React.useEffect(() => {
    const init = async () => {
      const subscribeStatus = await getSubscribeStatus();
      const status = await messaging().hasPermission();

      const isGratend =
        status === NotificationsStatus.AUTHORIZED ||
        status === NotificationsStatus.PROVISIONAL;

      const initialValue = isGratend && subscribeStatus === SUBSCRIBE_STATUS.SUBSCRIBED;
      setIsSubscribeNotifications(initialValue);
    };

    init();
  }, []);

  React.useEffect(() => {
    if (notificationsBadge.isVisible) {
      notificationsBadge.hide();
    }
  }, [notificationsBadge, notificationsBadge.isVisible]);

  const handleToggleNotifications = React.useCallback(
    async (value: boolean) => {
      if (isSwitchFrozen.current) {
        return;
      }

      try {
        isSwitchFrozen.current = true;
        setIsSubscribeNotifications(value);

        const isSuccess = value
          ? await notifications.subscribe()
          : await notifications.unsubscribe();

        updateNotificationsSubscription(getChainName(), address.ton);

        if (!isSuccess) {
          // Revert
          setIsSubscribeNotifications(!value);
        }
      } catch (err) {
        Toast.fail(t('notifications_not_supported'), { size: ToastSize.Small });
        debugLog('[NotificationsSettings]', err);
        setIsSubscribeNotifications(!value); // Revert
      } finally {
        isSwitchFrozen.current = false;
      }
    },
    [address.ton, notifications, updateNotificationsSubscription],
  );

  const connectedApps = useConnectedAppsList();

  return (
    <Screen>
      <Screen.Header title={t('notifications_title')} />
      <Screen.ScrollView
        contentContainerStyle={{
          paddingHorizontal: ns(16),
          paddingBottom: tabBarHeight,
        }}
      >
        {shouldEnableNotifications && (
          <View style={{ marginBottom: 16 }}>
            <InternalNotification
              title={t('notifications_disabled_title')}
              caption={t('notifications_disabled_description')}
              action={t('notifications_disabled_action')}
              mode={'warning'}
              onPress={handleOpenSettings}
            />
          </View>
        )}
        <CellSection sectionStyle={styles.notificationsSection.static}>
          <SwitchItem
            title={t('notifications_switch_title')}
            subtitle={t('notification_switch_description')}
            disabled={shouldEnableNotifications}
            onChange={handleToggleNotifications}
            value={isSubscribeNotifications}
          />
        </CellSection>
        {connectedApps.length ? (
          <>
            <View style={styles.title}>
              <Text variant="h3">{t('notifications.apps')}</Text>
              <Spacer y={4} />
              <Text color="textSecondary" variant="body2">
                {t('notifications.apps_description')}
              </Text>
            </View>
            <CellSection>
              {connectedApps.map((app) => (
                <View key={app.url}>
                  <SwitchDAppNotifications app={app} />
                  <Separator />
                </View>
              ))}
            </CellSection>
          </>
        ) : null}
      </Screen.ScrollView>
    </Screen>
  );
};

const styles = Steezy.create({
  title: {
    paddingVertical: 14,
  },
  notificationsSection: {
    marginBottom: 16,
  },
});
