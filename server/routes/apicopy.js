const express = require('express');
const router = express.Router();
const mongoonse = require("mongoose");

const {MongoClient} = require('mongodb');


//-- code to first use the model to use the schema --//
//const Videos = require('../models/video');

mongoonse.warnings = global.warnings; // to avoid any warnings that mongoose throws during connection


async function main()
{

  const uri = "mongodb+srv://sriram:pwsriram@cluster0-ver7x.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

try
{
    await client.connect(); // to ensure we wait for connection to be established before further execution
    //await listDatabases(client);
    //await insertRecord(client);
    //await insertRecords(client);
    //await updateRecord(client);
    //await upsertRecord(client);
    //await updateMultiple(client);
    await deleteRecord(client);
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
   databaseList = await client.db().admin().listDatabases();
   console.log(databaseList);    
}

async function insertRecord(client)
{
 const result = await client.db("videoplayer").collection("videos").insertOne(
     {
         title : 'Using Angular Material',
         url : 'https://www.youtube.com/watch?v=wPT3K3w6JtU',
         description : 'Angular Material Tutorial',
         views : 8001
     }
 );
 console.log(`Inserted record with id = " + ${result.insertedId}`);
}

async function insertRecords(client)
{
 
 const result = await client.db("videoplayer").collection("videos").insertMany([
    {
        title : "Breaking Bad Bloopers",
        url : "https://www.youtube.com/watch?v=QmHCn5xXHjI",
        description : "Funny bloopers from each season",
        views : 100292
    },
    {
        title : 'Windows Shortcuts you did not know',
        url : 'https://www.youtube.com/watch?v=VeAK7Bv4F1o',
        description : 'life saver tricks',
        views : 8
    }]
 );
 console.log(`${result.insertedCount} records inserted with following id's ${result.insertedIds}`);
}


async function deleteRecord(client)
{
    
    result = await client.db("videoplayer").collection("videos").deleteOne(
        {title: 'Ronaldinho Updated'});
    console.log(`${result.deleteCount} records deleted`);  
    
}

async function updateRecord(client)
{
    
    result = await client.db("videoplayer").collection("videos").updateOne(
        {title: 'Ronaldinho'},{$set: {title : 'Ronaldinho Updated'}}); // remember that the set parm should have the document object
    
 
if (result)
{
    console.log(`${result.matchedCount} documents found based on query`);
    console.log(`${result.modifiedCount} documents found based on query`);
        
}    
else
{
    console.log('Did not find records to update');
}
}

async function upsertRecord(client)
{
    
    result = await client.db("videoplayer").collection("videos").updateOne(
        {title: 'Ronaldinho Updated twice'},
        {$set : 
        {title: 'Ronaldinho Updated',url: 'www.ronaldinho22.com',description: 'Sample Upsert', views: 110}},
        {upsert: true}
    ); // for upsert remember that the $set operator } closes prior to upsert { 
    
 
if (result)
{
    console.log(`${result.matchedCount} documents found based on query`);
    console.log(`${result.modifiedCount} documents found based on query`);
        
}    
else
{
    console.log('Did not find records to update');
}
}

// async function updateMultiple(client)
// {
//     result = await client.db("videoplayer").collection("videos").updateMany(
    
// }

async function findRecord(client)
{
    //result = await client.db("videoplayer").collection("videos").findOne({title : "Java Brains Tutorial"});
    const cursor = await client.db("videoplayer").collection("videos").find({
        
        views : {$gte:25}
    })
        .sort({views : -1});
    
    const results = await cursor.toArray();

    if (results.length > 0)
    {
      console.log("Found results - ");
      results.forEach((result,i) => {
        console.log(`Title :  + ${result.title}`);
        console.log(`URL : + ${result.url}`);
      });
      //res.send(result);
    }
    else
    {
        console.log("No such record with title found");
    }
}

module.exports = router; // export the router usage