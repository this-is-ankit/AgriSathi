import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../../theme';

interface ScreenContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  edges = ['top', 'bottom', 'left', 'right'],
}) => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle = {
    paddingTop: edges.includes('top') ? insets.top : 0,
    paddingBottom: edges.includes('bottom') ? insets.bottom : 0,
    paddingLeft: edges.includes('left') ? insets.left : 0,
    paddingRight: edges.includes('right') ? insets.right : 0,
  };

  return <View style={[styles.container, safeAreaStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
});
