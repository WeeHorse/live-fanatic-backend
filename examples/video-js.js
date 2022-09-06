const videoPlayer = document.createElement('video');

if (videoPlayer.canPlayType('video/mp4')) { // there are other formats that can be switched to
  videoPlayer.setAttribute('src','/data/video-example');
}

//videoPlayer.width = 480; // fixed size
//videoPlayer.height = 320;

videoPlayer.style.width = '100%' // fills the width of the parent

videoPlayer.controls = true; // if we want to use our own controls, set this to false

document.querySelector('#video-container').appendChild(videoPlayer)
