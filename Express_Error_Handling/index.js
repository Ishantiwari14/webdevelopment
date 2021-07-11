const express = require('express');
const app = express();
const AppError = require('./AppError');
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
    // res.status(401)
    // res.send('Sorry you need a password!!')
    throw new AppError('Password Required', 401)
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

app.get('/error', (req, res) => {
    chicken.cawl();
})

app.get('/dogs', (req, res) => {
    console.log(`RESQUEST DATE: ${req.requestTime}`)
    res.send('Woof Woof')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('Sometimes you just wanna go where everybody knows your name')
})

app.get('/admin', (req, res) => {
    throw new AppError('You\'re not an admin!!', 403)
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND')
})

// app.use((err, req, res, next) => {
//     console.log("*********************************")
//     console.log("*************ERROR***************")
//     console.log("*********************************")
//     console.log(err)
//     // res.status(500).send("Oh no an Error")
//     next(err);
// });

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    const { message = 'Something Went Wrong' } = err;
    res.status(status).send(message)
})


app.listen(3000, () => {
    console.log("listening on port 3000")
})