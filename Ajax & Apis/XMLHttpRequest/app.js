const myReq = new XMLHttpRequest();

myReq.onload = function () {
    console.log("All done with request!!!!")
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price)
}

myReq.onerror = function () {
    console.log("ERROR!!!")
    console.log(this);
}

myReq.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
myReq.send();
