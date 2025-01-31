<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <div class="col-12">
      <Card>
        <template #title>
          Haftungsklausel
        </template>
        <template #content>
          <p class="p-card-content-header">Haftung für Inhalte</p>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
            wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
            fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
            den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
            ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
            umgehend entfernen.
          </p>
          <p class="p-card-content-header">Haftung für Links</p>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
            mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </template>
      </Card>
    </div>

    <div class="col-12">
      <Card>
        <template #title>
          Urheberrecht und Lizenzierung
        </template>
        <template #content>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht.
          </p>
          <p class="p-card-content-header">Copyright © 2023-present Prof. Dr.-Ing. Alexander Stanik</p>
          <p>
            Jedem, der eine Kopie dieser Software und der zugehörigen Dokumentationsdateien
            (die „Software“) erhält, wird hiermit kostenlos die Erlaubnis erteilt,
            ohne Einschränkung mit der Software zu handeln, einschließlich und ohne Einschränkung
            der Rechte zur Nutzung, zum Kopieren, Ändern, Zusammenführen, Veröffentlichen,
            Verteilen, Unterlizenzieren und/oder Verkaufen von Kopien der Software, und Personen,
            denen die Software zur Verfügung gestellt wird, dies unter den folgenden Bedingungen
            zu gestatten:
          </p>
          <p>
            Der obige Urheberrechtshinweis und dieser Genehmigungshinweis müssen in allen
            Kopien oder wesentlichen Teilen der Software enthalten sein.
          </p>
          <p>
            DIE SOFTWARE WIRD OHNE MÄNGELGEWÄHR UND OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
            GEWÄHRLEISTUNG, EINSCHLIEẞLICH, ABER NICHT BESCHRÄNKT AUF DIE GEWÄHRLEISTUNG
            DER MARKTGÄNGIGKEIT, DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND DER NICHTVERLETZUNG
            VON RECHTEN DRITTER, ZUR VERFÜGUNG GESTELLT. DIE AUTOREN ODER URHEBERRECHTSINHABER
            SIND IN KEINEM FALL HAFTBAR FÜR ANSPRÜCHE, SCHÄDEN ODER ANDERE VERPFLICHTUNGEN,
            OB IN EINER VERTRAGS- ODER HAFTUNGSKLAGE, EINER UNERLAUBTEN HANDLUNG ODER ANDERWEITIG,
            DIE SICH AUS ODER IN VERBINDUNG MIT DER SOFTWARE ODER DER NUTZUNG ODER ANDEREN
            GESCHÄFTEN MIT DER SOFTWARE ERGEBEN.
          </p>
        </template>
        <template #footer>
          <a href="https://opensource.org/licenses/MIT" target="_blank">
            The MIT License by Open Source Initiative
          </a>
        </template>
      </Card>
    </div>
  </BaseLayout>
</template>
