import { useEffect, useState } from "react";
import ArrowCircleRight from "../../assets/arrow-circle-right.svg";
import useFetch from "../../hooks/useFetch";
import MapModal from "./MapModal";

export default function Directions(props) {
    const [event, setEvent] = useState("");
    const id = parseInt(props['id']);
    const [show, setShow] = useState(false);
    
    const {
        error,
        isPending,
        data: concert,
    } = useFetch("/data/concert_details");

    useEffect(() => {
        if (!concert) return;
        async function load() {
            setEvent(concert.filter(event => event.id === id));
            console.log(event);
        }
        void load()
    }, [concert])

    console.log(event.direction);
    return <>
        <div className="direction-button" onClick={() => setShow(true)}>Get Directions
        <img src={ArrowCircleRight} id="arrow-circle-right" alt="icon" />
        </div>
        
        <MapModal title="My Modal" onClose={() => setShow(false)} show={show}>
            
        </MapModal>
    </>

}