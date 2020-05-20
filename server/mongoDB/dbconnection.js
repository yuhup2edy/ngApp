
var MongoClient = require('mongodb').MongoClient;
var url  = "mongodb+srv://sriram:pwsriram@cluster0-ver7x.mongodb.net/test?retryWrites=true&w=majority";
var assert = require('assert');

var connection_options = {
  db:{
    numberOfRetries : 5
  },
  server: {
    auto_reconnect: true,
    poolSize : 40,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketOptions: {
        connectTimeoutMS: 500
    }
  },
  replSet: {},
  mongos: {}
};

function MongoPool(){}

var p_db;

function initPool(cb){
  MongoClient.connect(url, connection_options, function(err, db) {
    if (err) throw err;

    p_db = db;
    
    if(cb && typeof(cb) == 'function')
        cb(p_db);
  });
  return MongoPool;
}

MongoPool.initPool = initPool;

function getInstance(cb){
  if(!p_db){
    initPool(cb)
  }
  else{
    if(cb && typeof(cb) == 'function')
      cb(p_db);
  }
}
MongoPool.getInstance = getInstance;

module.exports = MongoPool;