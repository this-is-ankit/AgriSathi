import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { BodyText } from '../typography/BodyText';
import { theme } from '../../theme';

interface SuggestionChipProps {
  text: string;
  onPress: (text: string) => void;
}

export const SuggestionChip: React.FC<SuggestionChipProps> = ({ text, onPress }) => {
  return (
    <Pressable style={styles.chip} onPress={() => onPress(text)}>
      <BodyText style={styles.text}>{text}</BodyText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: theme.colors.background.primary,
    borderWidth: 1,
    borderColor: theme.colors.primary + '50',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: 20,
    marginRight: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  text: {
    color: theme.colors.primary,
    fontSize: 14,
  },
});
