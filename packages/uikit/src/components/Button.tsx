import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { ReactNode, memo, useCallback, useMemo } from 'react';
import { TTextTypes } from './Text/TextStyles';
import { useRouter } from '@tonkeeper/router';
import { Theme, useTheme } from '../styles';
import { Loader } from './Loader';
import { Text } from './Text';
import { ns } from '../utils';
import { isString } from '../utils/strings';

export type ButtonColors = 'primary' | 'secondary' | 'tertiary';
export type ButtonSizes = 'large' | 'medium' | 'small';

export interface ButtonProps {
  size?: ButtonSizes;
  color?: ButtonColors;
  title?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  navigate?: string;
  indentTop?: boolean | number;
  indentBottom?: boolean;
  indent?: boolean;
  stretch?: boolean;
  style?: ViewStyle;
}

export const Button = memo<ButtonProps>((props) => {
  const {
    size = 'large',
    color = 'primary',
    title,
    onPress,
    disabled,
    loading,
    navigate,
    stretch,
    indentBottom,
    children,
    indentTop,
    indent,
    style,
  } = props;

  const router = useRouter();
  const theme = useTheme();

  const buttonSizeStyle = buttonStyleBySize[size];
  const textType = textTypesBySize[size];
  const colors = getButtonColors(theme);
  const colorStyle = colors[color];
  const titleStyle = disabled ? styles.titleTextDisabled : undefined;

  const containerStyle = useMemo(() => {
    const indentTopStyle = getIndentTopStyle(indentTop);
    const stretchStyle = !stretch && size !== 'large' && styles.fitByContent;
    const indentBottomStyle = indentBottom && styles.indentBottom;

    return [indentTopStyle, indent && styles.indent, stretchStyle, indentBottomStyle];
  }, [stretch, indent, indentTop, size]);

  const buttonStyle = useCallback(
    ({ pressed }: PressableStateCallbackType) => {
      let backgroundColor = colorStyle.background;
      if (pressed) {
        backgroundColor = colorStyle.highlighted;
      } else if (disabled) {
        backgroundColor = colorStyle.disable;
      }
      return [buttonSizeStyle, { backgroundColor }];
    },
    [buttonSizeStyle, colorStyle, disabled],
  );

  const handlePress = useCallback(() => {
    if (navigate) {
      router.navigate(navigate);
    } else {
      onPress?.();
    }
  }, [navigate, onPress, disabled]);

  return (
    <View style={[containerStyle, style]}>
      <Pressable disabled={disabled || loading} onPress={handlePress} style={buttonStyle}>
        {loading ? (
          <Loader size="medium" color="iconPrimary" />
        ) : !!children ? (
          <View style={styles.content}>{children}</View>
        ) : (
          <Text numberOfLines={1} ellipsizeMode="tail" style={titleStyle} type={textType}>
            {title}
          </Text>
        )}
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  buttonLarge: {
    height: ns(56),
    paddingHorizontal: ns(24),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ns(16),
  },
  buttonMedium: {
    height: ns(48),
    paddingHorizontal: ns(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ns(24),
  },
  buttonSmall: {
    height: ns(36),
    paddingHorizontal: ns(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ns(18),
  },
  titleTextDisabled: {
    opacity: 0.48,
  },
  fitByContent: {
    alignItems: 'baseline',
  },
  indentTop: {
    marginTop: ns(16),
  },
  indent: {
    marginHorizontal: ns(16),
    marginBottom: ns(16),
  },
  indentBottom: {
    marginBottom: ns(16),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const buttonStyleBySize: { [key in ButtonSizes]: ViewStyle } = {
  large: styles.buttonLarge,
  medium: styles.buttonMedium,
  small: styles.buttonSmall,
};

const textTypesBySize: { [key in ButtonSizes]: TTextTypes } = {
  large: 'label1',
  medium: 'label1',
  small: 'label2',
};

const getButtonColors = (theme: Theme) => ({
  primary: {
    highlighted: theme.buttonPrimaryBackgroundHighlighted,
    disable: theme.buttonPrimaryBackgroundDisabled,
    background: theme.buttonPrimaryBackground,
  },
  secondary: {
    highlighted: theme.buttonSecondaryBackgroundHighlighted,
    disable: theme.buttonSecondaryBackgroundDisabled,
    background: theme.buttonSecondaryBackground,
  },
  tertiary: {
    highlighted: theme.buttonTertiaryBackgroundHighlighted,
    disable: theme.buttonTertiaryBackgroundDisabled,
    background: theme.buttonTertiaryBackground,
  },
});

const getIndentTopStyle = (indentTop?: number | boolean) => {
  if (typeof indentTop === 'boolean' && indentTop === true) {
    return styles.indentTop;
  } else if (typeof indentTop === 'number') {
    return { marginTop: ns(indentTop) };
  }
};
