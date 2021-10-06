import React from 'react';

class LoginScreen extends React.PureComponent {
  render() {
    return (
      <div>
        LoginPage
        <button onClick={this.props.handleLogin}>登入</button>
      </div>
    );
  }
}

export default LoginScreen;
