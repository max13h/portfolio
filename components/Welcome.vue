<template>
  <header id="welcome" class="t-welcome relative h-screen flex justify-center items-center">
    <h1 class="text-big1 flex flex-col items-center leading-[1.5]">
      <span :ref="letterRefs[0]">Hello, I'm </span>
      <span class="name-container relative flex flex-col items-center leading-[0.9]">
        <span :ref="letterRefs[1]">Maxime</span>
        <span :ref="letterRefs[2]">Hmae</span>
      </span>
    </h1>
    <div class="t-scrolldown absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <p>Scroll down !</p>
      <Icon name="fluent:arrow-circle-down-12-filled" size="2rem" class="text-dark" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const gsapStore = useGsapStore();
const lenisStore = useLenisStore();

const letterRefs = [ref(), ref(), ref()];

const letterAnimation = {
  exitTimeline: {
    duration: 1,
    ease: 'power4.in',
    yPercent: -200,
    opacity: 0,
  },
  entranceTimeline: {
    duration: 1,
    stagger: 0.05,
    ease: CustomEase.create('custom', 'M0,0 C0.169,0.85 0.054,1.025 1,1'),
  },
  rotation: {
    first: {
      duration: 0.1,
      delay: 0.3,
      stagger: 0.06,
    },
    second: {
      duration: 0.5,
      delay: 0.6,
      stagger: 0.06,
    },
  },
};

const calculateExitXPercent = (index: number): number => {
  if (index < 9) {
    return -500 + (index * (1000 / 8));
  }
  return -200 + ((index - 9) * (400 / 5));
};

const getRandomRotation = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

const setupExitAnimation = () => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: '.t-welcome',
      start: 'bottom 90%',
      end: 'bottom 90%',
      toggleActions: 'play none reverse none',
    },
  })
    .to('#welcome .letter', {
      ...letterAnimation.exitTimeline,
      xPercent: calculateExitXPercent,
    }, 0)
    .to('#welcome div', {
      duration: 1,
      ease: 'power4.in',
      yPercent: -100,
      opacity: 0,
    }, 0);
};

const setupEntranceAnimation = () => {
  return gsap.timeline({ autoRemoveChildren: true, delay: 2.5 })
    .from('#welcome .letter', {
      xPercent: 5000,
      ...letterAnimation.entranceTimeline,
    })
    .to('#welcome .letter', {
      ...letterAnimation.rotation.first,
      rotate: () => `-${getRandomRotation(10, 30)}`,
    }, '<')
    .to('#welcome .letter', {
      ...letterAnimation.rotation.second,
      rotate: () => `${getRandomRotation(-8, 8)}`,
    }, '<')
    .to('#welcome .name-container', { overflow: 'hidden' })
    .to('html', { '--display-max13h': 'block' }, '<')
    .to('html', { duration: 0.4, '--bottom-max13h': -50 }, '<')
    .to('#welcome .name-container', { 
      duration: 0.1, 
      fontFamily: 'farnhamtext-regularlfregular',
    })
    .to('html', {
      duration: 0.4,
      '--bottom-max13h': 100,
      onComplete: () => {
        gsapStore.isWelcomed = true;
        lenisStore.lenis.start();
      }
    }, '<')
    .to('html', { '--display-max13h': 'none', overflow: 'visible' })
    .to('#welcome .name-container', { overflow: 'visible' }, '<')
    .from('#welcome div', { duration: 1, opacity: 0 }, '<')
    .from('nav', { duration: 2, opacity: 0 }, '<');
};

onMounted(() => {
  letterRefs.forEach(el => {
    splitLettersInHTML(el, 'letter');
  });

  gsap.registerPlugin(CustomEase, ScrollTrigger);

  setupExitAnimation();
  setupEntranceAnimation();
});
</script>

<style scoped>
#welcome .name-container::after {
  content: '';
  position: absolute;
  bottom: var(--bottom-max13h);
  display: var(--display-max13h);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100%;
  width: calc(10rem + 50vw);
  height: calc(7rem + 50vw);
  @apply bg-light;
}
</style>