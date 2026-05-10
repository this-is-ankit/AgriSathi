import { useWeatherStore } from '../store/weatherStore';
import { useCommunityStore } from '../store/communityStore';
import { useChatbotStore } from '../store/chatbotStore';
import NetInfo from '@react-native-community/netinfo';

class SyncService {
  async performBackgroundSync() {
    console.log('[SyncService] Checking network state for sync...');
    const state = await NetInfo.fetch();
    if (!state.isConnected) {
      console.log('[SyncService] Device offline, skipping sync.');
      return;
    }

    console.log('[SyncService] Starting background sync...');
    try {
      // Refresh key states
      const weatherStore = useWeatherStore.getState();
      await weatherStore.fetchWeather(28.6139, 77.2090); // Defaulting to Delhi if mock

      const communityStore = useCommunityStore.getState();
      await communityStore.fetchFeed(true);

      const chatbotStore = useChatbotStore.getState();
      await chatbotStore.loadHistory();

      console.log('[SyncService] Background sync completed successfully.');
    } catch (error) {
      console.error('[SyncService] Error during background sync:', error);
    }
  }
}

export const syncService = new SyncService();
