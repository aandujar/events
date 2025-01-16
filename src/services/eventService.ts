import type { APIResponseList/*, APIResponse*/ } from '@/classes/ApiResponse'
import type { Event } from '@/classes/Event'
import http from '@/http-common'
import { Pagination } from '@/classes/Pagination'

class EventService {
  getAll(pagination: Pagination): Promise<APIResponseList<Event[]>> {
    return http.get('/discovery/v2/events', { params: pagination })
  }
}

export default new EventService()