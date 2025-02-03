<template>
  <div class="t-technologies-list flex flex-wrap overflow-hidden justify-evenly items-center p-4 mt-4 w-[90vw] max-w-[21rem] sm:max-w-[90vw]">
    <div v-for="(technology, index) in technologies" :key="index" class="t-technology-icon relative m-2 sm:mx-4">
      <Icon
        :name="technology.icon"
        size="8rem"
        class="tech-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
        :class="{
          'tech-icon-active': modalOpened === technology.name,
          'tech-icon-rails': technology.name === 'Ruby on Rails',
          'tech-icon-rails-active': modalOpened === 'Ruby on Rails' && technology.name === 'Ruby on Rails',
        }"
        tabindex="0"
        @click="openModal(technology.name)"
        @keyup.enter="openModal(technology.name)"
      />

      <TechnologyModal :technology="technology" :isOpen="modalOpened === technology.name" @close="closeModal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

defineProps<{
  technologies: Technology[]
}>()

const modalOpened = ref('')

function closeModal() {
  modalOpened.value = ''
}

function openModal(technology: string) {
  modalOpened.value = technology
}
</script>

<style scoped>
/* Your existing styles for the icons and hover effects here */
</style>
