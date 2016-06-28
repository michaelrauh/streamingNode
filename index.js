var http = require('http'),
    fs   = require('fs');

var port = process.env.PORT || 5000;

var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';

http.createServer(function(request, response) {

    response.writeHead(200, {
        'Content-Type': 'audio/mpeg'
    });

    var s3 = new AWS.S3();
    var params = {Bucket: 'michaelrauhmusic', Key: 'temptations/my_girl.mp3'};
    s3.getObject(params).createReadStream().pipe(response);
})
.listen(port);
