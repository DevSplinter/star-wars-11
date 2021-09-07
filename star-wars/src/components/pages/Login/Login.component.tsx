import React from 'react';

interface LoginProps {
  signIn: () => void;
}

const Login: React.FC<LoginProps> = ({ signIn }) => {
  console.log('signIn: ', signIn);
  return <div>aaa</div>;
};

export default Login;
