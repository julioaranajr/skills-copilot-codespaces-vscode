// Create web server
// Create a web server that listens to requests and responds with a simple HTML page.

// 1. Create a web server
// 2. Listen to requests
// 3. Respond with a simple HTML page
// 4. Send a response with the correct content type
// 5. Send a response with a status code of 200

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end('<h1>Welcome to the server!</h1>');
});

server.listen(3000, 'localhost', () => {
  console.log('Server is running on http://localhost:3000');
});
