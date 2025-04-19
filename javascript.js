console.log("Hello World");

const buttonRockVar = document.querySelector("#buttonRock");
const buttonScissorVar = document.querySelector("#buttonScissor");
const buttonPaperVar = document.querySelector("#buttonPaper");
const scoreTextVar = document.querySelector("#scoreText");

function getComputerChoice(){
    let randomnumber = Math.floor(Math.random() * 3);
    if (randomnumber === 0) {
        return "rock";
    }
    else if (randomnumber === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

function getHumanChoice(playerSelectionArg){
    let humanchoice = "";
    humanchoice=playerSelectionArg;
    return humanchoice;

}


let humanScore = 0;
let computerScore = 0;

function playRound(playerSelectionArg){
    let humanChoice = getHumanChoice(playerSelectionArg);
    let computerChoice = getComputerChoice();
    console.log("The computer has chosen", computerChoice);
    if (humanChoice === "rock"){
        if (computerChoice === "paper") {
            humanScore = humanScore;
            computerScore = computerScore +1;
            console.log("You chose ", humanChoice, ". Computer selected ", computerChoice, " .Computer win, you lose");
        }
        else if (computerChoice === "scissors") {
            humanScore = humanScore+1;
            computerScore = computerScore;
            console.log("You chose ", humanChoice, ". Computer selected ", computerChoice, " .Computer lose, you win"); 
    
        }

        else {
            humanScore = humanScore;
            computerScore = computerScore;
            console.log("You chose ", humanChoice, ". Computer selected ", computerChoice, " .None win.");        
        }
    }

    else if (humanChoice === "paper"){
        if (computerChoice === "scissors") {
            humanScore = humanScore;
            computerScore = computerScore +1;
            console.log("You chose ", humanChoice, ". Computer selected ", computerChoice, " .Computer win, you lose");
        }
        else if (computerChoice === "rock") {
            humanScore = humanScore+1;
            computerScore = computerScore;
            console.log("You chose ", humanChoice, ". Computer selected ", computerChoice, " .Computer lose, you win"); 
    
        }

        else {
            humanScore = humanScore;
            computerScore = computerScore;
            console.log("You chose ", humanChoice, " . Computer selected ", computerChoice, " .None win.");        
        }
    }


    else {
        if (computerChoice === "rock") {
            humanScore = humanScore;
            computerScore = computerScore +1;
            console.log("You chose ", humanChoice, " . Computer selected ", computerChoice, " .Computer win, you lose");
        }
        else if (computerChoice === "paper") {
            humanScore = humanScore+1;
            computerScore = computerScore;
            console.log("You chose ", humanChoice, " . Computer selected ", computerChoice, " .Computer lose, you win"); 
    
        }

        else {
            humanScore = humanScore;
            computerScore = computerScore;
            console.log("You chose ", humanChoice, " . Computer selected ", computerChoice, " .None win.");        
        }
    }

    scoreBoardText = "Your score is: "+ humanScore+". Computer score is: "+computerScore;
    console.log(scoreBoardText);
    scoreTextVar.textContent = scoreBoardText;

    if (humanScore > 5 || computerScore > 5) {
        if (humanScore>computerScore) {
            winnerText = "You win. Congratulation!";
        }
        else {
            winnerText = "You lose. Loser!";
        }
        humanScore = 0;
        computerScore = 0;
        scoreTextVar.textContent = winnerText;
    }
    
}



buttonRockVar.addEventListener('click', () => {
    playRound("rock");
  });

buttonPaperVar.addEventListener('click', () => {
    playRound("paper");
  });

buttonScissorVar.addEventListener('click', () => {
    playRound("scissor");
  });

