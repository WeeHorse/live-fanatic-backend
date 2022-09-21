import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useConcertData } from "../context/EventContext";
import Card from "./Card";
import DirectionButton from './googleMaps/DirectionButton';

export default function () {

    const { id } = useParams()
    const [venue, setVenue] = useState({})

    useEffect(() => {
        async function getVenues() {
            const rawResponse = await fetch('/data/venues/')
            if (rawResponse.ok) {
                const response = await rawResponse.json()
                const filteredResponse = response.filter(venue => venue.id == id)
                if (filteredResponse !== 'ONLINE') {
                    setVenue(filteredResponse[0])
                }
            }
        }
        getVenues()
    }, [id])

    const { data: concerts, error, isPending, getEvents } = useConcertData();
    useEffect(() => {
        getEvents();
    }, []);


    if (!venue) {
        return <></>
    }

    return <>
        <div id="venue-page">
            <section className="header">
                <h1>{venue.name}</h1>
                <div id="venue-info">
                    <DirectionButton id={parseInt(id)} />
                    <span id="address">
                        {venue.location}
                    </span>
                </div>
            </section>
            <div className="event-container">
                <div className="card-container">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {concerts &&
                        concerts.map((concert) => (
                            <Link
                                to={{ pathname: `/events/${concert.id}` }}
                                state={{ concert: concert }}
                                key={concert.id}
                            >
                                <Card concert={concert} />
                            </Link>
                        ))}
                </div>
            </div>
        </div>

    </>
}