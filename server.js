const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api'); // api is the file where all routes are stored

const port = process.env.port || 3000; // typically you need the cors package to listen to specific port

const app = express(); // create instance of express server

const {MongoClient} = require('mongodb');
const mongoonse = require("mongoose");

app.use(express.static(path.join(__dirname,'dist'))); // done in order to map to the dist folder so that express has access to folder

app.use(bodyParser.urlencoded({extended : true})); // allows the body parser to parse incoming data as url encoded data
app.use(bodyParser.json()); // to parse text like JSON and provides json like experience to work with 

app.use('/api',api); // teach express to use the api route; http://localhost:3000/api will render this option

// for any other route other than api, ask express to render the index.html file in the dist folder

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
});

mongoonse.warnings = global.warnings; // to avoid any warnings that mongoose throws during connection
var mydb = null;

async function startUp() {

    const uri = "mongodb+srv://sriram:pwsriram@cluster0-ver7x.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect(); // to ensure we wait for connection to be established before further execution
        const db = await client.db('videoplayer');
        const collection = await db.collection('videos');
        console.log("Connected");
        app.locals.database = db;
        app.locals.collection = collection; // this is the critical line to pool the connections
        app.listen(port,()=> console.log("Server Started at port:"+ port));   
        //console.log("Connection Summary :- "+ db.serverStatus.connections());
    } catch (e) {
        console.log("error received while connecting to DB" + e);
    } 
    process.on('SIGINT',()=>
    {
        client.close();
        console.log("Received Termination Command, server and db connections closing")
    });

}
startUp().catch(console.error);

// install nodemon using npm install -g nodemon
// if you get error use sudo npm install -g --force nodemon 
// start server  using nodemon server.js


module.exports = app;

//https://www.compose.com/articles/connection-pooling-with-mongodb/