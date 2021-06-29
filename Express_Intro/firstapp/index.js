const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is the homepage');
})

app.use((req, res) => {
    res.send("Well Well you got here!!!");
    console.log('We got a new request ')
})

app.listen('3000', ()=> {
    console.log("listening on port 3000");
})

