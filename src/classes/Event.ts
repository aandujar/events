
import { Img }  from '@/classes/Img'
import { LocationWrapper } from '@/classes/LocationWrapper'
import { SalesDatesWrapper } from '@/classes/SalesDatesWrapper'
import { PriceRange } from '@/classes/PriceRange'
import { DatesWrapper } from '@/classes/DatesWrapper'

export class Event {
    id: number
    name: string
    images: Img[]
    venues: LocationWrapper
    dates: DatesWrapper
    sales: SalesDatesWrapper
    priceRange: PriceRange[]
  
    constructor(
      id: number,
      name: string,
      images: Img[],
      venues: LocationWrapper,
      priceRange: PriceRange[],
      dates: DatesWrapper,
      sales: SalesDatesWrapper
    ) {
      this.id = id
      this.name = name
      this.images = images
      this.venues = venues
      this.priceRange = priceRange
      this.dates = dates
      this.sales = sales
       }
  }