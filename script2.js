const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let board = ["","","","","","","","",""];
let currentPlayer = "X";
let active = true;

let xScore = 0;
let oScore = 0;
let drawScore = 0;

const wins = [
 [0,1,2],[3,4,5],[6,7,8],
 [0,3,6],[1,4,7],[2,5,8],
 [0,4,8],[2,4,6]
];

cells.forEach(cell=>{
 cell.addEventListener("click",handleClick);
});

function handleClick(){

 const index=this.dataset.index;

 if(board[index]!=="" || !active) return;

 board[index]=currentPlayer;

 this.textContent=currentPlayer;
 this.classList.add(currentPlayer.toLowerCase());

 checkWinner();
}

function checkWinner(){

 for(let combo of wins){

  let [a,b,c]=combo;

  if(
   board[a] &&
   board[a]===board[b] &&
   board[a]===board[c]
  ){

   cells[a].classList.add("winner");
   cells[b].classList.add("winner");
   cells[c].classList.add("winner");

   statusText.innerHTML=`🏆 Player ${currentPlayer} Wins!`;

   if(currentPlayer==="X"){
      xScore++;
      document.getElementById("xScore").textContent=xScore;
   }else{
      oScore++;
      document.getElementById("oScore").textContent=oScore;
   }

   active=false;
   return;
  }
 }

 if(!board.includes("")){
   drawScore++;
   document.getElementById("drawScore").textContent=drawScore;
   statusText.innerHTML="🤝 Draw Match!";
   active=false;
   return;
 }

 currentPlayer=currentPlayer==="X"?"O":"X";
 statusText.innerHTML=`Player ${currentPlayer}'s Turn`;
}

document.getElementById("restartBtn")
.addEventListener("click",restartGame);

function restartGame(){

 board=["","","","","","","","",""];
 active=true;
 currentPlayer="X";

 statusText.innerHTML="Player X's Turn";

 cells.forEach(cell=>{
   cell.textContent="";
   cell.className="cell";
 });
}

document.getElementById("resetBtn")
.addEventListener("click",()=>{

 xScore=0;
 oScore=0;
 drawScore=0;

 document.getElementById("xScore").textContent=0;
 document.getElementById("oScore").textContent=0;
 document.getElementById("drawScore").textContent=0;

 restartGame();
});
