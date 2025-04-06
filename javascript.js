console.log("Hello World");

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

function getHumanChoice(){
    let humanchoice = ""
    humanchoice=prompt("choose what you want (rock, paper, or scissors)");

    return humanchoice;

}


let humanScore = 0;
let computerScore = 0;

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log("The computer has chosen", computerChoice)
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
    console.log("Your score is :", humanScore,". Computer score is: ",computerScore)
}
