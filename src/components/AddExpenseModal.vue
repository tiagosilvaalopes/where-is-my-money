/* eslint-disable prettier/prettier */
<script setup>
import { ref } from 'vue'
import { useExpenseStore } from '../stores/expense'

const store = useExpenseStore()
const description = ref('')
const price = ref()
const categorySelected = ref('')

const handleAddExpense = () => {
  store.addExpense({
    category: categorySelected.value,
    description: description.value,
    value: price.value,
    date: new Date()
  })
  // this.$emit('close-modal')
}
</script>

<template>
  <div class="modal-overlay">
    <div class="modal">
      <h1 class="text-2xl font-bold mb-10">Add Expense</h1>
      <form
        class="flex flex-col items-center gap-3"
        @submit.prevent="handleAddExpense"
      >
        <input
          v-model="description"
          class="p-1 w-1/2 border rounded"
          type="text"
          placeholder="Description"
          required
        />

        <input
          v-model="price"
          class="p-1 w-1/2 border rounded"
          type="number"
          step=".01"
          min="0"
          placeholder="Price"
          required
        />

        <select
          v-model="categorySelected"
          name="categories"
          class="py-1 w-1/2 border rounded"
          placeholder="Select a category"
        >
          <option disabled>Category</option>
          <option
            v-for="(category, key) in store.categories"
            :key="key"
            :value="category.label"
          >
            {{ category.label }}
          </option>
        </select>

        <div class="flex justify-center gap-4 mt-8">
          <button
            type="button"
            @click="$emit('close-modal')"
            class="text-green font-bold"
          >
            Close
          </button>
          <button type="submit" class="bg-green font-bold text-white">
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  position: relative;
  top: 20%;
  text-align: center;
  background-color: white;
  height: 300px;
  width: 450px;
  padding: 20px 0;
  border-radius: 20px;
  color: black;
}

button {
  width: 100px;
  height: 40px;
  font-size: 14px;
  border-radius: 16px;
}
</style>
