import { Location } from '@/classes/Location'

export class LocationWrapper {
    venues: Location[]
  
    constructor(
      venues: Location[]
    ) {
      this.venues = venues
    }
  }
  