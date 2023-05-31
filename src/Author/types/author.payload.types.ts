import { type Author } from './author.types'

export interface CreateNewAuthorPayload {
  author: Author
}

export interface FetchAuthorByIdPayload {
  id: string
}
