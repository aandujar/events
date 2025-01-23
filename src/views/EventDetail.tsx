import { useState, useEffect } from 'react'
import { Event, APIResponse }  from '@/classes/Event'
import  EventService from '@/services/eventService'
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import EventPosition from '@/components/EventPosition.tsx'
import EventTickets from '@/components/EventTickets.tsx'

function EventDetail() {

    const [event, setEvent] = useState<Event>()
    const [loading, setLoading] = useState<boolean>(true)
    const { id } = useParams();
  
    useEffect(() => {
        setLoading(true)
      EventService.getById(id)
      .then((resp: APIResponse<Event>) => {
          setEvent(resp.data)
      })
      .finally(() => setTimeout(() => setLoading(false), 1000))
    }, []);

    const formatDate = (date: string, time: string): string => {
      let formattedDate = "";
      if(date) {
        const dateSplitted = date.split("-");
        formattedDate = `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]} `;
      }
      if(time){
        const timeSplitted = time.split(":");
        formattedDate += `${timeSplitted[0]}:${timeSplitted[1]}`
      }
      return formattedDate;
    }

    
    return (
     <> { loading ? <Skeleton count={10} /> :
     <div className='event-detail'>
      <div className='event-detail__header'>
      <div className='event-detail__header__background' style={{backgroundImage: `url(${(event.images[0].url)})`}}></div>
      <div className='event-detail__header__content'>
        <img className='event-detail__header__content__img' src={event.images[0].url}></img>
        <div className='event-detail__header__content__data'>
          <div className='event-detail__header__content__data__title'>{event.name}</div>
          <div className='event-detail__header__content__data__subtitle'>
            <div>{event.classifications[0].segment.name}</div>
            <div className='event-detail__header__content__data__subtitle__separator'></div>
            <div>{event.classifications[0].genre.name}</div>
            <div className='event-detail__header__content__data__subtitle__separator'></div>
            <div>{event.classifications[0].subGenre.name}</div>
          </div>
          <div className='event-detail__header__content__data__subtitle'>{ formatDate(event.dates.start.localDate, event.dates.start.localTime) }</div>
        </div>
        </div>
        </div>
        <div className='event-detail__body'>
          <div className='event-detail__body__item'>
            <EventTickets event={event} style={{ width: '100%' }} formatDate={formatDate} />
          </div>
          <div className='event-detail__body__item'>
            <EventPosition locationWrapper={event._embedded.venues[0]} style={{ width: '100%' }}  />
          </div>
        </div>
        
      </div> 
      }
      </>
    )

}

export default EventDetail