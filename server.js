const http = require('http');
const fs = require('fs')
const _ = require('lodash');

const PORT = 3000;

const server = http.createServer((request, response) => {
  const num = _.random(0, 20);
  
  console.log(num);

  //set header content type
  response.setHeader('Content-Type', 'text/html');

  let path = './views/';
  response.statusCode = 200;
  
  switch (request.url) {
    case '/':
      path += 'index.html'
      break;
    case '/about':
      path += 'about.html'
      break;
    case '/about-me':
      path += 'about.html'
      response.statusCode = 301;
      response.setHeader('Location', '/about');
      response.end();
      break;
    default:
      path += '404.html';
      response.statusCode = 404;
      break;
  }

  //send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      response.end();
    } else {
      response.end(data);
    }
  });
});


server.listen(PORT, 'localhost', () => {
  console.log(`listening for repost on port ${PORT}`)
});