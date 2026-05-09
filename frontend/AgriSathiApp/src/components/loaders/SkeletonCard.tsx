import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseCard } from '../cards/BaseCard';
import { ShimmerBlock } from './ShimmerBlock';
import { Spacer } from '../layout/Spacer';
import { theme } from '../../theme';

export const SkeletonCard = () => {
  return (
    <BaseCard style={styles.card}>
      <View style={styles.header}>
        <ShimmerBlock width={40} height={40} borderRadius={theme.radius.md} />
        <Spacer horizontal size="sm" />
        <View style={styles.titleContainer}>
          <ShimmerBlock width="60%" height={20} />
          <Spacer size="xs" />
          <ShimmerBlock width="40%" height={14} />
        </View>
      </View>
      <Spacer size="md" />
      <ShimmerBlock width="100%" height={16} />
      <Spacer size="xs" />
      <ShimmerBlock width="80%" height={16} />
    </BaseCard>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
