import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useExpenseStore = defineStore('expenses', {
  state: () => ({
    categories: [
      { label: "Can't live without", color: 'green' },
      { label: 'Expensive, but worth it', color: 'pistachio' },
      { label: 'Guilty pleasures', color: 'pink' },
      { label: 'Expensive and not worth it', color: 'orange' },
      { label: 'I regret buying that', color: 'red' }
    ],
    expenses: useStorage('expenses', [])
  }),
  actions: {
    addExpense(expense = {}) {
      this.expenses.push(expense)
    },
    removeExpense(index) {
      this.expenses.splice(index, 1)
    },
    getCategoryTotal(category = '') {
      const expensesByCategory = this.expenses
        .filter((expense) => expense.category === category)
        .map((expense) => {
          return expense.value
        })

      if (expensesByCategory.length > 0) {
        return expensesByCategory.reduce((previous, current) => {
          return previous + current
        })
      } else {
        return 0
      }
    }
  }
})
