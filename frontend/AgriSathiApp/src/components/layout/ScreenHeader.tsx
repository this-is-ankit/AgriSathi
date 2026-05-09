import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { ArrowLeft } from 'lucide-react-native';
import { layoutStyles } from '../../styles/layoutStyles';

interface ScreenHeaderProps {
  title: string;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  onBack?: () => void;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  rightComponent,
  leftComponent,
  onBack,
}) => {
  return (
    <View style={[styles.container, layoutStyles.rowBetween]}>
      <View style={styles.side}>
        {onBack ? (
          <TouchableOpacity onPress={onBack} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <ArrowLeft color={theme.colors.text.primary} size={24} />
          </TouchableOpacity>
        ) : (
          leftComponent
        )}
      </View>
      <View style={layoutStyles.flex1}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.side}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.background.main,
  },
  title: {
    fontSize: theme.typography.sizes.headingMedium,
    fontWeight: theme.typography.weights.semiBold,
    color: theme.colors.text.primary,
    textAlign: 'center',
  },
  side: {
    width: 40, // Fixed width to ensure title stays centered
    alignItems: 'center',
    justifyContent: 'center',
  },
});
