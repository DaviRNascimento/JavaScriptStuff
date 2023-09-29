/*
    Asynchronous is a no-blocking architecture, the execution of one task isn't dependent on another;
    Tasks can run simultaneously;

    Synchronous is a block architecture, so the execution of each operation depends on completing the one before;
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

/*
    there are more flag commands in nodejs, listed below: 
    'r': Read - Open the file for reading. An error will occur if the file does not exist.

    'r+': Read and Write - Open the file for both reading and writing. An error will occur if the file does not exist.
    'w': Write - Open the file for writing. If the file exists, it will be truncated (emptied). If it doesn't exist, a new file will be created.
    'w+': Read and Write - Open the file for both reading and writing. If the file exists, it will be truncated. If it doesn't exist, a new file will be created.
    'a': Append - Open the file for writing. If the file exists, content will be appended to the end of the file. If it doesn't exist, a new file will be created.
    'a+': Append and Read - Open the file for both reading and writing. If the file exists, content will be appended to the end of the file. If it doesn't exist, a new file will be created.
    'x': Exclusive - Create a new file and open it for writing. If the file already exists, an error will occur.
    'x+': Exclusive and Read - Create a new file and open it for both reading and writing. If the file already exists, an error will occur.
    'as': Atomically create a new file and open it for writing. If the file already exists, an error will occur.
    'ax': Atomically create a new file and open it for writing. If the file already exists, an error will occur.

*/
// WRITE - write the first text file generated and then the second inside only one file
writeFileSync(
    './content/result-sync.txt', `hello man, this is the fist file content: ${first} and this is the second one: ${second}`,
    {flag: 'a'}
);
    
const third = readFileSync('./content/result-sync.txt', 'utf-8');
console.log(third);
