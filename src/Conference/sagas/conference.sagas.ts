import { call, takeLatest } from 'redux-saga/effects';
import { createConference, getAllConferences, getConferenceById } from '../reducers/conference.reducers';
import { type PayloadAction } from '@reduxjs/toolkit';
import { type CreateNewConferencePayload, type FetchConferenceByIdPayload } from '../types';
import { fetch } from '../../utils/fetch'
import { type AxiosResponse } from 'axios';
import { type AxiosPayload } from '../../utils/types/payload.types';

function * createNewConference (action: PayloadAction<CreateNewConferencePayload>) {
  yield 'hello';
}

function * fetchConferenceById (action: PayloadAction<FetchConferenceByIdPayload>) {
  yield 'hello';
}

function * fetchAllConferences () {
  console.log('hello');
  console.log('fetcching conferences');
  const payload: AxiosPayload = {
    method: 'get',
    action: getAllConferences.type,
    url: 'http://localhost:8080/conference/'
  }
  const response: AxiosResponse = yield call(fetch, payload)
  console.log('response', response);
  yield 'hello';
}

const conferenceSagas = [
  takeLatest(createConference.type, createNewConference),
  takeLatest(getConferenceById.type, fetchConferenceById),
  takeLatest(getAllConferences.type, fetchAllConferences)
]

export default conferenceSagas
