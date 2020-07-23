alert(привет)
let fishes = document.querySelectorAll('.fish'),
		box = document.querySelector('#box'),
    boxRect = box.getBoundingClientRect(),
    boxHeight = boxRect.height,
    boxWidth = boxRect.width,
    chanceToMove = 0.2,
    moveInterval = 500

fishes[1].style.background = 'orange'
fishes[2].style.background = 'pink'

function move(){
  fishes.forEach(fish => {
    if (Math.random() < chanceToMove) {
      fish.style.left = getRandomInt(0, boxWidth  - 30) + 'px'
			fish.style.top  = getRandomInt(0, boxHeight - 10) + 'px'
    }
  })
}

setInterval(move, moveInterval)














function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}