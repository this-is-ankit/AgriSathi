import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { zustandStorage } from '../utils/storage';

interface AuthState {
  isAuthenticated: boolean;
  isInitialized: boolean;
  token: string | null;
  user: { uid: string; phoneNumber?: string | null } | null;
  setAuth: (token: string, user: { uid: string; phoneNumber?: string | null }) => void;
  setInitialized: (initialized: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      isInitialized: false,
      token: null,
      user: null,
      setAuth: (token, user) => set({ isAuthenticated: true, token, user }),
      setInitialized: (isInitialized) => set({ isInitialized }),
      logout: () => set({ isAuthenticated: false, token: null, user: null }),
    }),
    {
      name: 'auth-storage', // unique name
      storage: createJSONStorage(() => zustandStorage),
      // Do not persist isInitialized, always run initialization on boot
      partialize: (state) => ({ 
        isAuthenticated: state.isAuthenticated, 
        token: state.token, 
        user: state.user 
      }),
    }
  )
);

