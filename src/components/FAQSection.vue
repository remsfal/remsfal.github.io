<script setup>
import { ref } from 'vue';

const openSections = ref(new Set([0, 1, 2, 3, 4, 5, 6]));

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
  <div class="page-container">
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

  <div class="github-section">
    <p>
      Weitere Details finden Sie in unseren
      <a href="https://github.com/remsfal/remsfal/issues"
         class="github-link">
        GitHub Issues
      </a>
    </p>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.faq-content {
  background: var(--vt-c-white);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.faq-item {
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.3s;
}

.faq-item:last-child {
  margin-bottom: 0;
}

.faq-item.active {
  border-color: var(--color-theme-primary);
}

.faq-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: var(--color-background-soft);
  cursor: pointer;
  transition: background-color 0.3s;
}

.faq-header:hover {
  background: var(--color-background-mute);
}

.faq-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.faq-title {
  flex: 1;
  margin: 0;
  font-size: 1.2rem;
  color: var(--color-theme-primary);
}

.faq-arrow {
  font-size: 1.5rem;
  color: var(--color-theme-primary);
  transition: transform 0.3s;
}

.faq-item.active .faq-arrow {
  transform: rotate(180deg);
}

.faq-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
  background: var(--vt-c-white);
}

.faq-body p {
  margin: 0;
  padding: 1rem;
  line-height: 1.6;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .page-container {
    padding: 1rem;
  }
}

.github-section {
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  background: var(--vt-c-black);
  border-radius: 8px;
}

.github-link {
  color: var(--color-theme-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.github-link:hover {
  color: var(--color-theme-tertiary);
  text-decoration: underline;
}
</style>