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
import { ref, onMounted } from 'vue';
import axios from 'axios';

import AddNote from '../components/AddNote.vue';
import EditNote from '../components/EditNote.vue';
import NoteList from '../components/NoteList.vue';

const notes = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/notes');
    notes.value = response.data;
  } catch (error) {
    console.error('Unable to retrieve notes', error);
  }
})

// Modal visibility for adding and editing notes
const isAdding = ref(false);
const isEditing = ref(false);

const currentNote = ref(null);

const addNote = async (note) => {
  try {
    const response = await axios.post('http://localhost:5000/notes', note);
  } catch (error) {
    console.error('Unable to add new note', error);
  } finally {
    isAdding.value = false;
  }
};

const updateNote = async (updatedNote) => {
  const index = notes.value.findIndex(note => note.id === updatedNote.id);
  try {
    if (index !== -1) {
      await axios.put(`http://localhost:5000/notes/${updatedNote.id}`, updatedNote);
    }
  } catch (error) {
    console.log('Unable to update note', error);
  } finally {
    isEditing.value = false;
  }
};

const deleteNote = async (noteId) => {
  try {
    await axios.delete(`http://localhost:5000/notes/${noteId}`);
  } catch (error) {
    console.error('Unable to delete note', error);
  }
};

const startEditing = (note) => {
  currentNote.value = note;

  isEditing.value = true;
};
</script>