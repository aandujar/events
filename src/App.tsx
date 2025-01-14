import { useState, useEffect } from 'react'
import { Event, APIResponseList }  from '@/classes/Event'
import  EventService from '@/services/eventService'

import EventItem from '@/components/EventItem.tsx'

function App() {
  const [events, setEvents] = useState<Event[]>([])
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    EventService.getAll()
    .then((resp: APIResponseList<Event[]>) => {
        setEvents(resp.status === 200 ? resp.data._embedded.events : [])
    });
  }, [page]);

  return (
    <div className='flex-row'>
     {events.map((event) => <EventItem key={event.id} eventItem={event}></EventItem>)}
    </div>
  )
}

export default App
