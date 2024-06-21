const container = document.querySelector('.container')
const blueBox = document.querySelector('#box-blue')
const redBox = document.querySelector('#box-red')
const greenBox = document.querySelector('#box-green')
const yellowBox = document.querySelector('#box-yellow')

const changeToBlack = (element) => {
  element.style.backgroundColor = 'black'
}

// addEventListeners
container.addEventListener('click', (event) => {
  console.log('event.target', event.target)
  const element = event.target

  if (element.classList.contains('box')) {
    changeToBlack(element)
  }
})

// También se puede hacer de forma individual
// blueBox.addEventListener('click', () => {
//   changeToBlack(blueBox)
// })