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
    <p>
      Das Ziel des remsfal Open-Source-Projektes ist die Unterstützung
      im Studium und in der Lehre. Studierende erhalten mit diesem Projekt die Möglichkeit
      ein Wunschthema für ihre Abschlussarbeit mit hohem Praxisbezug
      und einer Vielfalt an Anwendungskomplexitäten der Wirtschaftsinformatik
      zu finden.
    </p>
    <p>
      Im Detail bietet das remsfal Open-Source-Projekt
      die folgenden Vorteile für Studienprojekte oder Abschlussarbeiten:
    </p>
    <ul>
      <li><strong class="font-bold">Zugang zu Ressourcen:</strong>
        remsfal bietet Studierenden Zugang zu einer Vielzahl von Ressourcen wie Code,
        Dokumentation und Community-Unterstützung, die sie für ihre Arbeiten verwenden können.
      </li>
      <li><strong class="font-bold">Real-world Erfahrung:</strong>
        remsfal ermöglicht es Studierenden an realen Projekten mit realen Anforderungen
        zu arbeiten und ihre Fähigkeiten in einem realen Arbeitsumfeld zu erproben.
      </li>
      <li><strong class="font-bold">Teamarbeit:</strong>
        remsfal ermöglicht es Studierenden in Teams zusammenzuarbeiten und
        ihre Fähigkeiten im Teamwork zu verbessern.
      </li>
      <li><strong class="font-bold">Networking:</strong>
        Studierende haben die Möglichkeit Kontakte zu anderen Entwicklern und Fachexperten aufzubauen,
        die ihnen bei ihren Karrieremöglichkeiten helfen können.
      </li>
      <li><strong class="font-bold">Aktuelle Technologien:</strong>
        remsfal bietet Studierenden die Möglichkeit mit den neuesten Technologien
        und Tools zu arbeiten und ihre Fähigkeiten in diesen Bereichen zu verbessern.
      </li>
      <li><strong class="font-bold">Freiheit:</strong>
        remsfal bietet Studierenden die Möglichkeit kreativ und unabhängig
        zu arbeiten und ihre eigenen Ideen umzusetzen.
      </li>
      <li><strong class="font-bold">Publikationen:</strong>
        remsfal bietet Studierenden die Möglichkeit ihre Arbeiten zu veröffentlichen
        und so ihre Leistungen einer breiteren Öffentlichkeit zugänglich zu machen.
      </li>
    </ul>
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
