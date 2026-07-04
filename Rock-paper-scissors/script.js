    // constants for the rock paper scissors button
    const choices = ["Rock","Paper","Scissors"];
    const rockBtn = document.querySelector('#rock-btn');
    const paperBtn = document.querySelector('#paper-btn');
    const scissorsBtn = document.querySelector('#scissors-btn');

    

    // Constants for the display
    const playerDisplay = document.querySelector('#playerDisplay');
    const computerDisplay = document.querySelector('#computerDisplay');
    const resultDisplay = document.querySelector('#resultDisplay');
    const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
    const computerScoreDisplay = document.querySelector('#computerScoreDisplay');

    let playerScore = 0;
    let computerScore = 0;



    // Button interactivity
    rockBtn.addEventListener('click',playGame);
    paperBtn.addEventListener('click',playGame);
    scissorsBtn.addEventListener('click',playGame);


    // The function itself

    function playGame(playerChoice){
        const computerChoice = choices[Math.floor(Math.random()* 3)];
        let result = "";

        if(computerChoice === playerChoice){
            result = "IT IS A TIE";

        }
        else{
            switch(playerChoice){
                case 'rock':
                    result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOOSE";
                    break;

                 case 'paper':
                    result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOOSE";
                    break;

                 case 'scissors':
                    result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOOSE";
                    break;
            }
        }
        playerDisplay.textContent = `Player: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = result;
   
        resultDisplay.classList.remove("greenText","redText");

        switch(result){
            case "YOU WIN":
                resultDisplay.classList.add("greenText");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                break;

             case "YOU LOOSE":
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = playerScore;
                break;
        }

    }

