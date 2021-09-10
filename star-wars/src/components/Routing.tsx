import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './pages/Login';
import People from './pages/People';
import Person from './pages/Person';
import NotFound from './pages/notFound';
import PrivateRoute from './PrivateRoute';
import { PATHS } from '../const/paths';
import { ISignIn } from '../types/types';

interface RoutingProps {
  isAuthenticated: boolean;
  signIn: ({ login, password }: ISignIn) => boolean;
}

const Routing: React.FC<RoutingProps> = ({ isAuthenticated, signIn }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={PATHS.CHARACTERS} />
        </Route>
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          path={PATHS.CHARACTERS}
          exact
        >
          <People />
        </PrivateRoute>
        <Route path={PATHS.LOGIN}>
          <Login signIn={signIn} />
        </Route>
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          path={PATHS.CHARACTER}
          children={<Person />}
        />
        <Route path={PATHS.NOT_FOUND}>
          <NotFound />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
