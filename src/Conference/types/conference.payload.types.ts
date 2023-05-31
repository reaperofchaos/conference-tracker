import { type Conference } from './conference.types';

export interface CreateNewConferencePayload {
  conference: Conference
}

export interface FetchConferenceByIdPayload {
  id: string
}
