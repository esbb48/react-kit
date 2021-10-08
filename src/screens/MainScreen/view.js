import React from 'react';

import Fetching from './components/Fetching';
import Routes from './components/Routes';
import Snackbar from './components/Snackbar';

class MainScreen extends React.PureComponent {
  render() {
    const { isAuth, isFetching, snackbar } = this.props;
    return (
      <div>
        <Fetching hidden={!isFetching} />
        <Routes isAuth={isAuth} />
        <Snackbar {...snackbar} />
      </div>
    );
  }
}

export default MainScreen;
