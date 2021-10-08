import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { createAction } from 'redux/actionUtils';
import Logo from '../Logo';

const PrivateNavbar = ({ onMobileNavOpen, ...rest }) => {
  const dispatch = useDispatch();
  const [notifications] = useState([]);
  const handleLogout = () => {
    dispatch(createAction('LOGOUT')());
  };
  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to='/'>
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color='inherit' size='large'>
            <Badge
              badgeContent={notifications.length}
              color='primary'
              variant='dot'
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit' size='large' onClick={handleLogout}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color='inherit' onClick={onMobileNavOpen} size='large'>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

PrivateNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

export default PrivateNavbar;
