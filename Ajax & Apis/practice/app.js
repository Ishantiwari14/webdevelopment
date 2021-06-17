// const res = new XMLHttpRequest();

// res.open('GET', 'https://api.cryptonaitor.com/api/ticker/btc-usd')
// res.send()
// res.onload = function () {
//     console.log("Here's your data")
//     const data = JSON.parse(this.responseText)
//     console.log(data)
//     console.log(data.ticker.price)
// }

// res.onerror = function () {
//     console.log('Oh my god!')
// }

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((data) => {
//         console.log('response', data)
//         return data.json()
//     })
//     .then(res => {
//         console.log(res.ticker.price)
//     })
//     .catch(err => {
//         console.log('error', err)
//     })

// const fetchAPI = async function () {
//     try {
//         const res = await fetch('https://api.criyptonator.com/api/ticker/btc-usd')
//         const data = await res.json()
//         console.log(data.ticker.price)
//     } catch (e) {
//         console.log(e)
//     }

// }

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((data) => {
//         console.log(data)
//         console.log(data.data.ticker.price)

//     })

// axios.get('http://api.tvmaze.com/search/shows?q=girls')
//     .then(res => {
//         console.log(res)
//     })

