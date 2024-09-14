<template>
  <div
    v-for="(project, projectIndex) in projects"
    :key="projectIndex"
    class="t-project flex-shrink-0 relative overflow-hidden rounded-2xl group
      w-[80vw]
      h-[80vw]
      sm:w-[50vh]
      sm:h-[50vh]
      me-8
      last:me-0
      cursor-pointer
      border-2
      border-dark
    "
    @click="openModal(project.name)"
  >
    <NuxtImg :src="project.mainImage" class="transition-all duration-500 blur-2xl group-hover:blur-0 group-hover:scale-105 absolute inset-0 w-full h-full object-cover" />
    <div class="transition-all duration-500 group-hover:bg-zinc-900 w-full h-full group-hover:h-0 bg-dark absolute bottom-0 left-0 opacity-50"></div>
    <h3 class="transition-all group-hover:scale-105 group-hover:opacity-0 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-big5 text-light text-center ">{{ project.name }}</h3>

    <TransitionRoot appear :show="modalOpened === project.name">
      <Dialog @close="closeModal" class="relative z-[400]">
        <TransitionChild
          as="div"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-light/70" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4"
          >
            <TransitionChild
              as="div"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="bg-light rounded-2xl h-[90vh] w-[90vw] max-w-screen-2xl shadow-2xl shadow-dark overflow-y-scroll flex flex-col">
                <div class="w-full flex justify-end pt-8 pr-8 bg-dark">
                  <Icon name="fluent:dismiss-12-regular" size="1rem" class="text-light cursor-pointer" @click="closeModal" tabindex="2" />
                </div>
                <div class="flex-grow pl-8 pr-8 sm:pl-12 sm:pr-12 flex flex-col bg-dark rounded-b-3xl">
                  <DialogTitle as="h4" class="text-light text-big3 font-semibold leading-none">
                    {{ project.name }}
                  </DialogTitle>
                  <p class="text-light italic opacity-75">{{ project.date }}</p>

                  <div class="flex justify-start items-center my-4">
                    <NuxtLink v-for="(techno, technoIndex) in project.stack" :key="technoIndex" :to="techno.link" target="_blank" :tabindex="3 + technoIndex" class="me-2 last:me-0">
                      <Icon v-if="techno.isIcon" :name="techno.icon" size="1.5rem" :color="techno.name === 'Ruby on Rails' ? 'red' : ''" :class="techno.class" />
                      <NuxtImg v-else :src="techno.imageLink" :alt="`Icon of ${techno.name}`" :class="techno.class" />
                    </NuxtLink>
                  </div>

                  <DialogDescription class="text-light mt-8 lg:text-xl whitespace-pre-line ">{{ project.description }}</DialogDescription>

                  <NuxtLink :to="project.link" target="_blank" tabindex="1" class="btn-light self-end my-8">
                    {{ project.textLink }}
                  </NuxtLink>
                </div>
                <div class="flex-shrink-0">
                  <div class="flex p-8 bg-light" :class="{'overflow-x-scroll' : project.images.length > 1 }">
                    <NuxtLink
                      v-for="(image, imgIndex) in project.images" :key="imgIndex"
                      :to="image[0] == '/' ? actualURL + image : image"
                      target="_blank"
                      class="flex-shrink-0 rounded-3xl overflow-hidden relative shadow-xl border-2 border-dark
                        me-8
                        last:me-0
                        w-[65vw]
                        h-[65vw]
                        sm:w-[50vh]
                        sm:h-[50vh]
                        cursor-pointer
                      "
                    >
                      <NuxtImg :src="image" class="absolute inset-0 w-full h-full object-cover" />
                    </NuxtLink>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

const projects = [
{
    name: 'Early stage project',
    date: 'November 2023 - now',
    mainImage: 'secretproject/logo_secretproject.png',
    description: "Due to its early stage and the absence of a legally registered name, I am hesitant to share extensive information at this time. The project aspires to evolve into a Software as a Service (SaaS) platform. \nI began working on it in November 2023 and have recently completed the initial steps of my Minimum Viable Product (MVP). This project helped me discover the less glamorous aspects of the job, such as operational components and project architecture. \nWhile I acknowledge there are certain issues and imperfections, I am currently focused on building, learning, and presenting the project to potential future collaborators.",
    stack: [
      {
        name: 'Nuxt',
        isIcon: true,
        icon: 'logos:nuxt-icon',
        imageLink: '',
        link: 'https://nuxt.com/',
        class: ''
      },
      {
        name: 'Typescript',
        isIcon: true,
        icon: 'devicon:typescript',
        imageLink: '',
        link: 'https://www.typescriptlang.org/',
        class: ''
      },
      {
        name: 'Typescript',
        isIcon: true,
        icon: 'logos:tailwindcss-icon',
        imageLink: '',
        link: 'https://tailwindcss.com/',
        class: ''
      },
      {
        name: 'Supabase',
        isIcon: true,
        icon: 'logos:supabase-icon',
        imageLink: '',
        link: 'https://supabase.com/',
        class: ''
      },
      {
        name: 'Vite',
        isIcon: true,
        icon: 'vscode-icons:file-type-vite',
        imageLink: '',
        link: 'https://vitejs.dev',
        class: ''
      },
      {
        name: 'Vitest',
        isIcon: true,
        icon: 'devicon:vitest',
        imageLink: '',
        link: 'https://vitest.dev',
        class: ''
      }
    ],
    link: 'https://github.com/max13h/',
    textLink: 'My github (not the project)',
    images: [
      'secretproject/logo_secretproject.png',
      'secretproject/sign_in_screen.png',
      'secretproject/database_schema.png',
    ],
  },
  {
    name: 'The Favorite',
    date: 'September 2023 - October 2023',
    mainImage: 'the_favorite/crown.svg',
    description: "The Favorite offers a humorous take on the burden of parenthood. Parents work as a real team, while having fun competing against each other. \nIt was a great first project to work on. I took the lead of our team of three over a one-month period, dedicating a significant amount of time to its success. We brought some excellent ideas and are really proud of the accomplished work. \nParticipating in this project during my bootcamp provided the opportunity to work in a full team project early in my career, contributing to a better understanding of the collaborative approach required for development projects.",
    stack: [
      {
        name: 'Ruby',
        isIcon: true,
        icon: 'vscode-icons:file-type-ruby',
        imageLink: '',
        link: 'https://www.ruby-lang.org/',
        class: ''
      },
      {
        isIcon: true,
        name: 'Ruby on Rails',
        icon: 'simple-icons:rubyonrails',
        link: 'https://rubyonrails.org/',
        imageLink: '',
        class: 'filter-red'
      },
      {
        isIcon: true,
        name: 'PostgreSQL',
        icon: 'logos:postgresql',
        link: 'https://www.postgresql.org/',
        imageLink: '',
        class: ''
      },
      {
        isIcon: true,
        name: 'Bootstrap',
        icon: 'logos:bootstrap',
        link: 'https://getbootstrap.com',
        imageLink: '',
        class: ''
      },
      {
        isIcon: false,
        name: 'SwiperJS',
        icon: '',
        link: 'https://swiperjs.com',
        imageLink: 'https://swiperjs.com/images/swiper-logo.svg',
        class: 'w-6'
      },
      {
        isIcon: true,
        name: 'Heroku',
        icon: 'skill-icons:heroku',
        link: 'https://www.heroku.com/',
        imageLink: '',
        class: ''
      },
      {
        isIcon: true,
        name: 'Cloudinary',
        icon: 'logos:cloudinary-icon',
        link: 'https://cloudinary.com/',
        imageLink: '',
        class: ''
      },
    ],
    link: 'https://github.com/max13h/the_favorite',
    textLink: 'Check the repo',
    images: [
      "the_favorite/logo.png",
      "the_favorite/root.png",
      "the_favorite/home_tasks.png",
      "the_favorite/home_events.png",
      "the_favorite/competition.png",
      "the_favorite/common_pot.png",
      "the_favorite/kids.png",
    ],
  },
  {
    name: 'Minesweeper',
    date: 'June 2023',
    mainImage: 'minesweeper/flag.svg',
    description: "A simple exercise assigned by my bootcamp, built in plain Javascript, HTML, and CSS. I love the Minesweeper so I aimed to create the best version possible. Here is the result.",
    stack: [
      {
        name: 'Javascript',
        isIcon: true,
        icon: 'devicon:javascript',
        imageLink: '',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        class: ''
      },
      {
        name: 'CSS',
        isIcon: true,
        icon: 'devicon:css3',
        imageLink: '',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        class: ''
      },
    ],
    link: 'https://github.com/max13h/minesweeper',
    textLink: 'Check the repo',
    images: [
      'minesweeper/minesweeper_menu.png',
      'minesweeper/minesweeper_win.png',
      'minesweeper/minesweeper_loose.png'
    ],
  },
  {
    name: 'Portfolio',
    date: 'February 2024',
    mainImage: 'portfolio/portfolio-max13h.png',
    description: "This is the website you are currently on. \nI aimed for my portfolio to be creative, incorporating animations, transitions, and showcasing my proficiency in CSS and Javascript on a global aspects. I learned a lot about multi browser support and responsive design. \nIt took me nearly two weeks to complete it entirely, and I am proud to say that I love the result.",
    stack: [
      {
        name: 'Nuxt',
        isIcon: true,
        icon: 'logos:nuxt-icon',
        imageLink: '',
        link: 'https://nuxt.com/',
        class: ''
      },
      {
        name: 'Typescript',
        isIcon: true,
        icon: 'logos:tailwindcss-icon',
        imageLink: '',
        link: 'https://tailwindcss.com/',
        class: ''
      },
      {
        name: 'GSAP',
        isIcon: false,
        icon: '',
        imageLink: 'https://avatars.githubusercontent.com/u/2386673?s=200&v=4',
        link: 'https://gsap.com/',
        class: 'w-8'
      },
      {
        name: 'CSS',
        isIcon: true,
        icon: 'devicon:css3',
        imageLink: '',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        class: ''
      },
    ],
    link: 'https://github.com/max13h/portfolio-2024',
    textLink: 'Check the repo',
    images: [
      'portfolio/portfolio-max13h.png',
      'https://raw.githubusercontent.com/max13h/portfolio-2024/main/public/portfolio/proficiency.png',
      'https://raw.githubusercontent.com/max13h/portfolio-2024/main/public/portfolio/projects.png'
    ],
  }
]

const lenisStore = useLenisStore()

const modalOpened = ref('')
function closeModal() {
  modalOpened.value = ''
  useLenis()
}
function openModal(technologie: string) {
  modalOpened.value = technologie
  lenisStore.lenis.destroy()
}

const actualURL = ref()

onMounted(() => {
  actualURL.value = document.URL
})
</script>

<style scoped>
</style>
