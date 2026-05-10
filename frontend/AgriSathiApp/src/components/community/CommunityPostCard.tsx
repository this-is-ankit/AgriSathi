import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { BaseCard } from '../cards/BaseCard';
import { SubHeading } from '../typography/SubHeading';
import { BodyText } from '../typography/BodyText';
import { Spacer } from '../layout/Spacer';
import { MessageCircle, ThumbsUp, MapPin } from 'lucide-react-native';
import { theme } from '../../theme';
import { CommunityPost } from '../../store/communityStore';

interface CommunityPostCardProps {
  post: CommunityPost;
  onPress?: () => void;
  onCommentPress?: () => void;
}

export const CommunityPostCard: React.FC<CommunityPostCardProps> = ({ post, onPress, onCommentPress }) => {
  return (
    <BaseCard onPress={onPress} style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <BodyText style={styles.avatarText}>{post.author_name.charAt(0)}</BodyText>
        </View>
        <View style={styles.headerText}>
          <SubHeading>{post.author_name}</SubHeading>
          <View style={styles.metaRow}>
            <BodyText style={styles.timeAgo}>
              {new Date(post.created_at).toLocaleDateString()}
            </BodyText>
            {post.location?.state && (
              <>
                <BodyText style={styles.dot}>•</BodyText>
                <MapPin size={12} color={theme.colors.text.tertiary} />
                <BodyText style={styles.timeAgo}> {post.location.state}</BodyText>
              </>
            )}
          </View>
        </View>
      </View>
      <Spacer size="md" />
      
      {/* Content */}
      <BodyText style={styles.caption}>{post.caption}</BodyText>
      <Spacer size="sm" />
      
      {/* Tags */}
      {post.tags.length > 0 && (
        <View style={styles.tagRow}>
          {post.tags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <BodyText style={styles.tagText}>{tag}</BodyText>
            </View>
          ))}
        </View>
      )}
      
      {post.image_url && (
        <Image 
          source={{ uri: post.image_url }} 
          style={styles.image} 
          resizeMode="cover"
        />
      )}
      <Spacer size="md" />

      {/* Engagement Bar */}
      <View style={styles.engagementBar}>
        <Pressable style={styles.actionButton}>
          <ThumbsUp size={20} color={theme.colors.text.secondary} />
          <Spacer horizontal size="xs" />
          <BodyText style={styles.actionText}>{post.helpful_count || 'Helpful'}</BodyText>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={onCommentPress}>
          <MessageCircle size={20} color={theme.colors.text.secondary} />
          <Spacer horizontal size="xs" />
          <BodyText style={styles.actionText}>{post.comment_count || 'Comment'}</BodyText>
        </Pressable>
      </View>
    </BaseCard>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  headerText: {
    marginLeft: theme.spacing.sm,
    flex: 1,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  timeAgo: {
    fontSize: 12,
    color: theme.colors.text.tertiary,
  },
  dot: {
    fontSize: 12,
    color: theme.colors.text.tertiary,
    marginHorizontal: 4,
  },
  caption: {
    color: theme.colors.text.primary,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: theme.spacing.sm,
  },
  tag: {
    backgroundColor: theme.colors.background.secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagText: {
    fontSize: 12,
    color: theme.colors.text.secondary,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: theme.roundness.md,
    backgroundColor: theme.colors.background.secondary,
  },
  engagementBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: theme.spacing.sm,
    gap: theme.spacing.xl,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
  },
  actionText: {
    color: theme.colors.text.secondary,
  },
});
