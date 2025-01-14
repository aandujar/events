import { SalesDates } from "@/classes/SalesDates"

export class SalesDatesWrapper {
    public: SalesDates
  
    constructor(dates: SalesDates) {
      this.public = dates
       }
  }