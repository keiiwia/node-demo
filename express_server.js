//BASIC SERVER CLIENT-SERVER SIDE

import express from 'express';
import expressws from 'express-ws';

// const express = require('express');
const server = express();
expressws(server);
const port = 3000;

//for the public server
server.use(express.static('public'));

let numsofconnections = [];

//SET UP A WEBSOCKET ENDPOINT
server.ws('/', (ws) => {
  console.log("received websocket connection");
  numsofconnections.push(ws);

  ws.send("hello from the server");

  setInterval ( () =>{
    for (let ws of numsofconnections){
      ws.send(`hello, there are ${numsofconnections.length} connections`); //tracking information/data
    }
  }, 2000) //in milliseconds 

  ws.on("close", ()=> {
    console.log("websocket closed");
    numsofconnections = numsofconnections.filter(c => c !== ws);
  })

  ws.on("message", (data) =>{
    console.log(`message received: ${data}`);
  });
}); //give it a path; this one is just a default




//modular way of structuring: 
// server.get('/', (req, res) => { //this will focus only on the "/", so if you wanted it at a diff url, server.get it
//   res.send('Hello World!')
// });

//testing stuff
// server.get('hello/world', (req, res) => {
//     res.send('hello/world path unlocked!')
//     res.send({message: 'hello/world path unlocked!'}) //auto serializes into a json obj
// });


//starts the server
server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
});
