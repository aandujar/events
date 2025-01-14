
export class PriceRange {
    min: number
    max: number
    currency: string
    type: string
  
    constructor(min: number,
        max: number,
        currency: string,
        type: string) {
      this.min = min
      this.max = max
      this.currency = currency
      this.type = type
       }
  }