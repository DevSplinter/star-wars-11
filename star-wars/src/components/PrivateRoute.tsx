import { Redirect, Route, useLocation } from 'react-router-dom';
import React from 'react';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  isAuthenticated,
  path,
}) => {
  const location = useLocation();

  return (
    <Route path={path}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
