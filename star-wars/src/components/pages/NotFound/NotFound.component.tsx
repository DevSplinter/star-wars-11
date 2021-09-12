import React from 'react';
import { NotFoundWrapper, Header } from './NotFound.styles';

const NotFound: React.FC = () => {
  return (
    <NotFoundWrapper>
      <Header>404</Header>
      <p>Page not found</p>
    </NotFoundWrapper>
  );
};

export default NotFound;
