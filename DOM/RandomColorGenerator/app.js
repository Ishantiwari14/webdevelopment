const button = document.querySelector('button')
const h1 = document.querySelector('h1')

function colorChanger() {
    const red = Math.floor(Math.random() * 255) + 1
    const green = Math.floor(Math.random() * 255) + 1
    const blue = Math.floor(Math.random() * 255) + 1


    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
    h1.innerText = `rgb(${red},${green},${blue})`

    if ((red + green + blue) <= 120) {
        h1.classList.add('dark')
    } else {
        h1.classList.remove('dark')
    }



}


button.addEventListener('click', colorChanger)
