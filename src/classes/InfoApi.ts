import { Page } from "@/classes/Page"

export class InfoApi<T> {
    page: Page
    _embedded: T
  
    constructor(page: Page, _embedded: T) {
      this.page = page
      this._embedded = _embedded
    }
  }