<template>

</template>

<script setup>
import { ref } from 'vue';

import AddNote from '../components/AddNote.vue';
import EditNote from '../components/EditNote.vue';
// import NoteList from '../components/NoteList.vue';

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