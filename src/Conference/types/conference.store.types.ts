import { Author, Presentation } from '../../Presentation/types/Presentation.types'
import { type Conference } from './conference.types'

export interface ConferenceState {
  conferences: Record<string, Conference>
};
