import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Heading } from '../typography/Heading';
import { BodyText } from '../typography/BodyText';
import { theme } from '../../theme';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>{title}</Heading>
      <BodyText style={styles.subtitle}>{subtitle}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.xxxl,
    paddingHorizontal: theme.spacing.xl,
  },
  title: {
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    lineHeight: 22,
  },
});
