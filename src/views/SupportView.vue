<script setup>
import BaseLayout from "@/components/BaseLayout.vue";
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <BaseLayout>
    <div class="col-12">
      <Card>
        <template #title>
          Support
        </template>
        <template #content>
          <p class="p-card-content-header">Community Support</p>
          <p>
            Besuchen Sie doch unsere Community Seite, um kostenlose Unterstützung bei
            ihrem Vorhaben zu erhalten.
          </p>
          <p class="p-card-content-header">Commercial Support</p>
          <p>
            Wenn Sie Unterstützung oder Beratung zum Aufbau einer kommerziellen Installation benötigen,
            dann sind wir gerne bereit ihnen beratend oder unterstützend zur Seite zu stehen.
            Bitte nehmen sie in diesen Fällen ganz unkompliziert per E-Mail an info@remsfal.de
            Kontakt zu uns auf.
          </p>
          <p>
            Probieren Sie doch auch unsere kostenlose Cloud Lösung,
            die ihnen einen Eindruck über die remsfal Plattform geben soll.
          </p>
        </template>
        <template #footer>
          <a href="https://remsfal.online">
            Zur remsfal Cloud
          </a>
        </template>
      </Card>
    </div>

    <div class="col-12">
      <Card>
        <template #title>
          Stack Overflow
        </template>
        <template #content>
          <p>Haben Sie eine Frage zu remsfal?</p>
          <p>
            Suchen Sie eine Antwort auf
            <a href="https://stackoverflow.com/questions/tagged/remsfal" target="_blank">
              Stack Overflow
            </a>
            oder stellen Sie
            doch selbst eine Frage.
          </p>
        </template>
      </Card>
    </div>
  </BaseLayout>
</template>
