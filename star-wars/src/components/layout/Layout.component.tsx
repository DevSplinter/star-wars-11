import React, { useContext } from 'react';
import { LayoutWrapper } from './Layout.styles';
import { Button } from '@material-ui/core';
import { authContext } from '../../context/authContext';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated, signOut } = useContext(authContext);
  return (
    <LayoutWrapper>
      {isAuthenticated && <Button onClick={signOut}>Sign out</Button>}
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
