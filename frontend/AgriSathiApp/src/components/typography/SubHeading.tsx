import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { theme } from '../../theme';

interface SubHeadingProps extends TextProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  color?: string;
}

export const SubHeading: React.FC<SubHeadingProps> = ({
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

const styles = StyleSheet.create({
  text: {
    fontSize: theme.typography.sizes.headingMedium,
    fontWeight: theme.typography.weights.semiBold,
    fontFamily: theme.typography.family.primary,
  },
});
