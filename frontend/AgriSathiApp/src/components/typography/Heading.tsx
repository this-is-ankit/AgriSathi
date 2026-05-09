import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { theme } from '../../theme';

interface HeadingProps extends TextProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  color?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  style,
  align = 'left',
  color = theme.colors.text.primary,
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

import { getFontSize } from '../../utils/ui/typography';

const styles = StyleSheet.create({
  text: {
    fontSize: getFontSize('headingLarge'),
    fontWeight: theme.typography.weights.bold,
    fontFamily: theme.typography.family.primary,
  },
});
