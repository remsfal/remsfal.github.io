<script setup lang="ts">
import Section from '@/components/Section.vue'
import TitleWidget from '@/components/TitleWidget.vue'
</script>

<template>
  <TitleWidget title="Support" />

  <Section title="Support">
    <h3>Community Support</h3>
    <p>
      Besuchen Sie doch unsere Community Seite, um kostenlose Unterstützung bei
      ihrem Vorhaben zu erhalten.
    </p>
    <h3>Commercial Support</h3>
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
    <p>
    <a href="https://remsfal.online" class="underline hover:decoration-green-600">
      Zur remsfal Cloud
    </a></p>
  </Section>

  <Section title="Stack Overflow">
    <p>Haben Sie eine Frage zu remsfal?</p>
    <p>
      Suchen Sie eine Antwort auf
      <a href="https://stackoverflow.com/questions/tagged/remsfal"
         class="underline hover:decoration-green-600" target="_blank">
        Stack Overflow
      </a>
      oder stellen Sie
      doch selbst eine Frage.
    </p>
  </Section>
</template>
