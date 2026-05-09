import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseCard } from '../cards/BaseCard';
import { SubHeading } from '../typography/SubHeading';
import { BodyText } from '../typography/BodyText';
import { CaptionText } from '../typography/CaptionText';
import { Spacer } from '../layout/Spacer';
import { theme } from '../../theme';
import { EmptyCommunity } from '../feedback/EmptyCommunity';

interface CommunityPreviewProps {
  posts: Array<{
    id: string;
    author: string;
    content: string;
    timeAgo: string;
  }>;
  onPressPost?: (id: string) => void;
  onAskPress?: () => void;
}

export const CommunityPreview: React.FC<CommunityPreviewProps> = ({ posts, onPressPost, onAskPress }) => {
  if (posts.length === 0) {
    return <EmptyCommunity onAskPress={onAskPress} />;
  }

  return (
    <View style={styles.container}>
      {posts.slice(0, 2).map((post) => (
        <BaseCard key={post.id} onPress={() => onPressPost?.(post.id)}>
          <View style={styles.header}>
            <View style={styles.avatarPlaceholder} />
            <Spacer horizontal size="sm" />
            <View style={styles.headerText}>
              <SubHeading>{post.author}</SubHeading>
              <CaptionText>{post.timeAgo}</CaptionText>
            </View>
          </View>
          <Spacer size="xs" />
          <BodyText numberOfLines={2}>{post.content}</BodyText>
        </BaseCard>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.border.light,
  },
  headerText: {
    flex: 1,
  },
});
