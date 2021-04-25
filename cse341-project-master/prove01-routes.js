const requestHandler = (req, res) => {
    const url = req.url;
    
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Prove 1</title></head>');
        res.write('<body><h1>Enter a Username</h1>');
        res.write('<main><form action="/create-user" method="POST">');
        res.write('<label for="username">Username: </label><input type="text" name="username" id="username">');
        res.write('<button type="submit">Send</button></form></main></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user') { 
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            res.setHeader('Location', '/users');
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Users</title></head>');
            res.write('<h1>List of Users:</h1>');
            res.write('<body><ul><li>User 1</li><li>User 2</li>');
            res.write('<li>');
            res.write(parsedBody.split('=')[1]);
            res.write('</li></ul>');
            res.write('</body>');
            res.write('</html>');
            return res.end();
        }); 
    }
        
    if (url === '/users' ) {
        res.setHeader('Location', '/users');
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Users</title></head>');
            res.write('<h1>List of Users:</h1>');
            res.write('<body><ul>');
            res.write('<li>User 1</li><li>User 2</li>');
            res.write('</ul></body>');
            res.write('</html>');
            return res.end();
     }
    };

exports.handler = requestHandler;