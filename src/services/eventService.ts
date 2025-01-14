import type { APIResponseList/*, APIResponse*/ } from '@/classes/ApiResponse'
import type { Event } from '@/classes/Event'
import http from '@/http-common'

class EventService {
  getAll(): Promise<APIResponseList<Event[]>> {
    return http.get('/discovery/v2/events', { params: { countryCode: 'ES' } })
  }
}

export default new EventService()