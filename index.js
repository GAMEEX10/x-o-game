const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
  [0, 1, 2],  /*first r0w */
  [3, 4, 5],  
  [6, 7, 8],  
  [0, 3, 6],  /*first C01umn */
  [1, 4, 7],  
  [2, 5, 8],
  [0, 4, 8],  /*Left-Up diagonal */
  [2, 4, 6]  /*right-Up diagonal */    
];

let options =["", "", "", "", "", "", "", "", ""]; /* no of cells */
let currentPlayer ="X";
let running = false;

i();


/* initializeGame */ 
function i(){
    cells.forEach(cell => cell.addEventListener("click", c));
    restartBtn.addEventListener("click", re);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
/* cellClicked */ 
function c(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] !="" || !running){
        return;
    }
    u(this, cellIndex);
    chp();
    chw();
}

/* updateCell */ 
function u(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
/* changePlayer */ 
function chp(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
/* checkWinner */ 
function chw(){
    let roundWon = false;
    for(let i = 0; i< winConditions.length; i++){
        /* x: is a condation*/
        const x = winConditions[i];
        const A = options[x[0]];
        const B = options[x[1]];
        const C = options[x[2]];
       
       if(A =="" || B =="" || C ==""){
         continue;
       }
       if(A == B && B == C){
         roundWon =true;
         break;
       }
    }
    if(roundWon){
         chp();
        statusText.textContent = `${currentPlayer} Win!`;
        running = false;
                }
    else if(!x.includes("")){
         statusText.textContent = `Draw`;
         running = false;
    }                           
    else{ 
            chp();
         }
}
/* restartGame */ 
function re(){
    currentPlayer = "X";
    options =["", "", "", "", "", "", "", "", ""]; 
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent= "");
    running = true;
}
