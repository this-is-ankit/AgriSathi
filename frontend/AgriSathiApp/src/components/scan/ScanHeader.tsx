import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeft, Flashlight, Image as ImageIcon } from 'lucide-react-native';
import { theme } from '../../theme';
import { SubHeading } from '../typography/SubHeading';

interface ScanHeaderProps {
  onBack: () => void;
  title?: string;
  onToggleFlash?: () => void;
  flashMode?: 'on' | 'off';
  onGalleryPress?: () => void;
  mode?: 'camera' | 'preview';
}

export const ScanHeader: React.FC<ScanHeaderProps> = ({ 
  onBack, 
  title, 
  onToggleFlash, 
  flashMode,
  onGalleryPress,
  mode = 'camera'
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: Math.max(insets.top, 16) }]}>
      <TouchableOpacity onPress={onBack} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <ArrowLeft color={theme.colors.text.inverse} size={28} />
      </TouchableOpacity>

      {title && <SubHeading color={theme.colors.text.inverse}>{title}</SubHeading>}

      <View style={styles.rightActions}>
        {mode === 'camera' && onGalleryPress && (
          <TouchableOpacity onPress={onGalleryPress} style={styles.actionButton}>
            <ImageIcon color={theme.colors.text.inverse} size={24} />
          </TouchableOpacity>
        )}
        
        {mode === 'camera' && onToggleFlash && (
          <TouchableOpacity onPress={onToggleFlash} style={styles.actionButton}>
            <Flashlight 
              color={flashMode === 'on' ? theme.colors.status.warning : theme.colors.text.inverse} 
              size={24} 
            />
          </TouchableOpacity>
        )}
        {mode === 'preview' && <View style={{ width: 28 }} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
    zIndex: 10,
    // Add subtle shadow so icons are visible over light images
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: theme.spacing.md,
  },
});
