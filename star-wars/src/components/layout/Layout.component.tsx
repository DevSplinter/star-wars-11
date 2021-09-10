import React from 'react';
import { LayoutWrapper } from './Layout.styles';
import { Button } from '@material-ui/core';

interface LayoutProps {
  isAuthenticated: boolean;
  signOut: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isAuthenticated,
  signOut,
}) => {
  return (
    <LayoutWrapper>
      {isAuthenticated && <Button onClick={signOut}>Sign out</Button>}
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
