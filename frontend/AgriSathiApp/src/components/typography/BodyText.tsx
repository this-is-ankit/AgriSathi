import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { theme } from '../../theme';

interface BodyTextProps extends TextProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  color?: string;
  size?: 'standard' | 'large';
  weight?: keyof typeof theme.typography.weights;
}

export const BodyText: React.FC<BodyTextProps> = ({
  children,
  style,
  align = 'left',
  color = theme.colors.text.secondary,
  size = 'standard',
  weight = 'regular',
  ...props
}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          textAlign: align,
          color,
          fontSize:
            size === 'large'
              ? getFontSize('bodyLarge')
              : getFontSize('bodyStandard'),
          lineHeight: getLineHeight(
            size === 'large'
              ? theme.typography.sizes.bodyLarge
              : theme.typography.sizes.bodyStandard
          ),
          fontWeight: theme.typography.weights[weight],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

import { getFontSize, getLineHeight } from '../../utils/ui/typography';

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.typography.family.primary,
  },
});
