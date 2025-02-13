<script setup>
import BaseLayout from "@/components/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <div class="col-12">
      <Card>
        <template #header>
          <img src="/images/sf-pier.png">
        </template>
        <template #title>
          <div class="font-bold">
            remsfal - REmote Management Services for connected FAciLities
          </div>
        </template>
        <template #subtitle>
          Die Open-Source Facility Management Technologie zum Überwachen, Steuern und Verwalten von Liegenschaften
        </template>
      </Card>
    </div>
    <div class="col-12 md:col-6 lg:col-4">
      <Card>
        <template #title>
          Mängelmanagement
        </template>
        <template #content>
          <p>
            Ein Online-Ticketsystemen für Hausverwaltungen zur Erfassung und Bearbeitung von
            Mängel mit einem begleitenden Prozess bis hin zur Beseitigung.
          </p>
        </template>
      </Card>
    </div>
    <div class="col-12 md:col-6 lg:col-4">
      <Card>
        <template #title>
          Dokumentation
        </template>
        <template #content>
          <p>
            Ein Content-Management-System für Hausverwaltungen zur Dokumentation,
            Archivierung und schnellem Zugriff nach Bedarf auf Stammdaten,
            Ereignisse und Mietverhältnisse.
          </p>
        </template>
      </Card>
    </div>
    <div class="col-12 md:col-6 lg:col-4">
      <Card>
        <template #title>
          Überwachung
        </template>
        <template #content>
          <p>
            Eine Fernzugriffstechnologie sowie Wartungssystem zur
            schnellen Erkennung und Behebung von Problem auf Basis
            von Smart-Building Echtzeitdaten.
          </p>
        </template>
      </Card>
    </div>
  </BaseLayout>
</template>
