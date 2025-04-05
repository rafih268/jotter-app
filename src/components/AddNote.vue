<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
    <div class="flex flex-col bg-white p-6 rounded-lg shadow-lg w-200 h-100">
      <h2 class="text-2xl text-center font-bold mb-4">Add Note</h2>
      <input
        type="text"
        placeholder="Note Title"
        v-model="noteTitle"
        class="w-full text-2xl font-bold p-2 border border-gray-300 rounded mb-4"
      />
      <textarea
        placeholder="Start typing here..."
        v-model="noteContent"
        class="w-full h-full p-2 border border-gray-300 rounded mb-4 resize-none"
      ></textarea>
      <button
        @click="handleAdd"
        class="mt-auto w-full bg-blue-500 text-white p-2 rounded cursor-pointer"
      >Add</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(["add-note"]);

const noteTitle = ref('');
const noteContent = ref('');

const handleAdd = () => {
  if (!noteTitle.value) {
    noteTitle.value = 'Untitled';
  }

  const newNote = {
    id: Math.random().toString(36).substring(2,9),
    title: noteTitle.value,
    content: noteContent.value
  }

  // Emit new note object to the parent component
  emit("add-note", newNote);

  noteTitle.value = '';
  noteContent.value = '';
};
</script>