const fs = require('fs');
const dirName = process.argv[2] || 'Project'



// console.log(fs)

// fs.mkdir('Project', { recursive: true }, (err) => {
//     console.log("In the Callback!!!")
//     if (err) throw err;
// })

// console.log("I come after mkdir in the file")

fs.mkdirSync(dirName)
fs.writeFileSync(`${dirName}/index.html`, '')
fs.writeFileSync(`${dirName}/app.js`, '')
fs.writeFileSync(`${dirName}/app.css`, '')




