import { Outlet, Navigate } from 'react-router-dom';

const PublicLayout = ({ isAuth }) => {
  if (isAuth) return <Navigate to='/app/user' />;
  return Outlet;
};

export default PublicLayout;
