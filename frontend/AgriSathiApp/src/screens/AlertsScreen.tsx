import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { ScrollContainer } from '../components/layout/ScrollContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { Section } from '../components/layout/Section';
import { BodyText } from '../components/typography/BodyText';
import { useWeatherStore } from '../store/weatherStore';
import { AlertCard } from '../components/cards/AlertCard';
import { theme } from '../theme';

const AlertsScreen = () => {
  const { advisories, isLoading } = useWeatherStore();

  return (
    <ScrollContainer edges={['top']} contentContainerStyle={{ paddingBottom: theme.spacing.xl }}>
      <ScreenHeader title="Weather & Advisories" />
      
      <Section>
        {isLoading && advisories.length === 0 ? (
          <View style={styles.center}>
            <ActivityIndicator size="small" color={theme.colors.primary} />
            <BodyText style={{ marginTop: theme.spacing.sm }}>Loading advisories...</BodyText>
          </View>
        ) : advisories.length === 0 ? (
          <View style={styles.center}>
            <BodyText align="center">No active advisories at the moment. Your crop conditions look optimal!</BodyText>
          </View>
        ) : (
          <View style={styles.list}>
            <BodyText style={{ marginBottom: theme.spacing.md }}>
              Based on your local weather, here are your active farming advisories:
            </BodyText>
            {advisories.map((advisory) => (
              <AlertCard
                key={advisory.id}
                title={advisory.title}
                description={advisory.description}
                severity={advisory.severity as any}
              />
            ))}
          </View>
        )}
      </Section>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
  },
  list: {
    gap: theme.spacing.md,
  },
});

export default AlertsScreen;
