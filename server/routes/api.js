const express = require('express');

const router = express.Router();

const mongoonse = require("mongoose");

//-- code to first use the model to use the schema --//
const Videos = require('../models/video');

//--- code to connect to db ---- //
const db = "mongodb+srv://sriram:pwsriram@cluster0-ver7x.mongodb.net/test?retryWrites=true&w=majority";

//const db = "mongodb://sriram:pwsriram@cluster0-shard-00-00-ver7x.mongodb.net:27017,cluster0-shard-00-01-ver7x.mongodb.net:27017,cluster0-shard-00-02-ver7x.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoonse.warnings = global.warnings; // to avoid any warnings that mongoose throws during connection

mongoonse.connect(db,function(err) {
    if(err)
    {
        console.log("error encountered while connecting" + err);
    }
    else
    {
        console.log("db connection successful !");
        //console.log()
    }
});

// const connectDB = async() =>
// {
//     await mongoose.connect(db,
//         { 
//           useUnifiedTopology: true , 
//           useNewUrlParser   : true 
//         });
//     console.log('DB Connection Successful');
// }

//module.exports = connectDB;

router.get('/',function(req,res) // respond to any request that comes in 
{
    res.send('api route works');
});

// coding a get request from the db
router.get('/videos',function(req,res)
{
    console.log("Get request placed for all videos");
    Videos.find({}) // find method with empty input because we are not searching anything 
    .exec(function(err,videos) // execute once we find a specific video (here it's all videos retrieved from the DB)
    {
        if (err)
        {
            console.log("error fetching the videos" + err);
        }
        else
        {
            console.log(res.status);
            res.json(videos);
             
        }
    }
    );
}
);

module.exports = router; // export the router usage