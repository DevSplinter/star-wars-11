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
import NotFound from './pages/NotFound';
import PrivateRoute from './PrivateRoute';
import { PATHS } from '../const/paths';

interface RoutingProps {}

const Routing: React.FC<RoutingProps> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={PATHS.CHARACTERS} />
        </Route>
        <PrivateRoute
          path={PATHS.CHARACTERS}
          exact
        >
          <People />
        </PrivateRoute>
        <Route path={PATHS.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute
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
