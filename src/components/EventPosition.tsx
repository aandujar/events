import { LocationWrapper } from "@/classes/LocationWrapper";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useEffect, useState } from 'react'

    function EventPosition({ locationWrapper }: {locationWrapper: LocationWrapper }) {
        
        const [mapWidth, setMapWidth] = useState<string>('')
        const [mapLeft, setMapLeft] = useState<string>('')
        const markerPosition: [number, number] = [Number(locationWrapper.location.latitude), Number(locationWrapper.location.longitude)]

        const getWindowDimensions = () => {
            const { innerWidth: width } = window;
            return width;
          }


            useEffect(() => {
              setMapWidth(getWindowDimensions() < 500 ? '90%' : '48%' )
              setMapLeft(getWindowDimensions() < 500 ? '30px' : '' )
            }, [getWindowDimensions()]);

            const content = mapWidth.length > 0 ?   <div id="map" style={{ width: mapWidth }}>
            <MapContainer center={markerPosition} zoom={13} scrollWheelZoom={false}  style={{ height: '330px',left: mapLeft, width: mapWidth, position: "absolute"  }}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={markerPosition}></Marker>
            </MapContainer>
           
        </div> : ''


    return (
        <div style={{width: '90%' }}>
            { content }      
        </div>
    )
}

export default EventPosition