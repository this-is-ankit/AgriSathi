// Placeholder for Firebase initialization config if necessary for web/others.
// For React Native, @react-native-firebase/app automatically initializes based on google-services.json and GoogleService-Info.plist.

import auth from '@react-native-firebase/auth';

// Export the auth instance for direct access if needed, but prefer using authService
export const firebaseAuth = auth();
