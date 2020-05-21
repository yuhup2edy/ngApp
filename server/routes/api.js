const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

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

// var SomeModelSchema = new mongoose.Schema({
//     a_string: String,
//     a_date: Date
//     });
      
      // Compile model from schema
//var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

var videoModel = mongoose.model('video',videoSchema,'videos');

mongoose.Promise = global.Promise;

const url = "mongodb+srv://sriram:pwsriram@cluster0-ver7x.mongodb.net/videoplayer?retryWrites=true&w=majority";
//                                              
var db = mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true},function(err)
{
    if (err)
    {
        console.log("Error Connecting to DB;" + err);
    }
});

router.get('/', function (req, res) {
    res.send('api routing works !');
});

router.get('/videos',function(req,res)
{
     //videoModel.findOne({url: 'https://www.youtube.com/watch?v=DC5wtYGQ7XE'})
     videoModel.find({})
               .exec(function(error,returnedVideos) {
                if (error)
                {
                    console.log("Error while fetching" + error)
                }
                else
                {
                    res.json(returnedVideos);
                }
            });
        
        //var awesome_instance = new SomeModel({ name: 'awesome' });
        // awesome_instance.save(function (err) {
        // if (err) return handleError(err);
  
});

router.get('/videos/:id',function(req,res)
{
     //videoModel.findOne({url: 'https://www.youtube.com/watch?v=DC5wtYGQ7XE'})
     videoModel.findById(req.params.id)
               .exec(function(error,returnedVideo) {
                if (error)
                {
                    console.log("Error while fetching video by ID" + error)
                }
                else
                {
                    res.json(returnedVideo);
                }
            });
  
});


router.post('/video',function(req,res)
{
     //videoModel.findOne({url: 'https://www.youtube.com/watch?v=DC5wtYGQ7XE'})
    // remember to use the video model to create new instance of the video object to insert / save
    var newVideo = new videoModel;
    newVideo.title       = req.body.title;
    newVideo.url         = req.body.url;
    newVideo.description = req.body.description;
    newVideo.views       = req.body.views;
    newVideo.popularity  = req.body.popularity;
});



module.exports = router; // export the router usage
