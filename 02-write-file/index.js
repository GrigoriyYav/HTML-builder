const fs = require('fs');
let path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');


const process = require('process');

const rl = readline.createInterface({ input, output });

console.log('\n Type something: \n');

fs.writeFile(path.join(__dirname, '/some.txt'), "", (err)=> {
  if(err) throw err
});

rl.on('line', (inputText) => {
    if(inputText === 'exit') {
      rl.close()
  } else {
      fs.appendFile(path.join(__dirname, '/some.txt'), inputText+'\n', (err) => {
          if(err) throw err
      })
  }
});

rl.on('pause', () => {
  console.log('\nGood bye\n');
});

process.on('SIGINT', () => {process.exit();});
