import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { CountryCodePicker } from './CountryCodePicker';

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  countryCode?: string;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChangeText, countryCode = '+91' }) => {
  return (
    <View style={styles.container}>
      <CountryCodePicker code={countryCode} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="phone-pad"
        placeholder="Phone number"
        placeholderTextColor={theme.colors.text.tertiary}
        maxLength={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.background.card,
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: theme.spacing.md,
    fontSize: theme.typography.sizes.bodyLarge,
    fontFamily: theme.typography.family.primary,
    color: theme.colors.text.primary,
  },
});
