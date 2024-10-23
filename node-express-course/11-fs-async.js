const { readFile, writeFile } = require('fs');

readFile('./node-express-course/content/first.txt', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile('./node-express-course/content/second.txt', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    
    writeFile('./node-express-course/content/result-async.txt',
      `Here is the result: ${first}, ${second}`
    )
  });
});