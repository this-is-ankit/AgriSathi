import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScreenContainer } from '../components/layout/ScreenContainer';
import { ScreenHeader } from '../components/layout/ScreenHeader';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { BodyText } from '../components/typography/BodyText';
import { Spacer } from '../layout/Spacer';
import { Image as ImageIcon, X } from 'lucide-react-native';
import { useCommunityStore } from '../store/communityStore';
import { theme } from '../theme';

export const CreatePostScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { createPost } = useCommunityStore();
  const [caption, setCaption] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Hardcoded tags for this phase
  const availableTags = ['Pest', 'Disease', 'Fertilizer', 'Weather', 'General'];
  const [selectedTag, setSelectedTag] = useState<string>('General');

  const handlePickImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo', quality: 0.8 });
    if (result.assets && result.assets[0].uri) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (caption.trim().length < 3) return;
    setIsSubmitting(true);
    try {
      await createPost(caption, [selectedTag], imageUri || undefined);
      navigation.goBack();
    } catch (err) {
      console.warn("Post creation failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScreenContainer edges={['top', 'bottom']}>
      <ScreenHeader title="Ask the Community" showBack />
      
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="What's happening with your crops? Ask a question..."
            multiline
            value={caption}
            onChangeText={setCaption}
            autoFocus
          />
          
          {imageUri && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUri }} style={styles.image} />
              <Pressable style={styles.removeButton} onPress={() => setImageUri(null)}>
                <X color="#fff" size={16} />
              </Pressable>
            </View>
          )}

          <Spacer size="md" />
          <BodyText style={styles.label}>Select a Topic:</BodyText>
          <View style={styles.tagRow}>
            {availableTags.map(tag => (
              <Pressable 
                key={tag} 
                style={[styles.tag, selectedTag === tag && styles.tagSelected]}
                onPress={() => setSelectedTag(tag)}
              >
                <BodyText style={[styles.tagText, selectedTag === tag && styles.tagTextSelected]}>
                  {tag}
                </BodyText>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.toolbar}>
          <Pressable style={styles.iconButton} onPress={handlePickImage}>
            <ImageIcon color={theme.colors.primary} size={24} />
            <BodyText style={styles.iconButtonText}>Add Photo</BodyText>
          </Pressable>
          
          <PrimaryButton 
            title={isSubmitting ? "Posting..." : "Post"} 
            onPress={handleSubmit} 
            disabled={caption.trim().length < 3 || isSubmitting}
            style={styles.postButton}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  input: {
    fontSize: 16,
    color: theme.colors.text.primary,
    minHeight: 120,
    textAlignVertical: 'top',
  },
  imageContainer: {
    marginTop: theme.spacing.md,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: theme.roundness.md,
  },
  removeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
    padding: 4,
  },
  label: {
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.sm,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: theme.colors.background.secondary,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  tagSelected: {
    backgroundColor: theme.colors.primary + '15',
    borderColor: theme.colors.primary,
  },
  tagText: {
    color: theme.colors.text.secondary,
  },
  tagTextSelected: {
    color: theme.colors.primary,
    fontWeight: '500',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButtonText: {
    color: theme.colors.primary,
    fontWeight: '500',
  },
  postButton: {
    minWidth: 100,
  },
});
