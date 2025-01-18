let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")


console.log(resetBtn)

let turnO = true//playerX,playerO
const winPatterns = [
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
  console.log("Hello")
  turnO = true
  enableBoxes()//enable boxes funtion called
  msgContainer.classList.add("hide")//msg container will hide after the game is reset 
}


boxes.forEach((box) => {
  box.addEventListener("click",() => {
    console.log("box was clicked");
    if(turnO){//if turn of O is true box.innertext value will be equal to O
    box.innerText = "O"
    turnO = false//for next time it is set to false
    }
    else{
      //2nd case playerX's turn and will print X and turn O will be set
      box.innerText = "X"
      turnO = true
    }
   box.disabled = true;//to disable the button the value will not change for example X will remain X it will not change after we click on it

   checkWinner()
 
  })
})

const disableBoxes = () => {
  for(let box of boxes)
    box.disabled = true
}

const enableBoxes = () => {//when new game will start all boxes will be enabled
  for(let box of boxes)
    box.disabled = false
  box.innerText = "";
}

//if we click on any boxes the call will go to check winner 
//function and check winner will remove one by one every pattern
const showWinner= (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`//to print winner value
   msgContainer.classList.remove("hide")//from msg conatiner class list we will remove our class list hide

   disableBoxes()//disabled boxes function called
}




const checkWinner = () => {
  for(let pattern of winPatterns){//win pattern array par loop chalana hai
    //the variable pattern is an array
    
  
     let pos1val = boxes [pattern[0]].innerText
     let pos2val = boxes [pattern[1]].innerText
     let pos3val = boxes [pattern[2]].innerText//boxes are array and[] is index
    //we have the value of the boxes and if we want the value inside them we use innerText
    if(pos1val !="" && pos2val !="" &&pos3val !="")
    {
      if(pos1val === pos2val && pos2val === pos3val)
        {
          console.log("winner",pos1val)//winner wo hoga jo position 1 ki value hogi

          showWinner(pos1val)
        }
    }
  }
}


newGameBtn.addEventListener("click",resetGame())//resetgame() will be trigerred
resetBtn.addEventListener("click",()=>{
  console.log("Hello")
})














// let turnO = true; //playerX, playerY//if value is true it will print O if value is false it will print X
// //1d array
// let arr=["apple","banana","litchi"]
// //2d array
// let arr2=[["apple","banana"],["litchi","mushroom"],["pants","shirts"]];

