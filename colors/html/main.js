const { ref, watchEffect } = Vue
const { shuffle } = _
const SIZE = 60

const colors = ref([
 { r: 255, g: 0, b: 0 },
 { r: 0, g: 255, b: 0 },
 { r: 0, g: 0, b: 255 },
])

watchEffect(() => {
  const existingContainer = document.querySelector('#colors')
  const container = document.createElement('div')
  container.id = 'colors'
  
  function createNode(c, i) {
    const color = `rgb(${c.r}, ${c.g}, ${c.b})`
    const node = document.createElement('div')
    node.classList.add('color')
    node.dataset.key = color
    node.style.backgroundColor = color
    node.style.borderColor = `rgb(${c.r * 0.8}, ${c.g * 0.8}, ${c.b * 0.8})`
    node.style.transform = `translateX(${SIZE * i}px)`
    return node
  }

  colors.value.map((c, i) => {
    return createNode(c, i)
  })
  .sort((node1, node2) => (node1.dataset.key > node2.dataset.key ? 1 : -1))
  .forEach(node => {
    container.appendChild(node)
  });

  morphdom(existingContainer, container)
})

document.querySelector('button#add').addEventListener('click', () => {
  colors.value.push({
    r: Math.random() * 255,
    g: Math.random() * 255,
    b: Math.random() * 255
  })
})

document.querySelector('button#reset').addEventListener('click', () => {
  colors.value.length = 0
})

document.querySelector('button#shuffle').addEventListener('click', () => {
  colors.value = shuffle(colors.value)
})