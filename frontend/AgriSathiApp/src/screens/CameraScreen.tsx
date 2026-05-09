import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { launchImageLibrary } from 'react-native-image-picker';

import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScanHeader } from '../components/scan/ScanHeader';
import { CaptureButton } from '../components/scan/CaptureButton';
import { BodyText } from '../components/typography/BodyText';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { theme } from '../theme';
import { RootStackParamList } from '../types/navigation';
import { useScanStore } from '../store/scanStore';
import { validateImage } from '../utils/imagePipeline';

type CameraScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Camera'>;

export const CameraScreen = () => {
  const navigation = useNavigation<CameraScreenNavigationProp>();
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  // @ts-ignore: Camera type issue in vision-camera
  const cameraRef = useRef<Camera>(null);
  
  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [isCapturing, setIsCapturing] = useState(false);
  
  const setImage = useScanStore(state => state.setImage);
  const setError = useScanStore(state => state.setError);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const handleCapture = async () => {
    if (!cameraRef.current || isCapturing) return;

    try {
      setIsCapturing(true);
      const photo = await cameraRef.current.takePhoto({
        flash: flash,
        qualityPrioritization: 'speed', // optimize for speed
      });
      
      setImage(`file://${photo.path}`);
      navigation.replace('ImagePreview', { uri: `file://${photo.path}` });
    } catch (err) {
      console.warn(err);
      setError('Failed to capture photo');
      setIsCapturing(false);
    }
  };

  const handleGallery = async () => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 });
      if (result.didCancel || !result.assets || result.assets.length === 0) return;
      
      const asset = result.assets[0];
      if (!asset.uri) return;

      const validation = await validateImage(asset.uri, asset.fileSize);
      if (!validation.isValid) {
        setError(validation.error || 'Invalid image');
        return;
      }

      setImage(asset.uri);
      navigation.replace('ImagePreview', { uri: asset.uri });
    } catch (err) {
      console.warn(err);
      setError('Failed to open gallery');
    }
  };

  if (!hasPermission) {
    return (
      <ScreenContainer style={styles.centerContainer}>
        <BodyText align="center" style={styles.permissionText}>
          AgriSathi needs camera access to scan your crops.
        </BodyText>
        <PrimaryButton title="Grant Permission" onPress={requestPermission} />
      </ScreenContainer>
    );
  }

  if (device == null) {
    return (
      <ScreenContainer style={styles.centerContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <BodyText align="center" style={{ marginTop: theme.spacing.md }}>
          Initializing Camera...
        </BodyText>
      </ScreenContainer>
    );
  }

  return (
    <View style={styles.container}>
      <ScanHeader 
        mode="camera"
        onBack={() => navigation.goBack()}
        onToggleFlash={() => setFlash(f => f === 'on' ? 'off' : 'on')}
        flashMode={flash}
        onGalleryPress={handleGallery}
      />
      
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        // @ts-ignore: photo prop might not be typed correctly in this version
        photo={true}
      />

      {/* Capture Controls Overlay */}
      <View style={styles.controlsContainer}>
        <CaptureButton onPress={handleCapture} disabled={isCapturing} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xl,
  },
  permissionText: {
    marginBottom: theme.spacing.xl,
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 40,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
