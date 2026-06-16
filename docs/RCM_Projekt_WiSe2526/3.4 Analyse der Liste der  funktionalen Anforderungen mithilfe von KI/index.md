---
title: 3.4 Analyse der Liste der  funktionalen Anforderungen mithilfe von KI
---

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Cluster: Schadensmeldung und Erfassung | | | | |
| Anforderungs-ID | Anforderung | Beschreibung | Ziel-ID | User Story-ID |
| FA-01 | Digitale Schadensmeldung | Das System muss Mieter:innen ermöglichen, Schadensmeldungen digital mit Pflichtfeldern sowie Foto- und Videoanhängen zu erfassen und abzusenden. | Z-C-01, Z-A-02 | US-M-01 |
| FA-02 | Validierung von Schadensmeldungen | Das System muss sicherstellen, dass Schadensmeldungen nur bei vollständig ausgefüllten Pflichtfeldern abgesendet werden können. | Z-B-02, Z-A-03 | US-M-01 |

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Cluster: Status und Transparenz | | | | |
| Anforderungs-ID | Anforderung | Beschreibung | Ziel-ID | User Story-ID |
| FA-03 | Statusverwaltung | Das System muss für jede Schadensmeldung einen eindeutigen Status (z. B. neu, in Bearbeitung, abgeschlossen) führen und aktualisieren können. | Z-A-01 | US-M-02 |
| FA-04 | Statusübersicht | Das System muss allen berechtigten Rollen eine Übersicht über Schadensmeldungen inklusive Status anzeigen. | Z-A-01, Z-B-03 | US-V-03, US-M-02 |

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Cluster: Priorisierung und Übersicht (Hausverwaltung) | | | | |
| Anforderungs-ID | Anforderung | Beschreibung | Ziel-ID | User Story-ID |
| FA-05 | Dringlichkeitskennzeichnung | Das System muss Schadensmeldungen anhand definierter Dringlichkeitsstufen klassifizieren und visuell unterscheiden. | Z-B-04 | US-V-01 |
| FA-06 | Filter- und Suchfunktionen | Das System muss der Hausverwaltung ermöglichen, Schadensmeldungen nach Objekt, Status und Schadenstyp zu filtern. | Z-A-01, Z-D-01 | US-V-03 |

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Cluster: Dokumentation und Nachvollziehbarkeit | | | | |
| Anforderungs-ID | Anforderung | Beschreibung | Ziel-ID | User Story-ID |
| FA-07 | Zentrale Dokumentenablage | Das System muss alle zu einer Schadensmeldung gehörenden Dokumente zentral speichern und anzeigen. | Z-A-03 | US-V-02a, US-H-01 |
| FA-08 | Versions- & Zeitstempel | Das System muss Versionen und Zeitpunkte von Dokumentenänderungen revisionssicher speichern. | Z-A-03 | US-V-02b |
| FA-14 (neu) | Historische Schadensübersicht | Das System muss vergangene Schadensmeldungen je Immobilie historisch speichern und strukturiert anzeigen können. | Z-A-03, Z-E-01 | US-V-03 |

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Cluster: Handwerkerprozesse | | | | |
| Anforderungs-ID | Anforderung | Beschreibung | Ziel-ID | User Story-ID |
| FA-09 | Auftragsinformationen | Das System muss Handwerker:innen vollständige, strukturierte Auftragsinformationen inklusive Medien bereitstellen. | Z-D-01 | US-H-01 |
| FA-10 | Arbeitsnachweise | Das System muss Handwerker:innen ermöglichen, Arbeitsnachweise digital am Auftrag zu hinterlegen. | Z-D-03, Z-A-03 | US-H-02a |
| FA-11 | Statusabschluss | Das System darf den Status „durchgeführt“ nur zulassen, wenn mindestens ein Arbeitsnachweis vorliegt. | Z-D-03 | US-H-02b |

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Cluster: Termine & Kommunikation |  |  |  |  |
| Anforderungs-ID | Anforderung | Grobbeschreibung | Ziel-ID | User Story-ID |
| FA-12 | Online-Terminvereinbarung | Das System muss eine digitale Terminvereinbarung zwischen Hausverwaltung, Handwerker:innen und Mieter:innen ermöglichen. | Z-C-03, Z-A-02 | US-M-04, US-H-03, |
| FA-13 | Benachrichtigungen | Das System muss relevante Statusänderungen automatisch an betroffene Nutzer:innen kommunizieren. | Z-A-02, Z-D-04 | US-M-03 |
| FA-16 (neu) | Kalenderintegration | Das System muss externe Kalender von Handwerker:innen anbinden können, um verfügbare Termine automatisiert zu ermitteln. | Z-D-02, Z-A-02 | US-H-03 |

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Cluster: Verwaltung & Stammdaten | | | | |
| Anforderungs-ID | Anforderung | Beschreibung | Ziel-ID | User Story-ID |
| FA-15 (neu) | Zentrale Kontaktverwaltung | Das System muss relevante Kontaktdaten (z. B. Handwerker, Eigentümer, Dienstleister) rollenbezogen zentral verwalten und anzeigen. | Z-B-01, Z-A-02 | US-V-04 |

3.4  
Schreibe mir basierend auf folgenden Informationen einen Prompt der Hauptsächlich Aufgabe 3.4 Beantworten soll: Als basis werden die Tabellen aus 3.1 und 3.3 geliefert Aufgabe 3: Systemanforderungen ermitteln– 2. Stufe der Anforderungsermittlung (9 Pkt) Auf der Grundlage der Definition der Systemziele und des definierten Systemkontextes sowie der definierten potenziellen Benutzer und User Stories soll eine erste grobe Anforderungsermittlung erfolgen. Im Einzelnen sind dabei folgende Schritte auszuführen: 3.1. Benutzeranforderungen in Form von User-Stories beschreiben. Erstellen Sie User Stories für Ihr Projekt. (eindeutige ID vergeben) Tabelle 3.2 Analys der User Stories und ggf. Erweiterung mithilfe von KI. Analysieren Sie die Vollständigkeit und Güte Ihrer User Stories mithilfe von KI. Bewerten Sie die Ergebnisse und ergänzen Sie ggf. die Tabelle aus 3.1 Tabelle aus 3.1. + Text 3.3. System-Anforderungen (funktionale Anforderungen) aus Zielen ableiten; Übersicht über Anforderungen (eindeutige ID, Anforderung, Grobbeschreibung der Anforderung, Resultiert aus - ID woraus die Anforderung entstanden ist, ID der zugehörigen User Story) - (mit der Anforderungsschablone nach Rupp) Tabelle 3.4. Analyse der Liste der funktionalen Anforderungen mithilfe von KI Analysieren Sie mithilfe von KI, ob Ihre Liste der Anforderungen vollständig ist. Ergänzen Sie die Tabelle aus Aufgabe 3.1., falls die Anforderungen relevant sind. Erläutern Sie Ihre Entscheidung. Geben Sie den Promptverlauf an Tabelle (s.o.) + Text

Gerne 😊  
Hier ist ein **sauber formulierter, fachlich präziser Prompt**, der **klar den Fokus auf Aufgabe 3.4 legt** und **explizit auf den Tabellen aus 3.1 und 3.3 aufbaut**, inklusive **fachlich-inhaltlicher Prüfung**, Ergänzungen und Begründungen – genau so, wie es in der Aufgabenstellung verlangt wird.

---

**Prompt für Aufgabe 3.4 – Analyse funktionaler Anforderungen**

**Rolle:**  
Du agierst als **Experte für Requirements Engineering** mit Schwerpunkt auf

- ISO/IEC 29148
- Anforderungsschablone nach Rupp
- Ableitung funktionaler Anforderungen aus User Stories und Systemzielen
- Qualitätssicherung von Anforderungsspezifikationen

**Kontext:**  
Es liegt eine erste Anforderungsermittlung für ein Softwaresystem vor.  
Als Grundlage dienen:

- **Tabelle aus Aufgabe 3.1:** Benutzeranforderungen in Form von User Stories (inkl. eindeutiger IDs, Rollen, Nutzenbeschreibung)
- **Tabelle aus Aufgabe 3.3:** Abgeleitete **funktionale Systemanforderungen** (inkl. eindeutiger ID, Anforderung, Grobbeschreibung, Herkunft aus Systemzielen und zugehöriger User Story, formuliert nach der Anforderungsschablone nach Rupp)

**Aufgabe (Fokus auf 3.4):**  
Analysiere die Liste der funktionalen Anforderungen aus **Aufgabe 3.3** mithilfe von KI **systematisch und kritisch** im Hinblick auf ihre **Vollständigkeit und fachliche Angemessenheit**.

Dabei sind insbesondere folgende Punkte zu prüfen:

1. **Abdeckung der User Stories:**
   - Ist jede User Story aus Aufgabe 3.1 durch mindestens eine funktionale Anforderung abgedeckt?
   - Gibt es User Stories, für die **keine oder nur unzureichende funktionale Anforderungen**existieren?
2. **Vollständigkeit der funktionalen Anforderungen:**
   - Fehlen funktionale Anforderungen, die sich logisch aus
     - den Systemzielen,
     - dem Systemkontext oder
     - den beschriebenen Benutzerinteraktionen  
       ergeben würden?
   - Gibt es implizite Anforderungen (z. B. Steuerungs-, Anzeige-, Prüf- oder Verwaltungsfunktionen), die bisher nicht explizit formuliert wurden?
3. **Konsistenz und Traceability:**
   - Sind alle funktionalen Anforderungen eindeutig einer User Story bzw. einem Systemziel zuordenbar?
   - Gibt es Redundanzen, Überschneidungen oder unklare Abgrenzungen zwischen Anforderungen?
4. **Erweiterung bei Bedarf:**
   - Ergänze **fehlende oder notwendige funktionale Anforderungen** in der Tabelle aus Aufgabe 3.3
   - Ergänze **nur dann neue oder angepasste User Stories in der Tabelle aus Aufgabe 3.1**, wenn dies fachlich zwingend erforderlich ist, um eine Lücke in den Anforderungen zu schließen

**Darstellung der Ergebnisse:**

- **Aktualisierte Tabelle der funktionalen Anforderungen** (entsprechend Aufgabe 3.3, inkl. neuer oder angepasster Einträge, klar gekennzeichnet)
- **Kurze textliche Erläuterung**, in der du begründest:
  - warum Anforderungen ergänzt oder nicht ergänzt wurden
  - warum ggf. User Stories erweitert oder neu aufgenommen wurden
- Die Begründung soll fachlich-inhaltlich erfolgen (keine rein formalen Argumente).

**Zusatz:**  
Dokumentiere den **Promptverlauf nachvollziehbar**, sodass ersichtlich ist, wie die KI zur Analyse und Entscheidung gelangt ist (z. B. in zusammengefasster Form).

---

Wenn du möchtest, kann ich dir im nächsten Schritt auch:

- 🔹 eine **Kurzversion** für die Abgabe bauen
- 🔹 den Prompt **direkt auf eure konkreten Tabellen (remsfal)** zuschneiden
- 🔹 oder dir gleich eine **Musterlösung für 3.4 (Tabelle + Text)** formulieren, die du nur noch anpassen musst

Nutze jz den folgenden prompt, um die Aufgabe 3.4 zu erarbeiten Rolle: Du agierst als Experte für Requirements Engineering mit Schwerpunkt auf ISO/IEC 29148 Anforderungsschablone nach Rupp Ableitung funktionaler Anforderungen aus User Stories und Systemzielen Qualitätssicherung von Anforderungsspezifikationen Kontext: Es liegt eine erste Anforderungsermittlung für ein Softwaresystem vor. Als Grundlage dienen: Tabelle aus Aufgabe 3.1: Benutzeranforderungen in Form von User Stories (inkl. eindeutiger IDs, Rollen, Nutzenbeschreibung) Tabelle aus Aufgabe 3.3: Abgeleitete funktionale Systemanforderungen (inkl. eindeutiger ID, Anforderung, Grobbeschreibung, Herkunft aus Systemzielen und zugehöriger User Story, formuliert nach der Anforderungsschablone nach Rupp) Aufgabe (Fokus auf 3.4): Analysiere die Liste der funktionalen Anforderungen aus Aufgabe 3.3 mithilfe von KI systematisch und kritisch im Hinblick auf ihre Vollständigkeit und fachliche Angemessenheit. Dabei sind insbesondere folgende Punkte zu prüfen: Abdeckung der User Stories: Ist jede User Story aus Aufgabe 3.1 durch mindestens eine funktionale Anforderung abgedeckt? Gibt es User Stories, für die keine oder nur unzureichende funktionale Anforderungen existieren? Vollständigkeit der funktionalen Anforderungen: Fehlen funktionale Anforderungen, die sich logisch aus den Systemzielen, dem Systemkontext oder den beschriebenen Benutzerinteraktionen ergeben würden? Gibt es implizite Anforderungen (z. B. Steuerungs-, Anzeige-, Prüf- oder Verwaltungsfunktionen), die bisher nicht explizit formuliert wurden? Konsistenz und Traceability: Sind alle funktionalen Anforderungen eindeutig einer User Story bzw. einem Systemziel zuordenbar? Gibt es Redundanzen, Überschneidungen oder unklare Abgrenzungen zwischen Anforderungen? Erweiterung bei Bedarf: Ergänze fehlende oder notwendige funktionale Anforderungen in der Tabelle aus Aufgabe 3.3 Ergänze nur dann neue oder angepasste User Stories in der Tabelle aus Aufgabe 3.1, wenn dies fachlich zwingend erforderlich ist, um eine Lücke in den Anforderungen zu schließen Darstellung der Ergebnisse: Aktualisierte Tabelle der funktionalen Anforderungen (entsprechend Aufgabe 3.3, inkl. neuer oder angepasster Einträge, klar gekennzeichnet) Kurze textliche Erläuterung, in der du begründest: warum Anforderungen ergänzt oder nicht ergänzt wurden warum ggf. User Stories erweitert oder neu aufgenommen wurden Die Begründung soll fachlich-inhaltlich erfolgen (keine rein formalen Argumente).User-Story-ID Stakeholder / Rolle User Story Bezug zu Systemziel Akzeptanzkriterien Immobilienverwaltung/Hausverwaltung US-V-01 Immobilienverwaltung "Als Hausverwaltung möchte ich Schadensmeldungen nach Dringlichkeit farblich markieren können, damit ich kritische Fälle schneller erkenne und priorisieren kann." Z-B-01, Z-B-03 "Dringlichkeitsstufen Farbcode im Dashboard" US-V-02 Immobilienverwaltung "Als Hausverwaltung möchte ich alle relevanten Dokumente (Fotos, Videos, Angebote) zentral pro Vorgang einsehen können, damit ich eine vollständige Entscheidungsgrundlage habe." Z-A-03, Z-B-02 "Zentrale Dokumentenablage Versions- und Zeitstempel" US-V-03 Immobilienverwaltung "Als Hausverwaltung möchte ich vergangene Schäden einer Immobilie einsehen können, damit ich Muster erkenne und bessere Entscheidungen treffen kann." Z-A-03, Z-E-01 "Historische Übersicht Filter nach Objekt / Schadenstyp" US-V-04 Immobilienverwaltung "Als Hausverwaltung möchte ich die relevanten Kontaktdaten zur Auftragserteilung digital einsehen können, damit keine Rückfragen oder Verzögerungen entstehen." Z-B-01, Z-A-02 "Zentrale Kontaktdaten Rollenbezogene Anzeige" Handwerker US-H-01 Handwerker "Als Handwerker möchte ich vollständige Schadensinformationen inklusive Fotos oder Videos erhalten, damit ich den Auftrag fachlich korrekt einschätzen kann." Z-D-01 "Medienanhänge sichtbar Objekt- und Schadensbeschreibung vorhanden" US-H-02 Handwerker "Als Handwerker:in möchte ich meine Arbeitsnachweise digital am Auftrag hinterlegen können, damit die Durchführung transparent dokumentiert ist." Z-D-03, Z-A-03 "Upload von Dokumenten/Fotos Abschlussstatus setzbar" US-H-03 Handwerker "Als Handwerker:in möchte ich Termine automatisch anhand meines Kalenders vorgeschlagen bekommen, damit die Terminplanung effizient erfolgt." Z-D-02, Z-A-02 "Kalenderanbindung Automatische Terminvorschläge" Mieter:innen US-M-01 Mieter:innen "Als Mieter:in möchte ich einen Schaden online mit Fotos oder Videos und allen relevanten Informationen melden können, damit ich den Schaden ohne Telefonate oder Papieraufwand vollständig erfassen kann." Z-C-01, Z-A-02 "Upload von Fotos/Videos möglich Pflichtfelder vorhanden Meldung digital abschickbar" US-M-02 Mieter:innen "Als Mieter:in möchte ich den aktuellen Status meiner Schadensmeldung jederzeit einsehen können, damit ich weiß, ob und wie mein Anliegen bearbeitet wird." Z-C-02, Z-A-01 "Statusanzeige (neu, in Bearbeitung, abgeschlossen) Übersicht „Meine Schadensmeldungen“" US-M-03 Mieter:innen "Als Mieter:in möchte ich automatische Rückmeldungen zum Fortschritt der Schadensbehebung erhalten, damit ich nicht selbst nachfragen muss." Z-A-02, Z-C-03 "Benachrichtigung bei Statuswechsel Zeitbasierte Rückmeldungen (z. B. nach 1 Woche)" US-M-04 Mieter:innen "Als Mieter:in möchte ich online Termine zur Schadensbehebung vereinbaren können, damit die Abstimmung schnell und transparent erfolgt." Z-C-03, Z-A-02 "Online-Terminvereinbarung Anzeige bei Verzögerungen (Delay)" Cluster: Schadensmeldung und Erfassung Anforderungs-ID Anforderung Beschreibung Ziel-ID User Story-ID FA-01 Digitale Schadensmeldung Das System muss Mieter:innen ermöglichen, Schadensmeldungen digital mit Pflichtfeldern sowie Foto- und Videoanhängen zu erfassen und abzusenden. Z-C-01, Z-A-02 US-M-01 FA-02 Validierung von Schadensmeldungen Das System muss sicherstellen, dass Schadensmeldungen nur bei vollständig ausgefüllten Pflichtfeldern abgesendet werden können. Z-B-02, Z-A-03 US-M-01 Cluster: Status und Transparenz Anforderungs-ID Anforderung Beschreibung Ziel-ID User Story-ID FA-03 Statusverwaltung Das System muss für jede Schadensmeldung einen eindeutigen Status (z. B. neu, in Bearbeitung, abgeschlossen) führen und aktualisieren können. Z-A-01 US-M-02 FA-04 Statusübersicht Das System muss allen berechtigten Rollen eine Übersicht über Schadensmeldungen inklusive Status anzeigen. Z-A-01, Z-B-03 US-V-03, US-M-02 Cluster: Priorisierung und Übersicht (Hausverwaltung) Anforderungs-ID Anforderung Beschreibung Ziel-ID User Story-ID FA-05 Dringlichkeitskennzeichnung Das System muss Schadensmeldungen anhand definierter Dringlichkeitsstufen klassifizieren und visuell unterscheiden. Z-B-04 US-V-01 FA-06 Filter- und Suchfunktionen Das System muss der Hausverwaltung ermöglichen, Schadensmeldungen nach Objekt, Status und Schadenstyp zu filtern. Z-A-01, Z-D-01 US-V-03 Cluster: Dokumentation und Nachvollziehbarkeit Anforderungs-ID Anforderung Beschreibung Ziel-ID User Story-ID FA-07 Zentrale Dokumentenablage Das System muss alle zu einer Schadensmeldung gehörenden Dokumente zentral speichern und anzeigen. Z-A-03 US-V-02a, US-H-01 FA-08 Versions- & Zeitstempel Das System muss Versionen und Zeitpunkte von Dokumentenänderungen revisionssicher speichern. Z-A-03 US-V-02b Cluster: Handwerkerprozesse Anforderungs-ID Anforderung Beschreibung Ziel-ID User Story-ID FA-09 Auftragsinformationen Das System muss Handwerker:innen vollständige, strukturierte Auftragsinformationen inklusive Medien bereitstellen. Z-D-01 US-H-01 FA-10 Arbeitsnachweise Das System muss Handwerker:innen ermöglichen, Arbeitsnachweise digital am Auftrag zu hinterlegen. Z-D-03, Z-A-03 US-H-02a FA-11 Statusabschluss Das System darf den Status „durchgeführt“ nur zulassen, wenn mindestens ein Arbeitsnachweis vorliegt. Z-D-03 US-H-02b Cluster: Termine & Kommunikation Anforderungs-ID Anforderung Grobbeschreibung Ziel-ID User Story-ID FA-12 Online-Terminvereinbarung Das System muss eine digitale Terminvereinbarung zwischen Hausverwaltung, Handwerker:innen und Mieter:innen ermöglichen. Z-C-03, Z-A-02 US-M-04, US-H-03, FA-13 Benachrichtigungen Das System muss relevante Statusänderungen automatisch an betroffene Nutzer:innen kommunizieren. Z-A-02, Z-D-04 US-M-03

Sehr gut, die Ausgangsbasis ist klar und fachlich sauber 👍  
Ich arbeite jetzt **konsequent Aufgabe 3.4 ab** – so, wie sie bewertet wird: **Analyse → Ergänzung → Begründung**.  
Ich trenne sauber zwischen **Analyse**, **Ergänzungen (Tabelle)** und **Erläuterungstext**.

---

**Aufgabe 3.4 – Analyse der funktionalen Anforderungen**

**1. Analyse der Vollständigkeit und Abdeckung**

**1.1 Abdeckung der User Stories**

|  |  |  |
| --- | --- | --- |
| **User Story** | **Abgedeckt durch funktionale Anforderungen?** | **Bewertung** |
| US-V-01 (Dringlichkeit) | FA-05 | ✔ vollständig |
| US-V-02 (Dokumente zentral) | FA-07, FA-08 | ✔ vollständig |
| US-V-03 (Historische Schäden) | FA-04, FA-06 | ⚠ **teilweise** |
| US-V-04 (Kontaktdaten Auftragserteilung) | ❌ | ❗ **nicht abgedeckt** |
| US-H-01 (Schadensinfos erhalten) | FA-07, FA-09 | ✔ vollständig |
| US-H-02 (Arbeitsnachweise) | FA-10, FA-11 | ✔ vollständig |
| US-H-03 (Terminvorschläge aus Kalender) | FA-12 | ⚠ **unzureichend konkretisiert** |
| US-M-01 (Schaden melden) | FA-01, FA-02 | ✔ vollständig |
| US-M-02 (Status einsehen) | FA-03, FA-04 | ✔ vollständig |
| US-M-03 (Rückmeldungen) | FA-13 | ✔ vollständig |
| US-M-04 (Online-Termine) | FA-12 | ✔ vollständig |

**Zwischenergebnis:**

- **US-V-04** ist **nicht durch funktionale Anforderungen abgedeckt**
- **US-V-03** (historische Schäden) ist nur indirekt adressiert
- **US-H-03** verlangt implizit eine **Kalenderintegration**, die noch nicht explizit formuliert ist

---

**1.2 Identifikation fehlender bzw. impliziter Anforderungen**

Aus fachlicher Sicht fehlen folgende **funktionale Aspekte**, die sich logisch aus User Stories, Systemzielen und Kontext ergeben:

1. **Historische Schadensübersicht je Objekt**  
   → notwendig für Mustererkennung (US-V-03)
2. **Zentrale Kontaktverwaltung mit Rollenbezug**  
   → zwingend für Auftragserteilung (US-V-04)
3. **Kalenderintegration für Handwerker:innen**  
   → Voraussetzung für automatische Terminvorschläge (US-H-03)

Diese Anforderungen sind **keine Komfortfunktionen**, sondern **funktional notwendig**, um den Nutzen der User Stories tatsächlich zu realisieren.

---

**2. Ergänzte funktionale Anforderungen (aktualisierte Tabelle aus 3.3)**

**🔹 Cluster: Dokumentation & Analyse**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Anforderungs-ID** | **Anforderung** | **Beschreibung** | **Ziel-ID** | **User Story-ID** |
| **FA-14 (neu)** | Historische Schadensübersicht | Das System muss vergangene Schadensmeldungen je Immobilie historisch speichern und strukturiert anzeigen können. | Z-A-03, Z-E-01 | US-V-03 |

---

**🔹 Cluster: Verwaltung & Stammdaten**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Anforderungs-ID** | **Anforderung** | **Beschreibung** | **Ziel-ID** | **User Story-ID** |
| **FA-15 (neu)** | Zentrale Kontaktverwaltung | Das System muss relevante Kontaktdaten (z. B. Handwerker, Eigentümer, Dienstleister) rollenbezogen zentral verwalten und anzeigen. | Z-B-01, Z-A-02 | US-V-04 |

---

**🔹 Cluster: Termine & Kommunikation**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Anforderungs-ID** | **Anforderung** | **Beschreibung** | **Ziel-ID** | **User Story-ID** |
| **FA-16 (neu)** | Kalenderintegration | Das System muss externe Kalender von Handwerker:innen anbinden können, um verfügbare Termine automatisiert zu ermitteln. | Z-D-02, Z-A-02 | US-H-03 |

---

**3. Bewertung: Müssen User Stories ergänzt werden?**

👉 **Nein, es müssen keine neuen User Stories ergänzt werden.**

**Begründung:**

- Alle identifizierten Lücken resultieren aus **unzureichend konkretisierten funktionalen Anforderungen**, nicht aus fehlenden Nutzerbedürfnissen.
- Die bestehenden User Stories sind **inhaltlich vollständig**, aber einige ihrer Anforderungen waren **nur implizit**abgeleitet.
- Eine Erweiterung auf Anforderungsebene ist gemäß **ISO/IEC 29148** fachlich korrekt und ausreichend.

---

**4. Zusammenfassende Erläuterung (für den Textteil der Abgabe)**

Die Analyse der funktionalen Anforderungen zeigte, dass der Großteil der User Stories bereits durch konkrete Systemanforderungen abgedeckt war.  
Allerdings wurden bei der Überprüfung der Vollständigkeit mehrere implizite Anforderungen identifiziert, die sich logisch aus den bestehenden User Stories und Systemzielen ergeben, jedoch bislang nicht explizit formuliert waren.

Insbesondere betraf dies die historische Auswertung von Schadensfällen, die zentrale Verwaltung von Kontaktdaten zur Auftragserteilung sowie die technische Voraussetzung für automatische Terminvorschläge durch eine Kalenderintegration.  
Diese Anforderungen wurden ergänzt, da sie notwendig sind, um den in den User Stories beschriebenen Nutzen tatsächlich zu realisieren.  
Eine Erweiterung der User Stories war nicht erforderlich, da keine zusätzlichen Benutzerbedürfnisse identifiziert wurden.

---

Wenn du willst, formatiere ich dir das **1:1 abgabefertig (Word / PDF / Tabellenlayout)** oder kürze den Text exakt auf das erwartete **Punkte-Niveau (z. B. 9-Punkte-Aufgabe)**.

![Eshmam Dulal](../../../../../../attachment/xwiki/fb4wircm/2026+WiSe+Projekte/Team+remsfal/3%252E4+Analyse+der+Liste+der++funktionalen+Anforderungen+mithilfe+von+KI/WebHome/%252Fbin%252Fskin%252Fresources%252Ficons%252Fxwiki%252Fnoavatar.png%253Fcache-version%253D1756385812000 "Eshmam Dulal")