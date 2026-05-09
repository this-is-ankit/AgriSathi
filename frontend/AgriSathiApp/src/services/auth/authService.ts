import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const authService = {
  /**
   * Sends an OTP to the given phone number.
   * @param phoneNumber Full phone number including country code (e.g., +919876543210)
   * @returns ConfirmationResult to be used for verification
   */
  async sendOtp(phoneNumber: string): Promise<FirebaseAuthTypes.ConfirmationResult> {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      return confirmation;
    } catch (error) {
      console.error('Error sending OTP:', error);
      throw error;
    }
  },

  /**
   * Verifies the OTP entered by the user.
   * @param confirmation The ConfirmationResult object from sendOtp
   * @param code The 6-digit OTP code entered by the user
   */
  async verifyOtp(
    confirmation: FirebaseAuthTypes.ConfirmationResult,
    code: string
  ): Promise<FirebaseAuthTypes.UserCredential> {
    try {
      const credential = await confirmation.confirm(code);
      if (!credential) {
        throw new Error('Invalid OTP');
      }
      return credential;
    } catch (error) {
      console.error('Error verifying OTP:', error);
      throw error;
    }
  },

  /**
   * Logs out the current user.
   */
  async logout(): Promise<void> {
    try {
      await auth().signOut();
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  },
};
