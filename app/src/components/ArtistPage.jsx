import { useEffect, useState } from "react";


function ArtistPage() {

    const [artistId, setArtistId] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [bio, setBio] = useState("");

    useEffect(() => {
        async function load() {
            let rawResponse = await fetch('/data/artists/1')
            if (rawResponse.ok) {
                let response = await rawResponse.json();
                setArtistId(response.id)
                setName(response.name)
                setImage(response.image)
                setBio(response.bio)
            }
        }
        load()
    }, [])

    return <>
        <div className="artist-page">
            <div className="artist-image">
                <img src={image} alt="band picture" />
            </div>
            <div className="content">
                <h1 id="artist-name">{name}</h1>
                <div id="event-info">
                    <div id="details">
                        <p>Date and Time</p>
                        <p>Venue and/or live</p>
                    </div>

                    <button>Buy ticket</button>
                    <div id="artist-bio">
                        <p>{bio}</p>
                        <p>{bio}</p>
                        <p>{bio}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <div id="artist-page">
            <div className="mid" id="info">
                

                
                
            </div>
        </div> */}
    </>

}

export default ArtistPage