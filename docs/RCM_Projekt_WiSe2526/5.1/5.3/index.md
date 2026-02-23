---
title: 5.3 Priorisierung der Anforderungen
---

Die Priorisierung der User Stories beschreibt die Reihenfolge und Bedeutung ihrer Umsetzung innerhalb der Produktentwicklung. User Stories mit hoher Priorität sind Bestandteil des Minimum Viable Product (MVP) und müssen umgesetzt werden, um die grundlegende Funktionalität des digitalen Mängelmanagements sicherzustellen. User Stories mit mittlerer Priorität erweitern den Funktionsumfang des Systems um Komfort-, Kommunikations- und Effizienzfunktionen und sind für nachfolgende Releases vorgesehen. User Stories mit niedriger Priorität unterstützen vor allem Analyse- und Optimierungszwecke und werden in späteren Entwicklungsphasen berücksichtigt. Die Priorisierung orientiert sich am Beitrag der jeweiligen User Story zu den definierten Systemzielen sowie an der Abhängigkeit zentraler Prozesse voneinander.

```

```

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| User-Story-ID | Stakeholder / Rolle | User Story | Bezug zu Systemziel | Akzeptanzkriterien | Priorisierung |
| Immobilienverwaltung/Hausverwaltung |  |  |  |  |  |
| US-V-01 | Immobilienverwaltung | "Als Hausverwaltung möchte ich Schadensmeldungen anhand definierter Dringlichkeitsstufen (z. B. niedrig, mittel, hoch) visuell unterscheiden können, damit ich kritische Fälle priorisiert bearbeiten kann." | SZ-05, SZ-02 | "Dringlichkeitsstufen Farbcode im Dashboard" | hoch |
| US-V-02a | Immobilienverwaltung | "Als Hausverwaltung möchte ich alle zu einem Schaden gehörenden Dokumente zentral einsehen können, damit ich mir schnell einen vollständigen Überblick verschaffen kann." | SZ-04, SZ-01 | "Zentrale Dokumentenablage Versions- und Zeitstempel" | hoch |
| US-V-02b | Immobilienverwaltung | "Als Hausverwaltung möchte ich Versionen und Zeitpunkte von Dokumenten nachvollziehen können, damit Entscheidungen revisionssicher sind." | SZ-04, SZ-01 |  | mittel |
| US-V-03 | Immobilienverwaltung | "Als Hausverwaltung möchte ich vergangene Schadensmeldungen einer Immobilie strukturiert einsehen und filtern können, damit ich wiederkehrende Schäden identifizieren kann." | SZ-07, SZ-04 | "Historische Übersicht Filter nach Objekt / Schadenstyp" | niedrig |
| US-V-04 | Immobilienverwaltung | "Als Hausverwaltung möchte ich rollenabhängige Kontaktdaten zu einem Schadenfall einsehen können, damit ich Aufträge ohne Rückfragen vergeben kann." | SZ-03, SZ-06 | "Zentrale Kontaktdaten Rollenbezogene Anzeige" | mittel |
| Handwerker |  |  |  |  |  |
| US-H-01 | Handwerker | "Als Handwerker:in möchte ich zu einem Auftrag eine vollständige und strukturierte Schadensbeschreibung inklusive Medien (z. B. Fotos oder Videos) einsehen können, damit ich den Arbeitsaufwand fachlich korrekt einschätzen kann." | SZ-01, SZ-06 | "Medienanhänge sichtbar Objekt- und Schadensbeschreibung vorhanden" | hoch |
| US-H-02a | Handwerker | "Als Handwerker:in möchte ich meine Arbeitsnachweise digital am Auftrag hinterlegen können, damit die Durchführung transparent dokumentiert ist." | SZ-04, SZ-06 | "Upload von mindestens einem Dokument oder Foto möglich Hochgeladene Nachweise sind: zeitlich gestempelt dem Auftrag eindeutig zugeordnet Nachweise sind für die Hausverwaltung einsehbar" | hoch |
| US-H-02b | Handwerker | "Als Handwerker:in möchte ich einen Auftrag nach Abschluss der Arbeiten als „durchgeführt“ kennzeichnen können, damit die Hausverwaltung über den Arbeitsstatus informiert ist." | SZ-04, SZ-06 | "Status „durchgeführt“ kann nur gesetzt werden, wenn: mindestens ein Arbeitsnachweis vorhanden ist Statusänderung ist für die Hausverwaltung sichtbar Zeitpunkt der Statusänderung wird gespeichert" | hoch |
| US-H-03 | Handwerker | "Als Handwerker:in möchte ich auf Basis meiner verfügbaren Zeitfenster Terminvorschläge für einen Auftrag erhalten, damit die Terminabstimmung effizient erfolgen kann." | SZ-03, SZ-06 | "Das System berücksichtigt definierte Verfügbarkeiten Es werden mehrere Terminvorschläge angezeigt Vorschläge können von der Hausverwaltung ausgewählt oder abgelehnt werden" | mittel |
| Mieter:innen |  |  |  |  |  |
| US-M-01 | Mieter:innen | "Als Mieter:in möchte ich einen Schaden online mit Fotos oder Videos und allen relevanten Informationen melden können, damit ich den Schaden ohne Telefonate oder Papieraufwand vollständig erfassen kann." | SZ-03, SZ-01 | "Upload von Fotos/Videos möglich Pflichtfelder vorhanden Meldung digital abschickbar" | hoch |
| US-M-02 | Mieter:innen | "Als Mieter:in möchte ich den aktuellen Status meiner Schadensmeldung jederzeit einsehen können, damit ich weiß, ob und wie mein Anliegen bearbeitet wird." | SZ-02 | "Statusanzeige (neu, in Bearbeitung, abgeschlossen) Übersicht „Meine Schadensmeldungen“" | hoch |
| US-M-03 | Mieter:innen | "Als Mieter:in möchte ich bei relevanten Statusänderungen automatisch benachrichtigt werden, damit ich über den Fortschritt informiert bin." | SZ-03, SZ-02 | "Benachrichtigung bei Statuswechsel Zeitbasierte Rückmeldungen (z. B. nach 1 Woche)" | mittel |
| US-M-04 | Mieter:innen | "Als Mieter:in möchte ich online Termine zur Schadensbehebung vereinbaren können, damit die Abstimmung schnell und transparent erfolgt." | SZ-03, SZ-01 | "Online-Terminvereinbarung Anzeige bei Verzögerungen (Delay)" | mittel |

```

```

|  |  |  |
| --- | --- | --- |
| Priorität "hoch" | Priorität "mittel" | Priorität "niedrig" |
| User Stories mit hoher Priorität sind essenziell für die grundlegende Nutzbarkeit des Systems. Ohne ihre Umsetzung kann das digitale Mängelmanagement seinen Kernzweck nicht erfüllen. Dazu zählen insbesondere: digitale Schadensmeldung (US-M-01), Transparenz über den Bearbeitungsstatus (US-M-02), Priorisierung durch die Hausverwaltung (US-V-01), vollständige Auftragsbearbeitung durch Handwerker:innen (US-H-01, US-H-02a, US-H-02b), zentrale Dokumentation (US-V-02a). Diese User Stories bilden den funktionalen Kern (MVP) des Produkts. | User Stories mit mittlerer Priorität erhöhen Effizienz, Transparenz und Nutzerkomfort, sind jedoch nicht zwingend notwendig, um das System grundsätzlich betreiben zu können. Beispiele: Benachrichtigungen (US-M-03), Terminabstimmung (US-M-04, US-H-03), Kontaktdatenübersicht (US-V-04), revisionssichere Dokumentversionierung (US-V-02b). Diese Funktionen sind typische Erweiterungen für Folge-Releases. | User Stories mit niedriger Priorität dienen Analyse-, Optimierungs- oder Komfortzwecken und richten sich primär an strategische oder langfristige Nutzung. Beispiel: Historische Auswertungen und Filterfunktionen (US-V-03). Diese Funktionen sind nicht Bestandteil des MVP, sondern für spätere Ausbaustufen vorgesehen." |