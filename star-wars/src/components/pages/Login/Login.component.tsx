import React from 'react';
import { LoginWrapper, StyledCard, StyledForm, Header } from './Login.styles';
import { Button, TextField } from '@material-ui/core';
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
      <StyledCard>
        <Header>Login to continue</Header>
        <StyledForm>
          <TextField
            error={isError}
            label="Login"
            variant="outlined"
            helperText={isError && helperText}
            value={login}
            fullWidth
            onChange={handleLoginChange}
          />
          <TextField
            error={isError}
            label="Password"
            variant="outlined"
            helperText={isError && helperText}
            value={password}
            type="password"
            fullWidth
            onChange={handlePasswordChange}
          />
          <Button onClick={handleOnSubmit} variant="outlined" size="large">
            Login
          </Button>
        </StyledForm>
      </StyledCard>
    </LoginWrapper>
  );
};

export default Login;
