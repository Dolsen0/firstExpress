//import express with npm i express in terminal

//import express. Two options. ES5 uses the 'require' method while ES6 uses "import." Type must be adjusted in package.json. "module" is used for ES6. Either of the below work

//const express = require("express");       //ES5
import express, { response } from 'express';                //ES6


//initialize express server
const app = express();
app.use(express.json());


//define routes/requests
//list requests that we want to express to respond to
app.get('/hello', (request, response) =>{
    response.send ('Hello World')
})


//this is here for an example. usually would be in a database and not on this page
const students = [
    {firstName: 'Jonathan', lastName: 'Vegas'},
    {firstName: 'Bridgette', lastName: 'Lemus'},
    {firstName: 'Mason', lastName: 'Madras'},
    {firstName: 'Logan', lastName: 'McCalley'},
    {firstName: 'Sebastian', lastName: 'Placide'},
];


app.get('/students', (request, response) => {
    response.send(students);
});


//the colon(':') indicates variable and not string
app.get('/students/:firstName', (request, response) => {
    const student = students.find(stud => stud.firstName === request.params.firstName)
    if(!student){
        response.status(404).send({message: "student not found", success: false});
        return
    }
    response.send(student)
})


//Post request. C in CRUD
//add new student (in theory as were not currently using a database)

app.post('/students', (request, response) => {
    const newStudent = request.body;
    students.push(newStudent);
    response.status(201).send(students);
});



//listen to a port
app.listen(3001, () => {
    console.log(`now listening on 3001`)
});