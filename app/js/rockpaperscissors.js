////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* var playerMove = prompt("Do you choose rock, paper or scissors? Please spell correctly or winner will not show.");
var computerMove = Math.random();

if (computerMove < 0.34)
{
computerMove = "rock";
} 
else if(computerMove <= 0.67)
{
computerMove = "paper";
}
else 
{
computerMove = "scissors";
} 
console.log("Computer: " + computerMove);

var getWinner= function( choice1, choice2){
if (choice1===choice2){ 
return "tie";
}
    else if(choice1 === "rock")
    {
        if (choice2==="scissors")
        {
        return "player";
        }
        else
        {
        return "computer";}
    }
    else if(choice1==="paper")
    {
        if(choice2==="rock")
        {
        return "player";
    }
    else
        {
        return "computer";}
    }
else if(choice1 === "scissors")
    {
        if (choice2==="paper")
        {
        return "player";
        }
        else
        {
        return "computer";}
    }
};

getWinner(playerMove, computerMove); */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

