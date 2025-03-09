var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World  Newton01\n');
    }).listen(3000);

console.log('Server running Newton01 at http://localhost:3000/');