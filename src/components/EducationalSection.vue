<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const activeIndex = ref(-1);

const educationalBenefits = [
  {
    title: 'Real-world Erfahrung',
    description: 'Arbeiten Sie an realen Projekten mit echten Anforderungen und erproben Sie Ihre Fähigkeiten in einem authentischen Arbeitsumfeld',
    icon: 'pi pi-briefcase',
    stats: '90% der Studierenden bestätigen verbesserte praktische Fähigkeiten'
  },
  {
    title: 'Zugang zu Ressourcen',
    description: 'Greifen Sie auf umfangreiche Code-Bibliotheken, Dokumentationen und Community-Support zu',
    icon: 'pi pi-file',
    stats: 'Über 1000+ Code-Beispiele und Dokumentationen verfügbar'
  },
  {
    title: 'Teamarbeit',
    description: 'Entwickeln Sie Ihre Fähigkeiten in kollaborativen Projekten und lernen Sie effektive Zusammenarbeit',
    icon: 'pi pi-users',
    stats: 'Durchschnittlich 2 Teammitglieder pro Projekt'
  },
  {
    title: 'Networking',
    description: 'Bauen Sie wertvolle Kontakte zu Entwicklern und Fachexperten auf für Ihre zukünftige Karriere',
    icon: 'pi pi-share-alt',
    stats: 'Über 30+ Community-Mitglieder'
  },
  {
    title: 'Aktuelle Technologien',
    description: 'Arbeiten Sie mit den neuesten Tools und Frameworks der Softwareentwicklung',
    icon: 'pi pi-code',
    stats: 'Zugang zu über 20+ modernen Technologie-Stacks'
  },
  {
    title: 'Kreative Freiheit',
    description: 'Verwirklichen Sie eigene Ideen und arbeiten Sie unabhängig an innovativen Lösungen',
    icon: 'pi pi-pencil',
    stats: 'kreative Kontrolle über Ihre Projekte'
  },

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

  const container = document.querySelector('.education-container');
  if (container) observer.observe(container);
});
</script>

<template>
  <div class="education-container" :class="{ 'is-visible': isVisible }">
    <div class="education-section">
      <div class="section-header">
        <h2 class="education-title">REMSFAL für Studienprojekte</h2>
        <div class="title-underline"></div>
        <p class="education-description">
          REMSFAL ist mehr als nur ein Open-Source-Projekt - es ist eine Plattform für akademisches Wachstum,
          praktische Erfahrung und professionelle Entwicklung. Entdecken Sie alle Möglichkeiten,
          die REMSFAL für Ihr Studium bietet.
        </p>
      </div>

      <div class="benefits-grid">
        <div v-for="(benefit, index) in educationalBenefits"
             :key="index"
             class="benefit-wrapper"
             :style="{ 'animation-delay': `${index * 0.15}s` }"
             @mouseenter="activeIndex = index"
             @mouseleave="activeIndex = -1">
          <div class="benefit-card" :class="{ 'active': activeIndex === index }">
            <div class="benefit-icon">
              <div class="icon-ring"></div>
              <i :class="benefit.icon"></i>
            </div>

            <div class="benefit-content">
              <h3 class="benefit-title">{{ benefit.title }}</h3>
              <p class="benefit-description">{{ benefit.description }}</p>

              <div class="benefit-stats" :class="{ 'show': activeIndex === index }">
                <div class="stats-bar"></div>
                <p>{{ benefit.stats }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <a href="https://github.com/remsfal" class="github-link">
          <i class="i-lucide-github"></i>
          GitHub Repository erkunden
        </a>
        <a href="#" class="docs-link">
          <i class="i-lucide-book-open"></i>
          Dokumentation lesen
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-container {
  width: 100%;
  max-width: 1400px;
  margin: 120px auto;
  padding: 0 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.education-container.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.education-section {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 60px 40px;
  color: white;
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.education-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #2e6022, #4a8c3c);
  margin: 0 auto 24px;
  border-radius: 2px;
}

.education-description {
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.benefit-wrapper {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 20px;
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.benefit-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #2e6022, #4a8c3c);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.benefit-card.active {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
}

.benefit-card.active::before {
  transform: scaleX(1);
}

.benefit-icon {
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
}

.icon-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.benefit-card.active .icon-ring {
  transform: scale(1.2) rotate(45deg);
  border-color: rgba(46, 96, 34, 0.3);
}

.benefit-icon i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #ffffff;
}

.benefit-content {
  position: relative;
}

.benefit-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #ffffff;
}

.benefit-description {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  min-height: 80px;
}

.benefit-stats {
  opacity: 0;
  height: 0;
  transition: all 0.3s ease;
  overflow: hidden;
}

.benefit-stats.show {
  opacity: 1;
  height: auto;
  margin-top: 15px;
}

.stats-bar {
  height: 2px;
  background: rgba(46, 96, 34, 0.3);
  margin-bottom: 12px;
}

.benefit-stats p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
}

.cta-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}

.github-link, .docs-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
}

.github-link {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.docs-link {
  background: rgba(46, 96, 34, 0.2);
  color: white;
}

.github-link:hover, .docs-link:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.15);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .education-container {
    margin: 80px auto;
  }

  .education-title {
    font-size: 36px;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .education-container {
    margin: 60px auto;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .education-section {
    padding: 40px 20px;
  }

  .education-title {
    font-size: 32px;
  }

  .benefit-description {
    min-height: auto;
  }

  .cta-section {
    flex-direction: column;
    align-items: stretch;
  }

  .github-link, .docs-link {
    text-align: center;
    justify-content: center;
  }
}
</style>