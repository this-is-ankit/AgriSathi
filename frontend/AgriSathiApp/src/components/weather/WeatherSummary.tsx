import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { WeatherCard } from '../cards/WeatherCard';
import { WeatherMiniStat } from './WeatherMiniStat';
import { Droplets, Wind } from 'lucide-react-native';
import { Spacer } from '../layout/Spacer';
import { BodyText } from '../typography/BodyText';
import { useWeatherStore } from '../../store/weatherStore';
import { theme } from '../../theme';

export const WeatherSummary = () => {
  const { currentWeather, isLoading, error, fetchWeather, loadFromStorage, lastUpdated, isCached } = useWeatherStore();

  useEffect(() => {
    loadFromStorage();
    Geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      (geoError) => {
        console.warn('Geolocation error:', geoError.message);
        // Fallback to New Delhi if location denied/failed
        fetchWeather(28.61, 77.20);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [fetchWeather, loadFromStorage]);

  if (isLoading && !currentWeather) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="small" color={theme.colors.primary} />
        <BodyText style={{ marginTop: theme.spacing.sm }}>Fetching weather...</BodyText>
      </View>
    );
  }

  if (error && !currentWeather) {
    return (
      <View style={[styles.container, styles.center]}>
        <BodyText style={{ color: theme.colors.status.danger }}>{error}</BodyText>
      </View>
    );
  }

  if (!currentWeather) return null;

  return (
    <View style={styles.container}>
      <WeatherCard 
        temperature={`${Math.round(currentWeather.temperature)}°C`} 
        condition={currentWeather.condition} 
        location={currentWeather.location_name} 
        icon="sun" // To be dynamic later if we map icons
      />
      <Spacer size="sm" />
      <View style={styles.statsRow}>
        <WeatherMiniStat icon={Droplets} label="Humidity" value={`${currentWeather.humidity}%`} />
        <WeatherMiniStat icon={Wind} label="Rain Prob" value={`${currentWeather.rainfall_prob}%`} />
      </View>
      {isCached && lastUpdated && (
        <Text style={styles.cachedText}>
          Offline Mode • Last updated: {new Date(lastUpdated).toLocaleTimeString()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -theme.spacing.xs,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 120,
  },
  cachedText: {
    fontSize: 12,
    color: theme.colors.text.tertiary,
    marginTop: theme.spacing.sm,
    textAlign: 'center',
  },
});
