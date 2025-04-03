<template>
  <div class="flex items-center justify-between p-4 border-b border-gray-300">
    <div>
      <h3 class="text-lg font-bold">Note Title</h3> <!--This will be replaced with {{ note.title }}-->
      <p>Note Content</p>
    </div>
  </div>
  <div class="flex items-center">
    <button
      @click="$emit(('edit-note', note))"
      class="mr-2 text-blue-500 cursor-pointer"
    >Edit</button>
    <button
      @click="$emit('delete-note', note.id)"
      class="text-red-500 cursor-pointer"
    >Delete</button>
  </div>
</template>

<script setup>
const props = defineProps(['note']);
</script>