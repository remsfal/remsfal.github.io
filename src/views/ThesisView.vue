<script setup>
import BaseLayout from "@/components/BaseLayout.vue";
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <BaseLayout>
    <div class="col-6">
      <Card>
        <template #title>
          Implementierung und Evaluation eines Java-basierten HAProxy
            Stream Processing Offload Agent zur Event Transformation nach Kafka
        </template>
        <template #footer>
          Status: In Bearbeitung
        </template>
      </Card>
    </div>
    <div class="col-6">
      <Card>
        <template #title>
          Implementierung und Evaluation einer
          Vue.js Single Page Application zur Konfiguration des HAProxy als API Gateway
        </template>
        <template #footer>
          Status: Offen
        </template>
      </Card>
    </div>
    <div class="col-6">
      <Card>
        <template #title>
          Implementation und Evaluation eines File Upload Konzeptes mittels JAX-RS
          zur ausfallsicheren Speicherung und effizienten Verwaltung unterschiedlicher Dateitypen
        </template>
        <template #footer>
          Status: Offen
        </template>
      </Card>
    </div>
    <div class="col-6">
      <Card>
        <template #title>
          Vergleich und Bewertung von Online-Ticketsystemen für Hausverwaltungen und
          deren Auswirkungen auf die Kommunikation mit Auftraggebende, Mietparteien
          und Auftragnehmende
        </template>
        <template #footer>
          Status: In Bearbeitung
        </template>
      </Card>
    </div>
    <div class="col-6">
      <Card>
        <template #title>
          Konzeption und prototypische Refaktorisierung einer
          Monolithischen-Architektur hin zu einer Microservice-Architektur
        </template>
        <template #footer>
          Status: In Bearbeitung
        </template>
      </Card>
    </div>
  </BaseLayout>
</template>
