import { Outlet, Navigate } from 'react-router-dom';
import {
  LayoutRoot,
  LayoutWrapper,
  LayoutContainer,
  LayoutContent,
} from '../Layout';
import PublicNavbar from './PublicNavbar';

const PublicLayout = ({ isAuth }) => {
  if (isAuth) return <Navigate to='/app/user' />;
  return (
    <LayoutRoot>
      <PublicNavbar />
      <LayoutWrapper>
        <LayoutContainer>
          <LayoutContent>
            <Outlet />
          </LayoutContent>
        </LayoutContainer>
      </LayoutWrapper>
    </LayoutRoot>
  );
};

export default PublicLayout;
