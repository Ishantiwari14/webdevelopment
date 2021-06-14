// const mulitply = (x, y) => {
//     return x * y;
// }

// const sq = (x) => {
//     return mulitply(x, x)
// }

// const isRightTriangle = (x, y, z) => {
//     return sq(x) + sq(y) === sq(z)
// }

// isRightTriangle(3, 4, 5)


// console.log('Sending request to server')
// setTimeout(() => {
//     console.log("Data Received from server")
// }, 3000)

// console.log('Hello world')


// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const body = document.body

// setTimeout(() => {


//     body.style.backgroundColor = 'red'

//     setTimeout(() => {
//         body.style.backgroundColor = 'orange'

//         setTimeout(() => {
//             body.style.backgroundColor = 'yellow'
//             setTimeout(() => {
//                 body.style.backgroundColor = 'green'
//                 setTimeout(() => {
//                     body.style.backgroundColor = 'blue'
//                     setTimeout(() => {
//                         body.style.backgroundColor = 'indigo'
//                         setTimeout(() => {
//                             body.style.backgroundColor = 'violet'
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const colorChanger = (newColor, delay) => {
    setTimeout(() => {
        body.style.backgroundColor = newColor
    }, delay)
}

colorChanger('green', 1000)