const videoPlayer = document.createElement('video');

videoPlayer.style.width = '100%' // fills the width of the parent

videoPlayer.controls = true; // if we want to use our own controls, set this to false

document.querySelector('#video-container').appendChild(videoPlayer)

function playVideo(id){
  if (videoPlayer.canPlayType('video/mp4')) { // there are other formats that can be switched to
    videoPlayer.setAttribute('src','/data/video-stream/' + id);
  }
}

loadVideos()

async function loadVideos(){
  const response = await fetch('/data/videos/')
  if(response.ok){
    const videos = await response.json()
    for(let video of videos){
      document.querySelector('#videos').insertAdjacentHTML("beforeend", `<a href="#" onclick="playVideo(${video.id})">${video.name}</a><br>`)
    }
  }
}
