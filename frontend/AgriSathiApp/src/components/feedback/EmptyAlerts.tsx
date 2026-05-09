import React from 'react';
import { CloudSun } from 'lucide-react-native';
import { EmptyState } from './EmptyState';

export const EmptyAlerts = () => {
  return (
    <EmptyState
      icon={CloudSun}
      title="All Clear"
      description="There are no active weather alerts or farming advisories for your region today."
    />
  );
};
