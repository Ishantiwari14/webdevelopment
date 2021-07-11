const express = require('express');
const app = express();
const morgan = require('morgan');


// app.use(morgan('tiny'))
app.use((req, res, next) => {
    // req.method = 'GET'
    req.requestTime = Date.now()
    console.log(req.method, req.path, req.requestTime)
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I love dogs!!!")
    next();
})
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'mysecretpassword') {
        next();
    }
    res.send('Sorry you need a password!!')
}

// app.use((req, res, next) => {
//     console.log('This is my first Middleware')
//     return next();
//     console.log("This is my first after next")
// }) 
// app.use((req, res, next) => {
//     console.log('This is my second Middleware')
//     return next();
// })

app.get('/', (req, res) => {
    console.log(`RESQUEST DATE: ${req.requestTime}`)
    res.send("Home Page!!!!")
})


app.get('/dogs', (req, res) => {
    console.log(`RESQUEST DATE: ${req.requestTime}`)
    res.send('Woof Woof')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('Sometimes you just wanna go where everybody knows your name')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND')
})
app.listen(3000, () => {
    console.log("listening on port 3000")
})