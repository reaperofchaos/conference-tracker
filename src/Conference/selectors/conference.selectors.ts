import { type RootState } from '../../Core/store';
import { type Conference } from '../types';

export const selectAllConferences = (state: RootState) => state.conference.conferences;
export const selectConferenceById = (state: RootState, id: string): Conference | undefined => state.conference.conferences[id];
export const selectConferenceNames = (state: RootState): string[] => {
  const keys = Object.keys(state.conference.conferences);
  return keys.map((key) => state.conference.conferences[key].name)
}
export const selectConferenceOptions = (state: RootState) => {
  const keys = Object.keys(state.conference.conferences);
  return keys.map((key) => ({ display: state.conference.conferences[key].name, value: key, key }))
}
