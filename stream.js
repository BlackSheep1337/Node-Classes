const fs = require('fs');

const readStream  = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/blog3.txt');

/*
readStream.on('data', (chunck) => {
  console.log('---- NEW CHUNK ----');
  console.log(chunck);

  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunck);
});

*/

readStream.pipe(writeStream);