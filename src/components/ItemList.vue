<script setup>
import { useExpenseStore } from '../stores/expense'

const store = useExpenseStore()
</script>

<template>
  <div class="categories px-3">
    <button
      v-for="(category, key) in store.categories"
      :key="key"
      class="flex justify-between mb-7 p-6 w-full rounded-lg hover:bg-blue"
      :class="{
        'bg-green': category.color === 'green',
        'bg-pistachio': category.color === 'pistachio',
        'bg-pink': category.color === 'pink',
        'bg-orange': category.color === 'orange',
        'bg-red': category.color === 'red'
      }"
    >
      <span class="text-md font-bold">{{ category.label }}</span>
      <span class="text-md font-bold">
        {{ store.getCategoryTotal(category.label) }} €</span
      >
    </button>
  </div>
</template>

<style scoped>
.categories {
  max-width: 800px;
  margin: auto;
}
</style>
