
const resulth1 = document.querySelector('.roundWinner');
const playerScoreDiv = document.querySelector('#playerscore');
const computerScoreDiv = document.querySelector('#computerscore');
const rockBtn = document.querySelector('#rockButton');
rockBtn.addEventListener('click', () => {
const computerSelection = getComputerChoice();
playRound('rock', computerSelection);
})

const paperBtn = document.querySelector('#paperButton');
paperBtn.addEventListener('click', () => {
const computerSelection = getComputerChoice();
playRound('paper', computerSelection);
})

const scissorsBtn = document.querySelector('#scissorsButton');
scissorsBtn.addEventListener('click', () => {
const computerSelection = getComputerChoice();
playRound('scissors', computerSelection);
})


let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
    return "rock";
    } 
    else if (randomNumber === 1){
    return "paper";
    }
    else { 
    return "scissors";
    }
    }


function playRound(human, computer){
    if (human === computer){
        result.textContent = `You both chose ${human}! It's a tie! `;

    } else if (
            (human === "rock" && computer === "scissors") || 
            (human === "scissors" && computer === "paper") || 
            (human === "paper" && computer === "rock") 
        ){humanScore++;
            playerScoreDiv.textContent = humanScore;
            result.textContent = `You chose ${human}. Computer chose ${computer}. You win!`;
        } else {
            computerScore++;
            computerScoreDiv.textContent = computerScore;
            result.textContent = `You chose ${human}. Computer chose ${computer}. You lose!`;
        }
    }