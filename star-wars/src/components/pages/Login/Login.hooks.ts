import React, { useState } from 'react';
import { PATHS } from '../../../const/paths';
import { ISignIn } from '../../../types/types';
import { useHistory } from 'react-router-dom';

export const useLogin = (signIn: ({ login, password }: ISignIn) => boolean) => {
  const history = useHistory();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(false);

  const handleOnSubmit = () => {
    const isLoggedIn = signIn({ login, password });
    isLoggedIn ? history.push(PATHS.CHARACTERS) : setError(!isLoggedIn);
  };

  const handleLoginChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setError(false);
    setLogin(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setError(false);
    setPassword(event.target.value);
  };

  return {
    isError,
    login,
    password,
    handleLoginChange,
    handlePasswordChange,
    handleOnSubmit,
  };
};
