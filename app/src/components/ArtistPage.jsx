import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtistEvents from "./ArtistEvents";



export default function ArtistPage() {

    const { id } = useParams()
    console.log(id);
    const [artistId, setArtistId] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [bio, setBio] = useState("");

    useEffect(() => {
        async function load() {
            let rawResponse = await fetch(`/data/artists/${id}`)
            if (rawResponse.ok) {
                let response = await rawResponse.json();
                setArtistId(response.id)
                setName(response.name)
                setImage(response.image)
                setBio(response.bio)
            }
        }
        load()
    }, [id])

    // If the fetching of the artist's name etc is not done yet, do not render anything..
    if (!name) return <></>;

    return <>
        <div className="artist-page">
            <div className="artist-image">
                <img src={image} alt="band picture" />
            </div>
            <div className="content">
                <h1 id="artist-name">{name}</h1>
                <div id="event-info">
                    <div id="upcoming">
                        <h1>Upcoming events</h1>
                        <ArtistEvents name={name} />
                    </div>

                    <div id="artist-bio">
                        <p>{bio}</p>
                        <p>{bio}</p>
                        <p>{bio}</p>
                    </div>
                </div>
            </div>
        </div>
    </>

}