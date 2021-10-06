import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth) {
          return <Redirect to={{ pathname: '/' }} />;
        }
        return <Component {...props} isAuth={isAuth} />;
      }}
    />
  );
};

export default PublicRoute;
