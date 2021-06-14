
const resetBtn = document.querySelector('#reset')
const playTo = document.querySelector('#playTo')

let winningScore = 3;
let isGameOver = false;

const p1 = {
    score: 0,
    display: document.querySelector('#p1display'),
    button: document.querySelector('#p1Btn')
}

const p2 = {
    score: 0,
    display: document.querySelector('#p2display'),
    button: document.querySelector('#p2Btn')
}

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;

        }
        player.display.textContent = player.score


    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)

})

resetBtn.addEventListener('click', function () {
    reset();
})


playTo.addEventListener('change', function () {
    winningScore = parseInt(playTo.value);
    reset();

})

function reset() {
    for (let p of [p1, p2]) {
        isGameOver = false;
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
        p.display.classList.remove('winner', 'loser')

    }

}
