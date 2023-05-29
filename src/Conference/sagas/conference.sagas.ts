import { takeLatest } from "redux-saga/effects";
import { createConference, getAllConferences, getConferenceById } from "../reducers/conference.reducers";
import { PayloadAction } from "@reduxjs/toolkit";
import { CreateNewConferencePayload, FetchConferenceByIdPayload } from "../types";

function* createNewConference(action: PayloadAction<CreateNewConferencePayload>){
    yield "hello";
}

function* fetchConferenceById(action: PayloadAction<FetchConferenceByIdPayload>){
    yield "hello";
}

function* fetchAllConferences(){
    yield "hello";
}


export default function* conferenceSagas(){
    yield takeLatest(createConference.type,createNewConference);
    yield takeLatest(getConferenceById.type, fetchConferenceById);
    yield takeLatest(getAllConferences.type, fetchAllConferences);
}