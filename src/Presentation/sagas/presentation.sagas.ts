import { type PayloadAction } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects'
import { type CreateNewPresentationPayload, type FetchPresentationByIdPayload } from '../types';
import { createPresentation, getAllPresentations, getPresentationById } from '../reducers/presentation.reducers';

function * fetchPresentationById (action: PayloadAction<FetchPresentationByIdPayload>) {
  yield 'hello';
}

function * fetchAllPresentations () {
  yield 'hello';
}

function * createNewPresentation (action: PayloadAction<CreateNewPresentationPayload>) {
  yield 'hello';
}

const presentationSagas = [
  takeLatest(createPresentation.type, createNewPresentation),
  takeLatest(getAllPresentations.type, fetchAllPresentations),
  takeLatest(getPresentationById.type, fetchPresentationById)
]

export default presentationSagas;
