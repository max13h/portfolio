<template>
  <main class="relative overflow-x-hidden" :class="{ 'overflow-hidden': !gsapStore.isWelcomed }">
    <Entrance />
    <Navbar />
    <Welcome />
    <About />
    <Stack />
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
