import { type RootState } from '../../Core/store';
import { Author } from '../types';

export const selectAllAuthors = (state: RootState)=>state.author.authors