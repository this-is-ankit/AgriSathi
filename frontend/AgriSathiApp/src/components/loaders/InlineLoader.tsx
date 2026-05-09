import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';

interface InlineLoaderProps {
  color?: string;
  size?: 'small' | 'large';
}

export const InlineLoader: React.FC<InlineLoaderProps> = ({ 
  color = theme.colors.primary, 
  size = 'small' 
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
