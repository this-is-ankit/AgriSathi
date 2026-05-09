import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { Section } from '../components/layout/Section';
import { AuthHeader } from '../components/auth/AuthHeader';
import { PhoneInput } from '../components/auth/PhoneInput';
import { AuthButton } from '../components/auth/AuthButton';
import { isValidPhoneNumber, formatPhoneNumberWithCode } from '../services/auth/authHelpers';
import { authService } from '../services/auth/authService';
import { AuthStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!isValidPhoneNumber(phone)) {
      Alert.alert('Invalid Number', 'Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);
    try {
      const formattedPhone = formatPhoneNumberWithCode(phone);
      const confirmation = await authService.sendOtp(formattedPhone);
      navigation.navigate('OtpVerification', { 
        phoneNumber: formattedPhone, 
        confirmationObj: confirmation 
      });
    } catch (error: any) {
      // Clean up error message for user
      const message = error.message || 'Something went wrong. Please try again later.';
      Alert.alert('Authentication Failed', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer edges={['top', 'bottom']} style={styles.container}>
      <View style={styles.content}>
        <AuthHeader 
          title="Welcome to AgriSathi" 
          subtitle="Enter your mobile number to sign in or create an account."
        />
        <Section>
          <PhoneInput 
            value={phone} 
            onChangeText={setPhone} 
          />
          <AuthButton 
            title="Continue" 
            onPress={handleContinue} 
            loading={loading}
            disabled={phone.length < 10}
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
    paddingTop: '10%', // Push down slightly
  },
});
