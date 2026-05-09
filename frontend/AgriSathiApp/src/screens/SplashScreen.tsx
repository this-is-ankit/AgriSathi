import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { Heading } from '../components/typography/Heading';
import { BodyText } from '../components/typography/BodyText';
import { useAuthStore } from '../store/authStore';
import { theme } from '../theme';

export const SplashScreen = () => {
  const { setInitialized } = useAuthStore();

  useEffect(() => {
    // Artificial slight delay to ensure smooth transition and allow storage to hydrate
    const timer = setTimeout(() => {
      setInitialized(true);
    }, 1000); // 1s max perceived startup
    return () => clearTimeout(timer);
  }, [setInitialized]);

  return (
    <ScreenContainer edges={['top', 'bottom']} style={styles.container}>
      <View style={styles.content}>
        <Heading color={theme.colors.primary} style={styles.title}>AgriSathi</Heading>
        <BodyText align="center">Smart farming companion</BodyText>
      </View>
      <View style={styles.footer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: theme.spacing.sm,
  },
  footer: {
    paddingBottom: theme.spacing.xxxl,
  },
});
