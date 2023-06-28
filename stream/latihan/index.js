const fs = require('fs');

const readableStream = fs.createReadStream('./stream/latihan/input.txt', {
    highWaterMark: 15
});

const writeableStream = fs.createWriteStream('./stream/latihan/output.txt');

readableStream.on('readable', () => {
    try {
        writeableStream.write(`${readableStream.read()}\n`);
    } catch (error) {

    }
});

readableStream.on('end', () => {
    console.log('Done');
});