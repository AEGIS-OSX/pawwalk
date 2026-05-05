/**
 * Email validation utility
 * Validates email format using a standard regex pattern
 */

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function getEmailErrorMessage(email: string): string | null {
  if (!email) {
    return 'Please enter a valid email address.';
  }

  if (!validateEmail(email)) {
    return 'Please enter a valid email address.';
  }

  return null;
}
