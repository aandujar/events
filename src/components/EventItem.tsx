
import { Event }  from '@/classes/Event'

function EventItem({eventItem}: {eventItem: Event }) {
  return (
    <div className='event'>
     <img className='event__img' src={eventItem.images[0].url}></img>
     <div className='event__content'>
      <div className='event__content__title'>{ eventItem.name }</div>
      <div className='event__content__subtitle'>
        <div>{ eventItem._embedded.venues[0].city.name }</div>
        <div className='event__content__subtitle__separator'></div>
        <div>{ eventItem._embedded.venues[0].address.line1 }</div>
        </div> 
      <div className='event__content__subtitle'>{ eventItem.dates.start.localDate } { eventItem.dates.start.localTime }</div>
     </div>
    </div>
  )
}

export default EventItem
