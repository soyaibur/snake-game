// ....Univesal declaration and others......
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js' 
import {update as updateFood, draw as drawFood } from './food.js'

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

// this two function are for running full game
function update(){ //No.1 for updating code
  updateSnake()
}

function draw(){ //No.2 for Drawing snake and food.
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
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