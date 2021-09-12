import React from 'react';
import { NotFoundWrapper, Header } from './NotFound.styles';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
  return (
    <NotFoundWrapper>
      <Header>404</Header>
      <p>Page not found</p>
    </NotFoundWrapper>
  );
};

export default NotFound;
