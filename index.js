var http = require('http'),
    fs   = require('fs'),
    filePath = './temptations/1-01 My Girl.mp3',
    stat = fs.statSync(filePath);

var port = process.env.PORT || 5000;

http.createServer(function(request, response) {

    response.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    // We replaced all the event handlers with a simple call to util.pump()
    fs.createReadStream(filePath).pipe(response);
})
.listen(port);
