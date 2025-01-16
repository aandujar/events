export class Pagination {
    page: number
    size: number
    countryCode: string
    apikey: string
  
    constructor(page: number) {
      this.page = page
      this.size = 20
      this.countryCode = 'ES'
      this.apikey = 'wF77kw87Mv0AmThAjgVAUal0iHblWbaD'
    }
  }