import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseCard } from './BaseCard';
import { Heading } from '../typography/Heading';
import { BodyText } from '../typography/BodyText';
import { theme } from '../../theme';
import { Sun, CloudRain } from 'lucide-react-native';

interface WeatherCardProps {
  temperature: string;
  condition: string;
  location: string;
  icon?: 'sun' | 'rain'; // Simplified for now
  onPress?: () => void;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ 
  temperature, 
  condition, 
  location, 
  icon = 'sun',
  onPress 
}) => {
  return (
    <BaseCard onPress={onPress} style={styles.card}>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Heading>{temperature}</Heading>
          <BodyText weight="medium" color={theme.colors.text.primary}>{condition}</BodyText>
          <BodyText size="standard">{location}</BodyText>
        </View>
        <View style={styles.iconContainer}>
          {icon === 'sun' ? (
            <Sun size={48} color={theme.colors.status.warning} />
          ) : (
            <CloudRain size={48} color={theme.colors.status.info} />
          )}
        </View>
      </View>
    </BaseCard>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.background.card, // Later can be themed based on weather
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: theme.spacing.lg,
  },
});
