import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { theme } from '../../theme';

interface OtpInputProps {
  value: string;
  onChangeText: (text: string) => void;
  length?: number;
}

export const OtpInput: React.FC<OtpInputProps> = ({ value, onChangeText, length = 6 }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="number-pad"
        maxLength={length}
        placeholder="• • • • • •"
        placeholderTextColor={theme.colors.text.tertiary}
        textAlign="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.xl,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.background.card,
    fontSize: 24,
    fontFamily: theme.typography.family.primary,
    letterSpacing: 8,
    color: theme.colors.text.primary,
    fontWeight: theme.typography.weights.medium,
  },
});
