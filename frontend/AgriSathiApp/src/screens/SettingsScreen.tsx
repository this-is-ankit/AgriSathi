import React, { useState } from 'react';
import { View, StyleSheet, Switch, Alert } from 'react-native';
import { LogOut, Trash2, Bell, Shield, DownloadCloud } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { Section } from '../components/layout/Section';
import { BodyText } from '../components/typography/BodyText';
import { theme } from '../theme';
import { useAuthStore } from '../store/authStore';

const SettingRow = ({ icon: Icon, title, description, control }: any) => (
  <View style={styles.settingRow}>
    <View style={styles.iconContainer}>
      <Icon color={theme.colors.primary} size={24} />
    </View>
    <View style={styles.settingTextContainer}>
      <BodyText style={styles.settingTitle}>{title}</BodyText>
      {description && <BodyText style={styles.settingDescription}>{description}</BodyText>}
    </View>
    {control && <View style={styles.controlContainer}>{control}</View>}
  </View>
);

export const SettingsScreen = () => {
  const logout = useAuthStore(state => state.logout);

  const [pushEnabled, setPushEnabled] = useState(true);
  const [offlineSync, setOfflineSync] = useState(true);

  const handleClearCache = async () => {
    try {
      await AsyncStorage.multiRemove([
        'agrisathi_weather_cache',
        'agrisathi_chat_history',
        'agrisathi_feed_cache'
      ]);
      Alert.alert('Success', 'Local cache has been cleared. App will fetch fresh data on next load.');
    } catch {
      Alert.alert('Error', 'Failed to clear local cache.');
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Logout", 
          style: "destructive",
          onPress: async () => {
            await logout();
            // AuthNavigator will automatically take over due to state change
          }
        }
      ]
    );
  };

  return (
    <ScreenContainer edges={['top']} contentContainerStyle={styles.content}>
      <ScreenHeader title="Settings" showBack />
      
      <Section title="Preferences">
        <SettingRow 
          icon={Bell} 
          title="Push Notifications" 
          description="Receive crop alerts and community updates"
          control={<Switch value={pushEnabled} onValueChange={setPushEnabled} trackColor={{ true: theme.colors.primary }} />}
        />
        <SettingRow 
          icon={DownloadCloud} 
          title="Offline Intelligence" 
          description="Background sync for areas with low connectivity"
          control={<Switch value={offlineSync} onValueChange={setOfflineSync} trackColor={{ true: theme.colors.primary }} />}
        />
      </Section>

      <Section title="Data & Storage">
        <SettingRow 
          icon={Trash2} 
          title="Clear Cache" 
          description="Free up space by removing stale offline data"
          control={<BodyText style={styles.actionText} onPress={handleClearCache}>Clear</BodyText>}
        />
      </Section>

      <Section title="Account">
        <SettingRow 
          icon={Shield} 
          title="Privacy Policy" 
          description="Read our data handling policies"
        />
        <SettingRow 
          icon={LogOut} 
          title="Logout" 
          description="Sign out of AgriSathi securely"
          control={<BodyText style={[styles.actionText, styles.dangerText]} onPress={handleLogout}>Log Out</BodyText>}
        />
      </Section>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: theme.spacing.xl,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: theme.colors.text.primary,
  },
  settingDescription: {
    fontSize: 13,
    color: theme.colors.text.secondary,
    marginTop: 2,
  },
  controlContainer: {
    marginLeft: theme.spacing.md,
  },
  actionText: {
    color: theme.colors.primary,
    fontWeight: '600',
    padding: theme.spacing.sm,
  },
  dangerText: {
    color: theme.colors.status.danger,
  },
});
