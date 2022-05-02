/* eslint-disable prettier/prettier */
<script setup>
import { ref } from 'vue'
import AddExpenseDialog from './AddExpenseModal.vue'

const isAddExpenseDialogShown = ref(false)
</script>

<template>
  <button
    class="absolute bottom-10 right-5 w-16 h-16 pb-1 flex items-center justify-center rounded-full text-3xl border border-blue text-blue hover:bg-blue hover:text-white"
    @click="isAddExpenseDialogShown = true"
  >
    <span>+</span>
  </button>

  <AddExpenseDialog
    v-show="isAddExpenseDialogShown"
    @close-modal="isAddExpenseDialogShown = false"
  />
</template>

<style scoped></style>
