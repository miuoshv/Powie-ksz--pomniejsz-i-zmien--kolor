const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const text = document.querySelector('p')
let size = 36





const sizeUpFun = () => {
  if (size < 40) {
    size++
  }
  text.style.fontSize = size + 'px'
}

const sizeDownFun = () => {
  if (size > 28){
    size--
  }
  text.style.fontSize = size + 'px'
}

const colorFun = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16)
  text.style.color = '#' + randomColor
}


sizeUp.addEventListener('click', sizeUpFun)

sizeDown.addEventListener('click', sizeDownFun)

color.addEventListener('click', colorFun)
