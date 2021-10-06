import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from 'components/Layout';
import ErrorScreen from 'screens/ErrorScreen';
import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
const PUBLIC_ROUTES = [
  {
    path: '/login',
    component: LoginScreen,
    requireAuth: false,
  },
];
const PRIVATE_ROUTES = [
  {
    path: '/',
    component: HomeScreen,
    public: true,
  },
];

const renderRoutes = (isAuth, routes, RouteComponent) =>
  routes.map(({ path, component }) => (
    <RouteComponent
      exact
      key={path}
      isAuth={isAuth}
      path={path}
      component={component}
    />
  ));

const Routes = ({ isAuth }) => {
  return (
    <Router>
      <Layout>
        <Switch>
          {renderRoutes(isAuth, PUBLIC_ROUTES, PublicRoute)}
          {renderRoutes(isAuth, PRIVATE_ROUTES, PrivateRoute)}
          <Route exact component={ErrorScreen} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
