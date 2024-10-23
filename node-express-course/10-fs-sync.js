const first = readFileSync('./node-express-course/content/first.txt', 'utf-8');
const second = readFileSync('./node-express-course/content/second.txt', 'utf-8');

writeFileSync(
  './node-express-course/content/result-sync.txt',
  `Here is the result: ${first} and ${second}`,
  { flag: 'a' }
)

console.log({second});
console.log({first});