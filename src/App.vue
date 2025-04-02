<script setup>
import { ref } from 'vue';
const message = ref('This will be the main page for the Jotter App')
</script>

<template>
  <h1 class="text-4xl font-bold underline">{{ message }}</h1>
</template>

<style scoped>
</style>
