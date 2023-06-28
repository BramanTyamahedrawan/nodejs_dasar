const fs = require('fs');

const writeableStream = fs.createWriteStream('./stream/writeable_stream/output.txt');

writeableStream.write('Ini merupakan teks baris pertama!\n');
writeableStream.write('Ini merupakan teks baris kedua!\n');
writeableStream.write('Ini merupakan teks baris ketiga!\n');
writeableStream.end('Akhir dari writable stream!');