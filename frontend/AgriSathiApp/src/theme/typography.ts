export const typography = {
  family: {
    primary: 'System', // Fallback to system fonts for performance, Roboto on Android, SF on iOS
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
  },
  sizes: {
    caption: 12,
    bodyStandard: 14,
    bodyLarge: 16,
    headingMedium: 22,
    headingLarge: 28,
  },
};
