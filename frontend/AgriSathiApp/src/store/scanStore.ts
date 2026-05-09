import { create } from 'zustand';

export type ScanStatus = 'idle' | 'capturing' | 'previewing' | 'analyzing' | 'success' | 'error';

interface ScanState {
  selectedImageUri: string | null;
  status: ScanStatus;
  error: string | null;
  diseaseName: string | null;
  confidence: number | null;
  recommendations: string[] | null;

  setImage: (uri: string) => void;
  clearImage: () => void;
  setStatus: (status: ScanStatus) => void;
  setError: (error: string) => void;
  setResult: (diseaseName: string, confidence: number, recommendations: string[]) => void;
  reset: () => void;
}

export const useScanStore = create<ScanState>((set) => ({
  selectedImageUri: null,
  status: 'idle',
  error: null,
  diseaseName: null,
  confidence: null,
  recommendations: null,

  setImage: (uri) => set({ selectedImageUri: uri, status: 'previewing', error: null }),
  clearImage: () => set({ selectedImageUri: null, status: 'idle', error: null }),
  setStatus: (status) => set({ status }),
  setError: (error) => set({ error, status: 'error' }),
  setResult: (diseaseName, confidence, recommendations) => 
    set({ diseaseName, confidence, recommendations, status: 'success', error: null }),
  reset: () => set({
    selectedImageUri: null,
    status: 'idle',
    error: null,
    diseaseName: null,
    confidence: null,
    recommendations: null,
  }),
}));
