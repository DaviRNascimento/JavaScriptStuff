const path = require('node:path');

// Plataform specific Separator
console.log(path.sep);

// FILES PATH METHODS (useful when is needed to simplify the file path):

    // Join directory paths
    const filePath = path.join('/Functions/', 'functions.js');
    const base = path.basename(filePath);
    console.log(base);

    // Provides the file path since the main machine's directory
    let absolute = path.resolve(__dirname);
    console.log(absolute);
    absolute = path.resolve(__dirname, 'Functions', 'functions.js');
    console.log(absolute);

//

