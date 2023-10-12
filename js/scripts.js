// Refactored JS Game: Rock, Paper, Scissors

// Initializing Game
const initGame = () => {
    const startGame = confirm("Are you up for a game of Rock, Paper, Scissors?");
    startGame ? playGame() : alert("Thanks for stopping by.");
};

// Playing the Game -> Game Flow

const playGame = () => {

    // FUTURE: when able to save name over games, use while loop to check if player named.
    while (true) {
        //intro - name of player
        let playerName = getPlayerName(); 
        let namedPlayer = playerName.trim();
        let capsPlayer = namedPlayer.toUpperCase();
        
        if (playerName === "") {
            enterNameAgain();
        } else {
        alert(`Welcome, ${namedPlayer}!`);
        } 
        // FUTURE: Create 3rd option for a repeated No Name: go to changedMind & exit.

        // Player Goes First - playerChoice
        let playerChoice = getPlayerChoice();
        playerChoice = trimPlayerChoice(playerChoice);

        // Player's input
        if (playerChoice === "") {
            
        }
            

        
 }
};



    //         //computer choice
    //         let computerChoice = Math.floor(Math.random() * 3 + 1);
    //         let computer = computerChoice === 1 ? "rock"
    //         : computerChoice === 2 ? "paper"
    //         : "scissors";
            
    //         //win logic
    //         let result = 
    //         player === computer 
    //         ? `${namedPlayer}: ${player} \nComputer: ${computer} \nIt's a TIE!`
    //         : player === "rock" && computer === "paper" 
    //         ? `${namedPlayer}: ${player} \nComputer: ${computer} \nCOMPUTER WINS!`
    //         : player === "paper" && computer === "scissors" 
    //         ? `${namedPlayer}: ${player} \nComputer: ${computer} \nCOMPUTER WINS!`
    //         : player === "scissors" && computer === "rock" 
    //         ? `${namedPlayer}: ${player} \nComputer: ${computer} \nCOMPUTER WINS!`
    //         : `${namedPlayer}: ${player} \nComputer: ${computer} \n${capsPlayer} WINS!`;
    //     alert(result);

    //     //play again option
    //     let playAgain = confirm(`${namedPlayer}, would you or a friend like to play again?`);
    //     playAgain ? location.reload() : alert("Ok, thanks for playing!");

    //     } else {
    //         alert("Check your spelling of rock, paper, or scissors before you try playing again.")
    //     }

    // } else {
    //     alert("Did you change your mind? Bye for now! You're always welcome to start again.");
    // }

    // } else {
    // alert("Ok, maybe next time.");

          
    // }
    // }
    
    const getPlayerName = () => {
        return prompt("Enter your name here:");
    }

    let enterNameAgain = () => {
        alert("Oops! Let's try that again.");
        enterNameAgain = getPlayerName;
    }

    const getPlayerChoice = () => {
        return prompt(`${namedPlayer}, enter rock, paper, or scissors.`);
    }

    const trimPlayerChoice = (playerChoice) => {
        if (playerChoice === "") {
            return playerChoice.trim().toLowerCase();     
        } else {
            return false;
        }};
    

    // if (player === "rock" || player === "paper" || player === "scissors") {    
    

initGame();