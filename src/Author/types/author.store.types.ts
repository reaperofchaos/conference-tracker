import { type Author } from './author.types';

export interface AuthorState {
  authors: Record<string, Author>
};
