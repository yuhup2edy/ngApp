
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('api routing works!');
});

router.get('/videos',function(req,res)
{
    console.log("Get Request Placed");
    const results = client.db("videoPlayer").collection("videos").insertOne(
        {
            title : 'Using Angular Material',
            url : 'https://www.youtube.com/watch?v=wPT3K3w6JtU',
            description : 'Angular Material Tutorial',
            views : 8001
        }
    );
    console.log(`Inserted record with id = " + ${result.insertedId}`);
   }
);

// no more executable past this line

module.exports = router; // export the router usage
