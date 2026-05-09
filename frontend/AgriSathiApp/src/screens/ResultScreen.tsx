import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CheckCircle, AlertTriangle } from 'lucide-react-native';

import { ScrollContainer } from '../components/layout/ScrollContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { Section } from '../components/layout/Section';
import { Heading } from '../components/typography/Heading';
import { BodyText } from '../components/typography/BodyText';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { AdvisoryCard } from '../components/cards/AdvisoryCard';
import { PredictionBadge } from '../components/prediction/PredictionBadge';
import { RootStackParamList } from '../types/navigation';
import { useScanStore } from '../store/scanStore';
import { theme } from '../theme';

type ResultNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ScanResult'>;

export const ResultScreen = () => {
  const navigation = useNavigation<ResultNavigationProp>();
  const { selectedImageUri, diseaseName, confidence, recommendations, reset } = useScanStore();

  const handleDone = () => {
    reset();
    navigation.popToTop(); // Go back to MainTabs
  };

  const isHealthy = diseaseName?.toLowerCase() === 'healthy';

  return (
    <ScrollContainer edges={['top']} contentContainerStyle={styles.content}>
      <ScreenHeader title="Scan Result" onBack={handleDone} />
      
      <View style={styles.imageWrapper}>
        {selectedImageUri ? (
          <Image source={{ uri: selectedImageUri }} style={styles.image} />
        ) : (
          <View style={[styles.image, styles.placeholderImage]} />
        )}
        <View style={styles.badgeContainer}>
          <PredictionBadge confidence={confidence || 0} />
        </View>
      </View>

      <Section>
        <View style={styles.headerRow}>
          {isHealthy ? (
            <CheckCircle color={theme.colors.status.success} size={28} />
          ) : (
            <AlertTriangle color={theme.colors.status.danger} size={28} />
          )}
          <Heading style={styles.title}>{diseaseName || 'Unknown'}</Heading>
        </View>
        <BodyText style={styles.subtitle}>
          {isHealthy 
            ? 'Your crop appears to be in good health. Keep up the good work!' 
            : 'We detected signs of disease. Follow the recommendations below.'}
        </BodyText>
      </Section>

      {!isHealthy && recommendations && recommendations.length > 0 && (
        <Section title="Recommended Actions">
          <View style={styles.advisoryList}>
            {recommendations.map((rec, index) => (
              <AdvisoryCard 
                key={index} 
                title={`Step ${index + 1}`} 
                description={rec} 
              />
            ))}
          </View>
        </Section>
      )}

      <Section noPadding style={styles.footer}>
        <PrimaryButton title="Done" onPress={handleDone} />
      </Section>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: theme.spacing.xl,
  },
  imageWrapper: {
    width: '100%',
    height: 240,
    backgroundColor: '#000',
    marginBottom: theme.spacing.xl,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderImage: {
    backgroundColor: theme.colors.border.light,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: theme.spacing.md,
    right: theme.spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  title: {
    flex: 1,
  },
  subtitle: {
    color: theme.colors.text.secondary,
  },
  advisoryList: {
    gap: theme.spacing.md,
  },
  footer: {
    paddingHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.xl,
  },
});
