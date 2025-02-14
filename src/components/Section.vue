<script setup lang="ts">
import Card from "primevue/card";

defineProps<{
  title: string
}>()
</script>

<template>
  <div id="legal" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
    <Card>
      <template #title>
        {{ title }}
      </template>
      <template #content>
        <slot></slot>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>