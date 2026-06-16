---
title: Cluster: Status und Transparenz
---

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Cluster: Status und Transparenz** | | | | |
| **Anforderungs-ID** | **Anforderung** | **Beschreibung** | **Ziel-ID** | **User Story-ID** |
| FA-ST-01 | Statusdefinition & Statusmodell | Das System muss für jede Schadensmeldung genau einen aktuellen Status speichern. | SZ-02 | US-M-02 |
| FA-ST-02 | Statusdefinition & Statusmodell | Das System muss eine vordefinierte Statusliste „neu“ bereitstellen. | SZ-02 | US-M-02 |
| FA-ST-03 | Statusdefinition & Statusmodell | Das System muss eine vordefinierte Statusliste "in Bearbeitung“ bereitstellen. | SZ-02 | US-M-02 |
| FA-ST-04 | Statusdefinition & Statusmodell | Das System muss eine vordefinierte Statusliste „abgeschlossen“ bereitstellen. | SZ-02 | US-M-02 |
| FA-ST-05 | Statusdefinition & Statusmodell | Das System muss beim Erstellen einer neuen Schadensmeldung automatisch den Status „neu“ vergeben. | SZ-02, SZ-01 | US-M-02 |
| FA-ST-06 | Statusdefinition & Statusmodell | Das System muss bei einer Schadensmeldung die sich in Bearbeitung befindet automatisch den Status „in Bearbeitung“ vergeben. | SZ-02 | US-M-02 |
| FA-ST-07 | Statusdefinition & Statusmodell | Das System muss bei einer abgeschlossenen Schadensmeldung automatisch den Status "abgeschlossen" vergeben. | SZ-02 | US-M-02 |
| FA-ST-08 | Statusänderung & Berechtigungen | Das System muss berechtigten Nutzer:innen erlauben, den Status einer Schadensmeldung zu ändern. | SZ-02 | US-M-02 |
| FA-ST-09 | Statusänderung & Berechtigungen | Das System muss beim Statuswechsel die Änderung speichern und der entsprechenden Schadensmeldung zuordnen. | SZ-04 | US-M-02 |
| FA-ST-10 | Statusänderung & Berechtigungen | Das System muss sicherstellen, dass nur Statuswerte aus der vordefinierten Statusliste gesetzt werden können | SZ-02 | US-M-02 |
| FA-ST-11 | Statusänderung & Berechtigungen | Das System muss den aktuellen Status einer Schadensmeldung in der Detailansicht anzeigen. | SZ-02 | US-M-02 |
| FA-ST-12 | Statusänderung & Berechtigungen | Das System muss den aktuellen Status einer Schadensmeldung in Übersichten/Listen anzeigen. | SZ-02 | US-M-02, US-V-03 |
| FA-ST-13 | Statusänderung & Berechtigungen | Das System muss den Zeitpunkt der letzten Statusänderung speichern. | SZ-04 | US-M-02 |
| FA-ST-14 | Statusänderung & Berechtigungen | Das System muss den/die Bearbeiter:in speichern, der/die den Status zuletzt geändert hat. | SZ-04 | US-M-02 |
| FA-ST-15 | Nachvollziehbarkeit | Das System muss eine Übersichtsliste aller Schadensmeldungen bereitstellen. | SZ-07, SZ-02 | US-V-03 |
| FA-ST-16 | Nachvollziehbarkeit | Das System muss in der Übersicht zu jeder Schadensmeldung den aktuellen Status anzeigen. | SZ-02 | US-V-03 |
| FA-ST-17 | Nachvollziehbarkeit | Das System muss in der Übersicht eine eindeutige Identifikation der Schadensmeldung anzeigen (z. B. Vorgangsnummer/ID). | SZ-01 | US-V-03 |
| FA-ST-18 | Nachvollziehbarkeit | Das System muss berechtigten Rollen den Zugriff auf die Übersicht ermöglichen. | SZ-02 | US-V-03 |
| FA-ST-19 | Nachvollziehbarkeit | Das System muss sicherstellen, dass unberechtigte Rollen keinen Zugriff auf die Übersicht erhalten. | SZ-02 | US-V-03 |
| FA-ST-20 | Nachvollziehbarkeit | Das System muss ermöglichen, eine Schadensmeldung aus der Übersicht auszuwählen und die Detailansicht zu öffnen. | SZ-01 | US-V-03 |
| FA-ST-21 | Nachvollziehbarkeit | Das System muss die Übersicht nach Status filterbar machen „neu“. | SZ-02, SZ-07 | US-V-03 |
| FA-ST-22 | Nachvollziehbarkeit | Das System muss die Übersicht nach Status filterbar machen „in Bearbeitung“. | SZ-02, SZ-07 | US-V-03 |
| FA-ST-23 | Nachvollziehbarkeit | Das System muss die Übersicht nach Status filterbar machen „abgeschlossen“. | SZ-02, SZ-07 | US-V-03 |
| FA-ST-24 | Nachvollziehbarkeit | Das System muss die Übersicht nach relevanten Kriterien sortierbar machen (z. B. Datum der Meldung). | SZ-07 | US-V-03 |