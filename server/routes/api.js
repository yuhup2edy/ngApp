
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('api routing works !');
});



router.get('/videos', function (req, res) 
{
    const collection = req.app.locals.collection;
    //var cursor = collection.find({views : {$gte:25}});
    //console.log(req.app.locals.collection);

    const cursor = collection.find({
        
        views : {$gte:25}
    })
        .sort({views : -1});
    
    const results = cursor.toArray();
    
    if (results.length > 0)
    {
      console.log("Found results - ");
      results.forEach((result,i) => 
      {
        console.log(`Title :  + ${result.title}`);
        console.log(`URL : + ${result.url}`);
        console.log(`Popularity : + ${result.popularity}`);
      
      }
     );
    }
    else
    {
        res.send("No record found");
    }
});


// no more executable past this line

module.exports = router; // export the router usage
