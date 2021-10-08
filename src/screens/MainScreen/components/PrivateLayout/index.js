import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import {
  LayoutRoot,
  LayoutWrapper,
  LayoutContainer,
  LayoutContent,
} from '../Layout';
import PrivateNavbar from './PrivateNavbar';
import PrivateSidebar from './PrivateSidebar';

const PrivateLayoutWrapper = styled(LayoutWrapper)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 256,
  },
}));

const PrivateLayout = ({ isAuth }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  if (!isAuth) return <Navigate to='/login' />;

  return (
    <LayoutRoot>
      <PrivateNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <PrivateSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <PrivateLayoutWrapper>
        <LayoutContainer>
          <LayoutContent>
            <Outlet />
          </LayoutContent>
        </LayoutContainer>
      </PrivateLayoutWrapper>
    </LayoutRoot>
  );
};

export default PrivateLayout;
