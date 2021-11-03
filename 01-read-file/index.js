const fs = require('fs');

let path = require('path');
//fs.ReadStream наследует от stream.Readable
let stream = new fs.ReadStream(path.join(__dirname, '/text.txt'), {encoding: 'utf-8'});
 
stream.on('readable', function(){
    let data = stream.read();
    if(data != null)console.log(data);
});
 
stream.on('error', function(err){
    if(err.code == 'ENOENT'){
        console.log("Файл не найден");
    }else{
        console.error(err);
    }
});