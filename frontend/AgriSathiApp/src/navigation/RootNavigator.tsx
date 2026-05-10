import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../store/authStore';
import { useAppStore } from '../store/appStore';
import { RootStackParamList } from '../types/navigation';

import { SplashScreen } from '../screens/SplashScreen';
import { AuthNavigator } from './AuthNavigator';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import BottomTabs from './BottomTabs';

import { CameraScreen } from '../screens/CameraScreen';
import { ImagePreviewScreen } from '../screens/ImagePreviewScreen';
import { AnalyzingScreen } from '../screens/AnalyzingScreen';
import { ResultScreen } from '../screens/ResultScreen';
import { CreatePostScreen } from '../screens/CreatePostScreen';
import { ChatbotScreen } from '../screens/ChatbotScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const isInitialized = useAuthStore(state => state.isInitialized);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const hasCompletedOnboarding = useAppStore(state => state.hasCompletedOnboarding);

  if (!isInitialized) {
    return <SplashScreen />;
  }

  if (!isAuthenticated) {
    return <AuthNavigator />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!hasCompletedOnboarding ? (
        <Stack.Screen name="Permissions" component={PermissionsScreen} />
      ) : (
        <>
          <Stack.Screen name="MainTabs" component={BottomTabs} />
          <Stack.Screen 
            name="Camera" 
            component={CameraScreen} 
            options={{ animation: 'fade' }} 
          />
          <Stack.Screen 
            name="ImagePreview" 
            component={ImagePreviewScreen} 
            options={{ animation: 'fade' }} 
          />
          <Stack.Screen 
            name="Analyzing" 
            component={AnalyzingScreen} 
            options={{ animation: 'fade' }} 
          />
          <Stack.Screen 
            name="ScanResult" 
            component={ResultScreen} 
            options={{ animation: 'slide_from_bottom' }} 
          />
          <Stack.Screen 
            name="CreatePost" 
            component={CreatePostScreen} 
            options={{ animation: 'slide_from_bottom' }} 
          />
          <Stack.Screen 
            name="Chatbot" 
            component={ChatbotScreen} 
            options={{ animation: 'slide_from_bottom' }} 
          />
          <Stack.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{ animation: 'slide_from_right' }} 
          />
        </>
      )}
    </Stack.Navigator>
  );
};
