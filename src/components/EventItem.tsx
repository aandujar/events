
import { Event }  from '@/classes/Event'

function EventItem({ eventItem, goToDetail }: {eventItem: Event, goToDetail: Function }) {

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
    <div className='event' onClick={() => goToDetail(eventItem.id)}>
     <img className='event__img' src={eventItem.images[0].url}></img>
     <div className='event__content'>
      <div className='event__content__title'>{ eventItem.name }</div>
      <div className='event__content__subtitle'>
        <div>{ eventItem._embedded.venues[0].city.name }</div>
        <div className='event__content__subtitle__separator'></div>
        <div>{ eventItem._embedded.venues[0].address.line1 }</div>
        </div> 
      <div className='event__content__subtitle'>{ formatDate(eventItem.dates.start.localDate, eventItem.dates.start.localTime) }</div>
     </div>
    </div>
  )
}

export default EventItem
