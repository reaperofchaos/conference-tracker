import { type Conference } from './conference.types'

export interface ConferenceState {
  conferences: Record<string, Conference>
};
