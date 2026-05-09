import React from 'react';
import { Scan } from 'lucide-react-native';
import { EmptyState } from './EmptyState';

interface EmptyDetectionsProps {
  onScanPress?: () => void;
}

export const EmptyDetections: React.FC<EmptyDetectionsProps> = ({ onScanPress }) => {
  return (
    <EmptyState
      icon={Scan}
      title="No Recent Detections"
      description="Scan a crop leaf to detect diseases, pests, or nutrient deficiencies."
      actionLabel={onScanPress ? "Scan Crop Now" : undefined}
      onAction={onScanPress}
    />
  );
};
