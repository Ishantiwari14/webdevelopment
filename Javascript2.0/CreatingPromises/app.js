// new Promise((resolve, reject) => {
//     resolve();
// })

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('Your fake data here')
//             }
//             reject('Request Error!!!')
//         }, 2000)
//     })
// }

// fakeRequest('/dog1')
//     .then((data) => {
//         console.log('done dana dan')
//         console.log(data)
//         return fakeRequest('/dog2')
//     })
//     .then((data) => {
//         console.log('done dana dan page 2')
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })



// function delayedColorChange(color, delay, doNext) {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         doNext();
//     }, delay)
// }


// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


const colorChanger = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, 1000)
    })
}


colorChanger('red')
    .then(() => {
        return colorChanger('orange')
    })
    .then(() => {
        return colorChanger('yellow')
    })
    .then(() => {
        return colorChanger('green')
    })
    .then(() => {
        return colorChanger('blue')
    })
    .then(() => {
        return colorChanger('indigo')
    })
    .catch(() => {
        console.log("Nothing Catched")
    })




