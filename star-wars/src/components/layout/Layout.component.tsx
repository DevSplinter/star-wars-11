import React from 'react';
import { LayoutWrapper } from './Layout.styles';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
