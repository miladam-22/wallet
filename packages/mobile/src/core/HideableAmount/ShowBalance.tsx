import React, { useCallback, useContext } from 'react';
import { AnimationDirection, HideableAmount } from '$core/HideableAmount/HideableAmount';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { usePrivacyStore } from '$store/zustand/privacy/usePrivacyStore';
import {
  HideableAmountContext,
  useHideableAmount,
} from '$core/HideableAmount/HideableAmountProvider';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Steezy } from '$styles';
import { Pressable, View } from '$uikit';
import { useTheme } from '$hooks/useTheme';
import { Haptics, isAndroid } from '$utils';
import { DarkTheme } from '$styled';

const TouchableComponent = isAndroid ? Pressable : TouchableHighlight;

export const ShowBalance: React.FC<{ amount: string }> = ({ amount }) => {
  const hideAmounts = usePrivacyStore((state) => state.actions.toggleHiddenAmounts);
  const animationProgress = useHideableAmount();
  const { colors } = useTheme();

  const handleToggleHideAmounts = useCallback(() => {
    hideAmounts();
    Haptics.impactHeavy();
  }, [hideAmounts]);

  const touchableOpacityStyle = useAnimatedStyle(() => {
    return {
      display: animationProgress.value < 0.5 ? 'flex' : 'none',
    };
  }, []);

  const pressableStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: colors.backgroundSecondary,
      display: animationProgress.value >= 0.5 ? 'flex' : 'none',
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={touchableOpacityStyle}>
        <TouchableOpacity activeOpacity={0.6} onPress={handleToggleHideAmounts}>
          <HideableAmount animationDirection={AnimationDirection.None} variant="num2">
            {amount}
          </HideableAmount>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[pressableStyle, styles.starsContainer.static]}>
        <TouchableComponent
          style={styles.touchable.static}
          underlayColor={DarkTheme.colors.backgroundHighlighted}
          onPress={handleToggleHideAmounts}
        >
          <HideableAmount
            animationDirection={AnimationDirection.None}
            style={styles.stars.static}
            variant="num2"
          >
            {amount}
          </HideableAmount>
        </TouchableComponent>
      </Animated.View>
    </View>
  );
};

const styles = Steezy.create({
  container: {
    height: 36,
  },
  starsContainer: {
    borderRadius: 100,
  },
  touchable: {
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  stars: {
    paddingTop: 5.5,
  },
});
