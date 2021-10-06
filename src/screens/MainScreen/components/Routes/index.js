import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import ErrorScreen from 'screens/ErrorScreen';
import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';

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

const LayoutWrapper = ({ children }) => children;

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
      <LayoutWrapper>
        <Switch>
          {renderRoutes(isAuth, PUBLIC_ROUTES, PublicRoute)}
          {renderRoutes(isAuth, PRIVATE_ROUTES, PrivateRoute)}
          <Route exact component={ErrorScreen} />
        </Switch>
      </LayoutWrapper>
    </Router>
  );
};

export default Routes;
