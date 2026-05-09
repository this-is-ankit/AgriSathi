import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Camera, Image as ImageIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { launchImageLibrary } from 'react-native-image-picker';

import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { Section } from '../components/layout/Section';
import { BodyText } from '../components/typography/BodyText';
import { SubHeading } from '../components/typography/SubHeading';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { SecondaryButton } from '../components/buttons/SecondaryButton';
import { theme } from '../theme';
import { RootStackParamList } from '../types/navigation';
import { validateImage } from '../utils/imagePipeline';
import { useScanStore } from '../store/scanStore';

type ScanScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ScanScreen = () => {
  const navigation = useNavigation<ScanScreenNavigationProp>();
  const setImage = useScanStore(state => state.setImage);
  const setError = useScanStore(state => state.setError);

  const handleOpenCamera = () => {
    navigation.navigate('Camera');
  };

  const handleOpenGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });

      if (result.didCancel || !result.assets || result.assets.length === 0) {
        return;
      }

      const asset = result.assets[0];
      if (!asset.uri) return;

      const validation = await validateImage(asset.uri, asset.fileSize);
      if (!validation.isValid) {
        setError(validation.error || 'Invalid image');
        return;
      }

      setImage(asset.uri);
      navigation.navigate('ImagePreview', { uri: asset.uri });
    } catch (err) {
      console.warn(err);
      setError('Failed to open gallery');
    }
  };

  return (
    <ScreenContainer edges={['top']}>
      <ScreenHeader title="Scan Crop" />
      <Section style={styles.content}>
        <View style={styles.iconContainer}>
          <Camera color={theme.colors.primary} size={64} />
        </View>
        <SubHeading align="center">Detect Crop Diseases</SubHeading>
        <BodyText align="center" style={styles.subtitle}>
          Take a clear photo of the affected crop leaf or upload from your gallery for instant analysis.
        </BodyText>
        
        <View style={styles.buttonContainer}>
          <PrimaryButton 
            title="Open Camera" 
            onPress={handleOpenCamera} 
            leftIcon={<Camera color={theme.colors.text.inverse} size={20} />}
          />
          <SecondaryButton 
            title="Upload from Gallery" 
            onPress={handleOpenGallery} 
            leftIcon={<ImageIcon color={theme.colors.primary} size={20} />}
          />
        </View>
      </Section>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.primary + '10', // 10% opacity
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  subtitle: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xxl,
    paddingHorizontal: theme.spacing.lg,
  },
  buttonContainer: {
    width: '100%',
    gap: theme.spacing.md,
  },
});

export default ScanScreen;

