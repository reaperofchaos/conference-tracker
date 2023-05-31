import { createSlice } from '@reduxjs/toolkit';
import { type AuthorState } from '../types/author.store.types';

const initialState: AuthorState = {
  authors: {}
};

export const authorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    createAuthor: (state, action) => {},
    updateAuthor: (state, action) => {},
    removeAuthor: (state, action) => {},
    getAllAuthors: (state, action) => {},
    getAuthorById: (state, action) => {},
    addAuthor: (state, action) => {
      state.authors[action.payload.id] = action.payload
    }
  }
});

export const {
  createAuthor,
  updateAuthor,
  getAllAuthors,
  getAuthorById,
  addAuthor
} = authorSlice.actions;

export default authorSlice.reducer;
