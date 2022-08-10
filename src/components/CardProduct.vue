<script setup>
  import { useRouter } from 'vue-router'  
  const router = useRouter()
  
  //Card clicked handler
  const next = () => {
    setTimeout(() => {
      router.push({ name: 'detail' })
    }, 500)
  }
  
</script>

<template>
   <section class="card-animation w-5.5/12" @click="next()">
      <img src="/shoes.png" class="clicked duration-300 p-2 bg-gray-50 rounded-xl" />
      <small class="text-xxs font-medium">New K Tuo</small>
      <h1 class="text-xs font-semibold">$99.10</h1>
   </section>
</template>