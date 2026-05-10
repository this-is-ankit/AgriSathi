import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Leaf } from 'lucide-react-native';

import { ScreenContainer } from '../components/layout/ScreenContainer';
import { SubHeading } from '../components/typography/SubHeading';
import { BodyText } from '../components/typography/BodyText';
import { RootStackParamList } from '../types/navigation';
import { useScanStore } from '../store/scanStore';
import { theme } from '../theme';
import { API_BASE_URL, ENDPOINTS } from '../api/config';

type AnalyzingNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Analyzing'>;

export const AnalyzingScreen = () => {
  const navigation = useNavigation<AnalyzingNavigationProp>();
  const setResult = useScanStore(state => state.setResult);

  useEffect(() => {
    let isMounted = true;

    const runInference = async () => {
      const selectedImageUri = useScanStore.getState().selectedImageUri;
      if (!selectedImageUri) {
        useScanStore.getState().setError('No image selected for analysis.');
        navigation.goBack();
        return;
      }

      try {
        const formData = new FormData();
        formData.append('image', {
          uri: selectedImageUri,
          type: 'image/jpeg',
          name: 'scan.jpg',
        } as any);

        const response = await fetch(`${API_BASE_URL}${ENDPOINTS.prediction.scan}`, {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const data = await response.json();

        if (isMounted) {
          if (data.success) {
            setResult(data.data.disease_name, data.data.confidence, data.data.recommendations);
            navigation.replace('ScanResult');
          } else {
            useScanStore.getState().setError(data.message || 'Failed to analyze the image.');
            navigation.goBack();
          }
        }
      } catch {
        if (isMounted) {
          useScanStore.getState().setError('Network error: Unable to reach the AI servers.');
          navigation.goBack();
        }
      }
    };

    runInference();

    return () => {
      isMounted = false;
    };
  }, [navigation, setResult]);

  return (
    <ScreenContainer edges={['top', 'bottom']} style={styles.container}>
      <View style={styles.iconContainer}>
        <Leaf color={theme.colors.primary} size={48} />
      </View>
      <SubHeading style={styles.title}>Analyzing Crop...</SubHeading>
      <BodyText align="center" style={styles.subtitle}>
        Our AI is scanning the image to detect any signs of disease.
      </BodyText>
      <ActivityIndicator size="large" color={theme.colors.primary} style={{ marginTop: theme.spacing.xl }} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xxl,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: theme.colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  title: {
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    color: theme.colors.text.secondary,
  },
});
