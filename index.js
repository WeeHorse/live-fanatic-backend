const express = require("express");
const server = express();
const fs = require("fs");

server.use('/', express.static('examples'))

server.get("/video", function (req, res) {
  // Ensure there is a range given for the video
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  const videoPath = "./video/Chris-Do.mp4";
  const videoSize = fs.statSync("./video/Chris-Do.mp4").size;

  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(res);
});

server.get("/audio", function (req, res) {
  // Ensure there is a range given for the audio
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  const audioPath = "./audio/springtide.mp3";
  const audioSize = fs.statSync("./audio/springtide.mp3").size;

  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, audioSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${audioSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "audio/mp3",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create audio read stream for this particular chunk
  const audioStream = fs.createReadStream(audioPath, { start, end });

  // Stream the audio chunk to the client
  audioStream.pipe(res);
});

server.listen(8000, function () {
  console.log("Listening on port 8000!");
});
