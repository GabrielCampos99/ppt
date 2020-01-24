let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.container');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('pe');
const paper_div = document.getElementById('pa');
const scissors_div = document.getElementById('te');

function converteParaPalavra(letras) {
    if (letras === "pe") {
        return "Pedra";
    }
    if(letras === "pa") {
        return "Papel";
    }
    if(letras === "te") {
        return "Tesoura"
    }
}


function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore = userScore + 1;
    userScore_span.innerHTML = userScore;
    computerScore.innerHTML  = computerScore;
    result_div.innerHTML = `${converteParaPalavra(userChoice)} ganha de ${converteParaPalavra(computerChoice)}. Você ganhou!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 300);
}



function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore = computerScore + 1;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${converteParaPalavra(computerChoice)} ganha de ${converteParaPalavra(userChoice)}. Você perdeu!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${converteParaPalavra(userChoice)} é igual à ${converteParaPalavra(computerChoice)}. EMPATE`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(function() { userChoice_div.classList.remove('grey-glow')}, 300);
}

function getComputerChoice() {
    const choices = ['pe', 'pa', 'te'];
    let randomNumer = Math.floor(Math.random() * 3);
    return choices[randomNumer];
}

function game(userChoice) {
    let computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'pete':
        case 'pape':
        case 'tepa':
            win(userChoice, computerChoice);
            break;
        case 'pepa':
        case 'pate':
        case 'tepe':
            lose(userChoice, computerChoice);
            break;
        case 'pepe':
        case 'papa':
        case 'tete':
            draw(userChoice, computerChoice);
            break
    }
}


function main() {
    rock_div.addEventListener('click', () => {
        game('pe')
    })

    paper_div.addEventListener('click', () => {
        game('pa')
    })

    scissors_div.addEventListener('click', () => {
        game('te')
    })
}

main();