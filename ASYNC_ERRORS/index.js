const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError')

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo connection open!!!!")
    })
    .catch(err => {
        console.log(err);
    })



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetables', 'dairy']

const wrapAsync = (fn) => {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}
app.get('/products', wrapAsync(async (req, res, next) => {

    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    }
    else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }



}))

app.get('/products/new', (req, res) => {
    // throw new AppError('Not Allowed', 401)
    res.render('products/new', { categories })
})

app.post('/products', wrapAsync(async (req, res, next) => {

    const newProduct = new Product(req.body)
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)


}))

app.get('/products/:id', wrapAsync(async (req, res, next) => {

    const { id } = req.params;
    const product = await Product.findById(id)
    if (!product) {
        throw new AppError('Product Not Found', 404)
    }
    res.render('products/show', { product })



}))

app.delete('/products/:id', wrapAsync(async (req, res, next) => {


    const { id } = req.params;
    if (id) {
        await Product.findByIdAndDelete(id);
        res.redirect('/products')
    } else {
        throw new AppError('Product Not Found', 404)
    }
}))

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {

    const { id } = req.params;

    const product = await Product.findById(id)
    if (!product) {
        return next(new AppError('Product Not Found', 404))
    }

    res.render('products/edit', { product, categories })


}))

app.put('/products/:id', wrapAsync(async (req, res, next) => {

    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${product._id}`)


}))

app.use((err, req, res, next) => {
    console.log(err.name);

    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;

    res.status(status).send(message)
})

app.listen('3000', () => {
    console.log("Listening of port 3000")
})