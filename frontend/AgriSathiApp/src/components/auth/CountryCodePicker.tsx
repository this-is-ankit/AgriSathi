import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../../theme';

interface CountryCodePickerProps {
  code: string;
}

export const CountryCodePicker: React.FC<CountryCodePickerProps> = ({ code }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.codeText}>{code}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    paddingHorizontal: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.border.light,
    backgroundColor: theme.colors.background.main,
    borderTopLeftRadius: theme.radius.md,
    borderBottomLeftRadius: theme.radius.md,
  },
  codeText: {
    fontSize: theme.typography.sizes.bodyLarge,
    fontFamily: theme.typography.family.primary,
    color: theme.colors.text.primary,
    fontWeight: theme.typography.weights.medium,
  },
});
