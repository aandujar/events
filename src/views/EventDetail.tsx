import { useState, useEffect } from 'react'
import { Event, APIResponse }  from '@/classes/Event'
import  EventService from '@/services/eventService'
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import EventPosition from '@/components/EventPosition.tsx'
import EventTickets from '@/components/EventTickets.tsx'  
import instagram from "@/assets/instagram.svg";
import itunes from "@/assets/itunes.svg";
import spotify from "@/assets/spotify.svg";
import twitter from "@/assets/twitter.svg";
import youtube from "@/assets/youtube.svg";
import home from "@/assets/home.svg";
import facebook from "@/assets/facebook.svg";
import { useDispatch, useSelector  } from 'react-redux'
import { setEventDetail } from '@/store/eventSlice.js'

type imgLink = {
  icon: string;
  redirection: Function;
}

function EventDetail() {

    const dispatch = useDispatch()
    const event = useSelector(store => store.eventsReducerStore.eventDetail)
    const [loading, setLoading] = useState<boolean>(true)
    const [links, setLinks] = useState<imgLink[]>([])
    const { id } = useParams();
  
    useEffect(() => {
        setLoading(true)
      EventService.getById(id)
      .then((resp: APIResponse<Event>) => {
        dispatch(setEventDetail(resp.data))

          const link = [];
          
          if(resp.data._embedded?.attractions?.length > 0 && resp.data._embedded?.attractions[0].externalLinks && Object.keys(resp.data._embedded?.attractions[0].externalLinks).length > 0){
            if(resp.data._embedded.attractions[0].externalLinks.homePage?.length > 0){
              const homePage: imgLink = { icon: home, redirection:  () => redirectTo(resp.data._embedded.attractions[0].externalLinks.homePage[0].url)}
              link.push(homePage)
            }
            if(resp.data._embedded.attractions[0].externalLinks.facebook?.length > 0){
              const homePage: imgLink = { icon: facebook, redirection:  () => redirectTo(resp.data._embedded.attractions[0].externalLinks.facebook[0].url)}
              link.push(homePage)
            }
            if(resp.data._embedded.attractions[0].externalLinks.instagram?.length > 0){
              const instagramItem: imgLink = { icon: instagram, redirection:  () => redirectTo(resp.data._embedded.attractions[0].externalLinks.instagram[0].url)}
              link.push(instagramItem)
            }
            if(resp.data._embedded.attractions[0].externalLinks.itunes?.length > 0){
              const itunesItem: imgLink = { icon: itunes, redirection:  () => redirectTo(resp.data._embedded.attractions[0].externalLinks.itunes[0].url)}
              link.push(itunesItem)
            }
            if(resp.data._embedded.attractions[0].externalLinks.spotify?.length > 0){
              const spotifyItem: imgLink = { icon: spotify, redirection:  () => redirectTo(resp.data._embedded.attractions[0].externalLinks.spotify[0].url)}
              link.push(spotifyItem)
            }
            if(resp.data._embedded.attractions[0].externalLinks.twitter?.length > 0){
              const twitterItem: imgLink = { icon: twitter, redirection:  () => redirectTo(resp.data._embedded.attractions[0].externalLinks.twitter[0].url)}
              link.push(twitterItem)
            }
            if(resp.data._embedded.attractions[0].externalLinks.youtube?.length > 0){
              const youtubeItem: imgLink = { icon: youtube, redirection:  () => redirectTo(resp.data._embedded.attractions[0].externalLinks.youtube[0].url)}
              link.push(youtubeItem)
            }
            
            setLinks(link);
          }
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

    const redirectTo = (link: string): void => {
      window.open(link, "__blank");
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
          <div className="event-detail__header__content__data__images">
            { links.map((link, index) => <img key={index} className='event-detail__header__content__data__images__img' src={link.icon} onClick={link.redirection}></img>) }
          </div>
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