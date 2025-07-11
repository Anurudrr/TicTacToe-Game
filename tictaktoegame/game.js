let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let message = document.querySelector(".message");
let winner = document.querySelector("#winner");
let msg = document.querySelector("#msg");
let turn0 = true;
let moveCount = 0;
const winpatterns = [
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8],
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
   
    message.classList.add("hide");
    msg.classList.remove("draw");
    moveCount = 0;
};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turn0){
            box.innerText = "0";
            box.classList.add("o-style");
            turn0 = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("x-style");
            turn0 = true;
        }
        box.disabled = true;
moveCount++;
        checkWinner();
    });
});
const disableBoxes = () => {
for (let box of boxes){
    box.disabled = true;
}
};

const enableBoxes = () => {
for(let box of boxes)  {
    box.disabled = false;
    box.innerText = "";
    
}
};


const showWinner = (winner) => {
msg.innerText = `congratulations, winner is ${winner}`;
message.classList.remove("hide");
disableBoxes();
};
const showDraw = () => {
    msg.innerText = "it is a draw!";
    msg.classList.add("draw");
    message.classList.remove("hide");
    disableBoxes();
};  


const checkWinner = () => {
    for (let pattern of winpatterns){
     
        let pos1val =   boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =   boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
             if (pos1val === pos2val && pos2val === pos3val){
               console.log("winner",pos1val)
                showWinner(pos1val);
                return;
             }
         
         }
     }
     if (moveCount === 9 && message.classList.contains("hide")){
        showDraw();
     }
 };

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
resetGame();