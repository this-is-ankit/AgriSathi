import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CommunityPost {
  _id: string;
  author_id: string;
  author_name: string;
  caption: string;
  image_url?: string;
  location?: { state: string };
  tags: string[];
  comment_count: number;
  helpful_count: number;
  created_at: string;
}

interface CommunityState {
  posts: CommunityPost[];
  isLoading: boolean;
  isRefreshing: boolean;
  page: number;
  hasMore: boolean;
  error: string | null;

  fetchFeed: (refresh?: boolean) => Promise<void>;
  createPost: (caption: string, tags: string[], imageUri?: string) => Promise<void>;
  loadFromStorage: () => Promise<void>;
}

export const useCommunityStore = create<CommunityState>((set, get) => ({
  posts: [],
  isLoading: false,
  isRefreshing: false,
  page: 1,
  hasMore: true,
  error: null,

  fetchFeed: async (refresh = false) => {
    const { page, hasMore, isRefreshing, isLoading, posts } = get();
    
    if (!refresh && !hasMore) return;
    if (isLoading || isRefreshing) return;

    const nextPage = refresh ? 1 : page + 1;
    set(refresh ? { isRefreshing: true, error: null } : { isLoading: true, error: null });

    try {
      const { API_BASE_URL, ENDPOINTS } = require('../api/config');
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.community.feed}?page=${nextPage}&limit=10`);
      
      if (!response.ok) throw new Error('Failed to fetch feed');
      
      const data = await response.json();
      if (data.success) {
        const newPosts = data.data.posts;
        const allPosts = refresh ? newPosts : [...posts, ...newPosts];
        
        set({
          posts: allPosts,
          page: nextPage,
          hasMore: data.data.has_more,
          isLoading: false,
          isRefreshing: false,
        });

        // Offline cache the first page
        if (nextPage === 1) {
          AsyncStorage.setItem('agrisathi_community_feed', JSON.stringify(newPosts));
        }
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      set({ 
        isLoading: false, 
        isRefreshing: false, 
        error: error.message || 'Network error' 
      });
    }
  },

  createPost: async (caption: string, tags: string[], imageUri?: string) => {
    try {
      const { API_BASE_URL, ENDPOINTS } = require('../api/config');
      const formData = new FormData();
      formData.append('caption', caption);
      formData.append('tags', JSON.stringify(tags));
      
      if (imageUri) {
        formData.append('image', {
          uri: imageUri,
          type: 'image/jpeg',
          name: 'post.jpg',
        } as any);
      }

      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.community.post}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      const data = await response.json();
      if (data.success) {
        // Optimistic insert
        const newPost = data.data;
        set((state) => ({ posts: [newPost, ...state.posts] }));
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      throw error;
    }
  },

  loadFromStorage: async () => {
    try {
      const cachedStr = await AsyncStorage.getItem('agrisathi_community_feed');
      if (cachedStr) {
        const cached = JSON.parse(cachedStr);
        set({ posts: cached });
      }
    } catch (e) {
      console.error('Failed to load feed from storage', e);
    }
  }
}));
