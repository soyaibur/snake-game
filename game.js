// ....Univesal declaration and others......
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js' 

let lastRendarTime = 0
const gameBoard = document.getElementById('game-board')

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All Element Selection will be undernith here...........
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// .....All EventListener go undernith here...........
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ......All Function will go here undernith..........
function main(currentTime){
  window.requestAnimationFrame(main)
  const secondsSinceLastRendar = (currentTime - lastRendarTime) / 1000
  if(secondsSinceLastRendar < 1 / SNAKE_SPEED) return
  lastRendarTime = currentTime


  update()
  draw()
}
window.requestAnimationFrame(main)

function update(){
  updateSnake()
}

function draw(){
  gameBoard.innerHTML = ''
 drawSnake(gameBoard)
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}


// gameBoard.addEventListener('click',()=>{
//     alert("this is working")
// })
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::