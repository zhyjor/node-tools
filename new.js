var usb = require('usb')

usb.on('attach', function (device) {
  device.open(true);
  console.log('attach:', device);
  device.getCapabilities((error, cap) => {
    console.log('cap:', cap);
  })
});

usb.on('detach', function (device) {
  console.log('detach');
});

// var device = usb.findByIds(2316, 4096);

// console.log('getById:', device);
// device.open(true);

// device.getStringDescriptor(0, (error, data)=>{
//   console.log('data:', data);
//   console.log('error', error);
// })

// device.controlTransfer();

const GET_STATUS_INFO = 0xAA;
var device = usb.findByIds(2316, 4096);

if (device) {
  device.open();
  var interface = device.interfaces[0];
  interface.claim();

  var inpoint = interface.endpoints[0]; // interface.endpoint(id) don't work for id=0 btw
  var outpoint = interface.endpoints[1];

  var update_status_info = function () {
    var out_report = Buffer.alloc(128, 0);
    out_report[0] = GET_STATUS_INFO;
    outpoint.transfer(out_report, function (err) {
      if (err) throw err;

      inpoint.transfer(128, function (err, data) {
        if (err) throw err;

        // valid data packet received!
        // ...

        // update status regulary
        setTimeout(update_status_info, 500);
      })
    })
  }
  update_status_info();
}


