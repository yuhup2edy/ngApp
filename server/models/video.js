const mongoose = require("mongoose");

const schema = mongoose.Schema;

const videoSchema = new schema(
    {
        title : String,
        url : String,
        description : String
    }
);

module.exports = mongoose.model('video',videoSchema,'videoplayer');
// video is name of model, using videoSchema schema and pointing to the videos collection mLab

