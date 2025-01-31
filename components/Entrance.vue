<template>
  <div id="entrance" v-if="isEntering" class="absolute inset-0 z-[500]">
    <div class="fixed inset-0 z-[501] flex flex-col">
      <div class="flex w-full h-full">
        <div 
          v-for="index in 10" 
          :key="index" 
          class="line w-[10%] h-full bg-dark">
        </div>
      </div>

      <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-xl font-light overflow-hidden">
          <span class="text text-light text-sm font-light inline-block text-center">
            Portfolio - {{ currentYear }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { computed, onMounted } from "vue";

const isEntering = ref(true)
const currentYear = computed(() => new Date().getFullYear());

onMounted(() => {
  gsap.timeline({
    onComplete: () => { isEntering.value = false; },
    autoRemoveChildren: true,
  })
  .from("#entrance .text", { duration: 0.5 })
  .to("#entrance .text", { opacity: 0, duration: 0.5 }, 1)
  .to("#entrance .line", {
    stagger: 0.1,
    xPercent: (index) => -100 * index - 200,
    duration: 0.5,
  }, "-=0.1");
});
</script>
