import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import conference from '../Conference/reducers/conference.reducers'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    conference
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

// sagaMiddleware.run(configurationSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
