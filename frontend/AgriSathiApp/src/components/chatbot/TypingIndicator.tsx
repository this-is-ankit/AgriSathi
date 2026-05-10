import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { theme } from '../../theme';

export const TypingIndicator = () => {
  const opacities = useRef([new Animated.Value(0.3), new Animated.Value(0.3), new Animated.Value(0.3)]).current;

  useEffect(() => {
    const animations = opacities.map((opacity, index) =>
      Animated.sequence([
        Animated.delay(index * 150),
        Animated.loop(
          Animated.sequence([
            Animated.timing(opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.timing(opacity, { toValue: 0.3, duration: 300, useNativeDriver: true }),
            Animated.delay(300),
          ])
        )
      ])
    );
    Animated.parallel(animations).start();
    
    return () => {
      opacities.forEach(op => op.stopAnimation());
    };
  }, [opacities]);

  return (
    <View style={styles.container}>
      {opacities.map((opacity, index) => (
        <Animated.View key={index} style={[styles.dot, { opacity }]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.secondary,
    alignSelf: 'flex-start',
    borderRadius: theme.roundness.lg,
    borderBottomLeftRadius: 4,
    marginBottom: theme.spacing.md,
    gap: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.text.secondary,
  },
});
