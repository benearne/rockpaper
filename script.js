function getComputerChoice() {
    let rock = "rock"
    let paper = "paper"
    let sissors = "sissors"
    
    let num = Math.random()

    if (num > 0.33 && num < 0.66)
        return rock
    else if (num > 0.66)
        return paper
    else
        return sissors
}

function getHumanChoice() {
    let user = prompt("type your choice: ")
    return user;
}

var humanScore = 0
var computerScore = 0

function playGame() {
    let rounds = 0

    while (rounds < 5) {
        var humanChoice = getHumanChoice();
        var computerChoice = getComputerChoice();
        
        if (humanChoice == computerChoice) {
        }
        else if ((humanChoice == "rock" && computerChoice == "paper") 
            || (humanChoice == "paper" && computerChoice == "sissors")
            || (humanChoice == "sissors" && computerChoice == "rock")) {
                computerScore ++;
        } else {
            humanScore ++;
        }
        rounds ++;
    }
}

playGame()

if (humanScore == computerScore) {
    console.log("its a tie!")
}
else if (humanScore > computerScore) {
    console.log("human wins!")
}
else {
    console.log("computer wins!")
}
console.log("human: " + humanScore + 
    ' vs. \ncomputer: ' + computerScore)