import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { ChatBubble } from '../components/chatbot/ChatBubble';
import { ChatInput } from '../components/chatbot/ChatInput';
import { SuggestionChip } from '../components/chatbot/SuggestionChip';
import { TypingIndicator } from '../components/chatbot/TypingIndicator';
import { useChatbotStore, ChatMessage } from '../store/chatbotStore';
import { theme } from '../theme';

export const ChatbotScreen = () => {
  const { messages, suggestions, isTyping, loadHistory, sendMessage } = useChatbotStore();
  const flashListRef = useRef<FlashList<ChatMessage>>(null);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const handleSend = (text: string) => {
    sendMessage(text);
    setTimeout(() => {
      if (flashListRef.current && messages.length > 0) {
        flashListRef.current.scrollToEnd({ animated: true });
      }
    }, 100);
  };

  const renderItem = ({ item }: { item: ChatMessage }) => (
    <ChatBubble message={item.content} isUser={item.role === 'user'} />
  );

  return (
    <ScreenContainer edges={['top']}>
      <ScreenHeader title="AgriSathi Assistant" showBack />
      
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.listContainer}>
          <FlashList
            ref={flashListRef}
            data={messages}
            renderItem={renderItem}
            estimatedItemSize={80}
            keyExtractor={(item) => item._id}
            contentContainerStyle={styles.listContent}
            onContentSizeChange={() => {
              if (messages.length > 0) {
                flashListRef.current?.scrollToEnd({ animated: true });
              }
            }}
          />
          {isTyping && (
            <View style={styles.typingContainer}>
              <TypingIndicator />
            </View>
          )}
        </View>

        {!isTyping && suggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {suggestions.map((chip, idx) => (
                <SuggestionChip key={idx} text={chip} onPress={handleSend} />
              ))}
            </ScrollView>
          </View>
        )}

        <ChatInput onSend={handleSend} disabled={isTyping} />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    padding: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  typingContainer: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  suggestionsContainer: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
  },
});
