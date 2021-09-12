import React, { useContext, useState } from 'react';
import { PATHS } from '../../../const/paths';
import { useHistory } from 'react-router-dom';
import { authContext } from '../../../context/authContext';

export const useLogin = () => {
  const { signIn } = useContext(authContext);
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
