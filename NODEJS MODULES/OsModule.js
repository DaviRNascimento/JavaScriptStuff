// Using OS built-in module provided by default by node
const { log } = require('node:console');
const os = require('node:os');

// info abour current user
const user = os.userInfo();
console.log(user);

// returns the system uptime in seconds
console.log(os.uptime());

// Informations about the Operating System
const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}

console.log(currentOS);