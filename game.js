// ....Univesal declaration and others......
let lastRendarTime = 0
let SNAKE_SPEED = 1
function main(currentTime){
  window.requestAnimationFrame(main)
  const secondsSinceLastRendar = (currentTime - lastRendarTime) / 1000
  if(secondsSinceLastRendar < 1 / SNAKE_SPEED) return
  console.log("rendar")
  lastRendarTime = currentTime


  update()
  draw()
}
window.requestAnimationFrame(main)

function update(){
 console.log("hay this is update")
}
function draw(){
 console.log("it's draw")
}
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All Element Selection will be undernith here...........
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All EventListener go undernith here...........
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// ......All Function will go here undernith..........
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}


// addEventListener('click',()=>{
//     alert("this is working")
// })
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::