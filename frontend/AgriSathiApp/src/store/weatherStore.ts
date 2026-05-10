import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall_prob: number;
  condition: string;
  icon: string;
  location_name: string;
}

export interface Advisory {
  id: string;
  title: string;
  description: string;
  type: string;
  severity: string;
}

interface WeatherState {
  currentWeather: WeatherData | null;
  advisories: Advisory[];
  isLoading: boolean;
  error: string | null;
  lastUpdated: number | null;
  isCached: boolean;

  fetchWeather: (lat: number, lon: number) => Promise<void>;
  loadFromStorage: () => Promise<void>;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  currentWeather: null,
  advisories: [],
  isLoading: false,
  error: null,
  lastUpdated: null,
  isCached: false,

  fetchWeather: async (lat: number, lon: number) => {
    set({ isLoading: true, error: null });
    try {
      const { API_BASE_URL, ENDPOINTS } = require('../api/config');
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.weather.current}?lat=${lat}&lon=${lon}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch weather');
      }
      
      const data = await response.json();
      if (data.success) {
        const payload = {
          currentWeather: data.data.current,
          advisories: data.data.advisories,
          lastUpdated: Date.now(),
          isCached: data.data.cached,
        };
        
        set({ ...payload, isLoading: false });
        
        // Save to offline cache
        await AsyncStorage.setItem('agrisathi_weather_cache', JSON.stringify(payload));
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      // If network fails, we fall back to whatever is loaded in state
      set({ 
        isLoading: false, 
        error: error.message || 'Unable to connect to weather service',
        isCached: true // Assume whatever we have is stale/cached
      });
    }
  },

  loadFromStorage: async () => {
    try {
      const cachedStr = await AsyncStorage.getItem('agrisathi_weather_cache');
      if (cachedStr) {
        const cached = JSON.parse(cachedStr);
        set({
          currentWeather: cached.currentWeather,
          advisories: cached.advisories,
          lastUpdated: cached.lastUpdated,
          isCached: true,
        });
      }
    } catch (e) {
      console.error('Failed to load weather from storage', e);
    }
  }
}));
