import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = Dimensions.get('screen').height;

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const WINDOW_HEIGHT = screenHeight;
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 0;
