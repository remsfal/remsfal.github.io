<script setup lang="ts">
</script>

<template>
  <div class="vp-custom-footer">
    <div class="container">
      <div class="footer-bottom">
        <div class="footer-info">
          <p class="copyright">Copyright © 2023 - present REMSFAL Immobiliensoftware GmbH</p>
          <p class="license">REMSFAL ist ein Open-Source-Projekt, das von der REMSFAL Immobiliensoftware GmbH gesponsert wird.
            REMSFAL® ist eine eingetragene Marke. Die Nutzung der Marke und des Logos unterliegt unseren
            <a href="/trademark" class="link-item">
              Markenrichtlinien.
            </a>
            </p>
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

@media (min-width: 960px) {
  .license {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}
</style>
