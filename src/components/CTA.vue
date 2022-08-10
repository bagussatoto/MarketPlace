<script setup>
  
  defineProps({
    text: {
      type: String,
      default: 'The text'
    }
  })
  
</script>

<template>
  
  <button class="bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 mt-5 mb-3 py-2 rounded w-full" type="button">
    {{ text }}
  </button>
  
</template>