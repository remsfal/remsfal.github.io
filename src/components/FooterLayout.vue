<script setup lang="ts">
</script>

<template>
  <div class="py-6 px-6 mx-0 mt-20 lg:mx-20 bg-surface-0 dark:bg-surface-900">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-2">
        <router-link to="/" class="flex flex-wrap items-center justify-center md:justify-start md:mb-0 mb-4 cursor-pointer">
          <img alt="logo" src="@/assets/logo.svg" class="logo" />
        </router-link>
      </div>

      <div class="col-span-12 md:col-span-10">
        <div class="grid grid-cols-12 gap-8 text-center md:text-left">

          <div class="col-span-12 md:col-span-3 md:col-start-4">
            <h4 class="font-medium text-2xl leading-normal mb-4 text-surface-900 dark:text-surface-0">Ressourcen</h4>
            <router-link to="/research" class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">
              Forschung
            </router-link>
            <router-link to="/documentation" class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">
              Dokumentation
            </router-link>
          </div>

          <div class="col-span-12 md:col-span-3">
            <h4 class="font-medium text-2xl leading-normal mb-4 text-surface-900 dark:text-surface-0">Community</h4>
            <a
href="https://github.com/remsfal" target="_blank"
               class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">GitHub</a>
            <a
href="https://www.htw-berlin.de/hochschule/personen/person/?eid=13708" target="_blank"
               class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Kontakt</a>
            <router-link to="/support" class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">
              Support
            </router-link>
          </div>

          <div class="col-span-12 md:col-span-3">
            <h4 class="font-medium text-2xl leading-normal mb-4 text-surface-900 dark:text-surface-0">Sonstiges</h4>
            <router-link to="/legal-notice" class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">
              Impressum
            </router-link>
            <router-link to="/terms" class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">
              Nutzungsbedingungen
            </router-link>
            <router-link to="/privacy" class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">
              Datenschutz
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-6">

      <div class="col left-footer">
        <p class="license text-gray-700 dark:text-gray-100">Released under the MIT License</p>
        <p class="copyright text-gray-700 dark:text-gray-100">Copyright © 2023 - present Prof. Dr.-Ing. Alexander Stanik</p>
      </div>
      </div>

      <div class="col-span-12 md:col-span-6">
      <div class="col right-footer">
        <!-- p>TODO: trademark registration, example: https://kafka.apache.org/
        </p -->
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 35px;
}

.left-footer {
  padding-top: 25px;
  padding-bottom: 20px;
}

.right-footer {
  padding-top: 25px;
  padding-bottom: 20px;
  text-align: right;
}
</style>
