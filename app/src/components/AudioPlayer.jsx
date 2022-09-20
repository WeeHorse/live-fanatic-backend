import { useEffect } from "react"
import { useState } from "react"

export default function () {

    const audioPlayer = new Audio()
    audioPlayer.controls = true  // if we want to use our own controls, set this to false

    const [songId, setSongId] = useState(0)
    console.log(songId);

    function playAudio() {
        audioPlayer.src = '/data/audio-stream/' + id
        audioPlayer.play()
    }

    useEffect(() => {
        async function loadAudios() {
            const response = await fetch('/data/audios/')
            if (response.ok) {
                const audios = await response.json()
                for (let audio of audios) {
                    const button = document.querySelector('#audios').insertAdjacentHTML("beforeend", `<a href="#" onclick="${setSongId(audio.id)}">${audio.name}</a><br>`)
                }
                document.querySelector('#audio-container').appendChild(audioPlayer)
            }
        }
        loadAudios()
    },[])


    return <>
        <div id="audios">
        </div>
        <div id="audio-container"></div>
    </>

}



