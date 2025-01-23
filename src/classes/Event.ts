
import { Img }  from '@/classes/Img'
import { LocationWrapper } from '@/classes/LocationWrapper'
import { SalesDatesWrapper } from '@/classes/SalesDatesWrapper'
import { PriceRange } from '@/classes/PriceRange'
import { DatesWrapper } from '@/classes/DatesWrapper'
import { Classification } from '@/Classification'

export class Event {
    id: number
    name: string
    images: Img[]
    venues: LocationWrapper
    dates: DatesWrapper
    sales: SalesDatesWrapper
    priceRanges: PriceRange[]
    classifications: Classification[]
  
    constructor(
      id: number,
      name: string,
      images: Img[],
      venues: LocationWrapper,
      priceRanges: PriceRange[],
      dates: DatesWrapper,
      sales: SalesDatesWrapper,
      classifications: Classification[]
    ) {
      this.id = id
      this.name = name
      this.images = images
      this.venues = venues
      this.priceRanges = priceRanges
      this.dates = dates
      this.sales = sales
      this.classifications = classifications
       }
  }