import Lenis from '@studio-freight/lenis'

export const useLenisStore = defineStore("lenis", () => {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return { lenis }
})
