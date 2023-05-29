import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest} from 'redux-saga/effects'
import {  CreateNewPresentationPayload, FetchPresentationByIdPayload } from "../types";
import { createPresentation, getAllPresentations, getPresentationById } from "../reducers/presentation.reducers";

function* fetchPresentationById(action: PayloadAction<FetchPresentationByIdPayload>){
    yield "hello"; 

}

function* fetchAllPresentations(){
    yield "hello"; 

}

function* createNewPresentation(action: PayloadAction<CreateNewPresentationPayload>){

    yield "hello"; 
}

export default function* presentationSagas(){
    yield takeLatest(createPresentation.type, createNewPresentation);
    yield takeLatest(getAllPresentations.type, fetchAllPresentations);
    yield takeLatest(getPresentationById.type, fetchPresentationById);
}