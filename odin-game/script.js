
/**on this game cpChoice means  = computer choice
on this game hunChoice means  = human choice */



//com esta funcao o computador escolhe a sua opcao 
function getComputerChoice() {
   const Choice = ["rock", "paper", "scissors"];

   let cpchoice = Choice[Math.floor(Choice.length * Math.random())];

   return cpchoice;
}

//com esta funcao o usuario escolhe a sua opcao 
function getHumanChoice() {
   let hunChoice = prompt("Type your choice rock, paper or scissors. :");

   return hunChoice;
}

//variaveis que guardam os valores da pontuacao
let humanScore = 0;
let computerScore = 0;

// variaveis de incremento
let a = 6;
let i = 0;


// funcao principal do jogo 
function playGame() {

   //loop de repeticao do jogo em cinco rondas
   for (let i = 0; i < a; i++) {
      const huChoice = getHumanChoice();
      const cpChoice = getComputerChoice().toLocaleLowerCase();

      //A funcao e chamada aqui onde recebe dois argumentos
      playRound(cpChoice, huChoice);
   }

   if (humanScore > computerScore) {
      console.log("A pontuação efetuada pelo computador: " + computerScore);
      console.log("A pontuação efetuada pelo usuario: " + humanScore);
      console.log("O usuario ganhou o jogo");
   } else {
      console.log("A pontuação efetuada pelo usuario: " + humanScore);
      console.log("A pontuação efetuada pelo computador: " + computerScore);
      console.log("O computador ganhou o Jogo");
   }

   /*
    *funcao onde se joga uma ronda do jogo,
    *a funcao recebe dois paramentos para poder faze a comparacao,
    *entre as escolhas e decidir o vencedor e tambem incrementar o valor dos oponentes.
   */
   function playRound(computerChoice, humanChoice) {


      console.log("");
      console.log("this is computer choice: " + computerChoice);
      console.log("this is human choice: " + humanChoice);


      if (computerChoice === "rock" && humanChoice === "scissors") {
         console.log("cumputer wins");
         computerScore = computerScore + 1;

      } else if (computerChoice === "rock" && humanChoice === "rock") {
         console.log("MATCH");
         


      }else if (computerChoice === "rock" && humanChoice === "paper") {
         console.log("user win");
         humanScore = humanScore + 1;


      }else if (computerChoice === "scissors" && humanChoice === "rock") {
         console.log("user win");
         humanScore = humanScore + 1;


      } else if (computerChoice === "scissors" && humanChoice === "scissors") {
         console.log("MATCH");
         


      }else if (computerChoice === "scissors" && humanChoice === "paper") {
         console.log("computer win");
         computerScore = computerScore + 1;


      } else if (computerChoice === "paper" && humanChoice === "rock") {
         console.log("computer wins");
         computerScore = computerScore + 1;

      } else if (computerChoice === "paper" && humanChoice === "paper") {
         console.log("MATCH");
         

      } else if (computerChoice === "paper" && humanChoice === "scissors") {
         console.log("user wins");
         humanScore = humanScore + 1;

      } else if (humanChoice === " rock" && computerChoice === "scissors") {
         console.log("user wins");
         humanScore = humanScore + 1;

      }else if (humanChoice === " rock" && computerChoice === "paper") {
         console.log("computer wins");
        computerScore =computerScore + 1;

      } else if (humanChoice === " rock" && computerChoice === "rock") {
         console.log("MATCH");
        

      } else if (humanChoice === " paper" && computerChoice === "rock") {
         console.log("user win");
         humanScore = humanScore + 1;

      }else if (humanChoice === " paper" && computerChoice === "scissors") {
         console.log("computer win");
         computerScore =computerScore + 1;
      }else if (humanChoice === " paper" && computerChoice === "paper") {
         console.log("MATCH");
         
      }else if (humanChoice === " scissors" && computerChoice === "scissors") {
         console.log("MATCH");
         
      }else if (humanChoice === " scissors" && computerChoice === "paper") {
         console.log("user win");
         humanScore = humanScore + 1;
      }else if (humanChoice === " scissors" && computerChoice === "rock") {
          console.log("computer wins");
        computerScore =computerScore + 1;
      } else {
         console.log("its a match or no option");
      }

      console.log("");

   }

}


