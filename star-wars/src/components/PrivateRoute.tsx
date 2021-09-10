import { Redirect, Route, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { authContext } from '../context/authContext';

interface PrivateRouteProps {
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  ...rest
}) => {
  const { isAuthenticated } = useContext(authContext);
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
