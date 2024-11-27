const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Home page');
    return;
  }
  if (req.url == '/about') {
    res.end('About page');
    //BLOCK THE CODE
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} : ${j}`);
      }
    }
  }
  res.end('Error page');
});

server
  .listen(5000)
  .on('listening', () => console.log('Server on port 5000...'));