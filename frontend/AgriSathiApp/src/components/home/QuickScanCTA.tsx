import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Scan } from 'lucide-react-native';
import { SubHeading } from '../typography/SubHeading';
import { BodyText } from '../typography/BodyText';
import { Spacer } from '../layout/Spacer';
import { theme } from '../../theme';

interface QuickScanCTAProps {
  onPress: () => void;
}

export const QuickScanCTA: React.FC<QuickScanCTAProps> = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        <Scan size={32} color={theme.colors.primary} />
      </View>
      <Spacer horizontal size="md" />
      <View style={styles.textContainer}>
        <SubHeading style={styles.title}>Scan Crop</SubHeading>
        <BodyText style={styles.subtitle}>Detect disease instantly</BodyText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary + '10', // 10% opacity primary color
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.primary + '30',
    marginBottom: theme.spacing.md,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.background.main,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: theme.colors.primary,
  },
  subtitle: {
    color: theme.colors.text.secondary,
  },
});
