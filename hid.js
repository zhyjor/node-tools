var HID = require('node-hid');

if( process.argv[2] ) {
  var type = process.argv[2];
  console.log("driverType:",type);
  HID.setDriverType( type );
}

console.log('devices:', HID.devices());