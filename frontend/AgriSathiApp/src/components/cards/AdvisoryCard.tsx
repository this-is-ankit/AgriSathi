import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseCard } from './BaseCard';
import { SubHeading } from '../typography/SubHeading';
import { BodyText } from '../typography/BodyText';
import { theme } from '../../theme';
import { CheckCircle2 } from 'lucide-react-native';
import { Spacer } from '../layout/Spacer';

interface AdvisoryCardProps {
  title: string;
  description: string;
  onPress?: () => void;
}

export const AdvisoryCard: React.FC<AdvisoryCardProps> = ({ 
  title, 
  description, 
  onPress 
}) => {
  return (
    <BaseCard onPress={onPress}>
      <View style={styles.header}>
        <CheckCircle2 size={20} color={theme.colors.primary} />
        <Spacer horizontal size="sm" />
        <SubHeading style={{ flex: 1 }}>{title}</SubHeading>
      </View>
      <Spacer size="xs" />
      <BodyText style={styles.description}>{description}</BodyText>
    </BaseCard>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginLeft: 28, // aligns with text
  },
});
