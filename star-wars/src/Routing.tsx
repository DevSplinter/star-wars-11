import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import People from './pages/People';
import Person from './pages/Person';
import NotFound from './pages/notFound';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/person/:id">
          <Person />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
