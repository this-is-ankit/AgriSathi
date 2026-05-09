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

type AnalyzingNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Analyzing'>;

export const AnalyzingScreen = () => {
  const navigation = useNavigation<AnalyzingNavigationProp>();
  const setResult = useScanStore(state => state.setResult);

  useEffect(() => {
    // Simulate upload and inference latency
    const timer = setTimeout(() => {
      // Mock successful inference
      setResult('Early Blight', 0.92, [
        'Remove affected lower leaves immediately.',
        'Apply a copper-based fungicide spray.',
        'Ensure proper spacing between plants for airflow.'
      ]);
      navigation.replace('ScanResult');
    }, 3000);

    return () => clearTimeout(timer);
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
