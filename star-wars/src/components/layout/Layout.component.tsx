import React, { useContext } from 'react';
import {
  Content,
  Header,
  LayoutWrapper,
  Container,
  Logo,
  StyledImg,
} from './Layout.styles';
import { Button } from '@material-ui/core';
import { authContext } from '../../context/authContext';
import starWarsLogo from '../../assets/starWarsLogo.svg';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated, signOut } = useContext(authContext);
  return (
    <LayoutWrapper>
      <Container>
        <Header>
          <Logo>
            <StyledImg src={starWarsLogo} alt="star wars logo" />
          </Logo>
          {isAuthenticated && (
            <Button onClick={signOut} variant="outlined" size="large">
              Sign out
            </Button>
          )}
        </Header>
        <Content>{children}</Content>
      </Container>
    </LayoutWrapper>
  );
};

export default Layout;
