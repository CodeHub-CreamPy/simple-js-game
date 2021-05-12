// Document object model

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/*
TODO

comp choice (monkey brain randomizer 1-3)
win-lose logic
store score user/comp
notify who wins/lose

*/

function checkWinner(userChoice, compChoice) {
    if (userChoice == compChoice) {
        //tie
        console.log("TIE" + userChoice.toString() + compChoice.toString());
        var thing = "";
        switch(userChoice) {
            case 1:
                thing = "Rock";
                rock_div.style.setProperty("background-color", "blue");
                setTimeout(() => rock_div.style.setProperty("background-color", "#25272e"), 400);
            break;
            case 2:
                thing = "Paper";
                paper_div.style.setProperty("background-color", "blue");
                setTimeout(() => paper_div.style.setProperty("background-color", "#25272e"), 400);
            break;
            case 3:
                thing = "Scissors";
                scissors_div.style.setProperty("background-color", "blue");
                setTimeout(() => scissors_div.style.setProperty("background-color", "#25272e"), 400);
            break;
            default:
                thing = "";
        }

        result_div.innerHTML = thing + " (user) is tie with " + thing + " (comp)";
    }

    if (userChoice == 1 && compChoice == 2) {
        //user lose
        console.log("Lose" + userChoice.toString() + compChoice.toString());
        compScore++;
        compScore_span.innerHTML = compScore;
        result_div.innerHTML = "Paper (comp) beats Rock (user)";
        rock_div.style.setProperty("background-color", "red");
        setTimeout(() => rock_div.style.setProperty("background-color", "#25272e"), 400);
    }
    if (userChoice == 2 && compChoice == 3) {
        //user lose
        console.log("Lose" + userChoice.toString() + compChoice.toString());
        compScore++;
        compScore_span.innerHTML = compScore;
        result_div.innerHTML = "Scissors (comp) beats Paper (user)";
        paper_div.style.setProperty("background-color", "red");
        setTimeout(() => paper_div.style.setProperty("background-color", "#25272e"), 400);
    }
    if (userChoice == 3 && compChoice == 1) {
        //user lose
        console.log("Lose" + userChoice.toString() + compChoice.toString());
        compScore++;
        compScore_span.innerHTML = compScore;
        result_div.innerHTML = "Rock (comp) beats Scissor (user)";
        scissors_div.style.setProperty("background-color", "red");
        setTimeout(() => scissors_div.style.setProperty("background-color", "#25272e"), 400);
    }

    if (userChoice == 2 && compChoice == 1) {
        //user win
        console.log("Win" + userChoice.toString() + compChoice.toString());
        userScore++;
        userScore_span.innerHTML = userScore;
        result_div.innerHTML = "Paper (user) beats Rock (comp)";        
        paper_div.style.setProperty("background-color", "green");
        setTimeout(() => paper_div.style.setProperty("background-color", "#25272e"), 400);
    }
    if (userChoice == 3 && compChoice == 2) {
        //user win
        console.log("Win" + userChoice.toString() + compChoice.toString());
        userScore++;
        userScore_span.innerHTML = userScore;
        result_div.innerHTML = "Scissors (user) beats Paper (comp)";
        scissors_div.style.setProperty("background-color", "green");
        setTimeout(() => scissors_div.style.setProperty("background-color", "#25272e"), 400);
    }
    if (userChoice == 1 && compChoice == 3) {
        //user win
        console.log("Win" + userChoice.toString() + compChoice.toString());
        userScore++;
        userScore_span.innerHTML = userScore;
        result_div.innerHTML = "Rock (user) beats Scissors (comp)";
        rock_div.style.setProperty("background-color", "green");
        setTimeout(() => rock_div.style.setProperty("background-color", "#25272e"), 400);
    }
    
}

function game(input) {
    console.log("You choice is this bitch: " + input);

    var compChoice = Math.floor((Math.random() * 3) + 1);

    if (input.toLowerCase() == "rock") {
        //rock stuff
        checkWinner(1, compChoice);
    }

    if (input.toLowerCase() == "paper") {
        //paper stuff
        checkWinner(2, compChoice);
    }

    if (input.toLowerCase() == "scissors") {
        //scissors stuff
        checkWinner(3, compChoice);
    }
}

function main() {
    rock_div.addEventListener("click", function() {
        console.log("hey fucko! you clicked rock! ooga booga bitch");
        game("rock");
    });
    
    paper_div.addEventListener("click", function() {
        console.log("hey fucko! you clicked paper! swish swish (paper noise*) bitch");
        game("paper");
    });
    
    scissors_div.addEventListener("click", function() {
        console.log("hey fucko! you clicked rock! snippidy snip snip bitch");
        game("scissors");
    });
}

main();

