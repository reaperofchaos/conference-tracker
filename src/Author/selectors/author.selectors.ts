import { type RootState } from '../../Core/store';

export const selectAllAuthors = (state: RootState) => state.author.authors
