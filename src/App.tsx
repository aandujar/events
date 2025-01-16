import { useState, useEffect } from 'react'
import { Event, APIResponseList }  from '@/classes/Event'
import  EventService from '@/services/eventService'

import EventItem from '@/components/EventItem.tsx'
import PaginationComponent from '@/components/Pagination.tsx'
import { Pagination } from '@/classes/Pagination'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const [events, setEvents] = useState<Event[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  const changePage = (newPage: string): void => {
  if(newPage === "<<" && page > 1){
    setPage(1);
  }else if(newPage === "<" && page > 1){
    setPage(page - 1);
  }else if(newPage === ">>" && page < totalPages){
    setPage(totalPages);
  }else if(newPage === ">" && page < totalPages){
    setPage(page + 1);
  }
  };

  useEffect(() => {
    if(!loading){
      setLoading(true)
    EventService.getAll(new Pagination(page -1))
    .then((resp: APIResponseList<Event[]>) => {
        setEvents(resp.status === 200 ? resp.data._embedded.events : [])
        setTotalPages(resp.status === 200 ? resp.data.page.totalPages : 0)
    })
    .finally(() => setTimeout(() => setLoading(false), 1000))
  }
  }, [page]);


  return (
    <div className='app'>
     { loading ? <Skeleton count={10} /> : <div className='flex-row w100'>{ events.map((event) => <EventItem key={event.id} eventItem={event}></EventItem>) } </div> }
    { events.length > 0 && !loading ? <PaginationComponent page={page} totalPages={totalPages} changePage={(newPage: string) => changePage(newPage)} /> : '' }
    </div>
  )
}

export default App
