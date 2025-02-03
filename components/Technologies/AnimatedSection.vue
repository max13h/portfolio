<template>
  <section :class="sectionClass" class="relative z-20">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const props = defineProps({
  trigger: String,
  sectionClass: String
})

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.timeline({
    scrollTrigger: {
      trigger: props.trigger,
      start: 'top 80%',
    },
    autoRemoveChildren: true
  })
  .from('.title', {
    duration: 2,
    ease: "power4.out",
    filter: 'blur(10px)',
    opacity: 0,
    scale: 0,
    xPercent: -500
  })
  .from('.icon', {
    ease: "power4.out",
    filter: 'blur(10px)',
    opacity: 0,
    yPercent: 200,
    duration: 1.5,
    stagger: 0.3
  }, '>-=1')
})
</script>

<style scoped>
/* Scoped styles for animation */
</style>
