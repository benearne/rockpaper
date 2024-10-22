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

var humanScore = 0
var computerScore = 0
var rounds = 1



const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const sissors = document.getElementById("sissors")

rock.addEventListener("click", () => playRound("rock"))
paper.addEventListener("click", () => playRound("paper"))
sissors.addEventListener("click", () => playRound("sissors"))

let human = document.getElementById("human")
let computer = document.getElementById("computer")

let counts = document.getElementById("rounds")
let winner = document.getElementById("winner")
let score = document.getElementById("score")
let end = document.getElementById("end")

let again = document.getElementById("again")

function playRound(human) {

    var humanChoice = human;
    human.innerHTML = "Human chose " + human

    var computerChoice = getComputerChoice();
    computer.innerHTML = "Computer chose " + computerChoice
    
    counts.innerHTML = "Rounds played: " + rounds;

    if (humanChoice == computerChoice) {
        winner.innerHTML = "It's a tie!"
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") 
        || (humanChoice == "paper" && computerChoice == "sissors")
        || (humanChoice == "sissors" && computerChoice == "rock")) {
           winner.innerHTML = "computer wins!"
            computerScore ++;
    } else {
        winner.innerHTML = "human wins!"
        humanScore ++;
    }
    
    score.innerHTML = "Score: Human " + humanScore + " points / Computer " + computerScore + " points.";
    rounds ++;

    if (humanScore == 5 || computerScore == 5) {
        rock.hidden = true
        paper.hidden = true
        sissors.hidden = true
        
        human.innerHTML = "";
        computer.innerHTML = "";
        winner.innerHTML = "";
        score.innerHTML = "";
        rounds.innerHTML = "";
        if (humanScore > computerScore) {
            end.innerHTML = "HUMAN WINS!";
        }
        else {
            end.innerHTML = "COMPUTER WINS!";
        }

        again.hidden = false
    }
}

document.getElementById("again").addEventListener("click", () => reset_game())

function reset_game() {
    var humanScore = 0
    var computerScore = 0
    var rounds = 1

    end.innerHTML = "";
    rock.hidden = false
    paper.hidden = false
    sissors.hidden = false
    again.hidden = true
}