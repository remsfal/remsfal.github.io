---
title: 4.2.1 Übersicht der Testfälle
---

```

```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Cluster: digitale Schadensmeldung und Erfassung** | | | | |
| **Testfall-ID** | **Anforderungs-ID** | **Testart** | **Testfallbeschreibung / Szenario** | **Erwartetes Ergebnis** |
| TC-SE-01 | FA-SE-01 | Funktional (Positiv) | Ein:e Mieter:in öffnet das System und startet die Erstellung einer neuen Schadensmeldung. | Das System zeigt ein Formular zur Erstellung einer neuen Schadensmeldung an. |
| TC-SE-02 | FA-SE-02 | Funktional (Positiv) | Ein:e Mieter:in gibt eine textuelle Schadensbeschreibung in das dafür vorgesehene Feld ein. | Das System übernimmt und speichert die eingegebene Schadensbeschreibung im Formular. |
| TC-SE-03 | FA-SE-03 | Funktional (Positiv) | Ein:e Mieter:in wählt im Formular einen Schadenstyp aus der Liste aus. | Der ausgewählte Schadenstyp wird im Formular übernommen und angezeigt. |
| TC-SE-04 | FA-SE-04 | Funktional (Positiv) | Ein:e Mieter:in erfasst den Schadensort im dafür vorgesehenen Feld. | Das System übernimmt den eingegebenen Schadensort im Formular. |
| TC-SE-05 | FA-SE-05 | Funktional (Positiv) | Ein:e Mieter:in wählt/erfasst ein Schadensdatum im Formular. | Das System übernimmt das Schadensdatum im Formular. |
| TC-SE-06 | FA-SE-06 | Funktional (Positiv) | Ein:e Mieter:in wählt eine Bilddatei aus und lädt sie als Fotoanhang zur Schadensmeldung hoch. | Das System lädt den Fotoanhang hoch und zeigt ihn der Schadensmeldung zugeordnet an. |
| TC-SE-07 | FA-SE-07 | Funktional (Positiv) | Ein:e Mieter:in lädt mindestens zwei Fotoanhänge zur selben Schadensmeldung hoch. | Das System akzeptiert mehrere Fotos und zeigt alle hochgeladenen Fotoanhänge zur Schadensmeldung an. |
| TC-SE-08 | FA-SE-08 | Funktional (Positiv) | Ein:e Mieter:in wählt eine Videodatei aus und lädt sie als Videoanhang zur Schadensmeldung hoch. | Das System lädt den Videoanhang hoch und zeigt ihn der Schadensmeldung zugeordnet an. |
| TC-SE-09 | FA-SE-09 | Funktional (Positiv) | Ein:e Mieter:in lädt mindestens zwei Videoanhänge zur selben Schadensmeldung hoch. | Das System akzeptiert mehrere Videos und zeigt alle hochgeladenen Videoanhänge zur Schadensmeldung an. |
| TC-SE-10 | FA-SE-10 | Funktional (Positiv) | Ein:e Mieter:in lädt einen Fotoanhang hoch und öffnet anschließend die Schadensmeldung (z. B. Vorschau/Detail). | Der Fotoanhang ist in der Schadensmeldung sichtbar und korrekt dieser Schadensmeldung zugeordnet. |
| TC-SE-11 | FA-SE-11 | Funktional (Positiv) | Ein:e Mieter:in lädt einen Videoanhang hoch und öffnet anschließend die Schadensmeldung (z. B. Vorschau/Detail). | Der Videoanhang ist in der Schadensmeldung sichtbar und korrekt dieser Schadensmeldung zugeordnet. |
| TC-SE-12 | FA-SE-12 | Funktional (Positiv) | Ein:e Mieter:in füllt alle Pflichtfelder der Schadensmeldung aus und klickt auf „Absenden“. | Das System sendet die Schadensmeldung erfolgreich ab. |
| TC-SE-13 | FA-SE-13 | Funktional (Positiv) | Ein:e Mieter:in füllt alle Pflichtfelder aus, fügt keine Anhänge hinzu und klickt auf „Absenden“. | Das System erlaubt das Absenden ohne Anhänge (sofern fachlich erlaubt) und sendet die Meldung ab. |
| TC-SE-14 | FA-SE-14 | Funktional (Positiv) | Eine Schadensmeldung wird erfolgreich abgesendet; anschließend wird die Übersicht oder Detailansicht geöffnet. | Die abgesendete Schadensmeldung ist im System gespeichert und in der Übersicht/Detailansicht auffindbar. |
| TC-SE-15 | FA-SE-15 | Funktional (Positiv) | Nach dem Absenden einer Schadensmeldung wird die Meldung in Übersicht/Detailansicht betrachtet. | Die Schadensmeldung besitzt eine eindeutige Kennung (z. B. Vorgangsnummer/ID), die angezeigt wird. |
| TC-SE-16 | FA-SE-16 | Funktional (Positiv) | Ein:e Mieter:in sendet eine vollständig ausgefüllte Schadensmeldung ab. | Das System zeigt eine Bestätigung an, dass der Versand erfolgreich war. |
| TC-SE-17 | FA-SE-17 | Funktional (Negativ) | Ein:e Mieter:in lässt mindestens ein Pflichtfeld leer und klickt auf „Absenden“. | Das System verhindert das Absenden der Schadensmeldung. |
| TC-SE-18 | FA-SE-18 | Funktional (Negativ) | Ein:e Mieter:in versucht eine Schadensmeldung abzusenden, bei der Pflichtfelder fehlen oder unvollständig sind. | Das System lässt das Absenden nur bei vollständig ausgefüllten Pflichtfeldern zu; ansonsten wird der Versand blockiert. |
| TC-SE-19 | FA-SE-19 | Funktional (Positiv) | Ein:e Mieter:in öffnet das Schadensmeldeformular und prüft die als Pflichtfeld definierten Eingabefelder. | Das System hat Pflichtfelder definiert und diese sind im Formular vorhanden. |
| TC-SE-20 | FA-SE-20 | Funktional (Positiv) | Ein:e Mieter:in öffnet das Schadensmeldeformular und betrachtet die Eingabefelder. | Pflichtfelder sind visuell als Pflichtfelder gekennzeichnet. |
| TC-SE-21 | FA-SE-21 | Funktional (Negativ) | Ein:e Mieter:in versucht eine Schadensmeldung ohne ausgefüllte Pflichtfelder abzusenden. | Das System verhindert den Versand einer Schadensmeldung ohne ausgefüllte Pflichtfelder. |
| TC-SE-22 | FA-SE-22 | Funktional (Negativ) | Ein:e Mieter:in klickt auf „Absenden“, obwohl mindestens ein Pflichtfeld nicht ausgefüllt ist. | Das System prüft vor dem Absenden die Pflichtfelder und blockiert den Versand. |
| TC-SE-23 | FA-SE-23 | Funktional (Negativ) | Ein:e Mieter:in klickt auf „Absenden“ mit fehlenden Pflichtfeldern. | Das System weist auf fehlende/ unvollständige Pflichtfelder hin (z. B. Hinweistext/Fehlermeldung). |
| TC-SE-24 | FA-SE-24 | Funktional (Positiv) | Ein:e Mieter:in füllt das Formular aus und beobachtet die Darstellung der Eingabefelder. | Das System kennzeichnet Pflichtfelder beim Ausfüllen als solche (durchgängig sichtbar/erkennbar). |

```

```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Cluster: Status und Transparenz** | | | | |
| **Testfall-ID** | **Anforderungs-ID** | **Testart** | **Testfallbeschreibung / Szenario** | **Erwartetes Ergebnis** |
| TC-ST-01 | FA-ST-01 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in öffnet die Detailansicht einer bestehenden Schadensmeldung, um den aktuellen Bearbeitungsstatus einzusehen. | Das System zeigt in der Detailansicht genau einen aktuellen Status für die Schadensmeldung an. |
| TC-ST-02 | FA-ST-02 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in öffnet die Statusauswahlliste beim Bearbeiten einer Schadensmeldung. | Das System stellt eine vordefinierte Statusliste bereit, die den Status „neu“ enthält. |
| TC-ST-03 | FA-ST-03 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in öffnet die Statusauswahlliste beim Bearbeiten einer Schadensmeldung. | Das System stellt eine vordefinierte Statusliste bereit, die den Status „in Bearbeitung“ enthält. |
| TC-ST-04 | FA-ST-04 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in öffnet die Statusauswahlliste beim Bearbeiten einer Schadensmeldung. | Das System stellt eine vordefinierte Statusliste bereit, die den Status „abgeschlossen“ enthält. |
| TC-ST-05 | FA-ST-05 | Funktional (Positiv) | Ein:e Mieter:in erstellt eine neue Schadensmeldung und speichert bzw. sendet diese ab. | Das System vergibt der neu erstellten Schadensmeldung automatisch den Status „neu“. |
| TC-ST-06 | FA-ST-06 | Funktional (Positiv) | Eine Schadensmeldung wird von der Hausverwaltung in Bearbeitung genommen. | Das System setzt den Status der Schadensmeldung automatisch auf „in Bearbeitung“. |
| TC-ST-07 | FA-ST-07 | Funktional (Positiv) | Eine Schadensmeldung wird vollständig bearbeitet und abgeschlossen. | Das System setzt den Status der Schadensmeldung automatisch auf „abgeschlossen“. |
| TC-ST-08 | FA-ST-08 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in ändert den Status einer Schadensmeldung manuell. | Das System erlaubt die Statusänderung und übernimmt den neu gesetzten Status. |
| TC-ST-09 | FA-ST-09 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in ändert den Status einer Schadensmeldung und öffnet diese anschließend erneut. | Das System speichert die Statusänderung dauerhaft und ordnet sie der entsprechenden Schadensmeldung zu. |
| TC-ST-10 | FA-ST-10 | Funktional (Positiv) | Ein:e Nutzer:in versucht, einen Statuswert zu setzen, der nicht in der vordefinierten Statusliste enthalten ist. | Das System verhindert das Setzen eines ungültigen Statuswertes. |
| TC-ST-11 | FA-ST-11 | Funktional (Positiv) | Ein:e Nutzer:in öffnet die Detailansicht einer Schadensmeldung. | Das System zeigt den aktuellen Status der Schadensmeldung in der Detailansicht an. |
| TC-ST-12 | FA-ST-12 | Funktional (Positiv) | Ein:e Nutzer:in öffnet die Übersichtsansicht aller Schadensmeldungen. | Das System zeigt zu jeder Schadensmeldung den aktuellen Status in der Übersicht an. |
| TC-ST-13 | FA-ST-13 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in ändert den Status einer Schadensmeldung. | Das System speichert den Zeitpunkt der letzten Statusänderung. |
| TC-ST-14 | FA-ST-14 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in ändert den Status einer Schadensmeldung. | Das System speichert, welche Nutzerrolle bzw. welcher Nutzer den Status zuletzt geändert hat. |
| TC-ST-15 | FA-ST-15 | Funktional (Positiv) | Ein:e Nutzer:in öffnet die Übersichtsansicht der Schadensmeldungen. | Das System stellt eine Übersichtsliste aller Schadensmeldungen bereit. |
| TC-ST-16 | FA-ST-16 | Funktional (Positiv) | Ein:e Nutzer:in betrachtet eine Schadensmeldung in der Übersichtsansicht. | Das System zeigt den aktuellen Status der Schadensmeldung in der Übersicht an. |
| TC-ST-17 | FA-ST-17 | Funktional (Positiv) | Ein:e Nutzer:in betrachtet eine Schadensmeldung in der Übersichtsansicht. | Das System zeigt eine eindeutige Identifikation der Schadensmeldung (z. B. Vorgangsnummer) an. |
| TC-ST-18 | FA-ST-18 | Funktional (Positiv) | Eine berechtigte Nutzerrolle öffnet die Übersichtsansicht der Schadensmeldungen. | Das System erlaubt der berechtigten Rolle den Zugriff auf die Übersicht. |
| TC-ST-19 | FA-ST-19 | Funktional (Positiv) | Eine unberechtigte Nutzerrolle versucht, die Übersichtsansicht der Schadensmeldungen zu öffnen. | Das System verweigert den Zugriff auf die Übersicht. |
| TC-ST-20 | FA-ST-20 | Funktional (Positiv) | Ein:e Nutzer:in wählt in der Übersichtsansicht eine Schadensmeldung aus. | Das System öffnet die Detailansicht der ausgewählten Schadensmeldung. |
| TC-ST-21 | FA-ST-21 | Funktional (Positiv) | Ein:e Nutzer:in setzt in der Übersicht einen Filter auf den Status „neu“. | Das System zeigt ausschließlich Schadensmeldungen mit dem Status „neu“ an. |
| TC-ST-22 | FA-ST-22 | Funktional (Positiv) | Ein:e Nutzer:in setzt in der Übersicht einen Filter auf den Status „in Bearbeitung“. | Das System zeigt ausschließlich Schadensmeldungen mit dem Status „in Bearbeitung“ an. |
| TC-ST-23 | FA-ST-23 | Funktional (Positiv) | Ein:e Nutzer:in setzt in der Übersicht einen Filter auf den Status „abgeschlossen“. | Das System zeigt ausschließlich Schadensmeldungen mit dem Status „abgeschlossen“ an. |
| TC-ST-24 | FA-ST-24 | Funktional (Positiv) | Ein:e Nutzer:in wählt in der Übersicht eine Sortierung nach einem relevanten Kriterium, z. B. dem Meldedatum. | Das System sortiert die Schadensmeldungen entsprechend dem gewählten Kriterium. |

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Cluster: Priorisierung und Übersicht (Hausverwaltung)** | | | | |
| **Testfälle-ID** | **Anforderungs-ID** | **Testart** | **Testfallbeschreibung / Szenario** | **Erwartetes Ergebnis** |
| TC-PÜ-01 | FA-PÜ-01 | Definition & Grundlage | Eine berechtigte Nutzerrolle (Hausverwaltung) öffnet den Bereich zur Dringlichkeitsverwaltung oder die Auswahl der Dringlichkeitsstufen. | Das System stellt eine vordefinierte Dringlichkeitsstufe „niedrig“ zur Auswahl bereit. |
| TC-PÜ-02 | FA-PÜ-02 | Definition & Grundlage | Eine berechtigte Nutzerrolle (Hausverwaltung) öffnet den Bereich zur Dringlichkeitsverwaltung oder die Auswahl der Dringlichkeitsstufen. | Das System stellt eine vordefinierte Dringlichkeitsstufe „mittel“ zur Auswahl bereit. |
| TC-PÜ-03 | FA-PÜ-03 | Definition & Grundlage | Eine berechtigte Nutzerrolle (Hausverwaltung) öffnet den Bereich zur Dringlichkeitsverwaltung oder die Auswahl der Dringlichkeitsstufen. | Das System stellt eine vordefinierte Dringlichkeitsstufe „hoch“ zur Auswahl bereit. |
| TC-PÜ-04 | FA-PÜ-04 | Definition & Grundlage | Eine bestehende Schadensmeldung wird in der Detailansicht geöffnet, um ihre Priorisierung zu prüfen. | Das System stellt sicher, dass der Schadensmeldung genau eine Dringlichkeitsstufe zugeordnet ist und diese angezeigt wird. |
| TC-PÜ-05 | FA-PÜ-05 | Definition & Grundlage | Eine Hausverwaltung erstellt eine neue Schadensmeldung und öffnet die Auswahl für die Dringlichkeitsstufe. | Das System ermöglicht die Auswahl einer Dringlichkeitsstufe bei der Erstellung einer Schadensmeldung. |
| TC-PÜ-06 | FA-PÜ-06 | Erfassung & Zuweisung | Eine Nutzer:in versucht, eine Dringlichkeitsstufe zu setzen, die nicht in der vordefinierten Liste enthalten ist. | Das System verhindert das Setzen einer Dringlichkeitsstufe außerhalb der vordefinierten Liste. |
| TC-PÜ-07 | FA-PÜ-07 | Erfassung & Zuweisung | Eine Schadensmeldung wird ohne explizite Auswahl einer Dringlichkeitsstufe erstellt und gespeichert. | Das System vergibt automatisch eine Standard-Dringlichkeitsstufe, sofern keine Auswahl getroffen wurde. |
| TC-PÜ-08 | FA-PÜ-08 | Änderung und Pflege | Eine berechtigte Nutzerrolle (Hausverwaltung) öffnet eine bestehende Schadensmeldung und ändert die Dringlichkeitsstufe. | Das System erlaubt berechtigten Nutzer:innen, die Dringlichkeitsstufe einer Schadensmeldung zu ändern. |
| TC-PÜ-09 | FA-PÜ-09 | Änderung und Pflege | Eine berechtigte Nutzerrolle (Hausverwaltung) ändert die Dringlichkeitsstufe einer Schadensmeldung und öffnet die Meldung anschließend erneut. | Das System speichert die Änderung der Dringlichkeitsstufe dauerhaft und ordnet sie der jeweiligen Schadensmeldung zu. |
| TC-PÜ-10 | FA-PÜ-10 | Visuelle Darstellung | Eine Nutzer:in betrachtet Schadensmeldungen in der Übersicht und in der Detailansicht, um die Dringlichkeitsanzeige zu prüfen. | Das System unterscheidet die Dringlichkeitsstufen visuell, sodass Unterschiede eindeutig erkennbar sind. |
| TC-PÜ-11 | FA-PÜ-11 | Visuelle Darstellung | Eine Nutzer:in betrachtet zwei Schadensmeldungen mit unterschiedlichen Dringlichkeitsstufen in der Übersicht. | Das System verwendet unterschiedliche visuelle Darstellungsmerkmale (z. B. Farben oder Symbole), um die Dringlichkeitsstufen zu unterscheiden. |
| TC-PÜ-12 | FA-PÜ-12 | Visuelle Darstellung | Eine Nutzer:in öffnet eine Schadensmeldung in der Übersicht und anschließend in der Detailansicht. | Das System zeigt die Dringlichkeitsstufe sowohl in Übersichten als auch in der Detailansicht an. |
| TC-PÜ-13 | FA-PÜ-13 | Konsistenz & Validierung | Eine Schadensmeldung ohne zugewiesene Dringlichkeitsstufe wird gespeichert oder angezeigt, z. B. durch fehlerhafte Eingabe oder Import. | Das System stellt sicher, dass eine Schadensmeldung ohne zugewiesene Dringlichkeitsstufe nicht gespeichert oder angezeigt wird. |
| TC-PÜ-14 | FA-PÜ-14 | Konsistenz & Validierung | Eine Nutzer:in vergleicht die Dringlichkeitsdarstellung derselben Schadensmeldung in verschiedenen Systemansichten (z. B. Liste und Detail). | Das System stellt die Dringlichkeitsstufe in allen Ansichten konsistent nach denselben visuellen Regeln dar. |
| TC-PÜ-15 | FA-PÜ-15 | Konsistenz & Validierung | Eine Nutzer:in wählt in der Übersicht eine Sortierung nach Dringlichkeitsstufe aus. | Das System ermöglicht die Sortierung der Übersicht anhand der Dringlichkeitsstufe. |
| TC-PÜ-16 | FA-PÜ-16 | Konsistenz & Validierung | Eine Nutzer:in setzt in der Übersicht einen Filter auf eine bestimmte Dringlichkeitsstufe. | Das System bietet die Dringlichkeitsstufe als Filterkriterium an und zeigt entsprechend gefilterte Schadensmeldungen an. |
| TC-PÜ-17 | FA-PÜ-17 | Zugriff & Zielgruppe | Eine Nutzerrolle „Hausverwaltung“ öffnet die Übersicht der Schadensmeldungen und versucht, Filter- und Suchfunktionen zu verwenden. | Das System ermöglicht der Rolle „Hausverwaltung“ den Zugriff auf Filter- und Suchfunktionen. |
| TC-PÜ-18 | FA-PÜ-18 | Zugriff & Zielgruppe | Eine unberechtigte Nutzerrolle versucht, Filter- und Suchfunktionen in der Übersicht zu verwenden. | Das System stellt sicher, dass nur berechtigte Rollen Filter- und Suchfunktionen nutzen können. |
| TC-PÜ-19 | FA-PÜ-19 | Filterung und Suche | Eine Hausverwaltung öffnet die Übersicht der Schadensmeldungen als Ausgangspunkt für Filter- und Suchfunktionen. | Das System stellt eine Übersicht aller Schadensmeldungen als Basis für Filter- und Suchfunktionen bereit. |
| TC-PÜ-20 | FA-PÜ-20 | Filterung und Suche | Eine Hausverwaltung setzt in der Übersicht einen Filter auf ein bestimmtes Objekt. | Das System ermöglicht, Schadensmeldungen nach zugehörigem Objekt zu filtern. |
| TC-PÜ-21 | FA-PÜ-21 | Filterung und Suche | Eine Hausverwaltung öffnet die Objekt-Filterliste in der Übersicht der Schadensmeldungen. | Das System zeigt nur Objekte an, die der Hausverwaltung zugeordnet sind. |
| TC-PÜ-22 | FA-PÜ-22 | Filterung und Suche | Eine Hausverwaltung setzt in der Übersicht einen Filter auf einen bestimmten Status. | Das System ermöglicht, Schadensmeldungen nach ihrem aktuellen Status zu filtern. |
| TC-PÜ-23 | FA-PÜ-23 | Filterung und Suche | Eine Hausverwaltung öffnet die Status-Filterliste in der Übersicht der Schadensmeldungen. | Das System stellt sicher, dass nur gültige Statuswerte als Filterkriterien auswählbar sind. |
| TC-PÜ-24 | FA-PÜ-24 | Filterung und Suche | Eine Hausverwaltung setzt in der Übersicht einen Filter auf einen bestimmten Schadenstyp. | Das System ermöglicht, Schadensmeldungen nach Schadenstyp zu filtern. |
| TC-PÜ-25 | FA-PÜ-25 | Filterung und Suche | Eine Hausverwaltung öffnet die Schadenstyp-Filterliste in der Übersicht. | Das System bietet nur Schadenstypen aus einer vordefinierten Schadenstyp-Liste zur Filterung an. |
| TC-PÜ-26 | FA-PÜ-26 | Filterung und Suche | Eine Hausverwaltung setzt gleichzeitig Filter nach Objekt, Status und Schadenstyp in der Übersicht. | Das System ermöglicht, mehrere Filterkriterien gleichzeitig anzuwenden. |
| TC-PÜ-27 | FA-PÜ-27 | Filterung und Suche | Eine Hausverwaltung setzt Filterkriterien in der Übersicht und betrachtet anschließend die Ergebnisliste. | Das System zeigt die gefilterten Schadensmeldungen entsprechend der gewählten Kriterien an. |
| TC-PÜ-28 | FA-PÜ-28 | Filterung und Suche | Eine Hausverwaltung setzt mehrere Filter und klickt anschließend auf „Filter zurücksetzen“. | Das System ermöglicht, gesetzte Filter zurückzusetzen. |
| TC-PÜ-29 | FA-PÜ-29 | Filterung und Suche | Eine Hausverwaltung setzt Filter, setzt diese zurück und betrachtet danach die Übersichtsliste. | Das System zeigt nach dem Zurücksetzen wieder alle Schadensmeldungen an. |
| TC-PÜ-30 | FA-PÜ-30 | Filterung und Suche | Eine Hausverwaltung verwendet das Suchfeld und gibt einen Suchbegriff ein, um Schadensmeldungen zu finden. | Das System stellt eine Suchfunktion zur textbasierten Suche innerhalb von Schadensmeldungen bereit. |
| TC-PÜ-31 | FA-PÜ-31 | Filterung und Suche | Eine Hausverwaltung gibt einen Suchbegriff ein oder ändert Filterkriterien und beobachtet die Ergebnisliste. | Das System zeigt Such- und Filterergebnisse in Echtzeit oder nach expliziter Bestätigung an. |
| TC-PÜ-32 | FA-PÜ-32 | Filterung und Suche | Eine Hausverwaltung nutzt Filter- und Suchfunktionen und prüft die Darstellung der gesetzten Kriterien in der Benutzeroberfläche. | Das System stellt sicher, dass Filter- und Suchkriterien konsistent in der Benutzeroberfläche dargestellt werden. |

```

```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Cluster: Dokumentation und Nachvollziehbarkeit** | | | | |
| **Testfall-ID** | **Anforderungs-ID** | **Testart** | **Testfallbeschreibung / Szenario** | **Erwartetes Ergebnis** |
| TC-DN-01 | FA-DN-01 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in öffnet eine Schadensmeldung und klickt auf „Anhang hinzufügen“ und wählt eine Datei aus. | Das System übernimmt die Dateiauswahl (Datei ist als „ausgewählt“ sichtbar, Upload noch nicht gestartet). |
| TC-DN-02 | FA-DN-02 | Funktional (Positiv) | Ein:e Nutzer:in wählt eine Datei aus und startet den Upload über „Hochladen“. | Das System startet den Uploadprozess und zeigt einen Upload-Fortschritt/Status an. |
| TC-DN-03 | FA-DN-03 | Funktional (Positiv) | Während ein Datei-Upload läuft, klickt der/die Nutzer:in auf „Abbrechen“. | Das System bricht den Upload ab und markiert den Anhang nicht als hochgeladen (kein Anhang in der Liste). |
| TC-DN-04 | FA-DN-04 | Funktional (Positiv) | Ein:e Nutzer:in lädt eine Datei erfolgreich hoch. | Das System bestätigt den erfolgreichen Upload (z. B. Meldung/Status „hochgeladen“) und zeigt den Anhang in der Anhangsliste. |
| TC-DN-05 | FA-DN-05 | Funktional (Negativ) | Ein:e Nutzer:in versucht eine Datei hochzuladen, der Upload schlägt fehl (z. B. Server/Netzwerkfehler). | Das System zeigt eine Fehlermeldung zum Upload an und speichert den Anhang nicht als erfolgreich hochgeladen. |
| TC-DN-06 | FA-DN-06 | Funktional (Positiv) | Ein:e Nutzer:in erstellt/öffnet eine Schadensmeldung und fügt mindestens einen Anhang hinzu, bevor gespeichert/abgeschlossen wird. | Das System erlaubt das Speichern/Weiterführen der Schadensmeldung mit mindestens einem Anhang; der Anhang ist der Meldung zugeordnet. |
| TC-DN-07 | FA-DN-07 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in ändert ein zentrales Feld der Schadensmeldung (z. B. Beschreibung). | Das System speichert für die Änderung Zeitpunkt und ausführende Rolle/Nutzer:in. |
| TC-DN-08 | FA-DN-08 | Funktional (Positiv) | Ein:e Nutzer:in öffnet die Detailansicht einer Schadensmeldung und ruft die Änderungsübersicht auf. | Das System zeigt eine Änderungsübersicht zur Schadensmeldung an (mindestens Einträge vorhanden, wenn Änderungen erfolgt sind). |
| TC-DN-09 | FA-DN-09 | Funktional (Negativ) | Ein:e Nutzer:in versucht eine Schadensmeldung in einen Zustand zu bringen, der „mindestens ein Anhang“ erfordert (z. B. Abschluss/Weiterleitung), ohne Anhang hochzuladen. | Das System verhindert den Vorgang ohne Anhang und fordert zur Ergänzung mindestens eines Anhangs auf. |
| TC-DN-10 | FA-DN-10 | Funktional (Positiv) | Ein:e Nutzer:in lädt zwei oder mehr Dateien als Anhänge zur gleichen Schadensmeldung hoch. | Das System akzeptiert mehrere Anhänge und zeigt alle Anhänge der Schadensmeldung an. |
| TC-DN-11 | FA-DN-11 | Funktional (Positiv) | Ein:e Nutzer:in lädt einen Anhang zu Schadensmeldung A hoch und öffnet danach Schadensmeldung B. | Der Anhang ist ausschließlich bei Schadensmeldung A sichtbar/zugeordnet; bei B erscheint er nicht. |
| TC-DN-12 | FA-DN-12 | Funktional (Negativ) | Ein:e Nutzer:in versucht einen Anhang hochzuladen, ohne eine Schadensmeldung ausgewählt/erstellt zu haben (kein Kontext). | Das System verhindert die Speicherung ohne Bezug und zeigt eine entsprechende Meldung an. |
| TC-DN-13 | FA-DN-13 | Funktional (Positiv) | Zu einer Schadensmeldung existieren mehrere Anhänge; Nutzer:in öffnet die Schadensmeldung. | Das System zeigt alle zur Schadensmeldung gehörenden Anhänge in einer Übersicht/Liste an. |
| TC-DN-14 | FA-DN-14 | Funktional (Positiv) | Ein:e Nutzer:in öffnet die Anhangsliste einer Schadensmeldung. | Zu jedem Anhang wird der Dateiname angezeigt. |
| TC-DN-15 | FA-DN-15 | Funktional (Positiv) | Ein:e Nutzer:in öffnet die Anhangsliste einer Schadensmeldung. | Zu jedem Anhang wird der Upload-Zeitpunkt angezeigt. |
| TC-DN-16 | FA-DN-16 | Funktional (Positiv) | Ein:e Nutzer:in klickt in der Anhangsliste auf „Download“ bei einem Anhang. | Das System startet den Download des ausgewählten Anhangs. |
| TC-DN-17 | FA-DN-17 | Funktional (Positiv/Negativ) | Ein:e Nutzer:in mit Rolle „Handwerker:in“ öffnet eine Schadensmeldung; danach versucht ein:e Nutzer:in ohne Berechtigung auf Anhänge zuzugreifen. | Berechtigte Rolle kann Anhänge sehen; unberechtigte Rolle kann Anhänge nicht öffnen (Zugriff verweigert/Anhänge nicht sichtbar). |
| TC-DN-18 | FA-DN-18 | Funktional (Positiv) | Ein:e Nutzer:in ändert die textuelle Schadensbeschreibung und speichert. | Das System legt einen Historieneintrag für die Beschreibung an. |
| TC-DN-19 | FA-DN-19 | Funktional (Positiv) | Ein:e Nutzer:in ändert den Schadenstyp einer Schadensmeldung und speichert. | Das System protokolliert die Änderung des Schadenstyps in der Historie. |
| TC-DN-20 | FA-DN-20 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in ändert den Status einer Schadensmeldung (z. B. „neu“ → „in Bearbeitung“). | Das System protokolliert die Statusänderung in der Historie. |
| TC-DN-21 | FA-DN-21 | Funktional (Positiv) | Ein:e Nutzer:in ändert die Dringlichkeitsstufe einer Schadensmeldung und speichert. | Das System protokolliert die Änderung der Dringlichkeit in der Historie. |
| TC-DN-22 | FA-DN-22 | Funktional (Positiv) | Eine Änderung an einer Schadensmeldung wird durchgeführt und gespeichert. | Das System speichert den Änderungszeitpunkt im Historieneintrag. |
| TC-DN-23 | FA-DN-23 | Funktional (Positiv) | Ein Feld (z. B. Status) wird geändert und gespeichert. | Das System speichert den alten Wert im Historieneintrag. |
| TC-DN-24 | FA-DN-24 | Funktional (Positiv) | Ein Feld (z. B. Status) wird geändert und gespeichert. | Das System speichert den neuen Wert im Historieneintrag. |
| TC-DN-25 | FA-DN-25 | Funktional (Positiv) | Ein:e Nutzer:in mit definierter Rolle (z. B. Hausverwaltung) führt eine Änderung durch. | Das System speichert die ausführende Nutzerrolle im Historieneintrag. |
| TC-DN-26 | FA-DN-26 | Funktional (Positiv) | Ein:e Nutzer:in (konkreter Account) führt eine Änderung durch. | Das System speichert den ausführenden Nutzer (z. B. Nutzername/ID) im Historieneintrag. |
| TC-DN-27 | FA-DN-27 | Funktional (Positiv) | Ein:e Nutzer:in öffnet die Historie/Änderungsübersicht einer Schadensmeldung. | Das System stellt eine Änderungsübersicht pro Schadensmeldung bereit (Liste der Einträge). |
| TC-DN-28 | FA-DN-28 | Funktional (Positiv) | Eine Schadensmeldung hat mehrere Historieneinträge; Nutzer:in öffnet die Historie. | Das System zeigt die Historie chronologisch sortiert an (z. B. neueste zuerst/älteste zuerst – konsistent). |
| TC-DN-29 | FA-DN-29 | Funktional (Positiv) | Nutzer:in öffnet einen Historieneintrag in der Änderungsübersicht. | Das System zeigt an, welches Feld geändert wurde (z. B. „Status“, „Dringlichkeit“). |
| TC-DN-30 | FA-DN-30 | Funktional (Positiv) | Nutzer:in öffnet einen Historieneintrag zu einer Feldänderung. | Das System zeigt alten und neuen Wert der Änderung an. |
| TC-DN-31 | FA-DN-31 | Funktional (Positiv) | Nutzer:in betrachtet einen Historieneintrag in der Änderungsübersicht. | Das System zeigt den Zeitpunkt der Änderung an. |
| TC-DN-32 | FA-DN-32 | Funktional (Negativ) | Ein:e Nutzer:in versucht, einen bestehenden Historieneintrag nachträglich zu bearbeiten. | Das System verhindert die Änderung eines Historieneintrags (keine Editiermöglichkeit/Fehlermeldung). |
| TC-DN-33 | FA-DN-33 | Funktional (Negativ) | Ein:e Nutzer:in versucht, einen bestehenden Historieneintrag zu löschen. | Das System verhindert das Löschen eines Historieneintrags (keine Löschoption/Fehlermeldung). |

```

```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Cluster: Handwerkerprozesse** | | | | |
| **Testfälle-ID** | **Anforderungs-ID** | **Testart** | **Testfallbeschreibung / Szenario** | **Erwartetes Ergebnis** |
| TC-HP-01 | FA-HP-01 | Funktional (Positiv) | Eine Mitarbeiter:in der Hausverwaltung öffnet das System und wählt eine bestehende Schadensmeldung aus. | Das System ermöglicht die Auswahl einer Schadensmeldung durch die Hausverwaltung. |
| TC-HP-02 | FA-HP-02 | Funktional (Positiv) | Eine Mitarbeiter:in der Hausverwaltung öffnet die Übersicht der Handwerker. | Das System ermöglicht die Auswahl eines Handwerkers aus der Liste. |
| TC-HP-03 | FA-HP-03 | Funktional (Positiv) | Die Hausverwaltung weist einer ausgewählten Schadensmeldung einen Handwerker zu. | Das System ordnet die Schadensmeldung dem ausgewählten Handwerker korrekt zu. |
| TC-HP-04 | FA-HP-04 | Funktional (Positiv) | Die Hausverwaltung weist einer Schadensmeldung einen Handwerker zu. | Das System bestätigt die erfolgreiche Zuweisung der Schadensmeldung. |
| TC-HP-05 | FA-HP-05 | Funktional (Negativ) | Die Hausverwaltung versucht, eine Schadensmeldung ohne ausgewählten Handwerker zuzuweisen. | Das System verhindert die Zuweisung einer Schadensmeldung ohne ausgewählten Handwerker. |
| TC-HP-06 | FA-HP-06 | Funktional (Positiv) | Ein:e Handwerker:in meldet sich im System an und öffnet die Übersicht seiner Aufträge. | Das System zeigt dem Handwerker ausschließlich ihm zugewiesene Aufträge an. |
| TC-HP-07 | FA-HP-07 | Funktional (Positiv) | Ein:e Handwerker:in meldet sich im System an und öffnet die Auftragsübersicht. | Das System stellt sicher, dass der Handwerker nur seine eigenen Aufträge sehen kann. |
| TC-HP-08 | FA-HP-08 | Funktional (Positiv) | Ein:e Handwerker:in öffnet einen ihm zugewiesenen Auftrag. | Das System zeigt eine eindeutige Auftragsidentifikation an. |
| TC-HP-09 | FA-HP-09 | Funktional (Positiv) | Ein:e Handwerker:in öffnet die Detailansicht eines Auftrags. | Das System zeigt die textuelle Schadensbeschreibung des Auftrags an. |
| TC-HP-10 | FA-HP-10 | Funktional (Positiv) | Ein:e Handwerker:in öffnet die Detailansicht eines Auftrags. | Das System zeigt den Schadensort des Auftrags an. |
| TC-HP-11 | FA-HP-11 | Funktional (Positiv) | Ein:e Handwerker:in öffnet die Detailansicht eines Auftrags. | Das System zeigt den aktuellen Status des Auftrags an. |
| TC-HP-12 | FA-HP-12 | Funktional (Positiv) | Ein:e Handwerker:in öffnet die Detailansicht eines Auftrags. | Das System zeigt die Dringlichkeitsstufe des Auftrags an. |
| TC-HP-13 | FA-HP-13 | Funktional (Positiv) | Ein:e Handwerker:in öffnet einen Auftrag mit verknüpften Terminen. | Das System zeigt die vorhandenen Terminangaben zum Auftrag an. |
| TC-HP-14 | FA-HP-14 | Funktional (Positiv) | Ein:e Handwerker:in öffnet die Detailansicht eines Auftrags. | Das System zeigt die zugehörigen Kontaktinformationen an. |
| TC-HP-15 | FA-HP-15 | Funktional (Positiv) | Ein:e Handwerker:in öffnet einen Auftrag mit Anhängen. | Das System zeigt an, ob dem Auftrag Anhänge zugeordnet sind. |
| TC-HP-16 | FA-HP-16 | Funktional (Positiv) | Ein:e Handwerker:in öffnet einen Auftrag mit Anhängen. | Das System ermöglicht dem Handwerker den Zugriff auf auftragsbezogene Anhänge. |
| TC-HP-17 | FA-HP-17 | Funktional (Negativ) | Ein:e Handwerker:in versucht, Anhänge eines fremden Auftrags zu öffnen. | Das System verhindert den Zugriff auf Anhänge fremder Aufträge. |
| TC-HP-18 | FA-HP-18 | Funktional (Positiv) | Ein:e Handwerker:in startet einen neuen Arbeitsnachweis für einen Auftrag. | Das System ermöglicht das Starten eines neuen Arbeitsnachweises. |
| TC-HP-19 | FA-HP-19 | Funktional (Positiv) | Ein:e Handwerker:in erfasst eine textuelle Beschreibung im Arbeitsnachweis. | Das System speichert die textuelle Beschreibung des Arbeitsnachweises. |
| TC-HP-20 | FA-HP-20 | Funktional (Positiv) | Ein:e Handwerker:in fügt einem Arbeitsnachweis einen Anhang hinzu. | Das System ermöglicht das Hinzufügen eines Anhangs zum Arbeitsnachweis. |
| TC-HP-21 | FA-HP-21 | Funktional (Positiv) | Ein:e Handwerker:in schließt die Erfassung eines Arbeitsnachweises ab. | Das System bestätigt den erfolgreichen Abschluss des Arbeitsnachweises. |
| TC-HP-22 | FA-HP-22 | Funktional (Positiv) | Ein:e Handwerker:in öffnet einen Auftrag mit bestehenden Arbeitsnachweisen. | Das System zeigt mindestens einen Arbeitsnachweis pro Auftrag an. |
| TC-HP-23 | FA-HP-23 | Funktional (Positiv) | Ein:e Handwerker:in erfasst mehrere Arbeitsnachweise für denselben Auftrag. | Das System ermöglicht das Anlegen mehrerer Arbeitsnachweise pro Auftrag. |
| TC-HP-24 | FA-HP-24 | Funktional (Positiv) | Ein:e Handwerker:in öffnet einen Arbeitsnachweis. | Das System zeigt eine eindeutige Zuordnung des Arbeitsnachweises zum Auftrag an. |
| TC-HP-25 | FA-HP-25 | Funktional (Positiv) | Ein:e Handwerker:in erstellt einen Arbeitsnachweis. | Das System speichert den Zeitpunkt der Erstellung des Arbeitsnachweises. |
| TC-HP-26 | FA-HP-26 | Funktional (Positiv) | Ein:e Handwerker:in erstellt einen Arbeitsnachweis. | Das System speichert die Nutzerrolle, die den Arbeitsnachweis erstellt hat. |
| TC-HP-27 | FA-HP-27 | Funktional (Positiv) | Ein:e Handwerker:in öffnet die Detailansicht eines Auftrags. | Das System zeigt alle zum Auftrag gehörenden Arbeitsnachweise an. |
| TC-HP-28 | FA-HP-28 | Funktional (Positiv) | Ein:e Handwerker:in öffnet die Übersicht der Arbeitsnachweise. | Das System zeigt die Erstellungszeitpunkte der Arbeitsnachweise an. |
| TC-HP-29 | FA-HP-29 | Funktional (Positiv) | Ein:e Handwerker:in öffnet einen Arbeitsnachweis. | Das System zeigt die textuelle Beschreibung des Arbeitsnachweises an. |
| TC-HP-30 | FA-HP-30 | Funktional (Positiv) | Ein:e Handwerker:in öffnet einen Arbeitsnachweis. | Das System zeigt die Anhänge des Arbeitsnachweises an. |
| TC-HP-31 | FA-HP-31 | Funktional (Positiv) | Ein:e Handwerker:in versucht, einen Auftrag als durchgeführt zu markieren, ohne dass ein Arbeitsnachweis existiert. | Das System verhindert den Statuswechsel auf „durchgeführt“, solange kein Arbeitsnachweis vorhanden ist. |
| TC-HP-32 | FA-HP-32 | Funktional (Negativ) | Ein:e Handwerker:in versucht, einen Auftrag ohne Arbeitsnachweis auf „durchgeführt“ zu setzen. | Das System verhindert das Setzen des Status „durchgeführt“. |
| TC-HP-33 | FA-HP-33 | Funktional (Negativ) | Ein:e Handwerker:in versucht, einen Auftrag als durchgeführt zu markieren, obwohl ein Arbeitsnachweis unvollständig ist. | Das System verhindert den Statuswechsel und zeigt einen verständlichen Hinweis an. |
| TC-HP-34 | FA-HP-34 | Funktional (Positiv) | Ein:e Handwerker:in markiert einen Auftrag mit vollständigem Arbeitsnachweis als durchgeführt. | Das System erlaubt den Statuswechsel auf „durchgeführt“. |
| TC-HP-35 | FA-HP-35 | Funktional (Positiv) | Ein:e Handwerker:in schließt einen Auftrag erfolgreich ab. | Das System bestätigt den erfolgreichen Abschluss des Auftrags. |
| TC-HP-36 | FA-HP-36 | Funktional (Positiv) | Ein:e Handwerker:in schließt einen Auftrag ab. | Das System speichert den Zeitpunkt des Statusabschlusses. |
| TC-HP-37 | FA-HP-37 | Funktional (Positiv) | Ein:e Handwerker:in setzt den Status eines Auftrags erfolgreich auf „durchgeführt“ und beendet den Vorgang. | Das System speichert den Zeitpunkt des Statusabschlusses für den Auftrag. |

```

```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Cluster: Termine & Kommunikation** | | | | |
| **Testfall-ID** | **Anforderungs-ID** | **Testart** | **Testfallbeschreibung / Szenario** | **Erwartetes Ergebnis** |
| TC-TK-01 | FA-TK-01 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in öffnet das System und wählt eine Schadensmeldung aus, für die ein Termin vorgeschlagen werden soll. | Das System ermöglicht die Auswahl einer Schadensmeldung und öffnet die Termin-Vorschlagsfunktion für diese Meldung. |
| TC-TK-02 | FA-TK-02 | Funktional (Positiv) | Ein:e Nutzer:in erstellt einen Terminvorschlag und erfasst ein Termindatum. | Das System übernimmt das eingegebene Datum im Terminvorschlag. |
| TC-TK-03 | FA-TK-03 | Funktional (Positiv) | Ein:e Nutzer:in erstellt einen Terminvorschlag und erfasst eine Uhrzeit. | Das System übernimmt die eingegebene Uhrzeit im Terminvorschlag. |
| TC-TK-04 | FA-TK-04 | Funktional (Positiv) | Ein:e berechtigte:r Nutzer:in erstellt zu einer Schadensmeldung einen Terminvorschlag (Datum + Uhrzeit) und speichert ihn. | Das System erstellt den Terminvorschlag und ordnet ihn der Schadensmeldung zu. |
| TC-TK-05 | FA-TK-05 | Funktional (Positiv) | Ein:e Nutzer:in speichert einen neuen Terminvorschlag zu einer Schadensmeldung. | Das System bestätigt den erfolgreichen Terminvorschlag (z. B. Hinweis „Terminvorschlag erstellt“). |
| TC-TK-06 | FA-TK-06 | Funktional (Positiv) | Ein Terminvorschlag wird erstellt; anschließend wird eine andere Schadensmeldung geöffnet. | Der Terminvorschlag ist nur bei der ursprünglichen Schadensmeldung sichtbar (eindeutige Zuordnung). |
| TC-TK-07 | FA-TK-07 | Funktional (Positiv) | Ein:e Mieter:in öffnet die eigene Schadensmeldung, zu der Terminvorschläge existieren. | Das System zeigt der/dem Mieter:in die bestehenden Terminvorschläge zur eigenen Schadensmeldung an. |
| TC-TK-08 | FA-TK-08 | Funktional (Positiv) | Ein:e Nutzer:in mit Rolle Hausverwaltung oder Handwerker:in öffnet eine Schadensmeldung mit bestehenden Terminvorschlägen. | Das System zeigt Hausverwaltung/Handwerker:in die bestehenden Terminvorschläge an. |
| TC-TK-09 | FA-TK-09 | Funktional (Positiv) | Zu einer Schadensmeldung existiert ein Terminvorschlag; Nutzer:in öffnet die Terminvorschlagsliste. | Das System zeigt den Status des Terminvorschlags als „offen“, „angenommen“ oder „abgelehnt“ an. |
| TC-TK-10 | FA-TK-10 | Funktional (Positiv) | Ein:e Mieter:in öffnet einen offenen Terminvorschlag und klickt auf „Annehmen“. | Das System speichert die Annahme und setzt den Status entsprechend (z. B. „angenommen“). |
| TC-TK-11 | FA-TK-11 | Funktional (Positiv) | Ein:e Mieter:in öffnet einen offenen Terminvorschlag und klickt auf „Ablehnen“. | Das System speichert die Ablehnung und setzt den Status entsprechend (z. B. „abgelehnt“). |
| TC-TK-12 | FA-TK-12 | Funktional (Positiv) | Ein:e Mieter:in nimmt einen Terminvorschlag an oder lehnt ihn ab. | Das System speichert die Entscheidung (Annahme/Ablehnung) zum Terminvorschlag dauerhaft. |
| TC-TK-13 | FA-TK-13 | Funktional (Positiv) | Ein:e Mieter:in speichert eine Annahme/Ablehnung eines Terminvorschlags. | Das System bestätigt, dass die Entscheidung erfolgreich gespeichert wurde. |
| TC-TK-14 | FA-TK-14 | Funktional (Positiv) | Ein:e Mieter:in lehnt einen Terminvorschlag ab; anschließend erstellt die Hausverwaltung/Handwerker:in einen neuen Vorschlag. | Das System ermöglicht nach Ablehnung die Erstellung eines neuen Terminvorschlags zur gleichen Schadensmeldung. |
| TC-TK-15 | FA-TK-15 | Funktional (Positiv) | Zu einer Schadensmeldung werden nacheinander mehrere Terminvorschläge erfasst. | Das System erlaubt mehrere Terminvorschläge und zeigt alle Vorschläge zur Schadensmeldung an. |
| TC-TK-16 | FA-TK-16 | Funktional (Negativ) | Zwei Terminvorschläge existieren; ein zweiter Vorschlag soll zusätzlich als „bestätigt“ markiert werden. | Das System verhindert, dass mehrere Termine gleichzeitig als bestätigt markiert werden (nur ein bestätigter Termin möglich). |
| TC-TK-17 | FA-TK-17 | Funktional (Positiv) | Ein:e Mieter:in nimmt einen Terminvorschlag an. | Das System kennzeichnet den angenommenen Terminvorschlag als bestätigten Termin. |
| TC-TK-18 | FA-TK-18 | Funktional (Positiv) | Ein Terminvorschlag wird angenommen; später wird die Schadensmeldung erneut geöffnet. | Der bestätigte Termin ist dauerhaft gespeichert und weiterhin zur Schadensmeldung vorhanden. |
| TC-TK-19 | FA-TK-19 | Funktional (Positiv) | Ein bestätigter Termin existiert; Nutzer:in öffnet die Detailansicht der Schadensmeldung. | Das System zeigt den bestätigten Termin in der Schadensmeldung an. |
| TC-TK-20 | FA-TK-20 | Funktional (Positiv) | Ein:e Nutzer:in erstellt einen Terminvorschlag zu einer Schadensmeldung. | Das System protokolliert die Erstellung in der Terminhistorie. |
| TC-TK-21 | FA-TK-21 | Funktional (Positiv) | Ein:e Mieter:in nimmt einen Terminvorschlag an. | Das System protokolliert die Annahme in der Terminhistorie. |
| TC-TK-22 | FA-TK-22 | Funktional (Positiv) | Ein:e Mieter:in lehnt einen Terminvorschlag ab. | Das System protokolliert die Ablehnung in der Terminhistorie. |
| TC-TK-23 | FA-TK-23 | Funktional (Positiv) | Ein bestätigter Termin wird geändert (z. B. neuer Zeitpunkt) und gespeichert. | Das System protokolliert die Terminänderung in der Terminhistorie. |
| TC-TK-24 | FA-TK-24 | Funktional (Positiv) | Eine Terminaktion (Erstellung/Annahme/Ablehnung/Änderung) wird durchgeführt. | Das System speichert zu der Terminaktion den Zeitpunkt. |
| TC-TK-25 | FA-TK-25 | Funktional (Positiv) | Eine Terminaktion wird durch eine Rolle (z. B. Mieter:in) durchgeführt. | Das System speichert die ausführende Nutzerrolle zur Terminaktion. |
| TC-TK-26 | FA-TK-26 | Funktional (Positiv) | Eine Terminaktion wird durch einen konkreten Nutzeraccount ausgeführt. | Das System speichert den ausführenden Nutzer (z. B. Nutzername/ID). |
| TC-TK-27 | FA-TK-27 | Funktional (Positiv) | Eine Terminaktion wird durchgeführt (z. B. „Annahme“). | Das System speichert, welche Terminaktion durchgeführt wurde (Aktionsart). |
| TC-TK-28 | FA-TK-28 | Funktional (Positiv) | Ein:e Nutzer:in öffnet die Terminhistorie einer Schadensmeldung. | Das System zeigt eine Terminhistorie pro Schadensmeldung an. |
| TC-TK-29 | FA-TK-29 | Funktional (Positiv) | Eine Schadensmeldung hat mehrere Historieneinträge; Nutzer:in öffnet die Terminhistorie. | Das System zeigt die Termineinträge chronologisch sortiert an. |
| TC-TK-30 | FA-TK-30 | Funktional (Positiv) | Nutzer:in öffnet einen Historieneintrag in der Terminhistorie. | Das System zeigt an, welcher Termin (Datum/Uhrzeit) von diesem Historieneintrag betroffen war. |
| TC-TK-31 | FA-TK-31 | Funktional (Positiv) | Der Status einer Schadensmeldung wird geändert (z. B. „neu“ → „in Bearbeitung“). | Das System erkennt die Statusänderung als Ereignis. |
| TC-TK-32 | FA-TK-32 | Funktional (Positiv) | Eine Statusänderung wurde erkannt; das System verarbeitet das Ereignis. | Das System löst eine Benachrichtigung zur Statusänderung aus. |
| TC-TK-33 | FA-TK-33 | Funktional (Positiv) | Eine Statusänderung erfolgt und betrifft Mieter:in, Hausverwaltung und Handwerker:in. | Das System adressiert die Benachrichtigung an alle betroffenen Rollen. |
| TC-TK-34 | FA-TK-34 | Funktional (Positiv) | Ein neuer Terminvorschlag wird zu einer Schadensmeldung erstellt. | Das System löst eine Benachrichtigung zur Erstellung des Terminvorschlags aus. |
| TC-TK-35 | FA-TK-35 | Funktional (Positiv) | Ein:e Mieter:in nimmt einen Terminvorschlag an. | Das System löst eine Benachrichtigung zur Annahme des Terminvorschlags aus. |
| TC-TK-36 | FA-TK-36 | Funktional (Positiv) | Ein:e Mieter:in lehnt einen Terminvorschlag ab. | Das System löst eine Benachrichtigung zur Ablehnung des Terminvorschlags aus. |
| TC-TK-37 | FA-TK-37 | Funktional (Positiv) | Ein bestätigter Termin wird geändert und gespeichert. | Das System löst eine Benachrichtigung zur Terminänderung aus. |
| TC-TK-38 | FA-TK-38 | Funktional (Positiv) | Es existiert mindestens eine Benachrichtigung; Nutzer:in öffnet die systeminterne Inbox. | Das System zeigt Benachrichtigungen in einer Inbox im System an. |
| TC-TK-39 | FA-TK-39 | Funktional (Positiv) | Eine Benachrichtigung wird durch ein Ereignis ausgelöst (z. B. Statusänderung). | Das System ordnet die Benachrichtigung eindeutig dem auslösenden Ereignis zu. |
| TC-TK-40 | FA-TK-40 | Funktional (Positiv) | Nutzer:in öffnet eine Benachrichtigung in der Inbox. | Das System zeigt den Zeitpunkt der Benachrichtigung an. |
| TC-TK-41 | FA-TK-41 | Funktional (Positiv) | Nutzer:in öffnet eine Benachrichtigung in der Inbox. | Das System zeigt an, auf welches Ereignis (z. B. Statusänderung/Terminaktion) sich die Benachrichtigung bezieht. |

![Eshmam Dulal](../../../../../../../attachment/xwiki/fb4wircm/2026+WiSe+Projekte/Team+remsfal/4%252E2+Testf%25C3%25A4lle/4%252E2%252E1+%25C3%259Cbersicht+der+Testf%25C3%25A4lle/WebHome/%252Fbin%252Fskin%252Fresources%252Ficons%252Fxwiki%252Fnoavatar.png%253Fcache-version%253D1756385812000 "Eshmam Dulal")