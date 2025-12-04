<script setup>
  import { ref } from 'vue'
  const SIZE = 60;

  const randomValue = ref(0);

  const colors = ref([
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
  ]);

  function addColor() {
    colors.value.push({
      r: Math.random() * 255,
      g: Math.random() * 255,
      b: Math.random() * 255,
    });
  };

  function resetColors() {
    colors.value = [];
  };

  function shuffle(arr) {
    return arr.toSorted(() => (Math.random() < .5 ? 1 : -1));
  }

  function shuffleColors() {
    colors.value = shuffle(colors.value);
  };
</script>

<template>
  <div id="colors">
    <div class="color" v-for="(c, i) in colors" :style="{
      backgroundColor: `rgb(${c.r}, ${c.g}, ${c.b})`,
      borderColor: `rgb(${c.r * 0.8}, ${c.g * 0.8}, ${c.b * 0.8})`,
      transform: `translateX(${SIZE * i}px)`
    }" :key="`rgb(${c.r}, ${c.g}, ${c.b})`"></div>

  </div>
  <button id="add" v-if="colors.length < 5" @click="addColor">Add</button>
  <button id="reset" @click="resetColors">Reset</button>
  <button id="shuffle" @click="shuffleColors">Shuffle</button>
</template>

<style scoped>
#colors {
  height: 60px;
  position: relative;
  margin-bottom: 5px;
}

.color {
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-style: solid;
  border-width: 4px;
  display: inline-block;
  height: 60px;
  width: 60px;
  border-radius: 5px;

  position: absolute;
  transition: all 0.5s;
}
</style>
