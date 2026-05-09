import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../../theme';

import { SubHeading } from '../typography/SubHeading';
import { Spacer } from './Spacer';
import { TouchableOpacity, Text } from 'react-native';

interface SectionProps {
  children: React.ReactNode;
  style?: ViewStyle;
  noPadding?: boolean;
  title?: string;
  action?: { label: string; onPress: () => void };
}

export const Section: React.FC<SectionProps> = ({ children, style, noPadding = false, title, action }) => {
  return (
    <View style={[styles.section, !noPadding && styles.padding, style]}>
      {(title || action) && (
        <View style={styles.header}>
          {title ? <SubHeading>{title}</SubHeading> : <View />}
          {action && (
            <TouchableOpacity onPress={action.onPress} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Text style={styles.actionText}>{action.label}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {(title || action) && <Spacer size="sm" />}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: theme.spacing.xl,
  },
  padding: {
    paddingHorizontal: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionText: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
});
