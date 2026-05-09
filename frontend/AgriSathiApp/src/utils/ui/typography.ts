import { theme } from '../../theme';
import { moderateScale } from './responsive';

/**
 * Returns a responsive font size based on the theme definitions.
 */
export const getFontSize = (size: keyof typeof theme.typography.sizes) => {
  return moderateScale(theme.typography.sizes[size]);
};

/**
 * Returns a responsive line height based on font size.
 */
export const getLineHeight = (fontSize: number, multiplier = 1.5) => {
  return Math.round(fontSize * multiplier);
};
