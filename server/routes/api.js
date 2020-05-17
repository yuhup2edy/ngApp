const express = require('express');
const router = express.Router();
const mongoonse = require("mongoose");

const {MongoClient} = require('mongodb');


//-- code to first use the model to use the schema --//
//const Videos = require('../models/video');

mongoonse.warnings = global.warnings; // to avoid any warnings that mongoose throws during connection

router.get('/',function(req,res)
{
    res.send('api routing works !');
});


async function main()
{

  const uri = "mongodb+srv://sriram:pwsriram@cluster0-ver7x.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

try
{
    await client.connect(); // to ensure we wait for connection to be established before further execution
    await listDatabases(client);
    await findRecord(client);
 //   await findAll(client);
    
} catch (e)
{
    console.log("error received while connecting to DB" + e);
} finally
{
    await client.close();
}

}
main().catch(console.error);

async function listDatabases(client)
{
 //   databaseList = await client.db().admin().listDatabases();
 //   console.log(databaseList);    
}

async function findRecord(client)
{
//    result = await client.db("videoplayer").collection("videos").findOne({title : "Java Brains Tutorial"});
    result = await client.db("videoplayer").collection("videos").find({});
   
    if (result)
    {
        console.log(result);
    }
    else
    {
        console.log("No such record with title found");
    }
}




module.exports = router; // export the router usage