const fs = require('fs');
let path = require('path');

const folderPath = path.join(__dirname, '/styles');

fs.rm(path.join(__dirname, '/project-dist/bundle.css'),{ recursive: true, force: true }, (err) =>{ 
    if (err) {
        return console.error(err);
    }  

    fs.readdir(folderPath,{withFileTypes: true}, (err, files) => {
        files.forEach((file) => {
            if (file.isFile() && path.extname(file.name) === '.css' ){

                let stream = new fs.ReadStream(path.join(__dirname, `/styles/${file.name}`), {encoding: 'utf-8'});
    
                stream.on('readable', function(){
                    let data = stream.read();

                    if(data != null){
                        fs.appendFile(path.join(__dirname, '/project-dist/bundle.css'), data+'\n', (err) => {
                            if(err) throw err
                        }) 
                    };

                });

            }
        });
    });
    
});