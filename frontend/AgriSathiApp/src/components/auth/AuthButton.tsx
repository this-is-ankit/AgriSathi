import React from 'react';
import { PrimaryButton } from '../buttons/PrimaryButton';

interface AuthButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export const AuthButton: React.FC<AuthButtonProps> = (props) => {
  return <PrimaryButton {...props} />;
};
