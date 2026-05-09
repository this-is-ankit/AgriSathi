import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  card: {
    backgroundColor: theme.colors.background.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.md,
  },
});
