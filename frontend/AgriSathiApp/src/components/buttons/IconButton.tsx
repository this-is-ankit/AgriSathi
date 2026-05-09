import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { theme } from '../../theme';

interface IconButtonProps {
  icon: LucideIcon;
  onPress: () => void;
  style?: ViewStyle;
  size?: number;
  color?: string;
  disabled?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onPress,
  style,
  size = 24,
  color = theme.colors.text.primary,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Icon size={size} color={disabled ? theme.colors.text.tertiary : color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xs,
  },
});
