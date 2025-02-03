<template>
  <section>
    <div class="t-group-mynameis text-end relative">
      <p ref="mynameis" class="t-mynameis mix-blend-difference text-light inline-block text-big3 me-4 lg:me-16">
        I am
        <br/>
        <span class="font-bold tracking-widst text-light" style="font-family: 'farnhamtext-regularlfregular';">24 years old</span>
      </p>
      <div class="t-imageofme rounded-full overflow-hidden flex justify-center items-center absolute
        top-full md:top-2/3
        left-2 sm:left-[20%]
        w-64 sm:w-72 md:w-80 lg:w-96 
        h-64 sm:h-72 md:h-80 lg:h-96 
      ">
        <NuxtImg src="/me.jpg" alt="Picture of max13h" sizes="556px" class="absolute inset-0 w-full h-full object-cover"></NuxtImg>
      </div>
    </div>

    <div class="divider-block-screen"></div>

    <div class="t-group-imajuniorwebdeveloper relative flex flex-col">
      <p ref="imajunior" class="t-imajunior mix-blend-difference text-light text-big4 inline-block ms-4 lg:ms-16">
        I'm a junior
      </p>
      <p ref="webdeveloperLetters" class="t-webdeveloper mix-blend-difference text-light font-bold text-big3 inline-block ms-4 lg:ms-16">Web Developer</p>
    </div>

    <div class="divider-block-screen"></div>

    <div class="t-group-proficientin relative">
      <p ref="proficientin" class="t-proficientin text-big4 text-center mix-blend-difference text-light">Proficient in...</p>
    </div>
    <div class="divider-block-md bg-dark"></div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const mynameis = ref()
const imajunior = ref()
const webdeveloperLetters = ref()
const proficientin = ref()


onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  splitLettersInHTML(webdeveloperLetters, 't-webdeveloper-letters text-light')

  mynameis.value.focus
  imajunior.value.focus
  webdeveloperLetters.value.focus
  proficientin.value.focus

  gsap.timeline({
    scrollTrigger: {
      trigger: '.t-group-mynameis',
      start: 'center 80%',
    },
    autoRemoveChildren: true,
  })
  .from('.t-mynameis', {
    duration: 2,
    ease: "power4.out",
    opacity: 0,
    filter: "blur(10px)",
    xPercent: -100,
    yPercent: -200,
    onComplete: () => {
      mynameis.value.classList.add('no-translate3D')
    }
  })
  .from('.t-imageofme', {
    duration: 3,
    ease: "power3.out",
    opacity: 0,
    filter: "blur(10px)",
    yPercent: -200,
    xPercent: 200,
  }, '<')
  .from('html', {
    duration: 5,
    ease: "power4.out",
    '--opacity-land1': 0,
    '--blur-land1': 'blur(10px)',
  }, '<')

  gsap.timeline({
    scrollTrigger: {
      trigger: '.t-group-imajuniorwebdeveloper',
    },
    autoRemoveChildren: true
  })
  .from('.t-imajunior', {
    duration: 2,
    ease: "power4.out",
    xPercent: -100,
    opacity: 0,
    filter: "blur(10px)",
    onComplete: () => {
      imajunior.value.classList.add('no-translate3D')
    }
  })
  .from('.t-webdeveloper-letters', {
    duration: 2,
    ease: "power4.out",
    x: (index, target) => {
      const obj: any = {}
      for (let i = 0; i <= 11; i++) {
        obj[i] = 500 - (i / 11) * 1000;
      }
      return `${obj[index]}%`
    },
    filter: 'blur(10px)',
  }, '<+=0.5')
  .from('.t-webdeveloper', {
    duration: 2,
    ease: "power4.out",
    opacity: 0,
    onComplete: () => {
      webdeveloperLetters.value.classList.add('no-translate3D')
    }
  }, '<')
  .from('html', {
    duration: 5,
    ease: "power4.out",
    '--opacity-land2': 0,
    '--blur-land2': 'blur(10px)',
  }, '<')


  gsap.from('.t-proficientin', {
    scrollTrigger: {
      trigger: '.t-group-proficientin',
      start: 'center 80%',
    },
    duration: 2,
    ease: "power4.out",
    yPercent: -200,
    filter: 'blur(10px)',
    opacity: 0,
    onComplete: () => {
      proficientin.value.classList.add('no-translate3D')
    }
  })
})
</script>

<style scoped>

.t-group-mynameis:after {
  content: '';
  filter: var(--blur-land1);
  opacity: var(--opacity-land1);
  @apply w-4/5 sm:w-2/3 h-[50%] absolute top-1/2 right-0 -translate-y-1/2 bg-dark rounded-l-3xl xl:rounded-l-[3rem] -z-10
}
.t-group-imajuniorwebdeveloper:after {
  content: '';
  filter: var(--blur-land2);
  opacity: var(--opacity-land2);
  @apply w-4/5 sm:w-2/3 h-[50%] absolute top-1/2 left-0 -translate-y-1/2 bg-dark rounded-r-3xl xl:rounded-r-[3rem] -z-10
}
.t-group-proficientin:after {
  content: '';
  filter: var(--blur-land3);
  opacity: var(--opacity-land3);
  @apply w-full h-[48%] absolute bottom-0 left-0 bg-dark rounded-t-3xl xl:rounded-t-[3rem] -z-10
}
</style>
