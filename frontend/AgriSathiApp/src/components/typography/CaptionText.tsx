import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { theme } from '../../theme';

interface CaptionTextProps extends TextProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  color?: string;
}

export const CaptionText: React.FC<CaptionTextProps> = ({
  children,
  style,
  align = 'left',
  color = theme.colors.text.tertiary,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.text,
        { textAlign: align, color },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: theme.typography.sizes.caption,
    fontWeight: theme.typography.weights.regular,
    fontFamily: theme.typography.family.primary,
  },
});
