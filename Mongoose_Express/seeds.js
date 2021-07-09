
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo connection open!!!!")
    })
    .catch(err => {
        console.log(err);
    })

// const p = new Product({
//     name: 'Apple',
//     price: 100,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Potato',
        price: 70,
        category: 'vegetables'
    },
    {
        name: 'Tomato',
        price: 80,
        category: 'vegetables'
    },
    {
        name: 'Banana',
        price: 70,
        category: 'fruit'
    },
    {
        name: 'Vanilla Ice Cream',
        price: 50,
        category: 'dairy'
    },
    {
        name: 'Cheese',
        price: 150,
        category: 'dairy'
    },
]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })