const fs = require('fs');
let path = require('path');
const folderPath = path.join(__dirname, '/secret-folder');

fs.readdir(folderPath,{withFileTypes: true}, (err, files) => {
  files.forEach((file) => {
    if (file.isFile()){
      const folderPathFile = path.join(__dirname, `/secret-folder/${file.name}`);
      fs.stat(folderPathFile, (err, stats) => {
      let fileSizeInKilobyte = Math.ceil(stats.size/1024); 
      fileName = path.parse(file.name).name;
      fileExtname = path.extname(file.name);
      console.log(`${fileName} - ${fileExtname} - ${fileSizeInKilobyte}kb`);
      }); 
    };
  });
});
