import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseCard } from './BaseCard';
import { SubHeading } from '../typography/SubHeading';
import { BodyText } from '../typography/BodyText';
import { theme } from '../../theme';
import { AlertTriangle, Info } from 'lucide-react-native';
import { Spacer } from '../layout/Spacer';

interface AlertCardProps {
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
  onPress?: () => void;
}

export const AlertCard: React.FC<AlertCardProps> = ({ 
  title, 
  description, 
  severity,
  onPress 
}) => {
  const getSeverityColor = () => {
    switch (severity) {
      case 'high': return theme.colors.status.danger;
      case 'medium': return theme.colors.status.warning;
      case 'low': return theme.colors.status.info;
      default: return theme.colors.status.info;
    }
  };

  return (
    <BaseCard onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {severity === 'high' ? (
            <AlertTriangle size={20} color={getSeverityColor()} />
          ) : (
            <Info size={20} color={getSeverityColor()} />
          )}
        </View>
        <Spacer horizontal size="sm" />
        <SubHeading style={{ color: getSeverityColor(), flex: 1 }}>{title}</SubHeading>
      </View>
      <Spacer size="xs" />
      <BodyText style={styles.description}>{description}</BodyText>
    </BaseCard>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginLeft: 28, // align with text, accounting for icon + spacer
  },
});
