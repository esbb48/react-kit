import React from 'react';
import Routes from './components/Routes';
class MainScreen extends React.PureComponent {
  render() {
    return (
      <div>
        <Routes isAuth={this.props.isAuth} />
      </div>
    );
  }
}

export default MainScreen;
