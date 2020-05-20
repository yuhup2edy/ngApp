const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//const videoModel = ('../models/video');

const schema = mongoose.Schema;

        const videoSchema = new schema(
        {
        title : String,
        url : String,
        description : String,
        views : Number,
        popularity : String
        }
    );

var videoModel = mongoose.model('video',videoSchema,'videos');
    
//const url = "mongodb+srv://sriram:pwsriram@cluster0-ver7x.mongodb.net/test?retryWrites=true&w=majority";
const url = "mongodb://sriram:pwsriram@cluster0-shard-00-00-ver7x.mongodb.net:27017,cluster0-shard-00-01-ver7x.mongodb.net:27017,cluster0-shard-00-02-ver7x.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

var db = mongoose.connect(url, {useNewUrlParser: true},function(err)
{
    if (err)
    {
        console.log("Error Connecting to DB;" + err);
    }
    else
    {
        console.log("Inside api.js, no errors");
        mongoose.Promise = global.Promise;
    }
});

router.get('/', function (req, res) {
    res.send('api routing works !');
    //console.log(videoModel);
});

router.get('/videos',function(req,res)
{
    console.log("Get Request Placed");
    
    //videoModel.find({ url: 'https://www.youtube.com/watch?v=DC5wtYGQ7XE' },function(err,returnedVideos)
    mongoose.model('video').find(function(err,returnedVideos) 
              {
                if(err)
                {
                    console.log("Error Encountered during fetch "+ err);
                }
                res.send(returnedVideos);
                });
});

module.exports = router; // export the router usage
