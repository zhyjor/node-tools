const mtp = require('node-mtp');

mtp.attach();

const list = mtp.getFileListing();
console.log('Files:', list[0]);