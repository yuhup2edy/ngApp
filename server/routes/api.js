const express = require('express');
const router = express.Router();

router.get('/',function(req,res) // respond to any request that comes in 
{
    res.send('api route works');
});

module.exports = router; // export the router usage