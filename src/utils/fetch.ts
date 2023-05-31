/* eslint-disable @typescript-eslint/return-await */
import { type AxiosPayload } from './types/payload.types';
import axios, { type AxiosResponse } from 'axios';
import { call } from 'redux-saga/effects';

export const FETCH = 'FETCH';

// eslint-disable-next-line @typescript-eslint/ban-types
async function callAxios ({ method, url, data }: AxiosPayload): Promise<AxiosResponse> {
  return axios.request({
    method,
    url,
    data
  }).then((resp) => resp).catch((error) => error)
}

export function * fetch (payload: AxiosPayload):
Generator<any, AxiosResponse, AxiosResponse> {
  const response: AxiosResponse = yield call(callAxios, payload);

  return response;
}
