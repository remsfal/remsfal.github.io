<script setup lang="ts">
import Section from '@/components/Section.vue'
import ThesisSection from '@/components/ThesisSection.vue'
import TitleWidget from '@/components/TitleWidget.vue'
</script>

<template>
  <TitleWidget title="Forschung" />

  <Section title="Forschung an der HTW Berlin">
    <img alt="HTW Berlin logo" src="@/assets/htw-berlin-logo.svg" class="float-right p-2 htw-logo" />
    <p>Im Folgenden möchten wir Sie aufklären, wie Ihre Daten von uns verarbeitet werden.</p>

    <p>Mieter:innen und Kund:innen verdienen Aufmerksamkeit und Transparenz,
      wären Verwalter:innen und Eigentümer:innen Kosten und Zeit durch effizientes
      Liegenschaftsmanagement und Digitalisierung von Verwaltungsprozessen einsparen.
      REMSFAL ist die Open Source Facility Management
      Technologie zum Überwachen, Steuern und Verwalten von Liegenschaften,
      die Ihnen die Arbeit erleichert und durch Zeit- und Kostenersparnis die
      CO<sub>2</sub>-Emissionen für die Gebäudebewirtschaftung reduziert.</p>
  </Section>

  <Section title="Abschlussarbeiten im Studiengang Wirtschaftsinformatik">
    <ThesisSection />
  </Section>
</template>

<style scoped>
.htw-logo {
  height: 230px;
  margin-left: 5px;
  margin-right: 50px;
  margin-bottom: 3px;
}
@media screen and (max-width: 1024px) {
  .htw-logo {
    margin-left: 1px;
  }
}
</style>
