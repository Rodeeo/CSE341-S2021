const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Test 1</title></head>');
        res.write('<body><h1>Testing</h1></body>');
        res.write('</html>');
        return res.end();
        //...
    }
    if (url === '/users') {
        //...
        return res.end();
    }
    // sent an HTML response 

});

server.listen(3000);
