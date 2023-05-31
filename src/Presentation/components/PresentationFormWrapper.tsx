/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectConferenceOptions } from '../../Conference/selectors/conference.selectors';
import PresentationForm from './PresentationForm';
import { type Presentation } from '../types/Presentation.types';
import { selectAllAuthors } from '../../Author/selectors/author.selectors';
import { createPresentation } from '../reducers/presentation.reducers';

const PresentationFormWrapper = () => {
  const dispatch = useDispatch();
  const conferenceOptions = useSelector(selectConferenceOptions);
  const authors = useSelector(selectAllAuthors);

  const authorList = Object.keys(authors).map((author) => ({
    display: `${authors[author].prefix === undefined ? authors[author].prefix : ''} ${authors[author].firstName} ${authors[author].lastName} ${authors[author].suffix}`,
    value: authors[author],
    key: authors[author].id
  }))

  const submit = (value: Presentation, conferenceId: string) => {
    dispatch(createPresentation({ presentation: value, conferenceId }))
  }

  return <PresentationForm conferenceOptions={conferenceOptions} authorOptions={authorList} submit={submit}/>
}

export default PresentationFormWrapper;
