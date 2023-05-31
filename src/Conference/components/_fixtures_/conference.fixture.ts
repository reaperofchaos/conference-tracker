import { type Conference } from '../../types/conference.types';

export const conferenceExample: Conference = {
  id: '1',
  name: 'RenderATL',
  description: '',
  website: 'https://www.renderatl.com',
  location: { city: 'Atlanta', state: 'GA', country: 'USA' },
  dateStart: new Date('May 31, 2022'),
  dateEnd: new Date('June 2nd, 2022')
};
