/*

    Callback function-> is a function that runs when another function is complet;
    Its passed as argument to another function, allowing a function to call another one;
    It can run when another function is finished!

*/

const { readFile, writeFile } = require('node:fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log("Deu merda meu parceiro");
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log("Deu merda no segundo documento meu parceiro");
            return;
        }
        const second = result;
        writeFile(
            './content/third.txt', `This is the third file. this is the first: ${first} and the following is the second: ${second}`,
            { flag: 'a' },
            (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    })
})
