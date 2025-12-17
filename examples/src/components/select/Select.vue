<script setup>
  import { ref, watch } from 'vue'
  const mode = ref('lte')
  const limit = ref(15)
  const value = ref(20)
  watch([mode, limit], () => {
    if (mode.value === 'lte' && value.value > limit.value) {
      value.value = limit.value
    }

    if (mode.value === 'gte' && value.value < limit.value) {
      value.value = limit.value
    }
  })
</script>
<template>
  <select v-model="mode">
    <option value="lte">меньше чем или равно</option>
    <option value="gte">большe чем или равно</option>
  </select>
  <input type="number" value="15" v-model="limit">
  <hr/>
  Целевое значение:
  <input v-if="mode === 'lte'" type="number" v-model="value" :max="limit">
  <input v-if="mode === 'gte'" type="number" v-model="value" :min="limit">
</template>
<style lang="sass"></style>
