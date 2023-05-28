import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllConference } from '../selectors/conference.selectors';
import ConferenceList from './ConferenceList';

const ConferenceListWrapper = () => {
  const conferences = useSelector(selectAllConference);

  return <ConferenceList conferences={conferences} />
}

export default ConferenceListWrapper;
