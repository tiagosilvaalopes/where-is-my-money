<script setup>
import ItemList from './components/ItemList.vue'
import AddExpenseButton from './components/AddExpenseButton.vue'
</script>

<template>
  <ItemList />

  <AddExpenseButton />
</template>

<style>
@import './assets/base.css';
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
  color: white;
}
</style>
