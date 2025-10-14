<script setup lang="ts">
import Section from '@/components/Section.vue'
import ThesisSection from '@/components/ThesisSection.vue'
import TitleWidget from '@/components/TitleWidget.vue'


</script>

<template>
  <div class="bg-white text-black dark:bg-black dark:text-white">
  <TitleWidget title="Forschung" />

  <Section title="Forschung an der HTW Berlin">
    <img alt="HTW Berlin logo" src="@/assets/htw-berlin-logo.svg" class="float-right p-2 htw-logo" />
    <p>
      REMSFAL wurde 2023 von
      <a
href="https://www.htw-berlin.de/hochschule/personen/person/?eid=13708"
         class="underline hover:decoration-green-600" target="_blank">
        Prof. Dr.-Ing. Alexander Stanik
      </a>
      als interdisziplinäres wissenschaftliches
      Open Source Forschungsprojekt gegründet und konzentriert sich auf die Entwicklung skalierbarer Architekturen
      und Technologien für verteilte und parallele Informationssysteme in der Immobilienwirtschaft.
      Ziel des Projektes ist die Digitalisierung von Hausverwaltungen durch innovative Verwaltungs-
      und Immobiliensoftware voranzutreiben. Ein besonderer Fokus liegt dabei auf der Optimierung
      von Mängelmanagement-Prozessen und der Implementierung nachhaltiger Strategien zur Reduzierung
      von CO<sub>2</sub>-Emissionen in der Gebäudebewirtschaftung.
      Durch die Erforschung und Erprobung neuer Technologien sollen Prozesse zur Liegenschaftsverwaltung
      effizienter gestaltet und gleichzeitig ökologische Aspekte berücksichtigt werden.
    </p>
    <p>
      Das REMSFAL Projekt ist mehr als eine Open Source Initiative und konzentriert sich unter der Leitung von
      <a
href="https://www.htw-berlin.de/hochschule/personen/person/?eid=13708"
         class="underline hover:decoration-green-600" target="_blank">
        Prof. Dr.-Ing. Alexander Stanik von der Hochschule für Technik und Wirtschaft (HTW) Berlin
      </a>
      ebenso auf den Einsatz in der Forschung und der Lehre.
      Studierende erhalten mit diesem Projekt die Möglichkeit
      eigene kreative Ideen mit innovativen Technologien und hohem Praxisbezug
      sowie einer Vielfalt an Anwendungskomplexitäten der Wirtschaftsinformatik
      zu realisieren. Mit dem Themenschwerpunkt auf Entwicklung und Erprobung neuer Technologien und Anwendungen
      für nachhaltige und klimagerechte Gebäudebewirtschaftung ist dieses Projekt seit 2024 auch Teil
      des Forschungsclusters
      <a
href="https://www.htw-berlin.de/forschung/forschungsprofil/forschungscluster/cluster/?eid=23"
         class="underline hover:decoration-green-600" target="_blank">
        Klimagerechte Energieversorgungssysteme und energieeffiziente Gebäude (KEG)
      </a>
      der HTW Berlin.
    </p>
  </Section>

  <Section title="Abschlussarbeiten im Studiengang Wirtschaftsinformatik">
    <ThesisSection />
  </Section>
  </div>
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
    margin-right: 1px;
  }
}
</style>
