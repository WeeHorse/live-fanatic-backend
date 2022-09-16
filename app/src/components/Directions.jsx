import { useEffect, useState } from "react";
import ArrowCircleRight from "../assets/arrow-circle-right.svg";
import useFetch from "../hooks/useFetch";


export default function Directions() {

    const [venue, setVenue] = useState("");
    const [isLoginModalOpen, setIsModalOpen] = useState(false);

    // useEffect(() => {
    //     async function 
    // })

    return <div className="directions-container">

        Directions
        <img src={ArrowCircleRight} id="arrow-circle-right" alt="icon" />
    </div>
    //<button onClick={() => setIsModalOpen(true)}></button>
    //{isLoginModalOpen && <Login setIsModalOpen={setIsModalOpen} />}
}