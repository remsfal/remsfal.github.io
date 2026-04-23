---
title: 3.2 Analys der User Stories und ggf. Erweiterung mithilfe von KI
---

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **User-Story-ID** | **Stakeholder / Rolle** | **User Story** | **Bezug zu Systemziel** | **Akzeptanzkriterien** |
| **Immobilienverwaltung/Hausverwaltung** | | | | |
| US-V-01 | Immobilienverwaltung | Als Hausverwaltung möchte ich Schadensmeldungen anhand definierter Dringlichkeitsstufen (z. B. niedrig, mittel, hoch) visuell unterscheiden können, damit ich kritische Fälle priorisiert bearbeiten kann. | Z-B-01, Z-B-03 | Dringlichkeitsstufen Farbcode im Dashboard |
| US-V-02a | Immobilienverwaltung | Als Hausverwaltung möchte ich alle zu einem Schaden gehörenden Dokumente zentral einsehen können, damit ich mir schnell einen vollständigen Überblick verschaffen kann. | Z-A-03, Z-B-02 | Zentrale Dokumentenablage Versions- und Zeitstempel |
| US-V-02b | Immobilienverwaltung | Als Hausverwaltung möchte ich Versionen und Zeitpunkte von Dokumenten nachvollziehen können, damit Entscheidungen revisionssicher sind. | Z-A-03, Z-B-02 | Zentrale Dokumentenablage Versions- und Zeitstempel |
| US-V-03 | Immobilienverwaltung | Als Hausverwaltung möchte ich vergangene Schadensmeldungen einer Immobilie strukturiert einsehen und filtern können, damit ich wiederkehrende Schäden identifizieren kann. | Z-A-03, Z-E-01 | Historische Übersicht Filter nach Objekt / Schadenstyp |
| US-V-04 | Immobilienverwaltung | Als Hausverwaltung möchte ich rollenabhängige Kontaktdaten zu einem Schadenfall einsehen können, damit ich Aufträge ohne Rückfragen vergeben kann. | Z-B-01, Z-A-02 | Zentrale Kontaktdaten Rollenbezogene Anzeige |
| **Handwerker** | | | | |
| US-H-01 | Handwerker | Als Handwerker:in möchte ich zu einem Auftrag eine vollständige und strukturierte Schadensbeschreibung inklusive Medien (z. B. Fotos oder Videos) einsehen können, damit ich den Arbeitsaufwand fachlich korrekt einschätzen kann. | Z-D-01 | Medienanhänge sichtbar Objekt- und Schadensbeschreibung vorhanden |
| US-H-02a | Handwerker | Als Handwerker:in möchte ich meine Arbeitsnachweise digital am Auftrag hinterlegen können, damit die Durchführung transparent dokumentiert ist. | Z-D-03, Z-A-03 | Upload von mindestens einem Dokument oder Foto möglich Hochgeladene Nachweise sind: zeitlich gestempelt dem Auftrag eindeutig zugeordnet Nachweise sind für die Hausverwaltung einsehbar |
| US-H-02b | Handwerker | Als Handwerker:in möchte ich einen Auftrag nach Abschluss der Arbeiten als „durchgeführt“ kennzeichnen können, damit die Hausverwaltung über den Arbeitsstatus informiert ist. | Z-D-03, Z-A-03 | Status „durchgeführt“ kann nur gesetzt werden, wenn: mindestens ein Arbeitsnachweis vorhanden ist Statusänderung ist für die Hausverwaltung sichtbar Zeitpunkt der Statusänderung wird gespeichert |
| US-H-03 | Handwerker | Als Handwerker:in möchte ich auf Basis meiner verfügbaren Zeitfenster Terminvorschläge für einen Auftrag erhalten, damit die Terminabstimmung effizient erfolgen kann. | Z-D-02, Z-A-02 | Das System berücksichtigt definierte Verfügbarkeiten Es werden mehrere Terminvorschläge angezeigt Vorschläge können von der Hausverwaltung ausgewählt oder abgelehnt werden |
| **Mieter:innen** | | | | |
| US-M-01 | Mieter:innen | Als Mieter:in möchte ich einen Schaden online mit Fotos oder Videos und allen relevanten Informationen melden können, damit ich den Schaden ohne Telefonate oder Papieraufwand vollständig erfassen kann. | Z-C-01, Z-A-02 | Upload von Fotos/Videos möglich Pflichtfelder vorhanden Meldung digital abschickbar |
| US-M-02 | Mieter:innen | Als Mieter:in möchte ich den aktuellen Status meiner Schadensmeldung jederzeit einsehen können, damit ich weiß, ob und wie mein Anliegen bearbeitet wird. | Z-C-02, Z-A-01 | Statusanzeige (neu, in Bearbeitung, abgeschlossen) Übersicht „Meine Schadensmeldungen“ |
| US-M-03 | Mieter:innen | Als Mieter:in möchte ich bei relevanten Statusänderungen automatisch benachrichtigt werden, damit ich über den Fortschritt informiert bin. | Z-A-02, Z-C-03 | Benachrichtigung bei Statuswechsel Zeitbasierte Rückmeldungen (z. B. nach 1 Woche) |
| US-M-04 | Mieter:innen | Als Mieter:in möchte ich online Termine zur Schadensbehebung vereinbaren können, damit die Abstimmung schnell und transparent erfolgt. | Z-C-03, Z-A-02 | Online-Terminvereinbarung Anzeige bei Verzögerungen (Delay) |

Nachfolgend eine **systematische Analyse der User Stories von „remsfal“** aus Sicht des agilen Requirements Engineerings (User Stories, INVEST, ISO/IEC 29148).

---

**1. Kurze Gesamtbewertung der User Stories**

**Stärken**

- Klare, rollenbasierte Struktur (Hausverwaltung, Handwerker, Mieter:innen)
- Konsistente User-Story-Syntax („Als … möchte ich … damit …“)
- Systemziele sind sauber referenziert
- Akzeptanzkriterien sind vorhanden und meist sinnvoll
- Fachlich realistische und praxisnahe Anforderungen

**Schwächen / Risiken**

- Mehrere User Stories sind **funktional zu grob** (Feature-Ebene statt User-Ebene)
- Akzeptanzkriterien sind teilweise **nicht testbar genug**
- Implizite Annahmen zu Rechten, Statusmodellen, Prozessen und Benachrichtigungslogik
- Teilweise **Vermischung von UI-, Prozess- und Fachanforderungen**
- Abgrenzung zwischen Rollen (z. B. Hausverwaltung vs. Handwerker) nicht immer eindeutig geregelt

**INVEST-Gesamturteil**

- **I (Independent):** überwiegend erfüllt, aber Abhängigkeiten (z. B. Statusmodell) implizit
- **N (Negotiable):** gut
- **V (Valuable):** sehr gut
- **E (Estimable):** eingeschränkt bei zu allgemeinen Stories
- **S (Small):** teils zu groß
- **T (Testable):** verbesserungswürdig bei mehreren Stories

---

**2. Konkrete Verbesserungsvorschläge je User Story**

---

**🔹 US-V-01 – Dringlichkeit farblich markieren**

**Bewertung**

- ✔ Rolle eindeutig
- ✔ Nutzen klar
- ⚠ Fachlich unpräzise (Was ist „Dringlichkeit“?)
- ⚠ Akzeptanzkriterien zu grob

**Implizite Annahmen**

- Es existiert ein Dringlichkeitsmodell
- Farben sind barrierefrei & eindeutig
- Dringlichkeit wird manuell oder automatisch gesetzt?

**Verbesserungsvorschlag**

Als Hausverwaltung

möchte ich Schadensmeldungen anhand definierter Dringlichkeitsstufen (z. B. niedrig, mittel, hoch)

visuell unterscheiden können,

damit ich kritische Fälle priorisiert bearbeiten kann.

**Ergänzte Akzeptanzkriterien**

- Dringlichkeitsstufen sind systemweit definiert
- Jede Stufe hat eine eindeutig zugeordnete visuelle Kennzeichnung
- Dringlichkeit ist im Dashboard und in der Detailansicht sichtbar

---

**🔹 US-V-02 – Zentrale Dokumentensicht**

**Bewertung**

- ✔ Klarer Nutzen
- ⚠ Sehr breite Anforderung (Dokumentenmanagement)
- ⚠ Unklar: Wer darf was sehen?

**Implizite Annahmen**

- Zugriffskontrolle existiert
- Versionierung ist verpflichtend
- Medienformate sind definiert

**Verbesserungsvorschlag (Split empfohlen)**

**US-V-02a**

Als Hausverwaltung

möchte ich alle zu einem Schaden gehörenden Dokumente zentral einsehen können,

damit ich mir schnell einen vollständigen Überblick verschaffen kann.

**US-V-02b**

Als Hausverwaltung

möchte ich Versionen und Zeitpunkte von Dokumenten nachvollziehen können,

damit Entscheidungen revisionssicher sind.

---

**🔹 US-V-03 – Schadenshistorie**

**Bewertung**

- ✔ Klarer Mehrwert
- ⚠ „Muster erkennen“ ist analytisch unscharf
- ⚠ Akzeptanzkriterien eher Feature-Liste

**Verbesserungsvorschlag**

Als Hausverwaltung

möchte ich vergangene Schadensmeldungen einer Immobilie strukturiert einsehen und filtern können,

damit ich wiederkehrende Schäden identifizieren kann.

**Ergänzende Kriterien**

- Filter nach Zeitraum, Schadenstyp, Status
- Anzeige chronologisch sortiert

---

**🔹 US-V-04 – Kontaktdaten**

**Bewertung**

- ✔ Verständlich
- ⚠ „relevante Kontaktdaten“ unklar
- ⚠ Rollenbezug nicht spezifiziert

**Implizite Annahmen**

- Unterschiedliche Kontaktarten (Mieter, Handwerker, Notfall)
- Datenschutz & Sichtbarkeitsregeln

**Verbesserungsvorschlag**

Als Hausverwaltung

möchte ich rollenabhängige Kontaktdaten zu einem Schadenfall einsehen können,

damit ich Aufträge ohne Rückfragen vergeben kann.

---

**🔹 US-H-01 – Schadensinformationen**

**Bewertung**

- ✔ Klar
- ⚠ Was ist „vollständig“?

**Verbesserung**

- Definition verpflichtender Informationen ergänzen
- Trennung Anzeige vs. Download prüfen

---

**🔹 US-H-02 – Arbeitsnachweise**

**Bewertung**

- ✔ Fachlich sinnvoll
- ⚠ „Abschlussstatus setzbar“ ist Prozesslogik

**Split empfohlen**

- Upload von Nachweisen
- Statuswechsel als eigene Story

---

**🔹 US-H-03 – Automatische Terminfindung**

**Bewertung**

- ⚠ Sehr komplexe Anforderung
- ⚠ Technische Annahmen (Kalender-Schnittstellen)
- ⚠ Datenschutz nicht adressiert

**Empfehlung**  
Als **Epic** behandeln oder stark eingrenzen:

- Kalender lesen vs. schreiben
- Vorschläge vs. automatische Buchung

---

**🔹 US-M-01 – Schaden melden**

**Bewertung**

- ✔ Sehr gut
- ✔ Testbar
- ✔ Sauber abgegrenzt

**Kleine Ergänzung**

- Validierung der Medienformate
- Zwischenspeichern (Entwurf)

---

**🔹 US-M-02 – Status einsehen**

**Bewertung**

- ✔ Klar
- ⚠ Statusmodell implizit

**Empfehlung**

- Statusdefinition systemweit referenzieren

---

**🔹 US-M-03 – Benachrichtigungen**

**Bewertung**

- ⚠ Zeitbasierte Logik sehr offen
- ⚠ Kanal (E-Mail, Push?) unklar

**Verbesserung**

Als Mieter:in

möchte ich bei relevanten Statusänderungen automatisch benachrichtigt werden,

damit ich über den Fortschritt informiert bin.

---

**🔹 US-M-04 – Terminvereinbarung**

**Bewertung**

- ✔ Klarer Nutzen
- ⚠ „Delay“ unklar definiert

**Empfehlung**

- Trennung Terminvereinbarung vs. Verzögerungsinformation

---

**3. Empfohlene zusätzliche User Stories (identifizierte Lücken)**

**🔸 Rollen & Rechte**

Als Systemadministrator

möchte ich rollenbasierte Zugriffsrechte definieren können,

damit sensible Informationen geschützt sind.

**🔸 Statusmodell**

Als Produktverantwortliche:r

möchte ich ein einheitliches Statusmodell für Schadensmeldungen definieren,

damit alle Beteiligten denselben Prozess verstehen.

**🔸 Eskalationen**

Als Hausverwaltung

möchte ich über überfällige Schadensmeldungen automatisch informiert werden,

damit SLA-Verletzungen vermieden werden.

**🔸 Nachvollziehbarkeit / Audit**

Als Hausverwaltung

möchte ich Änderungen an Schadensmeldungen nachvollziehen können,

damit Entscheidungen transparent dokumentiert sind.

---

**Fazit**

Die User Stories von **remsfal** sind **inhaltlich stark und praxisnah**, bewegen sich jedoch teilweise **auf Feature- oder Epic-Ebene**. Durch:

- klarere fachliche Begriffe,
- explizite Status- und Rollenmodelle,
- feinere Schnitte (Splitting),
- und testbare Akzeptanzkriterien

lassen sie sich sehr gut auf **Sprint-fähige, ISO/IEC-29148-konforme Anforderungen** heben.

Wenn du möchtest, kann ich:

- einzelne Stories **vollständig überarbeiten (inkl. Gherkin)**
- ein **konsistentes Status- & Rollenmodell** ableiten
- oder die Stories auf **Backlog-Reife** (Ready-Check) prüfen.

Perfekt – dann formuliere ich dir **konkret verbesserte, qualitativ saubere User-Story-Versionen** für **US-H-01 bis US-H-03**, **INVEST-konform**, fachlich präzise und mit **klar ableitbaren Akzeptanzkriterien**.  
Ich halte sie bewusst **umsetzungsnah**, ohne technische Details vorwegzunehmen (ISO/IEC 29148-konform).

---

**🔹 Überarbeitete User Stories – Handwerker**

---

**✅ US-H-01 (überarbeitet) – Schadensinformationen einsehen**

**Verbesserte User Story**

Als Handwerker:in

möchte ich zu einem Auftrag eine vollständige und strukturierte Schadensbeschreibung

inklusive Medien (z. B. Fotos oder Videos) einsehen können,

damit ich den Arbeitsaufwand fachlich korrekt einschätzen kann.

**Klarstellung gegenüber Original**

- „vollständig“ wurde fachlich präzisiert
- Fokus klar auf **Einsehen**, nicht Download / Bearbeitung
- Keine Vermischung mit Prozess- oder Statuslogik

**Verbesserte Akzeptanzkriterien**

- Zu jedem Auftrag sind folgende Pflichtinformationen sichtbar:
  - Objektadresse
  - Schadensart
  - Schadensbeschreibung (Text)
- Medienanhänge (Fotos/Videos) sind:
  - dem Auftrag eindeutig zugeordnet
  - in einer Vorschau einsehbar
- Fehlende Pflichtinformationen sind für die Hausverwaltung erkennbar

---

**✅ US-H-02a (neu, gesplittet) – Arbeitsnachweise hochladen**

**Verbesserte User Story**

Als Handwerker:in

möchte ich Arbeitsnachweise wie Fotos, Berichte oder Dokumente

digital zu einem Auftrag hochladen können,

damit die durchgeführten Arbeiten nachvollziehbar dokumentiert sind.

**Warum Split sinnvoll war**

- Reine Dokumentationsanforderung
- Keine Status- oder Prozessverantwortung beim Handwerker impliziert

**Akzeptanzkriterien**

- Upload von mindestens einem Dokument oder Foto möglich
- Hochgeladene Nachweise sind:
  - zeitlich gestempelt
  - dem Auftrag eindeutig zugeordnet
- Nachweise sind für die Hausverwaltung einsehbar

---

**✅ US-H-02b (neu) – Durchführung als abgeschlossen kennzeichnen**

*(separate Prozess-Story)*

**Neue ergänzende User Story**

Als Handwerker:in

möchte ich einen Auftrag nach Abschluss der Arbeiten

als „durchgeführt“ kennzeichnen können,

damit die Hausverwaltung über den Arbeitsstatus informiert ist.

**Akzeptanzkriterien**

- Status „durchgeführt“ kann nur gesetzt werden, wenn:
  - mindestens ein Arbeitsnachweis vorhanden ist
- Statusänderung ist für die Hausverwaltung sichtbar
- Zeitpunkt der Statusänderung wird gespeichert

---

**✅ US-H-03a (überarbeitet) – Terminvorschläge erhalten**

*(aus dem Epic herausgelöst)*

**Verbesserte User Story**

Als Handwerker:in

möchte ich auf Basis meiner verfügbaren Zeitfenster

Terminvorschläge für einen Auftrag erhalten,

damit die Terminabstimmung effizient erfolgen kann.

**Abgrenzung**

- Keine automatische Buchung
- Keine direkte Kalender-Manipulation
- Fokus auf **Vorschläge**, nicht Entscheidung

**Akzeptanzkriterien**

- Das System berücksichtigt definierte Verfügbarkeiten
- Es werden mehrere Terminvorschläge angezeigt
- Vorschläge können von der Hausverwaltung ausgewählt oder abgelehnt werden

---

**✅ US-H-03b (optional, falls relevant) – Verfügbarkeiten pflegen**

**Ergänzende User Story**

Als Handwerker:in

möchte ich meine verfügbaren Zeitfenster im System pflegen können,

damit realistische Terminvorschläge erzeugt werden.

**Akzeptanzkriterien**

- Verfügbarkeiten können:
  - tageweise oder zeitraumbezogen gepflegt werden
- Änderungen wirken sich auf zukünftige Terminvorschläge aus

---

**🧩 Zusammenfassung der Verbesserungen**

|  |  |  |
| --- | --- | --- |
| **Aspekt** | **Vorher** | **Nachher** |
| Fachliche Präzision | teils unklar | eindeutig |
| Story-Größe | zu groß | sauber gesplittet |
| Testbarkeit | eingeschränkt | klar prüfbar |
| Rollenverantwortung | vermischt | sauber getrennt |
| Prozesslogik | implizit | explizit |

---

Wenn du möchtest, kann ich als nächsten Schritt:

- **alle Handwerker-Stories zu einem konsistenten Mini-Backlog zusammenziehen**
- **Gherkin-Akzeptanztests formulieren**
- oder die Stories auf **„Definition of Ready“** prüfen (Scrum-tauglich).

​![Data URI image](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== "Zum Verschieben anwählen und ziehen")