<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showWelcome = ref(false);
const currentWordIndex = ref(0);

const words = [
  'Die Komplettlösung',
  'Die Zukunft',
  'Die Innovation',
  'Die Plattform',
  'Das System'
];

onMounted(() => {
  showWelcome.value = true;
  setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
  }, 3000);
});
</script>

<template>
  <div class="hero-section" :class="{ 'show-welcome': showWelcome }">
    <div class="floating-shapes">
      <!-- Circles -->
      <div class="shape circle shape-1"></div>
      <div class="shape circle shape-2"></div>
      <div class="shape circle shape-3"></div>
      <div class="shape circle shape-4"></div>
      <div class="shape circle shape-9"></div>
      <div class="shape circle shape-10"></div>
      <div class="shape circle shape-11"></div>
      <!-- Squares -->
      <div class="shape square shape-5"></div>
      <div class="shape square shape-6"></div>
      <div class="shape square shape-12"></div>
      <div class="shape square shape-13"></div>
      <div class="shape square shape-14"></div>
      <!-- Rectangles -->
      <div class="shape rectangle shape-7"></div>
      <div class="shape rectangle shape-8"></div>
      <div class="shape rectangle shape-15"></div>
      <div class="shape rectangle shape-16"></div>
      <!-- Diamonds -->
      <div class="shape diamond shape-17"></div>
      <div class="shape diamond shape-18"></div>
      <div class="shape diamond shape-19"></div>
      <!-- Triangles -->
      <div class="shape triangle shape-20"></div>
      <div class="shape triangle shape-21"></div>
      <div class="shape triangle shape-22"></div>
    </div>

    <div class="hero-content">
      <h1 class="brand-name">remsfal</h1>

      <div class="animated-text-wrapper">
        <div class="animated-text">
          <span class="rotating-word">{{ words[currentWordIndex] }}</span>
          <span class="static-text">für Ihr Liegenschaftsmanagement</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  min-height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  overflow: hidden;
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.show-welcome .hero-content {
  opacity: 1;
  transform: translateY(0);
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  pointer-events: none;
}

.circle {
  border-radius: 50%;
}

.square {
  border-radius: 4px;
}

.rectangle {
  border-radius: 4px;
}

.diamond {
  transform: rotate(45deg);
  border-radius: 4px;
}

.triangle {
  width: 0;
  height: 0;
  background: none;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid rgba(255, 255, 255, 0.02);
}

/* Original shapes (1-8) remain the same */

/* Additional circles */
.shape-9 {
  width: 90px;
  height: 90px;
  top: 15%;
  left: 45%;
  animation: float 23s infinite;
}

.shape-10 {
  width: 70px;
  height: 70px;
  top: 75%;
  right: 35%;
  animation: float 27s infinite reverse;
}

.shape-11 {
  width: 120px;
  height: 120px;
  top: 45%;
  left: 15%;
  animation: float 24s infinite;
}

/* Additional squares */
.shape-12 {
  width: 50px;
  height: 50px;
  top: 25%;
  right: 45%;
  animation: float-rotate 29s infinite;
}

.shape-13 {
  width: 85px;
  height: 85px;
  bottom: 35%;
  left: 25%;
  animation: float-rotate 26s infinite reverse;
}

.shape-14 {
  width: 40px;
  height: 40px;
  top: 55%;
  right: 15%;
  animation: float-rotate 22s infinite;
}

/* Additional rectangles */
.shape-15 {
  width: 160px;
  height: 80px;
  top: 35%;
  right: 25%;
  animation: float-rotate 31s infinite;
}

.shape-16 {
  width: 120px;
  height: 60px;
  bottom: 25%;
  left: 35%;
  animation: float-rotate 28s infinite reverse;
}

/* Diamonds */
.shape-17 {
  width: 60px;
  height: 60px;
  top: 20%;
  left: 30%;
  animation: float-rotate 25s infinite;
}

.shape-18 {
  width: 40px;
  height: 40px;
  bottom: 40%;
  right: 40%;
  animation: float-rotate 23s infinite reverse;
}

.shape-19 {
  width: 80px;
  height: 80px;
  top: 60%;
  left: 50%;
  animation: float-rotate 27s infinite;
}

/* Triangles */
.shape-20 {
  top: 30%;
  right: 20%;
  animation: float-rotate 24s infinite;
}

.shape-21 {
  bottom: 20%;
  left: 45%;
  animation: float-rotate 28s infinite reverse;
}

.shape-22 {
  top: 70%;
  right: 35%;
  animation: float-rotate 26s infinite;
}

/* New slow pulse animation for variety */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Add slight rotation variation to float animation */
@keyframes float-var {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(15px, -15px) rotate(5deg);
  }
  50% {
    transform: translate(0, -25px) rotate(-5deg);
  }
  75% {
    transform: translate(-15px, -15px) rotate(3deg);
  }
}


.brand-name {
  font-size: 82px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 40px;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;
}

.animated-text-wrapper {
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

.rotating-word {
  font-size: 48px;
  font-weight: 700;
  padding: 15px 40px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  display: inline-block;
}

.static-text {
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 20px;
  display: block;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, -10px);
  }
  50% {
    transform: translate(0, -20px);
  }
  75% {
    transform: translate(-10px, -10px);
  }
}

@keyframes float-rotate {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -10px) rotate(90deg);
  }
  50% {
    transform: translate(0, -20px) rotate(180deg);
  }
  75% {
    transform: translate(-10px, -10px) rotate(270deg);
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 70vh;
  }

  .brand-name {
    font-size: 48px;
  }

  .rotating-word {
    font-size: 32px;
    padding: 12px 25px;
  }

  .static-text {
    font-size: 24px;
  }

  .shape {
    opacity: 0.2;
  }
}
</style>