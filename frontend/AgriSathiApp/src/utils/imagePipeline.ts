import ImageResizer from '@bam.tech/react-native-image-resizer';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateImage = async (uri: string, sizeBytes?: number): Promise<ValidationResult> => {
  // Validate basic format extensions natively (or just by string check)
  const isSupported = uri.toLowerCase().endsWith('.jpg') || 
                      uri.toLowerCase().endsWith('.jpeg') || 
                      uri.toLowerCase().endsWith('.png');
  
  if (!isSupported) {
    return { isValid: false, error: 'Unsupported file format. Please use JPG or PNG.' };
  }

  // If size is provided by picker (in bytes), validate it's under 10MB
  if (sizeBytes && sizeBytes > 10 * 1024 * 1024) {
    return { isValid: false, error: 'Image is too large. Maximum size is 10MB.' };
  }

  return { isValid: true };
};

export const compressImage = async (uri: string): Promise<string> => {
  try {
    // Compress to max 1024x1024, 80% quality JPEG
    const result = await ImageResizer.createResizedImage(
      uri,
      1024,
      1024,
      'JPEG',
      80,
      0,
      undefined,
      false, // keep metadata
      { mode: 'contain', onlyScaleDown: true }
    );
    return result.uri;
  } catch (error) {
    console.warn('Image compression failed, using original uri', error);
    return uri; // Graceful degradation
  }
};
