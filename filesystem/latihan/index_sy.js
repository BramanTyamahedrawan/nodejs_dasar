const fs = require('fs');

const data = fs.readFileSync('./filesystem/latihan/todo.txt', 'utf8');
console.log(data);