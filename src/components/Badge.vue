<script setup>
   
   //Define props
   defineProps({
      label: {
         type: String,
         default: 'Label'
      },
      active: {
         type: String
      }
   })
</script>

<template>
   <section
      :class="active ? 'bg-gray-800 text-gray-50 font-medium' : 'bg-white'"
      class="slide-animation px-3 py-1 transition-300 border border-gray-400 rounded-xl">
      <p class="text-xs">{{ label }}</p>
   </section>
</template>