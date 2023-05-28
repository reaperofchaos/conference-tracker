import { createSlice } from '@reduxjs/toolkit';
import { type ConferenceState } from '../types';

const initialState: ConferenceState = {
  conferences: {}
};

export const conferenceSlice = createSlice({
  name: 'conferences',
  initialState,
  reducers: {
    createConference: (state, action) => {},
    updateConference: (state, action) => {},
    getAllConferences: (state, action) => {},
    getConferenceById: (state, action) => {},
    setConferences: (state, action) => {
      state.conferences = action.payload;
    },
    addConference: (state, action) => {
      state.conferences[action.payload.id] = action.payload
    }
  }
});

export const { setConferences, addConference, createConference, getAllConferences, getConferenceById } = conferenceSlice.actions;

export default conferenceSlice.reducer;
