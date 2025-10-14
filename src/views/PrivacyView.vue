<script setup lang="ts">
import Section from '@/components/Section.vue'
import TitleWidget from '@/components/TitleWidget.vue'
</script>

<template>
  <TitleWidget title="Datenschutz" />

  <Section title="Datenschutzerklärung">
    <p>Im Folgenden möchten wir Sie aufklären, wie Ihre Daten von uns verarbeitet werden.</p>
    <h3>Verantwortlich im Sinne der DSGVO ist:</h3>
    <p>
      Prof. Dr.-Ing. Alexander Stanik<br />
      TA Gebäude C, Raum 830<br />
      Treskowallee 8<br />
      10318 Berlin<br />
      Deutschland
    </p>
    <p>E-Mail: info@remsfal.de</p>

    <h3>Unseren Datenschutzbeauftragten erreichen sie unter:</h3>
    <p>
      Prof. Dr.-Ing. Alexander Stanik<br />
      E-Mail: privacy@remsfal.de
    </p>
    <p>
      Sollten Sie per E-Mail mit uns Kontakt aufnehmen, werden die mitgeteilten
      Daten von uns gespeichert, um Ihr Anliegen zu bearbeiten.
    </p>

    <h3>Betroffenenrechte</h3>
    <p>
      Sie haben als betroffene Person, das Recht auf Auskunft, das Recht auf
      Berichtigung oder Löschung, das Recht auf Einschränkung der Verarbeitung
      und das Recht auf Widerspruch gegen die Verarbeitung Ihrer Daten.
      Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit
      Wirkung für die Zukunft widerrufen.
    </p>
    <p>
      Bitte richten Sie Ihren Widerspruch [oder Widerruf] formlos an folgende Adresse: privacy@remsfal.de
    </p>
    <p>
      Darüber hinaus haben Sie das Recht auf Datenübertragbarkeit.
      Sie haben weiter das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung zu
      beschweren. Eine Liste der entsprechenden Behörden finden Sie unter:
      <a
href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
         class="underline hover:decoration-green-600" target="_blank">
        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
      </a>.
    </p>
    <p>
      <a
href="https://opr.vc/docs/allgemein/dse_einleitung/" class="underline hover:decoration-green-600"
         target="_blank">
        open privacy by opr.vc
      </a>
    </p>
  </Section>

  <Section title="Hosting">
    <p>Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:</p>
    <p>
      IP-Adresse, die Adresse der vorher besuchten Website (Referer Anfrage-Header),
      Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time,
      Inhalt der Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website,
      von der die Anforderung kommt und Informationen zu Browser und Betriebssystem.
    </p>
    <p>
      Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität und Sicherheit
      zu gewährleisten. Dies entspricht unserem berechtigten Interesse im Sinne des
      Art. 6 Abs. 1 S. 1 lit. f DSGVO.
    </p>
    <p>
      Es erfolgt kein Tracking und wir haben auf diese Daten keinen direkten Zugriff,
      sondern erhalten lediglich eine anonymisierte, statistische Zusammenfassung.
      Diese beinhaltet die Adresse der vorher besuchten Seite, die Häufigkeit der
      jeweils aufgerufenen Seiten und die Anzahl eindeutiger Besucher.
      Diese Daten führen wir nicht mit anderen Daten zusammen.
    </p>
    <p>Wir setzen für die Zurverfügungstellung unserer Website folgenden Hoster ein:</p>
    <p>
      GitHub Inc.<br />
      88 Colin P Kelly Jr St<br />
      San Francisco, CA 94107<br />
      United States<br />
    </p>
    <p>
      Dieser ist Empfänger Ihrer personenbezogenen Daten. Dies entspricht unserem
      berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO, selbst keinen
      Server in unseren Räumlichkeiten vorhalten zu müssen. Serverstandort ist USA.
    </p>
    <p>
      Weitere Informationen zu Widerspruchs- und Beseitigungsmöglichkeiten gegenüber
      GitHub finden Sie unter:
      <a
href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages"
         class="underline hover:decoration-green-600" target="_blank">
        https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages
      </a>
    </p>
    <p>
      Sie haben das Recht der Verarbeitung zu widersprechen. Ob der Widerspruch erfolgreich ist,
      ist im Rahmen einer Interessenabwägung zu ermitteln.
    </p>
    <p>Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt.</p>
    <p>
      Die Verarbeitung der unter diesem Abschnitt angegebenen Daten ist weder gesetzlich
      noch vertraglich vorgeschrieben. Die Funktionsfähigkeit der Website ist ohne die
      Verarbeitung nicht gewährleistet.
    </p>
    <p>
      GitHub hat Compliance-Maßnahmen für internationale Datenübermittlungen umgesetzt.
      Diese gelten für alle weltweiten Aktivitäten, bei denen GitHub personenbezogene
      Daten von natürlichen Personen in der EU verarbeitet. Diese Maßnahmen basieren auf den
      EU-Standardvertragsklauseln (SCCs). Weitere Informationen finden Sie unter:
      <a
        href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1–the-standard-contractual-clauses-processors"
        class="underline hover:decoration-green-600" target="_blank">
        https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1–the-standard-contractual-clauses-processors
      </a>
    </p>
    <p>
      <a href="https://opr.vc/docs/hosting/github_pages/" class="underline hover:decoration-green-600" target="_blank">
        open privacy by opr.vc
      </a>
    </p>
  </Section>
</template>
