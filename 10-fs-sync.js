const { readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);
writeFileSync(
    './content/sync-result.txt',
    `Here is the third file. ${first} ${second}`,
    { flag : 'a'}
);
console.log('done with this task');
console.log('starting of another task');
