const express = require('express')

const app = express()

// app.use((req, res) => {
//     console.log('This is the response')
//     res.send('This is the response')
// })

app.get('/', (req, res) => {
    res.send('This is the homepage')
})

app.get('/dogs', (req, res) => {
    res.send('<h1> 1 21 guns lay up arms and give up the fight </h1>')
})
app.listen(3000, () => {
    console.log("this is the listener on port 3000")
})