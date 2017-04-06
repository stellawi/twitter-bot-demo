var TwitterPackage = require('twitter');
var config = require('./config');

var secret = {
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {
    track: 'demo_Tweet'
}, function(stream) {

    stream.on('data', function(tweet) {

        // console.log(tweet);

        //build our reply object
        var statusObj = {
            status: "Hi @" + tweet.user.screen_name + ", How are you?",
            in_reply_to_status_id: tweet.id_str
        }

        //call the post function to tweet something
        Twitter.post('statuses/update', statusObj, function(error, tweetReply, response) {

            //if we get an error print it out
            if (error) {
                console.log(error);
            }

            //print the text of the tweet we sent out
            console.log(tweetReply.text);
        });
    });

    stream.on('error', function(error) {
        //print out the error
        console.log(error);
    });
});
