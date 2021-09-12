import { useState } from 'react';
import { CREDENTIALS } from '../const/credentials';
import { ISignIn } from '../types/types';

export const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const signIn = ({ login, password }: ISignIn): boolean => {
    if (login === CREDENTIALS.LOGIN && password === CREDENTIALS.PASSWORD) {
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  const signOut = () => {
    setAuthenticated(false);
  };

  return {
    isAuthenticated,
    signIn,
    signOut,
  };
};
