<script setup>
import BaseLayout from "@/components/BaseLayout.vue";
import { ref } from 'vue';

const openSections = ref(new Set());

const toggleSection = (index) => {
  const newSet = new Set(openSections.value);
  if (newSet.has(index)) {
    newSet.delete(index);
  } else {
    newSet.add(index);
  }
  openSections.value = newSet;
};

const faqItems = [
  {
    title: 'Project = Liegenschaft',
    content: 'Eine Liegenschaft bezeichnet ein oder mehrere Grundstücke, die wiederum mit ein oder mehreren Gebäuden oder Anlagen bebaut sind und meist eine funktionale Einheit bilden.',
    icon: '🏢'
  },
  {
    title: 'Property = Grundstück',
    content: 'Ein Grundstück ist ein räumlich abgegrenzter Teil, der eine bestimmte Größe besitzt und einer bestimmten Wirtschaftsart und Lage zugeordnet ist. Ein Grundstück entspricht genau einem Eintrag im Bestandsverzeichnis des Grundbuches. Daher können mehrere Grundstücke einer Liegenschaft auch die identische Grundbuch Blattnummer besitzen.',
    icon: '🗺️'
  },
  {
    title: 'Site = Außenanlage',
    content: 'Eine Außenanlage ist ein Teil eines Grundstücks, das sich im Außenbereich befindet und nicht Bestandteil eines Gebäudes ist. Zu den Außenanlagen gehören unter anderem Stellplätze, Zufahrten, Liegeplätze, Gartenanlagen, Grünflächen oder andere Außenflächen, die keine Wohn- oder Nutzflächen besitzen und als Teilmengen der Grundstücksfläche bewirtschaftet werden.',
    icon: '🌳'
  },
  {
    title: 'Building = Gebäude',
    content: 'Ein Gebäude ist ein Bauwerk auf einem Grundstück, das Räume einschließt, betreten werden kann und dem Aufenthalt von Menschen, Tieren oder der Lagerung von Sachen als Wohn-, Gewerbe- oder Nutzflächen dient. Es können mehrere Gebäude auf einem Grundstück errichtet sein und als eine Einheit bewirtschaftet werden. Grundsätzlich besteht ein Gebäude aus ein oder mehreren Etagen mit oder ohne Keller. Das Gebäude ist untergliedert in diverse Einheiten, die sich im Keller, in den Etagen oder auch im Dachgeschoss befinden können.',
    icon: '🏗️'
  },
  {
    title: 'Apartment = Wohnung',
    content: 'Eine Wohnung ist ein umschlossener Raum oder eine Flucht aus mehreren Räumen innerhalb eines Gebäudes, die zu Wohnzwecken laut Baugenehmigung verwendet werden darf. Eine Wohnung besteht daher aus Wohn- und Nutzfläche.',
    icon: '🏠'
  },
  {
    title: 'Commercial = Gewerbe',
    content: 'Ein Gewerbe ist ein Laden oder ein Zusammenschluss mehrerer Räume innerhalb eines Gebäudes, die ausschließlich oder vorwiegend der Unterbringung von Industrie- oder Gewerbebetrieben dient. Ein Gewerbe besteht daher aus Gewerbe- und Nutzfläche.',
    icon: '🏪'
  },
  {
    title: 'Garage = Nebennutzungsraum',
    content: 'Ein Nebennutzungsraum ist eine meist abschließbare und durch feste Wände umschlossene Abstellmöglichkeit innerhalb eines Gebäudes, die ausschließlich aus Nutzfläche besteht. Hierzu zählen Garagen, Stellplätze in Tiefgaragen, Hobby- oder Lagerräume.',
    icon: '🚗'
  }
];
</script>

<template>
  <BaseLayout>
    <div class="faq-container">
      <div class="hero-header">
        <div class="brand-name">FAQ</div>
        <h1 class="page-title">Objekthierarchie</h1>
        <p class="subtitle">Wie ist die Objekthierarchie einer Liegenschaft aufgebaut?</p>
      </div>

      <div class="faq-content">
        <div v-for="(item, index) in faqItems" 
             :key="index" 
             class="faq-item"
             :class="{ 'active': openSections.has(index) }">
          <div class="faq-header" @click="toggleSection(index)">
            <div class="faq-icon">{{ item.icon }}</div>
            <h2 class="faq-title">{{ item.title }}</h2>
            <div class="faq-arrow">
              {{ openSections.has(index) ? '−' : '+' }}
            </div>
          </div>
          <div class="faq-body" :style="{ maxHeight: openSections.has(index) ? '500px' : '0' }">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<style>
.faq-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.hero-header {
  text-align: center;
  padding: 60px 20px;
  margin: -20px -20px 40px -20px;
  background: linear-gradient(135deg, #2e6022 0%, #4a8c3c 50%, #2e6022 100%);
}

.brand-name {
  font-size: 64px;
  font-weight: 800;
  background: linear-gradient(45deg, #ffffff 10%, #a8e063 50%, #ffffff 90%);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 8s linear infinite;
  margin-bottom: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.page-title {
  color: white;
  font-size: 36px;
  margin: 0;
  margin-bottom: 10px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  margin: 0;
}

.faq-content {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.faq-item {
  margin-bottom: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.faq-header {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-header:hover {
  background: #f1f3f5;
}

.faq-icon {
  font-size: 24px;
  margin-right: 16px;
}

.faq-title {
  flex: 1;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #2e6022;
}

.faq-arrow {
  font-size: 24px;
  color: #666;
}

.faq-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  background: white;
;
}


.faq-body p {
  margin: 0;
  padding: 16px;
  line-height: 1.6;
  color: #333;
}

.faq-item.active {
  border-color: #2e6022;
}

.faq-item.active .faq-header {
  background: #f1f3f5;
}

@keyframes shine {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

@media (max-width: 768px) {
  .hero-header {
    padding: 40px 20px;
  }

  .brand-name {
    font-size: 48px;
  }

  .page-title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 18px;
  }

  .faq-content {
    padding: 16px;
  }

  .faq-title {
    font-size: 16px;
  }
}
</style>