import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllConferences } from '../selectors/conference.selectors';
import ConferenceList from './ConferenceList';
import { getAllConferences } from '../reducers/conference.reducers';

const ConferenceListWrapper = () => {
  const conferences = useSelector(selectAllConferences);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('looking for conference data');
    dispatch(getAllConferences({}))
  }, [dispatch, getAllConferences])

  return <ConferenceList conferences={conferences} />
}

export default ConferenceListWrapper;
