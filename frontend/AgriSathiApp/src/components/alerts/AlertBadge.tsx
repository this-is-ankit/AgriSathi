import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CaptionText } from '../typography/CaptionText';
import { theme } from '../../theme';

interface AlertBadgeProps {
  count: number;
}

export const AlertBadge: React.FC<AlertBadgeProps> = ({ count }) => {
  if (count === 0) return null;

  return (
    <View style={styles.badge}>
      <CaptionText style={styles.text}>{count > 9 ? '9+' : count}</CaptionText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: theme.colors.status.danger,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    position: 'absolute',
    top: -4,
    right: -4,
  },
  text: {
    color: theme.colors.background.main,
    fontWeight: theme.typography.weights.bold,
  },
});
