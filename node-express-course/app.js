// const { readFile } = require('node:fs');

// readFile('./etc/passwd/pass.txt', function(err, result) {
//   console.log(result.toString());
// } );

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// }

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// setTimeout(function() {
//   console.log('setTimeout at '+new Date().toTimeString());
// }, 1000);

const http = require('node:http');

const content = '&lt;html&gt;&lt;body&gt;&lt;p&gt;Hello World&lt;/p&gt;&lt;script type=”text/javascript”'
  + '>alert(“Hi!”);&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;'
    
http.createServer((request, response) => {
  response.end(content);
}).listen(8080, 'localhost');

console.log('Server running at http://localhost:8080/.');

