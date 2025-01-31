<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <div class="col-12">
      <Card>
        <template #header>
          <img src="/images/cc-river.png">
        </template>
        <template #title>
          Wie ist die Objekthierarchie einer Liegenschaft aufgebaut?
        </template>
        <template #content>
          <p class="p-card-content-header">Project = Liegenschaft</p>
          <p>
            Eine Liegenschaft bezeichnet ein oder mehrere Grundstücke,
            die wiederum mit ein oder mehreren Gebäuden oder Anlagen bebaut sind
            und meist eine funktionale Einheit bilden.
          </p>
          <p class="p-card-content-header">Property = Grundstück</p>
          <p>
            Ein Grundstück ist ein räumlich abgegrenzter Teil, der eine bestimmte Größe besitzt und
            einer bestimmten Wirtschaftsart und Lage zugeordnet ist.
            Ein Grundstück entspricht genau einem Eintrag im Bestandsverzeichnis des Grundbuches.
            Daher können mehrere Grundstücke einer Liegenschaft auch die identische Grundbuch Blattnummer besitzen.
          </p>
          <p class="p-card-content-header">Site = Außenanlage</p>
          <p>
            Eine Außenanlage ist ein Teil eines Grundstücks, das sich im Außenbereich befindet und
            nicht Bestandteil eines Gebäudes ist. Zu den Außenanlagen gehören unter anderem Stellplätze,
            Zufahrten, Liegeplätze, Gartenanlagen, Grünflächen oder andere Außenflächen,
            die keine Wohn- oder Nutzflächen besitzen und als Teilmengen der Grundstücksfläche bewirtschaftet werden.
          </p>
          <p class="p-card-content-header">Building = Gebäude</p>
          <p>
            Ein Gebäude ist ein Bauwerk auf einem Grundstück, das Räume einschließt,
            betreten werden kann und dem Aufenthalt von Menschen, Tieren oder der Lagerung von Sachen
            als Wohn-, Gewerbe- oder Nutzflächen dient. Es können mehrere Gebäude
            auf einem Grundstück errichtet sein und als eine Einheit bewirtschaftet werden.
            Grundsätzlich besteht ein Gebäude aus ein oder mehreren Etagen mit oder ohne Keller.
            Das Gebäude ist untergliedert in diverse Einheiten, die sich im Keller,
            in den Etagen oder auch im Dachgeschoss befinden können.
          </p>
          <p class="p-card-content-header">Apartment = Wohnung</p>
          <p>
            Eine Wohnung ist ein umschlossener Raum oder eine Flucht aus mehreren Räumen innerhalb eines Gebäudes,
            die zu Wohnzwecken laut Baugenehmigung verwendet werden darf.
            Eine Wohnung besteht daher aus Wohn- und Nutzfläche.
          </p>
          <p class="p-card-content-header">Commercial = Gewerbe</p>
          <p>
            Ein Gewerbe ist ein Laden oder ein Zusammenschluss mehrerer Räume innerhalb eines Gebäudes,
            die ausschließlich oder vorwiegend der Unterbringung von Industrie- oder Gewerbebetrieben dient.
            Ein Gewerbe besteht daher aus Gewerbe- und Nutzfläche.
          </p>
          <p class="p-card-content-header">Garage = Nebennutzungsraum</p>
          <p>
            Ein Nebennutzungsraum ist eine meist abschließbare und durch feste Wände umschlossene
            Abstellmöglichkeit innerhalb eines Gebäudes, die ausschließlich aus Nutzfläche besteht.
            Hierzu zählen Garagen, Stellplätze in Tiefgaragen, Hobby- oder Lagerräume.
          </p>
        </template>
      </Card>
    </div>
  </BaseLayout>
</template>
