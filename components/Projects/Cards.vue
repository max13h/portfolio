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

const projects = dataProjects()

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
