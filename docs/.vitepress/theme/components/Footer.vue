<script setup lang="ts">
</script>

<template>
  <div class="vp-custom-footer">
    <div class="container">
      <div class="footer-bottom">
        <div class="footer-info">
          <p class="license">Released under the MIT License</p>
          <p class="copyright">Copyright © 2023 - present Prof. Dr.-Ing. Alexander Stanik</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vp-custom-footer {
  width: 100%;
  padding: 1.5rem 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.footer-bottom {
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
}

.footer-info {
  text-align: center;
}

.license,
.copyright {
  margin: 0.25rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>
