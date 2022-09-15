import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";




export default function ArtistEvents(props) {
    const [events, setEvents] = useState([])
    const id = parseInt(props['id']) 

    const {
        error,
        isPending,
        data: concerts,
      } = useFetch("/data/concert_details");
    

    useEffect(() => {
        if (!id) return;
        async function load() {
            const rawResponse = await fetch('/data/concert_details')
            if (rawResponse.ok) {
                const response = await rawResponse.json();
                const newEvents = response.filter(event => event.artist_id === id);
                newEvents.shift()
                setEvents(newEvents)
            }
        }
        load()
    }, [id])

    return <> <div className="card-container">
    {error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
    {events &&
      events.map((concert) => <Card key={concert} props={concert} />)}
  </div></>
}