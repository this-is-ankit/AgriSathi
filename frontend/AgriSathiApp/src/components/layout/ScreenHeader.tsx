import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../../theme';
import { layoutStyles } from '../../styles/layoutStyles';

interface ScreenHeaderProps {
  title: string;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  rightComponent,
  leftComponent,
}) => {
  return (
    <View style={[styles.container, layoutStyles.rowBetween]}>
      <View style={styles.side}>{leftComponent}</View>
      <View style={layoutStyles.flex1}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.side}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.background.main,
  },
  title: {
    fontSize: theme.typography.sizes.headingMedium,
    fontWeight: theme.typography.weights.semiBold,
    color: theme.colors.text.primary,
    textAlign: 'center',
  },
  side: {
    width: 40, // Fixed width to ensure title stays centered
    alignItems: 'center',
    justifyContent: 'center',
  },
});
