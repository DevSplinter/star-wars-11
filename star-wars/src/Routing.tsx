import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './components/pages/Login';
import People from './components/pages/People';
import Person from './components/pages/Person';
import NotFound from './components/pages/notFound';
import PrivateRoute from './components/PrivateRoute';

interface RoutingProps {
  isAuthenticated: boolean;
  signIn: () => void;
}

const Routing: React.FC<RoutingProps> = ({ isAuthenticated, signIn }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          path="/characters"
          exact
        >
          <People />
        </PrivateRoute>
        <Route path="/login">
          <Login signIn={signIn} />
        </Route>
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          path="/characters/:id"
          children={<Person />}
        />
        <Route path="/not-found">
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
