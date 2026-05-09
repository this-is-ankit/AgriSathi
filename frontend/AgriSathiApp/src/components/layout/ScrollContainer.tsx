import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, StyleSheet, ViewStyle, ScrollViewProps } from 'react-native';
import { ScreenContainer } from './ScreenContainer';
import { theme } from '../../theme';

interface ScrollContainerProps extends ScrollViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  keyboardShouldPersistTaps?: 'always' | 'never' | 'handled';
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  style,
  contentContainerStyle,
  edges = ['top', 'bottom'],
  keyboardShouldPersistTaps = 'handled',
  ...props
}) => {
  return (
    <ScreenContainer edges={edges} style={[styles.container, style]}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.content, contentContainerStyle]}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          {...props}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  keyboard: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});
