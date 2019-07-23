const drivelist = require('drivelist');

const drives = drivelist.list().then(res =>{
  console.log(JSON.stringify(res))
});
// console.log(drives);