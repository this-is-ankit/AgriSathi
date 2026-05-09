import React from 'react';
import { Users } from 'lucide-react-native';
import { EmptyState } from './EmptyState';

interface EmptyCommunityProps {
  onAskPress?: () => void;
}

export const EmptyCommunity: React.FC<EmptyCommunityProps> = ({ onAskPress }) => {
  return (
    <EmptyState
      icon={Users}
      title="Quiet Community"
      description="Be the first to share an update or ask a question in your local farming community."
      actionLabel={onAskPress ? "Ask a Question" : undefined}
      onAction={onAskPress}
    />
  );
};
