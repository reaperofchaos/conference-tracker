import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import conference from '../Conference/reducers/conference.reducers'
import author from '../Author/reducers/author.reducers'
import presentation from '../Presentation/reducers/presentation.reducers'
import authorSagas from '../Author/sagas/author.sagas';
import { all } from 'redux-saga/effects';
import conferenceSagas from '../Conference/sagas/conference.sagas';
import presentationSagas from '../Presentation/sagas/presentation.sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    conference,
    author,
    presentation
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

function* rootSagas(){
  yield all({...authorSagas,
    ...conferenceSagas,
    ...presentationSagas
  }
    )
}
sagaMiddleware.run(rootSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
