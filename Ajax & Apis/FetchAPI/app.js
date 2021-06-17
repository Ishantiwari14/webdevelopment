// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED!!!", data)
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!!", e)
//     })

// const fetchBitcoinPrice = async () => {
//     const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     const data = await res.json();
//     console.log(data.ticker.price)
// }

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("ERROR!", err)
//     })


const jokes = document.querySelector('#newjoke')
const button = document.querySelector('button')



const getDadJoke = async () => {
    try {
        // const config = {  headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE SORRY:("
    }

}

const addNewJoke = async () => {
    const joketext = await getDadJoke();
    let item = document.createElement('li')
    item.append(joketext)
    jokes.append(item)
}


button.addEventListener('click', addNewJoke)


