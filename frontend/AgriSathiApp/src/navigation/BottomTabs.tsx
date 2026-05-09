/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Scan, Users, Bell, User } from 'lucide-react-native';

import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import CommunityScreen from '../screens/CommunityScreen';
import AlertsScreen from '../screens/AlertsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { BottomTabParamList } from '../types/navigation';
import { theme } from '../theme';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text.tertiary,
        tabBarStyle: {
          backgroundColor: theme.colors.background.card,
          borderTopColor: theme.colors.border.light,
          elevation: 8,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.family.primary,
          fontSize: theme.typography.sizes.caption,
          fontWeight: theme.typography.weights.medium,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tab.Screen 
        name="Scan" 
        component={ScanScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Scan color={color} size={size} />,
        }}
      />
      <Tab.Screen 
        name="Community" 
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Users color={color} size={size} />,
        }}
      />
      <Tab.Screen 
        name="Alerts" 
        component={AlertsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Bell color={color} size={size} />,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
