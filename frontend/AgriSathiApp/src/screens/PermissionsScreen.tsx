import React, { useState } from 'react';
import { StyleSheet, View, PermissionsAndroid, Platform } from 'react-native';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { Section } from '../components/layout/Section';
import { AuthHeader } from '../components/auth/AuthHeader';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { SecondaryButton } from '../components/buttons/SecondaryButton';
import { Spacer } from '../components/layout/Spacer';
import { useAppStore } from '../store/appStore';

export const PermissionsScreen = () => {
  const [loading, setLoading] = useState(false);
  const setHasCompletedOnboarding = useAppStore(state => state.setHasCompletedOnboarding);

  // We add a 'permissionsGranted' flag in appStore or just let them through
  // For the sake of simplicity, we just grant/skip and move them to main tabs.

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      setLoading(true);
      try {
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        // Regardless of result, we proceed. We don't block the user.
      } catch (err) {
        console.warn(err);
      } finally {
        setLoading(false);
        setHasCompletedOnboarding(true);
      }
    } else {
      setHasCompletedOnboarding(true);
    }
  };

  return (
    <ScreenContainer edges={['top', 'bottom']} style={styles.container}>
      <View style={styles.content}>
        <AuthHeader 
          title="Enable Features" 
          subtitle="To get the most out of AgriSathi, we recommend enabling the following permissions: Camera (for disease detection), Location (for weather), and Microphone (for voice queries)."
        />
        <Section>
          <PrimaryButton 
            title="Allow Permissions" 
            onPress={requestPermissions} 
            loading={loading}
          />
          <Spacer size="md" />
          <SecondaryButton 
            title="Skip for now" 
            onPress={() => setHasCompletedOnboarding(true)} 
            disabled={loading}
          />
        </Section>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '10%',
  },
});
