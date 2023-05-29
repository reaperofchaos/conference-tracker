import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest} from 'redux-saga/effects'
import { createAuthor, getAllAuthors, getAuthorById } from "../reducers/author.reducers";
import { CreateNewAuthorPayload, FetchAuthorByIdPayload } from "../types";

function* fetchAuthorById(action: PayloadAction<FetchAuthorByIdPayload>){
    yield "hello"; 

}

function* fetchAllAuthors(){
    yield "hello"; 

}

function* createNewAuthor(action: PayloadAction<CreateNewAuthorPayload>){

    yield "hello"; 
}

export default function* authorSagas(){
    yield takeLatest(createAuthor.type, createNewAuthor);
    yield takeLatest(getAllAuthors.type, fetchAllAuthors);
    yield takeLatest(getAuthorById.type, fetchAllAuthors);
}