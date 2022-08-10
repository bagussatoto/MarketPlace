<script setup>
  
  //Props
  defineProps({
    title: {
      type: String,
      default: 'The Title'
    },
    price: {
      type: String,
      default: '10.99'
    },
    prefix: {
      type: String,
      default: '$'
    },
    rating: {
      type: String,
      default: '3'
    },
    review: {
      type: String,
      default: '2'
    }
  })
  
</script>

<template>
  <section class="mt-3">
    <!-- Title, price -->
    <div class="slide-animation flex w-full justify-between">
      <h3 class="font-medium">{{ title }}</h3>
      <strong class="text-yellow-600">{{ prefix }}{{ price }}</strong>
    </div>
    <!-- Review , rating -->
    <small class="slide-animation font-medium text-yellow-600">
      <i class="text-xs fa fa-star"></i>
      {{ rating }} ( {{ review }} review )
    </small>
  </section>
</template>