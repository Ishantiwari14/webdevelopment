// const p = document.querySelector('p')

// p.addEventListener('click', function () {
//     alert("paragraph clicked.")
// })

const container = document.querySelector('div')
const button = document.querySelectorAll('button')[1]

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

button.onclick = (e) => {
    console.log('working')
    container.style.backgroundColor = randomColor();
    e.stopPropagation();
}


container.addEventListener('click', (e) => {
    container.classList.toggle('hide')


})

const showAgain = function () {
    console.log('where are you')
    container.classList.remove('hide')
}

container.addEventListener('blur', showAgain)
















