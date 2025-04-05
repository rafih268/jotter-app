<template>
  <div class="bg-white p-4 rounded-lg shadow-lg">
    <template v-if="notes.length > 0">
      <NoteItem
        v-for="note in props.notes"
        :key="note.id"
        :note="note"
        @edit-note="onEdit"
        @delete-note="onDelete"
      />
    </template>
    <h3 v-else class="text-center text-gray-500">No notes created</h3>
  </div>
</template>

<script setup>
import NoteItem from './NoteItem.vue';

const props = defineProps(['notes']);
const emit = defineEmits(['edit-note', 'delete-note']);

const onEdit = (note) => {
  emit('edit-note', note);
};

const onDelete = (noteId) => {
  emit('delete-note', noteId);
};
</script>