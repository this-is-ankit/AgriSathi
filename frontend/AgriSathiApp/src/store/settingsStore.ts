import { create } from 'zustand';

interface SettingsState {
  language: 'en' | 'hi' | 'bn';
  setLanguage: (lang: 'en' | 'hi' | 'bn') => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
}));
