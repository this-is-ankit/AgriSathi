import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AlertCard } from '../cards/AlertCard';
import { EmptyAlerts } from '../feedback/EmptyAlerts';

interface AlertPreviewProps {
  alerts: Array<{ id: string; title: string; description: string; severity: 'high' | 'medium' | 'low' }>;
  onPressAlert?: (id: string) => void;
}

export const AlertPreview: React.FC<AlertPreviewProps> = ({ alerts, onPressAlert }) => {
  if (alerts.length === 0) {
    return <EmptyAlerts />;
  }

  return (
    <View style={styles.container}>
      {alerts.slice(0, 2).map((alert) => (
        <AlertCard
          key={alert.id}
          title={alert.title}
          description={alert.description}
          severity={alert.severity}
          onPress={() => onPressAlert?.(alert.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
