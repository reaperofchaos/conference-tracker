import { createSlice } from '@reduxjs/toolkit';
import { type PresentationState } from '../types';

const initialState: PresentationState = {
  presentations: {}
};

export const presentationSlice = createSlice({
  name: 'presentations',
  initialState,
  reducers: {
    createPresentation: (state, action) => {},
    updatePresentation: (state, action) => {},
    removePresentation: (state, action) => {},
    getAllPresentations: (state, action) => {},
    getPresentationById: (state, action) => {},
    addPresentation: (state, action) => {
      state.presentations[action.payload.id] = action.payload
    }
  }
});

export const {
  getAllPresentations,
  getPresentationById,
  createPresentation,
  updatePresentation,
  addPresentation
} = presentationSlice.actions;

export default presentationSlice.reducer;
