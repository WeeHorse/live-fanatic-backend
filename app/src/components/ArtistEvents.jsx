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
        if (!concerts) return;
        async function load() {
            setEvents(concerts.filter(event => event.artist_id === id))
        }
        void load()
    }, [concerts])

    return <> <div className="card-container">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {events &&
            events.map((concert) => <Card key={concert.id} props={concert} />)}
    </div></>
}