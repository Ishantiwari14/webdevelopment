const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connectionn Timeout:(')

        } else {
            console.log(delay)
            success(`Here is your fake data from ${url}`)
        }
    }, delay)

}

// fakeRequestCallback()

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connectionn Timeout:(')

            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallback('books.com/page1', (msg) => {
//     console.log(msg)
//     fakeRequestCallback('books.com/page2', function (msg) {
//         console.log(msg)
//         fakeRequestCallback('books.com/page3', function (msg) {
//             console.log(msg)
//         }, function (msg) {
//             console.log(msg)
//         })
//     }, (msg) => {
//         console.log('msg')
//     })
// }, (msg) => {
//     console.log(msg)
// })

// fakeRequestPromise('hikingtrails.com/api/nearme')
//     .then(() => {
//         console.log('PROMISE RESOLVED!')
//         console.log('IT WORKED')
//         fakeRequestPromise('/page2')
//             .then(() => {
//                 console.log('Promise Resolved')
//                 console.log('It worked')
//             })
//             .catch(() => {
//                 console.log('Promise Rejected')
//                 console.log('Oh no, Error')
//             })
//     })
//     .catch(() => {
//         console.log('PROMISE REJECTED!')
//         console.log('OH NO , ERROR!!!')
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log(data)
        console.log('It worked!!! (page 1)')
        return fakeRequestPromise('yelp.com/api/coffe/page2')
    })
    .then((data) => {
        console.log(data)
        console.log('It worked!!! (page 2)')
        return fakeRequestPromise('yelp.com/api/coffe/page3')

    })
    .then((data) => {
        console.log(data)
        console.log('It worked!!! (page 3)')
    })
    .catch((err) => {
        console.log("IT didn't work")
        console.log(err)
    })