const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {playRound('rock')});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {playRound('paper')});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {playRound('scissors')});

let gameCount = 0;
let winCount = 0;
let lossCount = 0;
let tieCount = 0;

function game()
{
    //let result;
    let winCount = 0;
    let lossCount = 0;
    let tieCount = 0;
    //let gameCount = 0;

    while (gameCount < 5)
    {
        //result = playRound();

        switch(result)
        {
            case 0:
                outcome = "Paper beats Rock, you lose!";
                lossCount++;
                gameCount++;
                break;
            case 1:
                outcome = "It's a tie!";
                tieCount++;
                gameCount++;
                break;
            case 2:
                outcome = "Rock beats Scissors, you win!";
                winCount++;
                gameCount++;
                break;
            case 10:
                outcome = "Scissors beats Paper, you lose!";
                lossCount++;
                gameCount++;
                break;
            case 11:
                outcome = "It's a tie!";
                tieCount++;
                gameCount++;
                break;
            case 12:
                outcome = "Paper beats Rock, you win!";
                winCount++;
                gameCount++;
                break;
            case 20:
                outcome = "Rock beats Scissors, you lose!";
                lossCount++;
                gameCount++;
                break;
            case 21:
                outcome = "It's a tie!";
                tieCount++;
                gameCount++;
                break;
            case 22:
                outcome = "Scissors beats Paper, you win!";
                winCount++;
                gameCount++;
                break;
        }

        //gameCount++;
        console.log(outcome);
        console.log("The score is " + winCount + "-" + lossCount + "-" + tieCount + ".");
    }

    if(winCount > lossCount)
    {
        console.log("Congratulations - you beat me!");
    }
    else if (lossCount > winCount)
    {
        console.log("Looks like AI wins again!");
    }
    else
    {
        console.log("It's a tie - better luck next time!");
    }
}

//console.log(game())

function playRound(input)
{
    //console.log(input);
    let user = getUserChoice(input);
    let computer = getComputerChoice();
    //let result;
    //let gameCount = 0;
    //let outcome;

    //console.log(user);
    //console.log(computer);

    switch(user) //compare inputs - return X0 for a loss, X1 for a tie, and X2 for a win
    {
        case "rock":
            if (computer == "rock")
            {
                result = 1;
                break;
            }
            else if (computer == "paper")
            {
                result = 0;
                break;
            }
            else if (computer == 'scissors')
            {
                result = 2;
                break;
            }
        
        case "paper":
            if (computer == "rock")
            {
                result = 12;
                break;
            }
            else if (computer == "scissors")
            {
                result = 10;
                break;
            }
            else if (computer == "paper")
            {
                result = 11;
                break;
            }

        case "scissors":
            if (computer == "rock")
            {
                result = 20;
                break;
            }
            else if (computer == "paper")
            {
                result = 22;
                break;
            }
            else if (computer == "scissors")
            {
                result = 21;
                break;
            }
    }

    if (gameCount < 5)
    {
        //result = playRound();

        switch(result)
        {
            case 0:
                outcome = "Paper beats Rock, you lose!";
                lossCount++;
                gameCount++;
                break;
            case 1:
                outcome = "It's a tie!";
                tieCount++;
                gameCount++;
                break;
            case 2:
                outcome = "Rock beats Scissors, you win!";
                winCount++;
                gameCount++;
                break;
            case 10:
                outcome = "Scissors beats Paper, you lose!";
                lossCount++;
                gameCount++;
                break;
            case 11:
                outcome = "It's a tie!";
                tieCount++;
                gameCount++;
                break;
            case 12:
                outcome = "Paper beats Rock, you win!";
                winCount++;
                gameCount++;
                break;
            case 20:
                outcome = "Rock beats Scissors, you lose!";
                lossCount++;
                gameCount++;
                break;
            case 21:
                outcome = "It's a tie!";
                tieCount++;
                gameCount++;
                break;
            case 22:
                outcome = "Scissors beats Paper, you win!";
                winCount++;
                gameCount++;
                break;
        }

    }

    console.log(gameCount, result, outcome);

    if (gameCount >= 5)
    {
        if(winCount > lossCount)
        {
            console.log("Congratulations - you beat me!");
        }
        else if (lossCount > winCount)
        {
            console.log("Looks like AI wins again!");
        }
        else
        {
            console.log("It's a tie - better luck next time!");
        }
    }

    //gameCount++;
    return result;
}

//console.log(playRound());

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3); //returns random int in 0-2
    let textChoice;

    switch(choice)
    {
        case 0:
            textChoice = "rock";
            break;
        case 1:
            textChoice = "paper";
            break;
        case 2:
            textChoice = "scissors";
            break;
        default:
            textChoice = "paper";

    }

    return textChoice;
}

//console.log(getComputerChoice());

function getUserChoice(text)
{
    // let userTextChoice = prompt("Type rock, paper, or scissors (typos will auto-select \"rock\"):");

    let userTextChoice = text;

    userTextChoice = userTextChoice.toLowerCase(); //convert to lowercase

    switch(userTextChoice) //if user didn't select a valid option, auto-select rock
    {
        case 'rock':
            break;
        case 'paper':
            break;
        case 'scissors':
            break;
        default:
            userTextChoice = 'rock';
    }
    
    return userTextChoice;
}