// http://api.tvmaze.com/search/shows?q=girls

const form = document.querySelector('form')

// const search = document.querySelector('input')
const imgcontainer = document.querySelector('div')

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const name = form.elements.search.value;
    getShowInfo(name)
    form.elements.search.value = ""

})

const getShowInfo = async function (name) {
    const config = { params: { q: name } }
    const tvshow = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    findImages(tvshow.data)
}

const findImages = (shows) => {

    for (let data of shows) {
        if (data.show.image) {
            const img = document.createElement('img')
            img.src = data.show.image.medium
            // imgcontainer.classList.add('imgcontainer')
            imgcontainer.append(img)
        }

    }
}

