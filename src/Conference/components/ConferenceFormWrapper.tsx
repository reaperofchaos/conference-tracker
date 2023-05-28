import React from 'react';
import ConferenceForm from './ConferenceForm';
import { useDispatch } from 'react-redux'
import { type Conference } from '../types';
import { createConference } from '../reducers/conference.reducers';

const ConferenceFormWrapper = () => {
  const dispatch = useDispatch();

  const submit = (conference: Conference) => {
    dispatch(createConference(conference))
  }
  return <ConferenceForm submit={submit} />
}

export default ConferenceFormWrapper;
