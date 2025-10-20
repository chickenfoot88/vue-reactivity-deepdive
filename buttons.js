const counterButton = document.querySelector('button#counter')
const resetButton = document.querySelector('button#reset')


const counterState = {
  _value: 5,

  get value() {
    return this._value
  },

  set value(newValue) {
    this._value = newValue
    renderCounter()
  },
  
  isCounterTooBig() {
    return this._value > 10
  }
}

function renderCounter() {
  counterButton.textContent = `счетчик: ${counterState.value}`
  counterButton.classList.toggle('red', counterState.isCounterTooBig())
}

setInterval(() => {
  counterState.value += 1
}, 1000)

counterButton.addEventListener('click', () => {
  counterState.value += 1
})

resetButton.addEventListener('click', () => {
  counterState.value = 0
})

renderCounter()