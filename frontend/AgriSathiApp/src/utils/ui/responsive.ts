import { SCREEN_WIDTH, SCREEN_HEIGHT } from './dimensions';

// Standard base width and height for mobile scaling based on typical design sizes
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Scales size based on screen width. Useful for horizontal margins/padding, width, etc.
 */
export const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

/**
 * Scales size based on screen height. Useful for vertical margins/padding, height, etc.
 */
export const verticalScale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;

/**
 * Moderately scales size. Good for fonts and general scaling where you don't want it to scale linearly.
 */
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

/**
 * Constrains a value between a min and max.
 */
export const clamp = (value: number, min: number, max: number) => {
  'worklet';
  return Math.min(Math.max(value, min), max);
};
