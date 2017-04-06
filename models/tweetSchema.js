var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var tweetSchema = new Schema({
    tweet: String,
    tweetID: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

// the schema is useless so far
// we need to create a model using it
var Tweet = mongoose.model('Tweet', tweetSchema);

// make this available to our users in our Node applications
module.exports = Tweet;
