<script setup lang="ts">
const baseUrl = import.meta.env.VITE_BASE_URL || '/'
const docsUrl = import.meta.env.VITE_DOCS_URL || '/docs/'
const researchUrl = '/docs/forschung'
</script>

<template>
  <div class="landing-footer-links">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-logo">
          <a :href="baseUrl" class="logo-link">
            <img alt="logo" src="/docs/logo.svg" class="logo" />
          </a>
        </div>

        <div class="footer-links">
          <div class="link-column">
            <h4 class="column-title">Ressourcen</h4>
            <a :href="researchUrl" class="link-item">Forschung</a>
            <a :href="docsUrl" class="link-item">Dokumentation</a>
          </div>

          <div class="link-column">
            <h4 class="column-title">Community</h4>
            <a href="https://github.com/remsfal" target="_blank" class="link-item">GitHub</a>
            <a href="https://www.htw-berlin.de/hochschule/personen/person/?eid=13708" target="_blank" class="link-item">Kontakt</a>
          </div>

          <div class="link-column">
            <h4 class="column-title">Rechtliches</h4>
            <a href="/docs/impressum" class="link-item">Impressum</a>
            <a href="/docs/nutzungsbedingungen" class="link-item">Nutzungsbedingungen</a>
            <a href="/docs/datenschutz" class="link-item">Datenschutz</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-footer-links {
  width: 100%;
  padding: 3rem 1.5rem 1.5rem;
  margin-top: 5rem;
  margin-bottom: -5rem;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 10fr;
  }
}

.footer-logo {
  display: flex;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .footer-logo {
    justify-content: flex-start;
    margin-bottom: 0;
  }
}

.logo {
  height: 35px;
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-links {
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
    padding-left: 16.666%;
  }
}

.link-column {
  display: flex;
  flex-direction: column;
}

.column-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.link-item {
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.link-item:hover {
  color: var(--vp-c-brand-1);
}
</style>
