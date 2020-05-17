const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/apicopy'); // api is the file where all routes are stored

const port = process.env.port || 3000; // typically you need the cors package to listen to specific port

const app = express(); // create instance of express server

app.use(express.static(path.join(__dirname,'dist'))); // done in order to map to the dist folder so that express has access to folder

app.use(bodyParser.urlencoded({extended : true})); // allows the body parser to parse incoming data as url encoded data
app.use(bodyParser.json()); // to parse text like JSON and provides json like experience to work with 

app.use('/api',api); // teach express to use the api route; http://localhost:3000/api will render this option

// for any other route other than api, ask express to render the index.html file in the dist folder

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
});

app.listen(port,()=> console.log("Server Started at port:"+ port));

// install nodemon using npm install -g nodemon
// start server  using nodemon server.js


