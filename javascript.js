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

console.log(getComputerChoice());
