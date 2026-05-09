import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';
import { BodyText } from '../typography/BodyText';

interface ScreenLoaderProps {
  message?: string;
}

export const ScreenLoader: React.FC<ScreenLoaderProps> = ({ message = 'Loading...' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      {message ? (
        <BodyText style={styles.message} align="center">
          {message}
        </BodyText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.main,
  },
  message: {
    marginTop: theme.spacing.md,
  },
});
