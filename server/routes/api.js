const express = require('express');
const router = express.Router();
const mongoonse = require("mongoose");
//-- code to first use the model to use the schema --//
const Videos = require('../models/video');

//--- code to connect to db ---- //
const db = "mongodb+srv://sriram:pwsriram@cluster0-ver7x.mongodb.net/test?retryWrites=true&w=majority";
mongoonse.warnings = global.warnings; // to avoid any warnings that mongoose throws during connection

mongoonse.connect(db,function(err) {
    if(err)
    {
        console.log("error encountered while connecting" + err);
    }
    else
    {
        console.log("db connection successful !");

    }
});


// router.get('/',function(req,res) // respond to any request that comes in 
// {
//     res.send('api route works');
// });

// coding a get request from the db
router.get('/videos',function(req,res)
{
    console.log("Get request placed");
    Videos.find({}) // find method with empty input because we are not searching anything 
    .exec(function(err,videos) // execute once we find a specific video (here it's all videos)
    {
        if (err)
        {
            console.log("error fetching the videos" + err);
        }
        else
        {
            res.json(videos);
        }
    }
    );
}
);

module.exports = router; // export the router usage