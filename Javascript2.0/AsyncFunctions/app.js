// async function hello() {
//     return 'hello hi thank you goodbye'
// }
// hello();

// async function uhOh() {
//     throw new Error('OH no! Error')
// }

// uhOh()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((data) => {
//         console.log(data)
//     })

const login = async (password, username) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'cargimorgenthau') return 'Logged IN!'
    throw 'Invalid Password'
}

// const login = (password, username) => {
//     return new Promise((resolve, reject) => {
//         if (!username || !password) {
//             reject('Missing Credentials')
//         } else if (password === 'corgimorgenthau') {
//             resolve('WELCOME')
//         }
//         reject('Invalid Password')
//     })
// }

login('cargimorgenthau', 'asdfasd')
    .then(msg => {
        console.log('logged In!')
        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    })


const colorChanger = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, 1000)
    })
}

// colorChanger('red')
//     .then(() => colorChanger('orange'))
//     .then(() => colorChanger('yellow'))
//     .then(() => colorChanger('green'))
//     .then(() => colorChanger('blue'))
//     .then(() => colorChanger('indigo'))
//     .catch(() => {
//         console.log("Nothing Catched")
//     })


// async function rainbow() {
//     await colorChanger('blue')
//     await colorChanger('orange')
//     await colorChanger('red')
//     await colorChanger('green')
//     return 'All done!'
// }


// rainbow().then((data) => {
//     console.log(data)
//     console.log('colors changed')
// })

// async function printRainbow() {
//     await rainbow();
//     console.log('Rainbow finished')
// }

// printRainbow()


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout')
            } else {
                resolve(`Here is your data from  ${url}`)
            }
        }, delay)
    })
}

// fakeRequest('hello')
//     .then((data) => {
//         console.log(data)
//         return fakeRequest('hello/page2')
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(() => {
//         console.log('ERROR!!')
//     })

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1')
        let data2 = await fakeRequest('/page2')
        console.log(data1)
        console.log(data2)
    } catch (e) {
        console.log("error is", e)
    }

}