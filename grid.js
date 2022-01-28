const gridNumber = 21

export function randomGridPosition(){
    return{
        x:Math.floor(Math.random() * gridNumber) + 1,
        y:Math.floor(Math.random() * gridNumber) + 1
    }
}

export function outSideGrid(snakeHead){
  return (
      snakeHead.x < 1 || snakeHead.x > gridNumber ||
      snakeHead.y < 1 || snakeHead.y > gridNumber
  )
}