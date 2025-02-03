<template>
  <section class="t-mystack bg-dark w-full h-full flex flex-col items-center">
    <!-- Backend Section -->
    <AnimatedSection :trigger="'.t-group-backend'" sectionClass="t-group-backend">
      <div class="t-group-backend-title">
        <h3 class="title text-light text-center mix-blend-difference leading-6">
          Back-end
          <br>
          <span class="text-light text-big6 opacity-75">development</span>
        </h3>
      </div>
      <TechnologiesList :technologies="technologies.backend" />
    </AnimatedSection>

    <!-- Separator -->
    <p class="t-and text-light text-big5 my-16">&</p>

    <!-- Frontend Section -->
    <AnimatedSection :trigger="'.t-group-frontend'" sectionClass="t-group-frontend">
      <div class="t-group-frontend-title">
        <h3 class="title text-light text-center mix-blend-difference leading-6">
          Front-end
          <br>
          <span class="text-light text-big6 opacity-75">development</span>
        </h3>
      </div>
      <TechnologiesList :technologies="technologies.frontend" />
    </AnimatedSection>
  </section>
</template>

<script setup lang="ts">
const technologies = dataTechnologies()
</script>

<style scoped>
/* Global scoped styles */
</style>
