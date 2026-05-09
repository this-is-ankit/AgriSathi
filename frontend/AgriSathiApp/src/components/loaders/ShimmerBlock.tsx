import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { theme } from '../../theme';

interface ShimmerBlockProps {
  style?: StyleProp<ViewStyle>;
  width?: number | `${number}%` | 'auto';
  height?: number | `${number}%` | 'auto';
  borderRadius?: number;
}

export const ShimmerBlock: React.FC<ShimmerBlockProps> = ({ 
  style, 
  width = '100%', 
  height = 20, 
  borderRadius = theme.radius.sm 
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false, // backgroundColor interpolation doesn't support native driver
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [animatedValue]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.border.light, '#e0e0e0'], // light grey to slightly lighter
  });

  return (
    <Animated.View
      style={[
        styles.block,
        { width, height, borderRadius, backgroundColor },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  block: {
    overflow: 'hidden',
  },
});
