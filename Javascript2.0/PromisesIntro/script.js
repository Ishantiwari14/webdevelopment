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
                failure('Connectionn Timeout:(')

            } else {
                console.log(delay)
                success(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestCallback('books.com/page1', (msg) => {
    console.log(msg)
    fakeRequestCallback('books.com/page2', function (msg) {
        console.log(msg)
        fakeRequestCallback('books.com/page3', function (msg) {
            console.log(msg)
        }, function (msg) {
            console.log(msg)
        })
    }, (msg) => {
        console.log('msg')
    })
}, (msg) => {
    console.log(msg)
})