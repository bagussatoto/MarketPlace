<script setup>
   
   import { ref } from 'vue'
   
   const navs = [
     {
        label: 'Home',
        icon: 'fa fa-home'
     },
     {
        label: 'Near by',
        icon: 'fa fa-compass'
     },
     {
        label: 'Cart',
        icon: 'fas fa-shopping-bag'
     },
     {
        label: 'Profile',
        icon: 'fa fa-user'
     }
  ]
      
   const current = ref(navs[0].label)
   
</script>

<template>
   <section class="fixed bg-white left-0 right-0 bottom-0 px-3 py-2  border">
      <div class="w-full md:w-6/12 lg:w-5/12 xl:w-3/12 mx-auto flex justify-between">
         <template v-for="(nav, index) in navs" :key="index">
            <div
               @click="current = nav.label"
               :class="current === nav.label ? 'text-yellow-500' : 'text-gray-300'"
               class="transition-300 flex flex-wrap justify-center">
               <i :class="nav.icon" class="text-sm"></i>
               <p class="text-xxs w-full text-center font-medium">{{ nav.label }}</p>
            </div>
         </template>
      </div>
   </section>
</template>