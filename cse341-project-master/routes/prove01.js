const fs = require('fs');
const users = ["User 1","User 2"];

const requestHandler = (req, res)=> {
  const url = req.url;
  
  if (url === '/' ) {
    res.write('<html>');
    res.write('<head><title>Prove 01</title></head>');
    res.write('<body><h3><a href="users">Users</a></h3>');
    res.write('<h1>Enter a Username</h1>');
    res.write('<main><form action="/create-user" method="POST">');
    res.write('<label for="userName">Username: </label><br><input type="text" name="userName" id="userName">');
    res.write('<button type="submit">Add User</button></form></main>');   
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/users' ) {
    res.setHeader('Location', '/users');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Users</title></head>');
    res.write('<body><h3><a href="/">Back</a></h3>');
    res.write('<h1>List of Users:</h1>');
    res.write('<main><ul>');
    console.log(users);
    for(let i=0;i<users.length; i++){
    res.write('<li>'+users[i]+'</li>'); }
    res.write('</ul></main></body></html>');
    return res.end();
  }

  if(url === '/create-user'){
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });

    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        users.push(parsedBody.split('=')[1]);
        res.setHeader('Location', '/users');
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><h3><a href="/">Back</a></h3>');
        res.write('<h1>List of Users:</h1>');
        res.write('<main><ul>');
        console.log(users);
        for(let i=0;i<users.length; i++){
        res.write('<li>'+users[i]+'</li>');  }
        res.write('</ul></main></body></html>');
        return res.end();
    });
  }
}

module.exports = requestHandler;