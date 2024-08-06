const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body as "Hello, World!"
  res.end('Hello, World!\n');
});

// Define the port number
const port = 3000;

// Make the server listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
