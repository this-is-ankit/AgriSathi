import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ChatMessage {
  _id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

interface ChatbotState {
  messages: ChatMessage[];
  suggestions: string[];
  isTyping: boolean;
  error: string | null;

  loadHistory: () => Promise<void>;
  sendMessage: (message: string, contextType?: string, contextData?: any) => Promise<void>;
  clearError: () => void;
}

export const useChatbotStore = create<ChatbotState>((set) => ({
  messages: [],
  suggestions: ['How to treat diseases?', 'What fertilizer is safe?', 'Weather impact?'],
  isTyping: false,
  error: null,

  loadHistory: async () => {
    try {
      const cachedStr = await AsyncStorage.getItem('agrisathi_chat_history');
      if (cachedStr) {
        set({ messages: JSON.parse(cachedStr) });
      }

      const { API_BASE_URL, ENDPOINTS } = require('../api/config');
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.chatbot.history}?limit=50`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data.length > 0) {
          const formatted = data.data.map((m: any, idx: number) => ({
            _id: `msg_${idx}`,
            role: m.role,
            content: m.content,
            timestamp: m.timestamp
          }));
          set({ messages: formatted });
          AsyncStorage.setItem('agrisathi_chat_history', JSON.stringify(formatted));
        }
      }
    } catch (e) {
      console.warn("Failed to load chat history", e);
    }
  },

  sendMessage: async (message: string, contextType?: string, contextData?: any) => {
    const tempId = `temp_${Date.now()}`;
    const userMsg: ChatMessage = { _id: tempId, role: 'user', content: message, timestamp: new Date().toISOString() };
    
    set((state) => ({ 
      messages: [...state.messages, userMsg],
      isTyping: true,
      suggestions: [],
      error: null
    }));

    try {
      const { API_BASE_URL, ENDPOINTS } = require('../api/config');
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.chatbot.message}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, context_type: contextType, context_data: contextData })
      });

      if (!response.ok) throw new Error('Network error');
      
      const data = await response.json();
      if (data.success) {
        const botMsg: ChatMessage = {
          _id: `bot_${Date.now()}`,
          role: 'assistant',
          content: data.data.reply,
          timestamp: new Date().toISOString()
        };
        
        set((state) => {
          const newMessages = [...state.messages, botMsg];
          AsyncStorage.setItem('agrisathi_chat_history', JSON.stringify(newMessages));
          return { 
            messages: newMessages,
            suggestions: data.data.suggestions || [],
            isTyping: false 
          };
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      set({ error: error.message || 'Failed to connect to assistant', isTyping: false });
    }
  },

  clearError: () => set({ error: null })
}));
