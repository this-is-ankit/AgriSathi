import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { BaseCard } from './BaseCard';
import { SubHeading } from '../typography/SubHeading';
import { CaptionText } from '../typography/CaptionText';
import { theme } from '../../theme';
import { Spacer } from '../layout/Spacer';

interface DetectionPreviewCardProps {
  cropName: string;
  diseaseName: string;
  confidence: number;
  date: string;
  imageUrl?: string; // Optional for now
  onPress?: () => void;
}

export const DetectionPreviewCard: React.FC<DetectionPreviewCardProps> = ({ 
  cropName, 
  diseaseName, 
  confidence,
  date,
  imageUrl,
  onPress 
}) => {
  return (
    <BaseCard onPress={onPress} style={styles.card}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <Spacer horizontal size="md" />
      <View style={styles.content}>
        <SubHeading>{cropName}</SubHeading>
        <CaptionText color={theme.colors.status.danger}>{diseaseName}</CaptionText>
        <View style={styles.footer}>
          <CaptionText>{Math.round(confidence * 100)}% Match</CaptionText>
          <CaptionText>{date}</CaptionText>
        </View>
      </View>
    </BaseCard>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: theme.spacing.md,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.border.light,
  },
  imagePlaceholder: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.background.card,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xs,
  },
});
