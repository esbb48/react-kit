import React from 'react';
import { Box } from '@material-ui/core';
import LoginForm from './components/LoginForm';
class LoginScreen extends React.PureComponent {
  render() {
    return (
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <LoginForm handleLogin={this.props.handleLogin} />
      </Box>
    );
  }
}

export default LoginScreen;
