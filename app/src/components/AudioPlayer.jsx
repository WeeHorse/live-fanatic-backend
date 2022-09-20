import { useEffect, useState } from "react"

const audioPlayer = new Audio()
audioPlayer.controls = true


//Send in an artist id when calling this componenet

export default function (props) {
    const id = parseInt(props['id'])
    console.log("id: " + id);
    const [currentSong, setCurrentSong] = useState(0)
    const [songs, setSongs] = useState(null)

    const playAudio = () => {
        audioPlayer.src = '/data/audio-stream/' + currentSong
        void audioPlayer.play()
    }

    useEffect(() => {
        async function loadAudios() {
            let response = await fetch(`/data/audios/`)
            if (response.ok) {
                response = await response.json()
                console.log(response);
                const artistSongs = response.filter(event => event.artist_id === id);
                console.log(artistSongs);
                setSongs(artistSongs)
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
    return <div className="audio-player">
        <div id="audios">
            {songs.map(song => <button key={song.id} onClick={() => setCurrentSong(song.id)}>{song.name}</button>)}
        </div>
        <div id="audio-container"></div>
    </div>



}




