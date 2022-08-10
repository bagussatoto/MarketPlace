<script setup>
  
  defineProps({
    options: {
      type: Array
    },
    name: {
      type: String,
      default: 'Select'
    }
  })
  
</script>

<template>
  <select class="mt-1 text-gray-600 border border-gray-400 bg-gray-100 p-1 rounded w-6/12 text-xs" :name="name">
    <option selected="">{{ name }}</option>
    <template v-for="(opt, index) in options" :key="index">
      <option :value="opt">{{ opt }}</option>
    </template>
  </select>
</template>