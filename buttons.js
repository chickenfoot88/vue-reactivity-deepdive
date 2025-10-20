const counterButton = document.querySelector('button#counter')
const resetButton = document.querySelector('button#reset')


const counterState = {
  counter: 5,
  isCounterTooBig() {
    return this.counter > 10
  }
}

const useCounter = new Proxy(counterState, {
    get(EventTarget, prop, receiver) {
      return Reflect.get(EventTarget, prop, receiver)
    },
    set(target, prop, value, receiver) {
      renderCounter()
      return Reflect.set(target, prop, value, receiver)
    }
  }
)

function renderCounter() {
  counterButton.textContent = `счетчик: ${useCounter.counter}`
  counterButton.classList.toggle('red', useCounter.isCounterTooBig())
}

setInterval(() => {
  useCounter.counter += 1
}, 1000)

counterButton.addEventListener('click', () => {
  useCounter.counter += 1
})

resetButton.addEventListener('click', () => {
  useCounter.counter = 0
})

renderCounter()