<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="card">
      <Menubar :model="items">
        <template #start>
          <div @click="$router.push('/')">
            <img alt="logo" src="@/assets/logo.png" height="30" class="logo" />
          </div>
        </template>
        <template #end>
          <Button label="Try remsfal Cloud" @click="$router.push('/')" />
        </template>
      </Menubar>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.p-button {
  background: #124006;
}
.logo {
  margin-left: 20px;
  margin-right: 30px;
}

</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'About',
          items: [
            {
              label: 'Mission',
              to: {name: 'mission'}
            },
            {
              label: 'Abschlussarbeiten',
              to: {name: 'thesis'}
            }
          ]
        },
        {
          label: 'Documentation',
          items: [
            {
              label: 'Get Started',
              to: {name: 'getStarted'}
            },
            {
              label: 'FAQ',
              to: {name: 'faq'}
            }
          ]
        },
        {
          label: 'Community',
          items: [
            {
              label: 'Support',
              to: {name: 'support'}
            },
            {
              label: 'Roadmap',
              to: {name: 'roadmap'}
            },
            {
              label: 'Github',
              url: 'https://github.com/remsfal'
            }
          ]
        }
      ]
    };
  }
};
</script>