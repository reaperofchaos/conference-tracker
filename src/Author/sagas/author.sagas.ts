import { type PayloadAction } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects'
import { createAuthor, getAllAuthors, getAuthorById } from '../reducers/author.reducers';
import { type CreateNewAuthorPayload, type FetchAuthorByIdPayload } from '../types';

function * fetchAuthorById (action: PayloadAction<FetchAuthorByIdPayload>) {
  yield 'hello';
}

function * fetchAllAuthors () {
  yield 'hello';
}

function * createNewAuthor (action: PayloadAction<CreateNewAuthorPayload>) {
  yield 'hello';
}

const authorSagas = [
  takeLatest(createAuthor.type, createNewAuthor),
  takeLatest(getAllAuthors.type, fetchAllAuthors),
  takeLatest(getAuthorById.type, fetchAuthorById)
]

export default authorSagas;
