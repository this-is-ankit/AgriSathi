import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { Section } from '../components/layout/Section';
import { AuthHeader } from '../components/auth/AuthHeader';
import { OtpInput } from '../components/auth/OtpInput';
import { AuthButton } from '../components/auth/AuthButton';
import { SecondaryButton } from '../components/buttons/SecondaryButton';
import { authService } from '../services/auth/authService';
import { useAuthStore } from '../store/authStore';
import { AuthStackParamList } from '../types/navigation';
import { Spacer } from '../components/layout/Spacer';

type Props = NativeStackScreenProps<AuthStackParamList, 'OtpVerification'>;

export const OtpVerificationScreen: React.FC<Props> = ({ route }) => {
  const { phoneNumber, confirmationObj } = route.params;
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleVerify = async () => {
    if (code.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter the 6-digit code sent to your phone.');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await authService.verifyOtp(confirmationObj, code);
      if (userCredential.user) {
        // Successful login, set token (using uid here as mock token) and user info
        setAuth(userCredential.user.uid, {
          uid: userCredential.user.uid,
          phoneNumber: userCredential.user.phoneNumber,
        });
        // Navigation is handled automatically by RootNavigator based on auth state
      }
    } catch {
      Alert.alert('Verification Failed', 'The code you entered is incorrect or has expired.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer edges={['top', 'bottom']} style={styles.container}>
      <View style={styles.content}>
        <AuthHeader 
          title="Verify your number" 
          subtitle={`We've sent a 6-digit code to ${phoneNumber}`}
        />
        <Section>
          <OtpInput 
            value={code} 
            onChangeText={setCode} 
          />
          <AuthButton 
            title="Verify & Continue" 
            onPress={handleVerify} 
            loading={loading}
            disabled={code.length < 6}
          />
          <Spacer size="md" />
          <SecondaryButton 
            title="Resend Code" 
            onPress={() => {
              // Add resend logic later if needed
              Alert.alert('Notice', 'Code resent!');
            }} 
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
