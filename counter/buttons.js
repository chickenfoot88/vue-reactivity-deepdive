const { ref, watchEffect, computed } = Vue

const counterButton = document.querySelector('button#counter')
const resetButton = document.querySelector('button#reset')

const counterState = ref(5)
const isCounterTooBig = computed(() => counterState.value > 10)

watchEffect(renderCounter)
watchEffect(updateCounterColor)

function renderCounter() {
  counterButton.textContent = `счетчик: ${counterState.value}`
}

function updateCounterColor() {
  counterButton.classList.toggle('red', isCounterTooBig.value)
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