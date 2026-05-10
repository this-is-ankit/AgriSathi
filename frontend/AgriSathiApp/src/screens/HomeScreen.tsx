import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { MessageCircle } from 'lucide-react-native';
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
const MOCK_POSTS = [
  { id: '1', author: 'Ramesh K.', content: 'Has anyone tried the new organic fertilizer from IFFCO?', timeAgo: '2h ago' },
];

import { useWeatherStore } from '../store/weatherStore';

const HomeScreen = () => {
  const navigation = useNavigation<BottomTabNavigationProp<any>>();
  const { advisories } = useWeatherStore();

  return (
    <View style={styles.container}>
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
        <AlertPreview 
          alerts={advisories} 
          onPressAlert={() => navigation.navigate('Alerts')} 
        />
      </Section>

      <Section title="Recent Detections" action={{ label: 'View All', onPress: () => {} }}>
        <EmptyDetections onScanPress={() => navigation.navigate('Scan')} />
      </Section>

      <Section title="Community Highlights" action={{ label: 'Join', onPress: () => navigation.navigate('Community') }}>
        <CommunityPreview posts={MOCK_POSTS} />
      </Section>

      <Spacer size="xxl" />
      </ScrollContainer>
      
      <Pressable 
        style={styles.chatbotFab} 
        onPress={() => (navigation.getParent() as any)?.navigate('Chatbot')}
      >
        <MessageCircle color="#fff" size={24} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: theme.spacing.xl,
  },
  greetingSection: {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
  },
  chatbotFab: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default HomeScreen;
