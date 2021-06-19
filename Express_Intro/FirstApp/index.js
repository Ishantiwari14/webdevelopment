const express = require('express')

const app = express()
// console.dir(app)

// app.use((req, res) => {
//     console.log("We got a new request")
//     // res.send("Hello, we got your request! here's your response.")
//     // res.send({ color: 'red' })
//     res.send('<h1> This is my Webpage </h1>')
// })


app.get('/', (req, res) => {
    res.send('Welcome to the home page')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1> Browsing the ${subreddit} subreddit </h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1> Browsing the r/${subreddit}/${postId} subreddit </h1>`);
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!!')
})

app.post('/cats', (req, res) => {
    res.send('Post request to this ')
})

app.get('/search', (req, res) => {
    const { q1,q2 } = req.query;
    if(!q1){
        res.send("nothing found if nothing searched")
    }
    res.send(`<h1>Search results for: ${q1}</h1>`)
    // res.send("HI!")
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

app.get('*', (req, res) => {
    res.send("I don't know that path")
})

app.listen(3000, () => {
    console.log("listening on port 3000.")
})

