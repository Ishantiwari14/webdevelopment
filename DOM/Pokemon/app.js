const link = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
const container = document.querySelector('div')

for (let i = 0; i < 100; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    const label = document.createElement('span');
    label.innerText = `#${i + 1}`;
    const img = document.createElement('img');
    img.src = `${link}${i + 1}.png`

    pokemon.appendChild(img);
    pokemon.appendChild(label);

    container.appendChild(pokemon)
    // pokemon.style.display = 'inline';

}


