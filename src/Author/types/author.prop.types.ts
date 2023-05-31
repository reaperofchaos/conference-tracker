import { type Author } from './author.types'

export interface AuthorFormProps {
  submit: (value: Author) => void
  cancel: () => void
}
