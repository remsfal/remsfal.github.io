<script setup>
import BaseLayout from "@/components/BaseLayout.vue";
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <BaseLayout>
    <div class="col-12">
      <Card>
        <template #header>
          <img src="/images/roadmap.png">
        </template>
        <template #title>
          Roadmap
        </template>
        <template #content>
          <p>
            Eine detailierte Liste der Aufgaben ist unter den
            <a href="https://github.com/remsfal/remsfal/issues" target="_blank">
              Github Issues
            </a>
            zu finden.
          </p>
        </template>
      </Card>
    </div>
  </BaseLayout>
</template>
