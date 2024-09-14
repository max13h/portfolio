<template>
  <main class="relative overflow-x-hidden" :class="{ 'overflow-hidden': !gsapStore.isWelcomed }">
    <Entrance v-if="gsapStore.isEntrance" />
    <Navbar />
    <Welcome />
    <section>
      <AboutMeTextPart />
      <AboutMeStackPart />
    </section>
    <Projects />
    <Contact />
    <Footer />
  </main>
</template>

<script setup lang="ts">
const gsapStore = useGsapStore()

onMounted(() => {
  useLenis()

})
</script>

<style scoped>
</style>
