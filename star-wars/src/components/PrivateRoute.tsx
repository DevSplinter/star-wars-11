import { Redirect, Route, useLocation } from 'react-router-dom';
import React from 'react';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  isAuthenticated,
  ...rest
}) => {
  const location = useLocation();

  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
