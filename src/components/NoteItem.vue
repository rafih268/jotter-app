<template>
  <div class="flex items-center justify-between p-4 border-b border-gray-300">
    <div>
      <h3 class="text-lg font-bold">{{ props.note?.title }}</h3> <!--This will be replaced with {{ note.title }}-->
      <p>{{ props.note?.content }}</p>
    </div>
  </div>
  <div class="flex items-center">
    <button
      @click="$emit('edit-note', props.note)"
      class="mr-2 text-blue-500 cursor-pointer"
    >Edit</button>
    <button
      @click="$emit('delete-note', props.note.id)"
      class="text-red-500 cursor-pointer"
    >Delete</button>
  </div>
</template>

<script setup>
const props = defineProps(["note"]);
</script>