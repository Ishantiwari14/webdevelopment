// const fs = require('fs');
// const dirName = process.argv[2] || 'Project'



// console.log(fs)

// fs.mkdir('Project', { recursive: true }, (err) => {
//     console.log("In the Callback!!!")
//     if (err) throw err;
// })

// console.log("I come after mkdir in the file")

// fs.mkdirSync(dirName)
// fs.writeFileSync('index.html')
// fs.writeFileSync('app.js')
// fs.writeFileSync('styles.css')


// import { writeFile } from 'fs';

const fs = require('fs')

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFileSync('message.txt');