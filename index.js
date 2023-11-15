let playa = document.getElementById('player');
let computa = document.getElementById('computer');
let card = document.querySelector('.card'); // Assuming there's only one element with the class 'card'
console.log(card);

let playerScore = 0;
let computerScore = 0;

const win = "You Won! Computer Choosed ";
const draw = "It's a Draw";
const lost = "You Lost, Computer Choosed ";

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerChoice) {
    if (playerScore === 5 || computerScore === 5) {
        
        return;
    }

    let computerChoice = getComputerChoice();
    playerChoice = playerChoice.toLowerCase();

    if ((playerChoice == 'rock' && computerChoice == 'scissors') || 
        (playerChoice == 'scissors' && computerChoice == 'paper') || 
        (playerChoice == 'paper' && computerChoice == 'rock')) {
        playa.innerHTML = ++playerScore;

        card.innerText = win + computerChoice;
    } else if (playerChoice == computerChoice) {
        card.innerHTML = draw;
    } else {
        computa.innerHTML = ++computerScore;
        card.innerHTML = lost + computerChoice;
    }

    // Check for game end
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    if (playerScore === 5) {
       card.innerHTML = "Congratulations! You won the game! || reload the game to start again";
       card.classList.add('bg-success', 'text-light');
    } else {
        card.innerHTML = "Sorry, you lost. Better luck next time! || Reload the page to start again";
        card.classList.add('bg-danger', 'text-light');
    }
}
