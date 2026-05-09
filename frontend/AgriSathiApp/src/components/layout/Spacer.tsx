import React from 'react';
import { View } from 'react-native';
import { theme } from '../../theme';

interface SpacerProps {
  size?: keyof typeof theme.spacing;
  horizontal?: boolean;
}

export const Spacer: React.FC<SpacerProps> = ({ size = 'lg', horizontal = false }) => {
  const dimension = theme.spacing[size];
  // eslint-disable-next-line react-native/no-inline-styles
  return <View style={{ width: horizontal ? dimension : 0, height: horizontal ? 0 : dimension }} />;
};
