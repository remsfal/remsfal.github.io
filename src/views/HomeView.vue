<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showWelcome = ref(false);
const currentWordIndex = ref(0);
const activeFeature = ref(-1);

const words = [
  'Die Komplettlösung',
  'Die Zukunft',
  'Die Innovation',
  'Die Plattform',
  'Das System'
];

const features = [
  {
    title: 'Mängelmanagement',
    description: 'Erfassen und verfolgen Sie Mängel in Echtzeit mit unserem fortschrittlichen System. Organisieren Sie Ihre Aufgaben effizient und behalten Sie den Überblick über den aktuellen Status jedes Mangels.',
    icon: 'i-lucide-book'
  },
  {
    title: 'Dokumentation',
    description: 'Zentrale Verwaltung aller Dokumente. Greifen Sie von überall auf wichtige Unterlagen zu, teilen Sie diese mit relevanten Stakeholdern und nutzen Sie unsere leistungsstarke Suchfunktion.',
    icon: 'i-lucide-globe'
  },
  {
    title: 'Überwachung',
    description: 'Echtzeitüberwachung und umfassende Analysen. Erhalten Sie detaillierte Einblicke in Ihre Prozesse, identifizieren Sie Optimierungspotenziale und treffen Sie datenbasierte Entscheidungen.',
    icon: 'i-lucide-users'
  }
];

const educationalBenefits = [
  {
    title: 'Praxiserfahrung',
    description: 'Arbeiten Sie an realen Projekten mit echten Anforderungen',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Ressourcenzugang',
    description: 'Nutzen Sie Code, Dokumentation und Community-Support',
    icon: 'i-lucide-book'
  },
  {
    title: 'Teamarbeit',
    description: 'Entwickeln Sie Ihre Fähigkeiten in kollaborativen Projekten',
    icon: 'i-lucide-users'
  }
];

onMounted(() => {
  showWelcome.value = true;
  
  setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
  }, 3000);
});
</script>

<template>
  <div class="min-h-screen bg-gradient">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="hero-section" :class="{ 'show-welcome': showWelcome }">
        <h1 class="brand-name">remsfal</h1>
        
        <div class="animated-text-wrapper">
          <div class="animated-text">
            <span class="rotating-word">{{ words[currentWordIndex] }}</span>
            <span class="static-text">für Ihr Liegenschaftsmanagement</span>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        <div v-for="(feature, index) in features" 
             :key="index" 
             class="feature-wrapper"
             @mouseenter="activeFeature = index"
             @mouseleave="activeFeature = -1">
          <div class="feature-card" :class="{ 'active': activeFeature === index }">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Educational Focus Section -->
      <div class="education-section">
        <h2 class="education-title">Open-Source für Studienprojekte</h2>
        <p class="education-description">
          Das Ziel des REMSFAL Open-Source-Projektes ist die Unterstützung im Studium und in der Lehre. 
          Entwickeln Sie Ihre Fähigkeiten in einem praxisnahen Umfeld.
        </p>
        
        <div class="benefits-grid">
          <div v-for="(benefit, index) in educationalBenefits" 
               :key="index" 
               class="benefit-card">
            <div class="benefit-header">
              <i :class="benefit.icon"></i>
              <h3>{{ benefit.title }}</h3>
            </div>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>

     
    </div>
  </div>
</template>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #2e6022 0%, #4a8c3c 50%, #2e6022 100%);
}

.hero-section {
  text-align: center;
  margin: 60px 0 120px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-section.show-welcome {
  opacity: 1;
  transform: translateY(0);
}

.brand-name {
  font-size: 82px;
  font-weight: 800;
  background: linear-gradient(45deg, #ffffff 10%, #a8e063 50%, #ffffff 90%);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 8s linear infinite;
  margin-bottom: 40px;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;
}

.brand-name::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: white;
  border-radius: 2px;
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
  padding: 10px 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 0.5s forwards;
}

.static-text {
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 20px;
  display: block;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 80px 0;
}

.feature-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  backdrop-filter: blur(10px);
}

.feature-card.active {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.feature-icon i {
  font-size: 32px;
  color: #2e6022;
}

.feature-title {
  font-size: 24px;
  font-weight: 600;
  color: #2e6022;
  margin-bottom: 15px;
  text-align: center;
}

.feature-description {
  color: #444;
  line-height: 1.5;
  text-align: center;
}

.education-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  margin-top: 80px;
  color: white;
}

.education-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.education-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 18px;
  line-height: 1.6;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 24px;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.benefit-card:hover {
  background: rgba(255, 255, 255, 0.1);
}

.benefit-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.benefit-header i {
  font-size: 24px;
}

.benefit-header h3 {
  font-size: 20px;
  font-weight: 600;
}

.cta-section {
  text-align: center;
  margin-top: 60px;
}

.cta-button {
  background: white;
  color: #2e6022;
  padding: 12px 32px;
  border-radius: 9999px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #f0fff4;
  transform: translateY(-2px);
}

@keyframes shine {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .features-grid,
  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .brand-name {
    font-size: 48px;
  }

  .rotating-word {
    font-size: 32px;
  }

  .static-text {
    font-size: 24px;
  }
}
</style>