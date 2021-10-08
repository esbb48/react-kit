import { Outlet, Navigate } from 'react-router-dom';

const PrivateLayout = ({ isAuth }) => {
  if (!isAuth) return <Navigate to='/login' />;
  return Outlet;
};

export default PrivateLayout;
