import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSheetInternal } from '@tonkeeper/router';
import { IconNames } from '../../../components/Icon';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import { memo, useLayoutEffect } from 'react';
import { useTheme } from '../../../styles';

export interface SheetModalHeaderProps {
  onIconLeftPress?: () => void;
  onClose?: () => void;
  iconLeft?: IconNames;
  gradient?: boolean;
  title?: string;
  center?: boolean;
}

export const SheetModalHeader = memo<SheetModalHeaderProps>((props) => {
  const { gradient, title, onClose, iconLeft, onIconLeftPress, center } = props;
  const { measureHeader, close } = useSheetInternal();
  const theme = useTheme();

  const hasTitle = !!title;

  useLayoutEffect(() => {
    if (hasTitle) {
      measureHeader({
        nativeEvent: {
          layout: { height: 64 },
        },
      });
    }
  }, [hasTitle]);

  return (
    <View style={[styles.container, !hasTitle && styles.absolute]}>
      {gradient && (
        <LinearGradient
          colors={[theme.backgroundContent, 'rgba(16, 22, 31, 0)']}
          style={styles.gradient}
          locations={[0, 1]}
        />
      )}
      <View style={{ flexDirection: 'row', flex: 1 }}>
        {iconLeft ? (
          <TouchableOpacity
            style={[styles.closeButton, styles.leftButton]}
            activeOpacity={0.6}
            onPress={() => {
              onIconLeftPress?.();
            }}
          >
            <View style={[styles.close, { backgroundColor: theme.backgroundContent }]}>
              <Icon name={iconLeft} color="constantWhite" />
            </View>
          </TouchableOpacity>
        ) : null}

        {hasTitle && (
          <View style={[styles.headerTitle, center && styles.titleByCenter]}>
            <Text type="h3" textAlign={center ? 'center' : 'left'}>
              {title}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.closeButton, styles.rightButton]}
          activeOpacity={0.6}
          onPress={() => {
            close();
            onClose?.();
          }}
        >
          <View style={[styles.close, { backgroundColor: theme.backgroundContent }]}>
            <Icon name="ic-close-16" color="constantWhite" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 64,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 3,
  },
  headerTitle: {
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  titleByCenter: {
    flex: 1,
    marginHorizontal: 24,
    textAlign: 'center',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 46,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  closeButton: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
  rightButton: {
    right: 0,
  },
  leftButton: {
    left: 0,
  },
  close: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
