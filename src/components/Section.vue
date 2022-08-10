<script setup>
  
  defineProps({
    title: {
      type: String,
      default: 'The title'
    }
  })
  
</script>

<template>
  <section class="card-animation mt-3">
    <p class="text-sm font-medium">{{ title }}</p>
    <slot name="body" />
  </section>
</template>