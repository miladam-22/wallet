import { FlashList, ContentStyle, FlashListProps } from '@shopify/flash-list';
import { Fragment, forwardRef, memo, useEffect, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenBottomSeparator } from './ScreenBottomSeparator';
import { useBottomTabBarHeight } from '@tonkeeper/router';
import { useScrollToTop } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useMergeRefs } from '../../utils';
import { useScreenScroll } from './hooks';

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

export type ScreenScrollListProps = FlashListProps<any> & {
  hideBottomSeparator?: boolean;
  safeArea?: boolean;
};

export const ScreenScrollList = memo<ScreenScrollListProps>(
  forwardRef((props, ref) => {
    const {
      contentContainerStyle,
      safeArea,
      hideBottomSeparator,
      ListHeaderComponent,
      showsVerticalScrollIndicator = false,
      ...other
    } = props;
    const {
      detectContentSize,
      detectLayoutSize,
      scrollHandler,
      headerOffsetStyle,
      scrollRef,
      headerEjectionPoint,
    } = useScreenScroll();
    const tabBarHeight = useBottomTabBarHeight();
    const safeAreaInsets = useSafeAreaInsets();
    const setRef = useMergeRefs(scrollRef, ref);

    useScrollToTop(scrollRef as any);

    useEffect(() => {
      headerEjectionPoint.value = 0;
    }, []);

    // useScrollHandler(undefined, true); // TODO: remove this, when old separator will be removed

    const contentStyle: ContentStyle = useMemo(
      () => ({
        paddingBottom: safeArea ? safeAreaInsets.bottom : tabBarHeight,
        ...contentContainerStyle,
      }),
      [contentContainerStyle, tabBarHeight, safeArea, safeAreaInsets.bottom],
    );

    const HeaderComponent = (
      <Fragment>
        <Animated.View style={headerOffsetStyle} />
        {ListHeaderComponent as any}
      </Fragment>
    );

    return (
      <View style={styles.container}>
        <AnimatedFlashList
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          onContentSizeChange={detectContentSize}
          ListHeaderComponent={HeaderComponent}
          contentContainerStyle={contentStyle}
          onLayout={detectLayoutSize}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          horizontal={false}
          ref={setRef}
          {...other}
        />
        {!hideBottomSeparator && <ScreenBottomSeparator />}
      </View>
    );
  }),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
