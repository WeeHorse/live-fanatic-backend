const audioPlayer = new Audio()
audioPlayer.src = '/data/audio-example'
audioPlayer.controls = true  // if we want to use our own controls, set this to false

document.querySelector('#audio-container').appendChild(audioPlayer)