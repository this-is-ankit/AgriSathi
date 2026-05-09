import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

interface BaseCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
}

export const BaseCard: React.FC<BaseCardProps> = ({ children, style, onPress, disabled }) => {
  if (onPress) {
    return (
      <TouchableOpacity 
        style={[styles.card, style]} 
        onPress={onPress} 
        disabled={disabled}
        activeOpacity={0.8}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.background.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    // Soft elevation for production grade look without being too heavy
    shadowColor: theme.colors.text.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: theme.spacing.md,
  },
});
