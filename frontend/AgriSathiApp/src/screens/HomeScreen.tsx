import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { ScrollContainer } from '../components/layout/ScrollContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { Section } from '../components/layout/Section';
import { Spacer } from '../components/layout/Spacer';
import { Heading } from '../components/typography/Heading';
import { BodyText } from '../components/typography/BodyText';

import { WeatherSummary } from '../components/weather/WeatherSummary';
import { QuickScanCTA } from '../components/home/QuickScanCTA';
import { AlertPreview } from '../components/alerts/AlertPreview';
import { EmptyDetections } from '../components/feedback/EmptyDetections';
import { CommunityPreview } from '../components/community/CommunityPreview';
import { theme } from '../theme';

// Mock data for UI preview
const MOCK_ALERTS = [
  { id: '1', title: 'Heavy Rain Expected', description: 'Expected tomorrow evening. Secure your harvested crops.', severity: 'medium' as const },
];

const MOCK_POSTS = [
  { id: '1', author: 'Ramesh K.', content: 'Has anyone tried the new organic fertilizer from IFFCO?', timeAgo: '2h ago' },
];

const HomeScreen = () => {
  const navigation = useNavigation<BottomTabNavigationProp<any>>();

  return (
    <ScrollContainer edges={['top']} contentContainerStyle={styles.content}>
      <ScreenHeader title="AgriSathi" />
      
      <View style={styles.greetingSection}>
        <Heading>Good Morning, Ankit</Heading>
        <BodyText>Here's your farm summary for today.</BodyText>
      </View>
      <Spacer size="md" />

      <Section>
        <WeatherSummary />
      </Section>

      <Section>
        <QuickScanCTA onPress={() => navigation.navigate('Scan')} />
      </Section>

      <Section title="Weather & Alerts">
        <AlertPreview alerts={MOCK_ALERTS} />
      </Section>

      <Section title="Recent Detections" action={{ label: 'View All', onPress: () => {} }}>
        <EmptyDetections onScanPress={() => navigation.navigate('Scan')} />
      </Section>

      <Section title="Community Highlights" action={{ label: 'Join', onPress: () => navigation.navigate('Community') }}>
        <CommunityPreview posts={MOCK_POSTS} />
      </Section>

      <Spacer size="xxl" />
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: theme.spacing.xl,
  },
  greetingSection: {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
  },
});

export default HomeScreen;
