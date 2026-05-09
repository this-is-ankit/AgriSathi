import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { zustandStorage } from '../utils/storage';

interface AppState {
  hasCompletedOnboarding: boolean;
  setHasCompletedOnboarding: (value: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      hasCompletedOnboarding: false,
      setHasCompletedOnboarding: (value) => set({ hasCompletedOnboarding: value }),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

