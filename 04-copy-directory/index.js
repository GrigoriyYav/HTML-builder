const fs = require('fs');
const path = require('path');

fs.rmdir(path.join(__dirname, 'files-copy'),{ recursive: true }, (err) =>{
    if (err) {
        return console.error(err);
    }  

    fs.mkdir(path.join(__dirname, 'files-copy'),{ recursive: true }, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });
    
    const folderPath = path.join(__dirname, '/files');
    fs.readdir(folderPath,{withFileTypes: true}, (err, files) => {
        files.forEach((file) => {
            if (file.isFile()){
                function callback(err) {
                    if (err) throw err;
                    console.log(`${file.name} was copied to destination.txt`);
                }
                
                fs.copyFile(
                    path.join(__dirname,`files/${file.name}`),
                    path.join(__dirname,`files-copy/${file.name}`),
                    callback
                );  
            }
        });
    });
});



