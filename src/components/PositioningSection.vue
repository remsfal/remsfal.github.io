<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden positioning-section">
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

      <div class="mx-6 md:mx-20 mt-0 md:mt-6">
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span class="font-light block">
                REMSFAL - <strong>RE</strong>mote <strong>M</strong>anagement
                <strong>S</strong>ervices for connected <strong>FA</strong>ci<strong>L</strong>ities
              </span>
              Open Source Immobiliensoftware
            </h1>
            <p class="font-normal text-xl md:text-2xl leading-normal md:mt-4 text-white">
              Mieter:innen und Kund:innen verdienen Aufmerksamkeit und Transparenz,
              wären Verwalter:innen und Eigentümer:innen Kosten und Zeit durch effizientes
              Liegenschaftsmanagement und Digitalisierung von Verwaltungsprozessen einsparen.
              REMSFAL ist die Open Source Facility Management
              Technologie zum Überwachen, Steuern und Verwalten von Liegenschaften,
              die Ihnen die Arbeit erleichert und durch Zeit- und Kostenersparnis
              eine nachhaltige Gebäudebewirtschaftung realisiert.
            </p>
            <Button label="Kostenlos testen" as="a" href="https://remsfal.online/api/v1/authentication/login" rounded class="!text-xl mt-8 !px-4 try-button"></Button>
        </div>
        <div class="flex justify-center md:justify-end">
            <img src="/landing/screen-1.png" alt="REMSFAL preview" class="w-9/12 md:w-auto" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.positioning-section {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, var(--remsfal-color) 0%, var(--htw-color) 100%);
  clip-path: ellipse(150% 87% at 93% 13%);
}

.try-button {
  background: var(--button-color);
  border-color: var(--button-border-color);

  &:hover {
    background-color: var(--button-color-hover);
    border-color: var(--button-border-color-hover);
  }
  &:not(:disabled):hover {
    background-color: var(--button-color-hover);
    border-color: var(--button-border-color-hover);
  }
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
  .shape {
    opacity: 0.2;
  }
}
</style>
