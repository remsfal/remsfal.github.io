<script setup lang="ts">
import { onMounted, ref } from 'vue';

const activeFeature = ref(-1);
const isVisible = ref(false);

const features = [
  {
    title: 'Mängelmanagement',
    description: 'Erfassen und verfolgen Sie Mängel transparent und effizient für alle Parteien.' +
      ' Organisieren Sie Ihre Aufgaben produktiv und behalten Sie den Überblick über den aktuellen Status jedes Mangels.',
    icon: 'pi pi-building',
    stats: ['100% Transparent', '24/7 Verfügbar']
  },
  {
    title: 'Dokumentation',
    description: 'Zentrale Verwaltung aller Dokumente. Greifen Sie von überall auf wichtige Unterlagen zu,' +
      ' teilen Sie diese mit relevanten Stakeholdern und nutzen Sie unsere leistungsstarken Suchfunktionen.',
    icon: 'pi pi-folder',
    stats: ['100% Digital', 'Cloud-basiert']
  },
  {
    title: 'Überwachung',
    description: 'Echtzeitüberwachung und umfassende Analysen von Gebäudedaten. Erhalten Sie detaillierte Einblicke in Ihre Prozesse,' +
      ' identifizieren Sie Optimierungspotenziale und treffen Sie datenbasierte Entscheidungen.',
    icon: 'pi pi-chart-line',
    stats: ['Echtzeit Überwachung', 'KI-gestützt']
  }
];

onMounted(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      },
      { threshold: 0.1 }
  );

  const container = document.querySelector('.features-container');
  if (container) observer.observe(container);
});
</script>

<template>
  <div class="features-container" :class="{ 'is-visible': isVisible }">
    <h2 class="features-title text-5xl">Unsere Kernfunktionen</h2>
    <p class="features-subtitle">Entdecken Sie die Werkzeuge, die Ihr Liegenschaftsmanagement revolutionieren</p>

    <div class="features-grid">
      <div
v-for="(feature, index) in features"
           :key="index"
           class="feature-wrapper"
           :style="{ 'animation-delay': `${index * 0.2}s` }"
           @mouseenter="activeFeature = index"
           @mouseleave="activeFeature = -1">
        <div class="feature-card" :class="{ 'active': activeFeature === index }">
          <div class="feature-content">
            <div class="feature-icon-wrapper">
              <div class="icon-background"></div>
              <span :class="[feature.icon, 'feature-icon']"></span>
            </div>

            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>

            <div class="feature-stats">
              <span
v-for="(stat, statIndex) in feature.stats"
                    :key="statIndex"
                    class="stat-badge">
                {{ stat }}
              </span>
            </div>
          </div>

          <div class="feature-footer">
            <button class="learn-more-btn">
              Mehr erfahren
              <i class="pi pi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features-container {
  width: 100%;
  max-width: 1200px;
  margin: 120px auto;
  padding: 0 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.features-container.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.features-title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}

.features-subtitle {
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-wrapper {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.feature-card {
  background: rgba(255, 255, 255, 0.97);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #2e6022, #4a8c3c);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card.active {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.feature-card.active::before {
  opacity: 1;
}

.feature-icon-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 30px;
}

.icon-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(46, 96, 34, 0.1), rgba(74, 140, 60, 0.1));
  border-radius: 20px;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.feature-card:hover .icon-background {
  transform: rotate(225deg);
}

.feature-icon {
  position: relative;
  font-size: 32px;
  color: #2e6022;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-title {
  font-size: 24px;
  font-weight: 700;
  color: #2e6022;
  margin-bottom: 16px;
  text-align: center;
}

.feature-description {
  color: #4a4a4a;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 24px;
}

.feature-stats {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.stat-badge {
  background: rgba(46, 96, 34, 0.1);
  color: #2e6022;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.feature-footer {
  text-align: center;
}

.learn-more-btn {
  background: none;
  border: none;
  color: #2e6022;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.learn-more-btn:hover {
  background: rgba(46, 96, 34, 0.1);
}

.learn-more-btn i {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.learn-more-btn:hover i {
  transform: translateX(4px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .features-container {
    max-width: 900px;
  }

  .features-title {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .features-container {
    margin: 60px auto;
  }

  .features-title {
    font-size: 32px;
  }

  .feature-card {
    padding: 30px;
  }
}
</style>