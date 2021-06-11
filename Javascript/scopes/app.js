// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
// }

// console.log(radius);
// console.log(msg)

// for (let i = 0; i < 5; i++) {
//     var msg = "adjfas";
//     console.log(msg)
// }

// console.log(msg)

// function bankRobbery() {
//     const heroes = ['ishan', 'pritisha', 'spiderman']
//     function cryForHelp() {
//         for (let hero of heroes) {
//             console.log(`please help us, ${hero.toUpperCase()}`);
//         }
//     }
//     // cryForHelp();
// }

// bankRobbery();

//Function Expressions

// function add(x, y) {
//     return x + y;


// }

// const square = function (x) {
//     return x * x;
// }

// const nums = Array(23, 34, 45, 343, 23, 12, 12)

// let greet = function () {
//     console.log('hi');
// }

// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll);
// }

// // callTwice(rollDie)
// callTenTimes(rollDie)

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("congrats, i am good.")
//         }
//     } else {
//         return function () {
//             console.log("You're a sad fucking sob ishan!")
//         }
//     }
// }

// const mystery = makeMysteryFunc()

// mystery();

// function makeBetweenFunc(min, max) {

//     return function () {
//         const num = prompt('enter a number');
//         if (num <= max && num >= min) {
//             console.log(`The value lies in between ${min} and ${max}`);
//         }
//         else {
//             console.log(`nope`)
//         }
//     }
// }

// const test = makeBetweenFunc(5, 70)
// test();

