<script setup>
   
   import { ref } from 'vue'
   import Navbar from '@/components/Navbar.vue'   
   import Header from '@/components/Header.vue'
   import SearchBar from '@/components/SearchBar.vue'
   import Badge from '@/components/Badge.vue'
   import CardProduct from '@/components/CardProduct.vue'
   
   //Categorys
   const categorys = ['All', 'Nike', 'Adidas', 'Puma']
   const currentCategory = ref(categorys[0])
</script>

<template>
	<!-- This is Header -->
	<Header></Header>
	<!-- This is SearchBar -->
	<SearchBar></SearchBar>
	
	<!-- This is categorys -->
	<section class="mb-6 flex overflow-scroll justify-between gap-3">
   	<template v-for="(category, index) in categorys" :key="index">
   	   <Badge 
   	      @click="currentCategory = category"
   	      :active="currentCategory === category" 
   	      :label="category" />
   	</template>
	</section>
	
	<!-- Render CardProduct 8 times -->
	<section class="flex flex-wrap gap-4 justify-between">
	   <template v-for="card in 10" :key="card">
	      <CardProduct />
	   </template>
	</section>
	
	<!-- This is Navbar -->
	<Navbar></Navbar>
</template>

<style scoped>
   
   * {
      -ms-overflow-style: none;
      scrollbar-width: none;
   }
   
   *::-webkit-scrollbar {
     display: none;
   }
   
</style>