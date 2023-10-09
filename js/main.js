// First Interactive JS Game: Rock, Paper, Scissors

let playGame = confirm("Are you up for a game of Rock, Paper, Scissors?");
if (playGame) {

    //intro - name of player
    let playerName = prompt("Enter your name here:");
    let namedPlayer = playerName.trim();
    if (playerName) {
        alert(`Welcome, ${namedPlayer}!`);
    } else {
        let enterAgain = alert("Oops! Try entering your name next time.");
        enterAgain = location.reload();
    }
    
    //play - start with player
    let playerChoice = prompt(`${namedPlayer}, enter rock, paper, or scissors.`);
    if (playerChoice) {
        let player = playerChoice.trim().toLowerCase();
        if (player === "rock" || player === "paper" || player === "scissors") {
            
            //computer choice
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissors";
            
                //win logic
            let result = 
            player === computer 
            ? `It's a tie! \n ${namedPlayer}: ${player} & Computer: ${computer}`
            : player === "rock" && computer === "paper" 
            ? `Computer wins! \n ${namedPlayer}: ${player} vs. Computer: ${computer}`
            : player === "paper" && computer === "scissors" 
            ? `Computer wins! \n ${namedPlayer}: ${player} vs. Computer: ${computer}!`
            : player === "scissors" && computer === "rock" 
            ? `Computer wins! \n ${namedPlayer}: ${player} vs. Computer: ${computer}!`
            : `${namedPlayer} wins! \n ${namedPlayer}: ${player} vs. Computer: ${computer}!`;
        alert(result);

        //play again option
        let playAgain = confirm(`${namedPlayer}, would you or a friend like to play again?`);
        playAgain ? location.reload() : alert("Ok, thanks for playing!");

        } else {
            alert("Check your spelling of rock, paper, or scissors before you try playing again.")
        }

    } else {
        alert("Did you change your mind? Bye for now! You're always welcome to start again.");
    }

} else {
    alert("Ok, maybe next time.");
}