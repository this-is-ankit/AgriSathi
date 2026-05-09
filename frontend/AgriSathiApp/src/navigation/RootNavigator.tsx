import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../store/authStore';
import { useAppStore } from '../store/appStore';
import { RootStackParamList } from '../types/navigation';

import { SplashScreen } from '../screens/SplashScreen';
import { AuthNavigator } from './AuthNavigator';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import BottomTabs from './BottomTabs';

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
        <Stack.Screen name="MainTabs" component={BottomTabs} />
      )}
    </Stack.Navigator>
  );
};
