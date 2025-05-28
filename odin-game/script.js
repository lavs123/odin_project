
/**on this game cpChoice means  = computer choice
on this game hunChoice means  = human choice */

//GAME SCORE
let humanScore = 0;
let computerScore =0;

function getComputerChoice ( ){
   const cpChoice = ["rock", "paper", "scissors"];
   
   let chosed = cpChoice[Math.floor(choice.length * Math.random())];

    return chosed;
}

function getHumanChoice(){
    let hunChoice = prompt("Type your choice rock, paper or scissors. :");

    return hunChoice;
}