import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { theme } from '../../theme';

interface CaptureButtonProps {
  onPress: () => void;
  disabled?: boolean;
}

export const CaptureButton: React.FC<CaptureButtonProps> = ({ onPress, disabled }) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress} 
      disabled={disabled}
      activeOpacity={0.7}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
    >
      <View style={[styles.innerCircle, disabled && styles.disabled]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 4,
    borderColor: theme.colors.text.inverse,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.text.inverse,
  },
  disabled: {
    opacity: 0.5,
  },
});
