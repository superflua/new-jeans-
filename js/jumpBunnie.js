function startGame() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
}

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.pipe');

let isGameOver = false;


const jump = () => {
    if (!isGameOver) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

var tempo =0

const loop = setInterval(() => {
    tempo++

    console.log(tempo)

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (!isGameOver && pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {
        isGameOver = true;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './image/game-over.png';
        mario.style.width = '150px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

        alert("Você perdeu com " + tempo + "pontos! Tente novamente atualizando a página");
    }
}, 10);

document.addEventListener('keydown', jump);







