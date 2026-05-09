import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { BodyText } from '../typography/BodyText';
import { LucideIcon } from 'lucide-react-native';

interface WeatherMiniStatProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const WeatherMiniStat: React.FC<WeatherMiniStatProps> = ({ icon: Icon, label, value }) => {
  return (
    <View style={styles.container}>
      <Icon size={16} color={theme.colors.primary} />
      <View style={styles.textContainer}>
        <BodyText size="standard" color={theme.colors.text.tertiary}>{label}</BodyText>
        <BodyText weight="medium">{value}</BodyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.main,
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    flex: 1,
    marginHorizontal: theme.spacing.xs,
  },
  textContainer: {
    marginLeft: theme.spacing.sm,
  },
});
