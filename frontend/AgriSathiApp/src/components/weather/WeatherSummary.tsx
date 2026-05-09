import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WeatherCard } from '../cards/WeatherCard';
import { WeatherMiniStat } from './WeatherMiniStat';
import { Droplets, Wind } from 'lucide-react-native';
import { Spacer } from '../layout/Spacer';
import { theme } from '../../theme';

export const WeatherSummary = () => {
  return (
    <View style={styles.container}>
      <WeatherCard 
        temperature="28°C" 
        condition="Partly Cloudy" 
        location="Nashik, Maharashtra" 
        icon="sun"
      />
      <Spacer size="sm" />
      <View style={styles.statsRow}>
        <WeatherMiniStat icon={Droplets} label="Humidity" value="65%" />
        <WeatherMiniStat icon={Wind} label="Wind" value="12 km/h" />
      </View>
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
});
