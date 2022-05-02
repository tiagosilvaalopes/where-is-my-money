<script setup>
const changePreferedTheme = () => {
  console.log(true)
}
</script>

<template>
  <div class="flex justify-between items-center h-16 w-full -b mb-4">
    <!-- Title -->
    <div class="flex items-end">
      <img class="ml-4" src="/favicon-32x32.png" />
      <span class="ml-2 text-xl font-bold">Where is my money?</span>
    </div>

    <!-- Theme Change Button -->
    <button class="mr-4" @click="changePreferedTheme">
      <font-awesome-icon icon="moon" class="fa-xl"></font-awesome-icon>
    </button>
  </div>
</template>

<style scoped></style>
