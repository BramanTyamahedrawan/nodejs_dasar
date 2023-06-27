const coffee = require('./coffee');
console.log(coffee);

// Path: modularization\index.js
const {
    firstname,
    lastname
} = require('./user');
console.log(firstname);
console.log(lastname);