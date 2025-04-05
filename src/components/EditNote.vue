<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
    <div class="flex flex-col bg-white p-6 rounded-lg shadow-lg w-200 h-100">
      <h2 class="text-2xl text-center font-bold mb-4">Edit Note</h2>
      <input
        type="text"
        placeholder="Note Title"
        v-model="newTitle"
        class="w-full text-2xl font-bold p-2 border border-gray-300 rounded mb-4"
      />
      <textarea
        placeholder="Note Content"
        v-model="newContent"
        class="w-full h-full p-2 border border-gray-300 rounded mb-4 resize-none"
      ></textarea>
      <button
        @click="handleUpdate"
        class="mt-auto w-full bg-blue-500 text-white p-2 rounded cursor-pointer"
      >Update</button>
    </div>
  </div>
</template>
 
<script setup>
import { ref } from 'vue';

const props = defineProps(["note"]);

const emit = defineEmits(["update-note"]);

const newTitle = ref(props.note.title); // Note title will be retrieved from props once defined
const newContent = ref(props.note.content); // Note content will be retrived from props once defined

const handleUpdate = () => {
  if (newTitle.value && newContent.value) {
    const updatedNote = {
      ...props.note,
      title: newTitle.value,
      content: newContent.value
    }
    emit('update-note', updatedNote);
  }
};
</script>