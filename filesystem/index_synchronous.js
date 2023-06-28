const fs = require('fs');

const data = fs.readFileSync('./filesystem/notes.txt', 'utf8');
console.log(data);