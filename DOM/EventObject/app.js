document.querySelector('button').addEventListener('click', (ev) => {
    console.log(ev)
    alert("I'm clicked.")
})

const input = document.querySelector('input')
let password = "";
input.addEventListener('keydown', function (e) {
    console.log(e.key);
    console.log(e.code)
    password += e.key

})

input.addEventListener('keyup', function () {

    console.log('keyup')
})


window.addEventListener('keydown', function (ev) {
    // console.log(ev.code);

    switch (ev.code) {
        case 'ArrowUp':
            console.log("UP!")
            break;
        case 'ArrowDown':
            console.log("Down!")
            break;
    }
})

