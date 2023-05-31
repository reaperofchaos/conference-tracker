import { type Author } from '../../Author/types';
import { type Presentation } from './Presentation.types';

export interface DropdownOption {
  display: string
  value: string
  key: string
}

export interface AuthorDropdownOption {
  display: string
  value: Author
  key: string
}

export interface PresentationFormProps {
  conferenceOptions: DropdownOption[]
  authorOptions: AuthorDropdownOption[]
  submit: (value: Presentation, conferenceId: string) => void
}
