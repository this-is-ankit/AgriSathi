/**
 * Validates a phone number.
 * Basic validation for Indian numbers (10 digits).
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

/**
 * Formats phone number with country code.
 */
export const formatPhoneNumberWithCode = (phone: string, code: string = '+91'): string => {
  return `${code}${phone}`;
};
