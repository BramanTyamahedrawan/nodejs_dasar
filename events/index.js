const {
    EventEmitter,
} = require('events');

const myEventEmitter = new EventEmitter();

// mendefinisikan listener 'coffee-order'
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah selesai dibuat!`);
}
const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
const onCoffeeOrderedListener = ({
    name,
    price
}) => {
    makeCoffee(name);
    makeBill(price);
}

// mendaftarkan listener ke event 'coffee-order'
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// membangkitkan event 'coffee-order' terjadi
myEventEmitter.emit('coffee-order', {
    name: 'Tubruk',
    price: 15000
});