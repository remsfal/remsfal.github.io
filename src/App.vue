<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="card">
      <Menubar :model="items">
        <template #start>
          <img alt="logo" src="@/assets/logo.png" height="30" class="logo" />
        </template>
        <template #end>
          <Button label="Try remsfal Cloud" />
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
              url: 'https://remsfal.de'
            },
            {
              label: 'Abschlussarbeiten',
              url: 'https://remsfal.de'
            }
          ]
        },
        {
          label: 'Documentation',
          items: [
            {
              label: 'Get Started',
              url: 'https://remsfal.de'
            },
            {
              label: 'FAQ',
              url: 'https://remsfal.de'
            }
          ]
        },
        {
          label: 'Community',
          items: [
            {
              label: 'Support',
              url: 'https://remsfal.de'
            },
            {
              label: 'Roadmap',
              url: 'https://remsfal.de'
            },
            {
              label: 'Github',
              url: 'https://remsfal.de'
            }
          ]
        }
      ]
    };
  }
};
</script>