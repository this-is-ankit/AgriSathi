import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Platform } from 'react-native';
import { Send } from 'lucide-react-native';
import { theme } from '../../theme';

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() && !disabled) {
      onSend(text.trim());
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type a message..."
        placeholderTextColor={theme.colors.text.tertiary}
        multiline
        maxLength={500}
        editable={!disabled}
      />
      <Pressable 
        style={[styles.sendButton, (!text.trim() || disabled) && styles.sendButtonDisabled]} 
        onPress={handleSend}
        disabled={!text.trim() || disabled}
      >
        <Send size={20} color="#fff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingBottom: Platform.OS === 'ios' ? 30 : theme.spacing.md,
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: 20,
    paddingHorizontal: theme.spacing.md,
    paddingTop: 12,
    paddingBottom: 12,
    minHeight: 44,
    maxHeight: 120,
    color: theme.colors.text.primary,
    fontSize: 16,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.sm,
  },
  sendButtonDisabled: {
    backgroundColor: theme.colors.border,
  },
});
