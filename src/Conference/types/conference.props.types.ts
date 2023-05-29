import { type Conference } from './conference.types';

export interface ConferenceFormProps {
  submit: (value: Conference) => void
  cancel: ()=>void; 
}

export interface ConferenceTileProps {
  conference: Conference
  key?: string
}

export interface ConferenceListProps {
  conferences: Record<string, Conference>
}

export interface ConferenceViewProps {
  conference: Conference
}
