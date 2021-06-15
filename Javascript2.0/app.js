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

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'yellow';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'orange';
//         }, 1000)
//     }, 1000)
// }, 1000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor
        doNext && doNext();
    }, delay)
}

delayedColorChange('orange', 1000, () => {
    delayedColorChange('yellow', 1000, () => {
        delayedColorChange('green', 1000, () => {
            delayedColorChange('blue', 1000, () => {
                delayedColorChange('violet', 1000)
            })
        })
    })
})