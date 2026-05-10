import React, { useEffect } from 'react';
import { StyleSheet, View, Pressable, RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Plus } from 'lucide-react-native';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { BodyText } from '../components/typography/BodyText';
import { CommunityPostCard } from '../components/community/CommunityPostCard';
import { useCommunityStore, CommunityPost } from '../store/communityStore';
import { theme } from '../theme';

const CommunityScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { posts, fetchFeed, isRefreshing, loadFromStorage } = useCommunityStore();

  useEffect(() => {
    // Load cached first, then fetch
    loadFromStorage().then(() => fetchFeed(true));
  }, [fetchFeed, loadFromStorage]);

  const handleCreatePost = () => {
    navigation.navigate('CreatePost');
  };

  const renderItem = ({ item }: { item: CommunityPost }) => (
    <CommunityPostCard 
      post={item} 
      onPress={() => {}} // Navigation to post details can go here later
      onCommentPress={() => {}} // Same here
    />
  );

  return (
    <ScreenContainer edges={['top']}>
      <ScreenHeader title="Community" />
      
      <View style={styles.listContainer}>
        <FlashList
          data={posts}
          renderItem={renderItem}
          estimatedItemSize={250}
          keyExtractor={(item) => item._id}
          onEndReached={() => fetchFeed(false)}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={() => fetchFeed(true)} />
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <BodyText align="center" style={styles.emptyText}>
                No posts yet. Be the first to ask a question!
              </BodyText>
            </View>
          }
        />
      </View>

      <Pressable style={styles.fab} onPress={handleCreatePost}>
        <Plus color="#fff" size={24} />
      </Pressable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: theme.colors.background.secondary,
  },
  emptyContainer: {
    padding: theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  emptyText: {
    color: theme.colors.text.tertiary,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default CommunityScreen;

