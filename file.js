// 在应用中加载node模块
const fs = require('fs');
const osenv = require('osenv');

function getUsersHomeFolder() {
  return osenv.home();
}
// 使用 fs.readdir 来获取文件列表
function getFilesInFolder(folderPath, cb) {
  fs.readdir(folderPath, cb);
}
/*
 该函数的作用是：获取到用户个人文件夹的路径，并获取到该文件夹下的文件列表信息
*/
function main() {
  console.log('osenv:', osenv);
  const folderPath = getUsersHomeFolder();
  getFilesInFolder(folderPath, (err, files) => {
    if (err) {
      console.log('对不起，您没有加载您的home folder');
    }
    // files.forEach((file) => {
    //   console.log(`${folderPath}/${file}`);
    // });
  });
}

main();