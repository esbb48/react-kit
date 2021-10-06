import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'redux/reducers';
import rootSaga from 'redux/sagas';
import {
  startFetchingMiddleware,
  stopFetchingMiddleware,
} from 'redux/middlewares/fetchingHandlerMiddleware';
import { snackbarMiddleware } from 'redux/middlewares/snackbarMiddleware';
const persistConfig = {
  key: 'react-kit_root',
  storage,
  whitelist: ['auth'],
};
const composeEnhancers =
  process.env.NODE_ENV === 'production'
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [
    startFetchingMiddleware,
    sagaMiddleware,
    stopFetchingMiddleware,
    snackbarMiddleware,
  ];

  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { persistor, store };
};

export default configureStore();
