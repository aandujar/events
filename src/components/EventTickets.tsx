import { Event } from "@/classes/Event"
import { EventStatusEnum } from "../enum/EventStatusEnum";

    function EventTickets({ event }: {event: Event }) {

        const formatDate = (date: string): string => {
            const totalDateSplitted = date.split("T");
            const dateSplitted = totalDateSplitted[0].split("-");
            const timeSplitted = totalDateSplitted[1].split(":");
            return `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]} ${timeSplitted[0]}:${timeSplitted[1]}`;
        }

        const getStatus = (status: string): string => {
            let statusText: string;

            switch(status){
                case EventStatusEnum.ON_SALE:
                    statusText = "En venta";
                    break;
                case EventStatusEnum.OFF_SALE:
                    statusText = "Agotadas";
                    break;
                case EventStatusEnum.CANCELED:
                    statusText = "Cancelado";
                    break;
                case EventStatusEnum.POSTPONED:
                    statusText = "Pospuesto";
                    break;
                default:
                    statusText = "Aplazado"
                    break;
            }

            return statusText;
        }

        const getStatusColor = (status: string): string => {
            let color: string;

            switch(status){
                case EventStatusEnum.ON_SALE:
                    color = "#30974a";
                    break;
                case EventStatusEnum.OFF_SALE:
                    color = "#d63717";
                    break;
                case EventStatusEnum.CANCELED:
                    color = "#fac853";
                    break;
                default:
                    color = "gray"
                    break;
            }

            return color;
        }

        const formatPrice = (price: number, currency: string): string => {
            return price.toLocaleString('es-ES', {
                style: 'currency',
                currency: currency,
              });
        } 


    return (
        <div className="event-tickets">
            <div className="event-tickets__title">Entradas</div>
            <div className="event-tickets__item">
                <div className="event-tickets__item__text event-tickets__item__text--margin">Estado:</div>
                <div className="event-tickets__item__text">
                    <div className="event-tickets__item__text__rounded" style={{ backgroundColor: getStatusColor(event.dates.status.code) }}></div>
                    <div style={{ color: getStatusColor(event.dates.status.code) }}>{getStatus(event.dates.status.code)}</div>
                </div>
            </div>
            <div className="event-tickets__item">
                <div className="event-tickets__item__text event-tickets__item__text--margin">Rango de precios</div>
                <div className="event-tickets__item__text">{`${formatPrice(event.priceRanges[0].min, event.priceRanges[0].currency)} - ${formatPrice(event.priceRanges[0].max, event.priceRanges[0].currency)}`}</div>
            </div>
            <div className="event-tickets__item">
                <div className="event-tickets__item__text event-tickets__item__text--margin">Inicio de venta:</div>
                <div className="event-tickets__item__text">{formatDate(event.sales.public.startDateTime)}</div>
            </div>
            <div className="event-tickets__item">
                <div className="event-tickets__item__text event-tickets__item__text--margin">Fin de venta:</div>
                <div className="event-tickets__item__text">{formatDate(event.sales.public.endDateTime)}</div>
            </div>
            <div className="event-tickets__title">Ubicación</div>
            <div className="event-tickets__item">
                <div className='event-tickets__item__text event-tickets__item__text'>{event._embedded.venues[0].name}</div>
            </div>
            <div className="event-tickets__item">
                <div className='event-tickets__item__text event-tickets__item__text'>{event._embedded.venues[0].address.line1}</div>
            </div>
            <div className="event-tickets__item">
                <div className='event-tickets__item__text event-tickets__item__text'>{`${event._embedded.venues[0].city.name} (${event._embedded.venues[0].state.name})`}</div>
            </div>
         </div>
    )
}

export default EventTickets