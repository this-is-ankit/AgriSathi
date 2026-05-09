import { theme } from '../../theme';
import { moderateScale } from './responsive';

// Helper to scale theme spacing if needed
export const getSpacing = (size: keyof typeof theme.spacing) => {
  return moderateScale(theme.spacing[size]);
};
