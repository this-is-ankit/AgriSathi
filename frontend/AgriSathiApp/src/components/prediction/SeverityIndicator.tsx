import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CaptionText } from '../typography/CaptionText';
import { theme } from '../../theme';

interface SeverityIndicatorProps {
  level: 'healthy' | 'low' | 'medium' | 'high';
}

export const SeverityIndicator: React.FC<SeverityIndicatorProps> = ({ level }) => {
  const getColors = () => {
    switch (level) {
      case 'healthy': return { bg: theme.colors.status.success + '20', text: theme.colors.status.success };
      case 'high': return { bg: theme.colors.status.danger + '20', text: theme.colors.status.danger };
      case 'medium': return { bg: theme.colors.status.warning + '20', text: theme.colors.status.warning };
      case 'low': return { bg: theme.colors.status.info + '20', text: theme.colors.status.info };
      default: return { bg: theme.colors.background.main, text: theme.colors.text.primary };
    }
  };

  const colors = getColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <CaptionText style={{ color: colors.text, fontWeight: '600' }}>
        {level.toUpperCase()}
      </CaptionText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.radius.sm,
    alignSelf: 'flex-start',
  },
});
