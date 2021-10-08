import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import MainScreen from 'screens/MainScreen';
import reduxStore from 'redux/configureStore';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={reduxStore.store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={reduxStore.persistor}>
            <CssBaseline />
            <MainScreen />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
