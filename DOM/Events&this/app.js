
const randomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1
    const g = Math.floor(Math.random() * 255) + 1
    const b = Math.floor(Math.random() * 255) + 1

    return `rgb(${r},${g},${b})`

}

const colorize = function () {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}


const btns = document.querySelectorAll('button')

for (let btn of btns) {

    // btn.addEventListener('click', function () {
    //     btn.style.backgroundColor = randomColor();
    // })

    // btn.onclick = function () {
    //     btn.style.backgroundColor = randomColor();
    //     btn.style.color = randomColor();
    // }
    // btn.onmouseleave = function () {
    //     btn.style.backgroundColor = 'lightgray'
    // }


    btn.onclick = colorize;
}

const h1s = document.querySelectorAll('h1')

for (let h1 of h1s) {
    // h1.addEventListener('click', function () {
    //     h1.style.backgroundColor = randomColor();
    //     h1.style.color = randomColor();
    // })


    h1.addEventListener('click', colorize)
}

