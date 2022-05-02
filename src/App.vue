<script setup>
import AppHeader from './components/AppHeader.vue'
import ItemList from './components/ItemList.vue'
import AddExpenseButton from './components/AddExpenseButton.vue'
</script>

<template>
  <AppHeader />

  <ItemList />

  <AddExpenseButton />
</template>

<style>
@import './assets/base.css';
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  min-height: 100vh;
  margin: 0 auto;

  font-weight: normal;
  color: white;
}
</style>
