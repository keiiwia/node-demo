// let https = require("http");

// import http from "http";
import { createServer } from "http";

let server = createServer((req, res) => { //HTTP LIBRARY, needs to give a function that captures the logic of the entire website, so its still rudimentary
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers); //this is just getting the client-server side's data stuff
    
    res.statusCode = 200; //set status code to 200 if request is good
    
    // res.end("hello from my node server");

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({hello: "world"})); //json version

})

server.listen(3000, () => { //an event listener (higher level listen function, keeps server running until explicit exit)
    console.log("listening on http://localhost:3000");
})