export class InfoApi {
    count: number
    pages: number
    totalElements: number
    totalPages: number
  
    constructor(count: number, pages: number, totalElements: number, totalPages: number) {
      this.count = count
      this.pages = pages
      this.totalElements = totalElements
      this.totalPages = totalPages
    }
  }