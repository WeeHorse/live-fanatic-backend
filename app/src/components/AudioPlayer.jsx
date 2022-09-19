import { useEffect } from "react";
import { useState } from "react";


export default function (props) {

    const id = parseInt(props['id'])

    const audioPlayer = new Audio();
    const [audio, setAudio] = useState({})

    audioPlayer.controls = true

    useEffect(() => {
        async function getAudios() {
            let response = await fetch('/data/audios/')
            if (response.ok) {
                response = await response.json()

                const song = response.filter(event => event.id === id)
                setAudio(song)
                document.querySelector('#audio-container').appendChild(audioPlayer)
                audioPlayer.src = '/data/audio-stream/' + id
            }
        }
        getAudios()
    }, [])

    return <>
        <div id="audio-container" onClick={audioPlayer.play}></div>
    </>
}