import { useRoutes, Navigate } from 'react-router-dom';
// import Layout from 'components/Layout';
import ErrorScreen from 'screens/ErrorScreen';
import HomeScreen from 'screens/HomeScreen';
import LoginScreen from 'screens/LoginScreen';
import PublicLayout from '../PublicLayout';
import PrivateLayout from '../PrivateLayout';
const getRoutes = isAuth => [
  {
    path: 'app',
    element: <PrivateLayout isAuth={isAuth} />,
    children: [
      { path: 'user', element: <HomeScreen /> },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
  {
    path: '/',
    element: <PublicLayout isAuth={isAuth} />,
    children: [
      { path: 'login', element: <LoginScreen /> },
      { path: '404', element: <ErrorScreen /> },
      { path: '/', element: <Navigate to='/login' /> },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
];

const Routes = ({ isAuth }) => {
  const content = useRoutes(getRoutes(isAuth));

  return content;
};

export default Routes;
