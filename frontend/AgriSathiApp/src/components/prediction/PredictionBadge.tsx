import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CaptionText } from '../typography/CaptionText';
import { theme } from '../../theme';

interface PredictionBadgeProps {
  confidence: number;
}

export const PredictionBadge: React.FC<PredictionBadgeProps> = ({ confidence }) => {
  const percentage = Math.round(confidence * 100);
  
  return (
    <View style={styles.badge}>
      <CaptionText style={styles.text}>{percentage}% Match</CaptionText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: theme.colors.primary + '20',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.radius.sm,
    alignSelf: 'flex-start',
  },
  text: {
    color: theme.colors.primary,
    fontWeight: theme.typography.weights.medium,
  },
});
