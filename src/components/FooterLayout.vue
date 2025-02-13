<template>
    <div class="grid">
      <div class="col left-footer">
        <p class="license">Released under the MIT License</p>
        <p class="copyright">Copyright © 2023-present Prof. Dr.-Ing. Alexander Stanik</p>
      </div>
      <div class="col right-footer">
        <p>
          <router-link to="/legal-notice">Impressum</router-link>
        </p>
        <p>
          <router-link to="/terms">Nutzungsbedingungen</router-link>
        </p>
        <p>
          <router-link to="/privacy">Datenschutz</router-link>
        </p>
      </div>
    </div>
</template>

<style scoped>
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
