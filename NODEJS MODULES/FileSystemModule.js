/*
    Asynchronous is a no-blocking architecture, the execution of one task isn't dependent on another;
    Tasks can run simultaneously;

    Synchronous is a block architecture, so the executio of each operaation depends on completing the one before;
    Each task requires an answer before moving on to the next iteration

*/

/*

    readFileSync method read files inside an especific path we give
    writeFileSync method writes a file inside an especific path we give

*/

const { readFileSync, writeFileSync } = require('node:fs');

// READ
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first);
console.log(second);

// WRITE
writeFileSync('./content/result-sync.txt', 'hello man');
const third = readFileSync('./content/result-sync.txt', 'utf-8');
console.log(third);
