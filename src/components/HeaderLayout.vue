<script setup lang="ts">
</script>

<template>
  <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static">
  <a class="flex items-center" href="#">
    <div @click="$router.push('/')">
      <img alt="logo" src="@/assets/logo.png" class="logo" />
    </div>
  </a>
  <Button
    class="lg:!hidden"
    text
    severity="secondary"
    rounded
    v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
  >
    <i class="pi pi-bars !text-2xl"></i>
  </Button>
  <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-end hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
    <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
      <li>
        <router-link to="/research" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
          Forschung
        </router-link>
      </li>
      <li>
        <router-link to="/documentation" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
          Dokumentation
        </router-link>
      </li>
    </ul>
    <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2">
      <Button pt:hover="" class="try-button" label="Kostenlos testen" as="a" href="https://remsfal.online/api/v1/authentication/login" rounded />
    </div>
  </div>
  </div>
</template>

<style scoped>
.try-button {
  background: var(--button-color);
  border-color: var(--button-border-color);
  margin-left: 45px;
  margin-right: 10px;

  &:hover {
    background-color: var(--button-color-hover);
    border-color: var(--button-border-color-hover);
  }
  &:not(:disabled):hover {
    background-color: var(--button-color-hover);
    border-color: var(--button-border-color-hover);
  }
}
.logo {
  height: 30px;
  margin-left: 5px;
  margin-right: 50px;
  margin-bottom: 3px;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .logo {
    margin-left: 1px;
  }
  .try-button {
    margin-right: 1px;
  }
}
</style>
