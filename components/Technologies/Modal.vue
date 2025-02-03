<template>
  <TransitionRoot :show="isOpen">
    <Dialog @close="close" class="relative z-[400]">
      <TransitionChild
        as="div"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-dark/50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="div"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="bg-light p-4 rounded-2xl shadow-2xl shadow-light/50">
              <Icon
                :name="technology.icon"
                size="8rem"
                class="mb-4 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
              />
              <DialogTitle as="h4">
                <NuxtLink :to="technology.link" tabindex="2" rel="external noopener" target="_blank" class="flex justify-center items-center font-bold text-big6">
                  {{ technology.name }}
                  <Icon name="fluent:open-12-regular" class="ms-1"/>
                </NuxtLink>
                <p class="font-thin text-sm text-dark">{{ technology.title }}</p>
              </DialogTitle>
              <DialogDescription>
                <q class="italic opacity-50 max-w-64 inline-block mt-4 text-big6 lg:text-xl">{{ technology.quote }}</q>
              </DialogDescription>
              <button
                type="button"
                tabindex="1"
                class="inline-flex justify-center rounded-md border border-transparent bg-gray-300 hover:opacity-90 px-4 py-2 text-sm font-medium mt-4"
                @click="close"
              >
                Close
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps<{
  technology: Technology;
  isOpen: boolean;
}>()

const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>

<style scoped>
/* Custom styles for your modal */
</style>
