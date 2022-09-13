import { useState } from "react";
import { useEffect } from "react";




export default function ArtistEvents(props) {
    const [events, setEvents] = useState([])

    const name = props['name']

    useEffect(() => {
        if (!name) return;
        async function load() {
            const rawResponse = await fetch('/data/concert_details')
            if (rawResponse.ok) {
                const response = await rawResponse.json();
                const newEvents = response.filter(event => event.artist_name === name);
                setEvents(newEvents)
            }
        }
        load()
    }, [name])

    return <>{events.map(e =>
        <div className="artist-event" key={e}>
            <p id="venue-name">{e.venue_name}</p>
            <p id="venue-location">{e.location}</p>
            <p id="date">{e.date}</p>
            <p id="time-begin">{e.time_begin}</p>
        </div>)}</>
}