import {useEffect} from "react"
import {useState} from "react"
const audioPlayer = new Audio()
    audioPlayer.controls = true

export default function () {

    const [currentSong, setCurrentSong] = useState(0)
    const [songs, setSongs] = useState(null)
    console.log(currentSong);

    const playAudio = () => {
        audioPlayer.src = '/data/audio-stream/' + currentSong
        void audioPlayer.play()
    }

    useEffect(() => {
        async function loadAudios() {
            let response = await fetch('/data/audios/')
            if (response.ok) {
                response = await response.json()
                setSongs(response)
            }
        }

        void loadAudios()
    }, [])

    useEffect(playAudio, [currentSong])

    useEffect(() => {
        if (songs)
            document.querySelector('#audio-container').appendChild(audioPlayer)
    }, [songs])

    if (!songs) return <></>
    return <>
        <div id="audios">
            {songs.map(song => <button onClick={() => setCurrentSong(song.id)}>{song.name}</button>)}
        </div>
        <div id="audio-container"></div>
    </>

}




