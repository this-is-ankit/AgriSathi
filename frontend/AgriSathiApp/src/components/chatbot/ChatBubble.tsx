import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BodyText } from '../typography/BodyText';
import { theme } from '../../theme';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {
  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.botContainer]}>
      <View style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}>
        <BodyText style={[styles.text, isUser ? styles.userText : styles.botText]}>
          {message}
        </BodyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: theme.spacing.md,
    flexDirection: 'row',
  },
  userContainer: {
    justifyContent: 'flex-end',
  },
  botContainer: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '80%',
    padding: theme.spacing.md,
    borderRadius: theme.roundness.lg,
  },
  userBubble: {
    backgroundColor: theme.colors.primary,
    borderBottomRightRadius: 4,
  },
  botBubble: {
    backgroundColor: theme.colors.background.secondary,
    borderBottomLeftRadius: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: '#ffffff',
  },
  botText: {
    color: theme.colors.text.primary,
  },
});
