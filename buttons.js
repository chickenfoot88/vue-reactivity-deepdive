const counterButton = document.querySelector('button#counter')
const resetButton = document.querySelector('button#reset')


function useCounter() {
  let counter = 5
  
  return {
    getCounter() {
      return counter
    },
    setCounter(value) {
      counter = value
      renderCounter()
    },
    isCounterTooBig() {
      return counter > 10
    }
  }
}

const { getCounter, setCounter, isCounterTooBig } = useCounter()

function renderCounter() {
  counterButton.textContent = `счетчик: ${getCounter()}`
  counterButton.classList.toggle('red', isCounterTooBig())
}

setInterval(() => {
  setCounter(getCounter() + 1)
}, 1000)

counterButton.addEventListener('click', () => {
  setCounter(getCounter() + 1)
})

resetButton.addEventListener('click', () => {
  setCounter(0)
})

renderCounter()