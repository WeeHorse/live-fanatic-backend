import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DirectionButton from './googleMaps/DirectionButton';

export default function () {

    const { id } = useParams()
    const [venue, setVenue] = useState({})

    useEffect(() => {
        async function getVenues() {
            const rawResponse = await fetch('/data/venues/')
            if (rawResponse.ok){
                const response = await rawResponse.json()
                const filteredResponse = response.filter(venue => venue.id == id)
                console.log(filteredResponse);
                if (filteredResponse !== 'ONLINE') {
                     setVenue(filteredResponse[0])
                 }
            }
        }
        getVenues()
    },[id])    

    console.log(venue);

    return <>
        <h1>{venue.name}</h1>
        <p>{venue.location}</p>
        <DirectionButton id={parseInt(id)}/>
    </>
}