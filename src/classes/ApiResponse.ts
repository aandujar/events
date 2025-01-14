import type { InfoApi } from '@/classes/InfoApi'

export type APIResponse<T> = {
  data: T
  status: number
}

export type APIResponseList<T> = {
  data: {
    info: InfoApi
    _embedded: T
  }
  status: number
}