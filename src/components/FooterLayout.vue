<template>
  <div class="footer-section">
    <div class="footer-grid">
      <div class="footer-left">
        <p class="license">Released under the MIT License</p>
        <p class="copyright">Copyright © 2023-present Prof. Dr.-Ing. Alexander Stanik</p>
      </div>
      <div class="footer-right">
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
  </div>
</template>

<style scoped>
.footer-section {
  margin-top: 120px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.footer-left {
  color: rgba(255, 255, 255, 0.9);
}

.footer-right {
  text-align: right;
}

.footer-right a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-right a:hover {
  color: white;
  text-decoration: underline;
}

.footer-right p {
  margin-bottom: 8px;
}

.license, .copyright {
  margin: 5px 0;
}

@media (max-width: 768px) {
  .footer-section {
    margin-top: 80px;
    padding-top: 30px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-right {
    text-align: left;
  }
}
</style>