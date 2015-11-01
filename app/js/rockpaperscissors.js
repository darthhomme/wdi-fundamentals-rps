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




var playerMove = prompt("Do you choose rock, paper or scissors? Please spell correctly or winner will not show.");
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

getWinner(playerMove, computerMove);


function playToFive() {
    console.log('Let\'s play Rock Paper Scissors');
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins === 5 || computerWins === 5) {
        if (humanVsMachine === 'player') {
        playerWins += 1;
        } else if (humanVsMachine === 'computer') {
        computerWins += 1;
        }
    // return [playerWins, computerWins]; moving code to below
    }
    return [playerWins, computerWins]; // moved return outside the loop here
}

console.log(playToFive());


