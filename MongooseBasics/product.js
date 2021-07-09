const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price has to be positive, there is no alternative']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['cycling']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['s', 'm', 'l']
    }
});

// productSchema.methods.greet = function () {
//     console.log("Hello!!!!!!!!!!")
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })

}

const Product = mongoose.model('Product', productSchema);



// const bike = new Product({ name: 'Jersey', price: 24, categories: ['cycling'], size: 's' });
// bike.save()
//     .then(data => {
//         console.log("it worked");
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("Oh no error");
//         console.log(err);
//     })


const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' })
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct)
}

Product.fireSale().then(res => console.log(res))
// findProduct();
// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -10 }, { new: true, runValidators: true })

//     .then(data => {
//         console.log("it worked");
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("Oh no error");
//         console.log(err);
//     })


