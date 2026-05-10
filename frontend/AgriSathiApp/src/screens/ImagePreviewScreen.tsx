import React, { useState } from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScanHeader } from '../components/scan/ScanHeader';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { SecondaryButton } from '../components/buttons/SecondaryButton';
import { RootStackParamList } from '../types/navigation';
import { compressImage } from '../utils/imagePipeline';
import { theme } from '../theme';

type ImagePreviewScreenRouteProp = RouteProp<RootStackParamList, 'ImagePreview'>;
type ImagePreviewNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImagePreview'>;

export const ImagePreviewScreen = () => {
  const route = useRoute<ImagePreviewScreenRouteProp>();
  const navigation = useNavigation<ImagePreviewNavigationProp>();
  const { uri } = route.params;

  const [isProcessing, setIsProcessing] = useState(false);

  const handleRetake = () => {
    navigation.goBack();
  };

  const handleAnalyze = async () => {
    setIsProcessing(true);
    // Compress the image before uploading/analyzing
    await compressImage(uri);
    setIsProcessing(false);
    
    navigation.replace('Analyzing');
  };

  return (
    <View style={styles.container}>
      <ScanHeader 
        mode="preview"
        onBack={handleRetake}
      />
      
      <Image 
        source={{ uri }} 
        style={StyleSheet.absoluteFill} 
        resizeMode="contain" 
      />

      <View style={styles.controlsContainer}>
        {isProcessing ? (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        ) : (
          <>
            <SecondaryButton 
              title="Retake" 
              onPress={handleRetake} 
              style={styles.button}
            />
            <PrimaryButton 
              title="Analyze Crop" 
              onPress={handleAnalyze} 
              style={styles.button}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing.xl,
    paddingBottom: theme.spacing.xxl,
    backgroundColor: 'rgba(0,0,0,0.5)', // slightly dark backdrop for buttons
  },
  button: {
    flex: 1,
    marginHorizontal: theme.spacing.sm,
  },
});
