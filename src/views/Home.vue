<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="container mx-auto">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-3xl font-bold">Note List</h1>
        <button
          @click="isAdding = true"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        > + Add Note</button>
      </div>
      <NoteList :notes="notes" @edit-note="startEditing" @delete-note="deleteNote" />
      <AddNote v-if="isAdding" @add-note="addNote" @close="isAdding = false" />
      <EditNote v-if="isEditing" :note="currentNote" @update-note="updateNote" @close="isEditing = false" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import AddNote from '../components/AddNote.vue';
import EditNote from '../components/EditNote.vue';
import NoteList from '../components/NoteList.vue';

const notes = ref([]);

// Modal visibility for adding and editing notes
const isAdding = ref(false);
const isEditing = ref(false);

const currentNote = ref(null);

const addNote = (note) => {
  notes.value.push(note);
  isAdding.value = false;
};

const updateNote = (updatedNote) => {
  const index = notes.value.findIndex(note => note.id === updatedNote.id);
  if (index !== -1) {
    notes.value[index] = updatedNote;
  }

  isEditing.value = false;
};

const deleteNote = (noteId) => {
  notes.value = notes.value.filter(note => note.id !== noteId);
};

const startEditing = (note) => {
  currentNote.value = note;

  isEditing.value = true;
};
</script>