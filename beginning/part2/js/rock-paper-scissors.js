function rockPaperScissors() {

    //players
    var userChoice;
    var compChoice;
    var isRunning = true;

    while (isRunning) {
        userChoice = prompt("rock, paper, or scissors?");
        while (!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors")) {
            userChoice = prompt("Invalid input.  please try again.");
        }

        compChoice = Math.floor(Math.random() * 3);

        if (userChoice === "rock") {
            alert("You threw rock!");
            switch (compChoice) {
                case 0:
                    alert("The computer threw rock!  It's a draw!");
                    break;
                case 1:
                    alert("The computer threw paper!  You lose!");
                    break;
                case 2:
                    alert("The computer threw scissors!  You win!");
                    break;
            }
        }

        if (userChoice === "paper") {
            alert("you threw paper!");
            switch (compChoice) {
                case 0:
                    alert("The computer threw rock!  You win!");
                    break;
                case 1:
                    alert("The computer threw paper!  It's a draw!");
                    break;
                case 2:
                    alert("The computer threw scissors!  You lose!");
                    break;
            }
        }

        if (userChoice === "scissors") {
            alert("you threw scissors!");
            switch (compChoice) {
                case 0:
                    alert("The computer threw rock!  You lose!");
                    break;
                case 1:
                    alert("The computer threw paper!  You win!");
                    break;
                case 2:
                    alert("The computer threw scissors! It's a draw!");
                    break;
            }
        }

        isRunning = confirm("Would you like to play again?");
    }

}

//Run Application
//rockPaperScissors();