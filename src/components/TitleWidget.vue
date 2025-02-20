<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
    <div class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden title-widget">
        <div class="mx-6 md:mx-20 mt-0 md:mt-6">
            <h1 class="text-6xl font-bold text-gray-900 leading-tight">
              {{ title }}
            </h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
.title-widget {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, var(--remsfal-color) 0%, var(--htw-color) 100%);
  clip-path: ellipse(110% 87% at 7% 13%);

  h1 {
    padding-bottom: 100px;
    text-shadow: 2px 2px 6px var(--remsfal-color);
  }
}
.try-button {
  background: var(--button-color);
  border-color: var(--button-border-color);

  &:hover {
    background-color: var(--button-color-hover);
    border-color: var(--button-border-color-hover);
  }
  &:not(:disabled):hover {
    background-color: var(--button-color-hover);
    border-color: var(--button-border-color-hover);
  }
}
</style>
