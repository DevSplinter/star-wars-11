import React from 'react';
import { LoginWrapper, StyledForm } from './Login.styles';
import { Button, Card, TextField } from '@material-ui/core';
import { useLogin } from './Login.hooks';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const helperText = 'Login and/or password are incorrect. Please try again.';
  const {
    isError,
    login,
    password,
    handleLoginChange,
    handlePasswordChange,
    handleOnSubmit,
  } = useLogin();

  return (
    <LoginWrapper>
      <Card>
        <h1>Login to continue</h1>
        <StyledForm>
          <TextField
            error={isError}
            label="Login"
            variant="outlined"
            helperText={isError && helperText}
            value={login}
            onChange={handleLoginChange}
          />
          <TextField
            error={isError}
            label="Password"
            variant="outlined"
            helperText={isError && helperText}
            value={password}
            type="password"
            onChange={handlePasswordChange}
          />
          <Button onClick={handleOnSubmit}>Login</Button>
        </StyledForm>
      </Card>
    </LoginWrapper>
  );
};

export default Login;
