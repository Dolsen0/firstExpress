//import express with npm i express in terminal

//import express. Two options. ES5 uses the 'require' method while ES6 uses "import." Type must be adjusted in package.json. "module" is used for ES6. Either of the below work

//const express = require("express");       //ES5
import express from 'express';                //ES6


//initialize express server
const app = express();


//define routes/requests
//list requests that we want to express to respond to
app.get('/hello', (request, response) =>{
    response.send ("Hello World")
})


//listen to a port
app.listen(3001, () => {
    console.log(`now listening on 3001`)
});

