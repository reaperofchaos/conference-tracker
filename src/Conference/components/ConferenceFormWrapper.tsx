import React from 'react';
import ConferenceForm from './ConferenceForm';
import { useDispatch } from 'react-redux'
import { type Conference } from '../types';
import { createConference } from '../reducers/conference.reducers';
import { Box } from '@mui/material';

const ConferenceFormWrapper = () => {
  const dispatch = useDispatch();

  const cancel = () => {};

  const submit = (conference: Conference) => {
    dispatch(createConference(conference))
  }
  return <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
    <ConferenceForm submit={submit} cancel={cancel} />
    </Box>
}

export default ConferenceFormWrapper;
