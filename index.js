const express = require("express");
const server = express();
server.use(express.json())
const fs = require("fs");
const db = require("./modules/db.js")('./database/live_fanatic.db')
const port = 3333
const host = `http://localhost:${port}`

// sessions
let cookieParser = require('cookie-parser')
server.use(cookieParser())
let session = require('express-session')
server.use( session( {
  secret: 'keyboard cat jksfj<khsdka',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // set to true with https
    httpOnly: true
  }
}))

// ACL
const acl = require('./services/acl.js')
server.use(acl)

// start
server.listen(port,() => {
  console.log(host)
  console.log('server running on port ' + port)
})

server.use('/', express.static('whatever-directory-for-react-build')) // change 
server.use('/examples', express.static('examples'))

// custom REST API routes

require('./api-description.js')(host, server)
require('./routes/users.js')(server, db)
require('./routes/login.js')(server, db)

// generic REST API one-to-one table mappings

server.get('/data/:table', (req, res)=>{ // but limit which tables to query with ACL
  let query = "SELECT * FROM " + req.params.table
  let result = db.prepare(query).all()
  setResultHeaders(res, result)
  res.json(result)
})

server.get('/data/:table/:id', (req, res)=>{ // but limit which tables to query with ACL
  let query = "SELECT * FROM " + req.params.table + " WHERE id = @id"
  let result = db.prepare(query).all(req.params)
  setResultHeaders(res, result[0])
  res.json(result[0])
})

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
