import { useState } from "react";
import { useEffect } from "react";




export default function ArtistEvents(props) {
    const [events, setEvents] = useState([])

    const id = props['id']

    useEffect(() => {
        if (!id) return;
        async function load() {
            const rawResponse = await fetch('/data/concert_details')
            if (rawResponse.ok) {
                const response = await rawResponse.json();
                const newEvents = response.filter(event => event.artist_id);
                newEvents.shift()
                setEvents(newEvents)
            }
        }
        load()
    }, [id])

    console.log(events);
    return <>{events.map(event =>
        <div className="artist-event" key={event}>

            <div className="info">
                <p id="venue-name">{event.venue_name}</p>
            </div>
            <div className="info">
                <p id="venue-location">{event.location}</p>
            </div>
            <div className="info">
                <p id="date">{event.date}</p>
            </div>
            <div className="info">
                <p id="time-start">{event.time_start}</p>
            </div>
        </div>)}</>
}