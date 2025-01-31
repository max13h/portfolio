<template>
  <nav class="nav-container">
    <NuxtLink class="contact-button" @click="scrollToContact">
      Contact
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const lenisStore = useLenisStore();

const scrollToContact = () => {
  lenisStore.lenis.scrollTo("#contact");
};
</script>

<style scoped>
.nav-container {
  @apply fixed w-full flex justify-end items-center mix-blend-difference 
         has-[:hover]:mix-blend-normal font-light z-50;
}

.contact-button {
  @apply transition-all duration-150 rounded-3xl hover:scale-105 
         hover:z-[100] hover:font-semibold py-2 px-4 mt-4 me-4 
         cursor-pointer text-light hover:text-dark;
  position: relative;
}

.contact-button::before,
.contact-button::after {
  content: "";
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 
         -translate-y-1/2 rounded-3xl hidden;
}

.contact-button::before {
  @apply w-[104%] h-[104%] -z-10 bg-light;
}

.contact-button::after {
  @apply w-[110%] h-[110%] -z-[99];
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 700 700" width="700" height="700" opacity="1"><defs><linearGradient gradientTransform="rotate(0, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="ffflux-gradient"><stop stop-color="hsl(186, 88%, 56%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(240, 91%, 55%)" stop-opacity="1" offset="100%"></stop></linearGradient><filter id="ffflux-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.006 0.003" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence><feGaussianBlur stdDeviation="0 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur><feBlend mode="saturation" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend><feColorMatrix type="saturate" values="3" x="0%" y="0%" width="100%" height="100%" in="blend" result="colormatrix"></feColorMatrix></filter></defs><rect width="700" height="700" fill="url(%23ffflux-gradient)" filter="url(%23ffflux-filter)"></rect></svg>');
  background-size: 400%;
}

@keyframes glowing {
  0% { background-position: 0 0; }
  100% { background-position: 400% 400%; }
}

.contact-button:hover::after {
  @apply block;
  animation: glowing 10s linear infinite;
}

.contact-button:hover::before {
  @apply block;
}
</style>
