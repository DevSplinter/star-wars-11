import { useState } from 'react';
import { CREDENTIALS } from '../const/credentials';

export const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(true);

  const signIn = ({ login, password }: { login: string; password: string }) => {
    if (login === CREDENTIALS.LOGIN && password === CREDENTIALS.PASSWORD) {
      setAuthenticated(true);
    }
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
