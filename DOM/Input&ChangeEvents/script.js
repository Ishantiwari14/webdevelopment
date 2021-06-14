const h1 = document.querySelector('h1')

h1.addEventListener('click', function () {
    alert('That is a big h1.')
})

const input = document.querySelector('input')


input.addEventListener('change', function (e) {

    console.log('hey')
})

input.addEventListener('input', function (e) {
    // console.log('hey')
    let record = ''
    h1.innerText = input.value

})


// input.addEventListener('keydown', (e) => {
//     record += e.key
//     console.log(record)
// })

