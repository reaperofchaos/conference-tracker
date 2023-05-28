export interface Conference {
  name: string
  description?: string
  website?: string
  location?: LocationData
  dateStart?: Date
  dateEnd?: Date
};

export interface LocationData {
  city?: string
  state?: string
  country?: string
}
