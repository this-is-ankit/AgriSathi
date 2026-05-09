import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type BottomTabParamList = {
  Home: undefined;
  Scan: undefined;
  Community: undefined;
  Alerts: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  OtpVerification: {
    phoneNumber: string;
    confirmationObj: FirebaseAuthTypes.ConfirmationResult;
  };
};

export type RootStackParamList = {
  MainTabs: undefined;
  Permissions: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomTabProps<T extends keyof BottomTabParamList> = 
  BottomTabScreenProps<BottomTabParamList, T>;
