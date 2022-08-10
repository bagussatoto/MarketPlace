<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Caraousel from '@/components/Caraousel.vue'
  import PriceTitle from '@/components/PriceTitle.vue'
  import Section from '@/components/Section.vue'
  import Select from '@/components/Select.vue'
  import CTA from '@/components/CTA.vue'
  
  //Instance
  const router = useRouter()
  
  //Back handler
  const back = () => {
    setTimeout(() => {
      router.go(-1)
    }, 500)
  }
  
  //Heart handler
  const isHeartClicked = ref(false)
  
  //Colors
  const colors = ['bg-gray-800', 'bg-yellow-600', 'bg-red-700', 'bg-blue-800']
  
  //Options
  const options = ['43', '40', '38']
      
  //Images
  const images = [
      { src: 'shoes.png', alt: 'Shoes' },
      { src: 'shoes.png', alt: 'Shoes' },
      { src: 'shoes.png', alt: 'Shoes' }
    ]
</script>

<template>
  <!-- Navigation and icons -->
  <section class="slide-animation flex w-full justify-between">
    <i @click="back()" class="clicked duration-300 fa fa-arrow-left"></i>
    <i 
      @click="isHeartClicked = !isHeartClicked"
      :class="isHeartClicked ? 'fas' : 'far'" 
      class="fa-heart"></i>
  </section>
  
  <!-- Caraousel -->
  <Caraousel :images="images" />
  
  <PriceTitle 
    title="New K Tuo" 
    price="99.10" 
    prefix="$" 
    rating="4.5" 
    review="15" />
    
  <!-- Detail -->
  <Section title="Details">
    <template v-slot:body>
      <p class="text-xs text-gray-600">
        Lorem ipsum dolor sit amet ipsum cin attus lorem ipsum sit amet dolor
      </p>
    </template>
  </Section>
  
  <!-- Color -->
  <Section title="Colors">
    <template v-slot:body>
      <div class="flex gap-2">
        <template v-for="(color, index) in colors" :key="index">
          <div :class="color" class="clicked duration-300 rounded p-2 border border-gray-50 border-2"></div>
        </template>
      </div>
    </template>
  </Section>
  
  <!-- Size -->
  <Section title="Size">
    <template v-slot:body>
      <Select name="Choose the size" :options="options" />
    </template>
  </Section>
  
  <!-- Buy now -->
  <CTA class="card-animation text-gray-50 text-sm font-semibold" text="Buy now" />
</template>