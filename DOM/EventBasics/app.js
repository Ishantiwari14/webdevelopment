const btn = document.querySelector('#v2')

btn.onclick = () => {
    console.log('you are so good at clicking arent you?')
}
function scream() {
    console.log('oh yeah! give it to me')
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
    alert('you clicked the h1 ')
}

const h2 = document.createElement('h2')
h2.innerText = 'you are h2';
document.querySelector('h1').insertAdjacentElement('afterend', h2)
h2.addEventListener("mouseup", () => {
    alert('you click the h2!')
})

const tasButton = document.querySelector('#tas')

function twist() {
    console.log('TWIST')
}

function shout() {
    console.log('& SHOUT')
}

// tasButton.onclick = shout;

tasButton.addEventListener('click', twist, { once: true })
tasButton.addEventListener('click', shout)