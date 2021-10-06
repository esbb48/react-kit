import React from 'react';

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <div>
        HomePage
        <button onClick={this.props.handleLogout}>登出</button>
      </div>
    );
  }
}

export default HomeScreen;
