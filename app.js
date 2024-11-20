let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turnO = true;
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

const resetGame = () =>{
    turnO = true ;
    enabledboxes();
    msgContainer.classList.add("hide")
}
// winning pattern for tic tac toe 
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true; 
        }
        box.disabled = true;
        chechkWinner();
    })
});

//  for disablinng boxes once the winner is annouced 
const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enabledboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    
};
//for showing winner
const showWinner = (winner) =>{
    msg.innerText = `Congratulations!! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
}

// for winning 
const chechkWinner = () =>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

            if(pos1 !== "" && pos3 !== ""){
                if(pos1 === pos2 && pos3){
                    showWinner(pos1);
                }
            }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame)
