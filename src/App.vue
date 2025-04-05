<script setup>
import { ref } from 'vue';
import AddNote from './components/AddNote.vue';
import EditNote from './components/EditNote.vue';
import NoteItem from './components/NoteItem.vue';
import Home from './views/Home.vue';
const message = ref('This will be the main page for the Jotter App')
</script>

<template>
  <Home />
</template>

<style scoped>
</style>
