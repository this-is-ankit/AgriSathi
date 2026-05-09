import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { SubHeading } from '../typography/SubHeading';
import { BodyText } from '../typography/BodyText';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { Spacer } from '../layout/Spacer';
import { theme } from '../../theme';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon size={32} color={theme.colors.text.tertiary} />
      </View>
      <Spacer size="md" />
      <SubHeading align="center">{title}</SubHeading>
      <Spacer size="xs" />
      <BodyText align="center" style={styles.description}>
        {description}
      </BodyText>
      
      {actionLabel && onAction && (
        <>
          <Spacer size="lg" />
          <PrimaryButton title={actionLabel} onPress={onAction} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.background.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    borderStyle: 'dashed',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.background.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    paddingHorizontal: theme.spacing.md,
  },
});
