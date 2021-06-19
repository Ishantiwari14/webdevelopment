// // // String.prototype.yell = function () {
// // //    return `OMG!!!! ${this.toUpperCase()}!!!! ASSFDASDF`
// // // }

// // // Array.prototype.pop = function() {
// // //     console.log("Sorry never gonna give you up")
// // // }


// // function makeColor(r, g, b) {
// //     const color = {};
// //     color.r = r;
// //     color.g = g;
// //     color.b = b;
// //     color.rgb = function () {
// //         const { r, g, b } = this;
// //         return `rgb(${r}, ${g}, ${b})`
// //     }


// //     color.hex = function () {
// //         const { r, g, b } = this;
// //         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

// //     }
// //     return color;
// // }

// // const firstColor = makeColor(35, 255, 150)

// // const black = makeColor(0, 0, 0)


// // function Color(r, g, b) {
// //     this.r = r;
// //     this.g = g;
// //     this.b = b;
// //     // console.log(this)


// // }

// // Color.prototype.rgb = function () {
// //     const { r, g, b } = this;
// //     return `rgb(${r}, ${g}, ${b})`

// // }
// // Color.prototype.hex = function () {
// //     const { r, g, b } = this;
// //     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

// // }

// // Color.prototype.rgba = function (a = 1.0) {
// //     const { r, g, b } = this;
// //     return `rgba(${r}, ${g}, ${b}, ${a})`
// // }

// // // new Color(255, 40, 100)

// // const color1 = new Color(240, 100, 60)
// // const color2 = new Color(0, 0, 0)

// // document.body.style.backgroundColor = color1.rgba(0.7)

// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     innerRGB() {
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`

//     }
//     rgb() {

//         return `rgb(${this.innerRGB()})`
//     }
//     hex() {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     }
//     rgba(a = 1.0) {
//         return `rgba(${this.innerRGB()}, ${a})`
//     }

// }

// const red = new Color(255, 67, 89, 'red')
// const white = new Color(255, 255, 255, 'white')

class Pet {
    constructor(name, age) {
        console.log("In Pet's constructor")
        this.name = name;
        this.age = age;

    }
    eat() {
        return `${this.name} is eating.`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft) {
        console.log('In Cat Constructor')
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWWW!'
    }
}

class Dog extends Pet {

    bark() {
        return 'WOOF!!'
    }
}

