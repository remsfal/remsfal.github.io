---
title: 3.9 Traceability und Konsistenz der Anforderungen (Traceability Matrix)
---

```

```

```

```

|  |  |  |
| --- | --- | --- |
| 1. Definition der Elemente mit eindeutigen IDs |  |  |
|  |  |  |
| 1.1 Systemziele (SZ) |  |  |
| Ziel-ID | Kurzbezeichnung | Beschreibung |
| SZ-01 | Digitale Schadensmeldung | Schäden vollständig digital erfassen |
| SZ-02 | Transparenz & Status | Bearbeitungsstatus jederzeit sichtbar |
| SZ-03 | Kommunikation | Effiziente Kommunikation & Termine |
| SZ-04 | Nachvollziehbarkeit | Dokumentation & Historie sicherstellen |
| SZ-05 | Priorisierung | Dringlichkeiten korrekt abbilden |
| SZ-06 | Effiziente Auftragsabwicklung | Strukturierte Zusammenarbeit mit Handwerk |
| SZ-07 | Übersicht & Analyse | Historische Auswertung & Filter |

```

```

|  |  |  |
| --- | --- | --- |
| 1.2 Use Cases (UC) |  |  |
| UC-ID | Kurzbezeichnung | Beschreibung |
| UC-01 | Schadensmeldung erfassen | Mieter:in meldet Schaden inkl. Anhänge |
| UC-02 | Status ändern | Hausverwaltung aktualisiert Status |
| UC-03 | Status einsehen | Statusübersicht für berechtigte Rollen |
| UC-04 | Dringlichkeit festlegen | Priorisierung von Schäden |
| UC-05 | Filtern & Suchen | Übersicht nach Objekt, Status etc. |
| UC-06 | Dokumente verwalten | Anhänge & Historie einsehen |
| UC-07 | Auftragsinfos einsehen | Handwerker sieht Schadendetails |
| UC-08 | Rückmeldung geben | Arbeitsnachweise & Abschluss |
| UC-09 | Termine vereinbaren | Terminabstimmung |
| UC-10 | Kontaktdaten verwalten | Zentrale Kontaktpflege |

```

```

|  |  |
| --- | --- |
| 1.3 Funktionale Anforderungen (Cluster) |  |
| FA-ID | Kurzbezeichnung |
| FA-SE-01 | "Digitale Schadensmeldung und Erfassung" |
| FA-ST-02 | Status und Transparenz |
| FA-PÜ-03 | "Priorisierung und Übersicht " |
| FA-DN-05 | "Dokumentation und Nachvollziehbarkeit" |
| FA-HP-06 | Handwerkerrozesse |
| FA-TK-07 | "Termine und Kommunikation" |

```

```

|  |  |  |
| --- | --- | --- |
| 1.4 Nicht-funktionale Anforderungen (NFA) |  |  |
| NFA-ID | Kategorie | Kurzbeschreibung |
| NFA-01 | Usability | Intuitiv & verständlich |
| NFA-02 | Reliability | Hohe Verfügbarkeit |
| NFA-03 | Security | DSGVO & Rollenrechte |
| NFA-04 | Performance | Schnelle Reaktion |
| NFA-05 | Wartbarkeit | Modular & erweiterbar |
| NFA-06 | Erweiterbarkeit | Anpassbar |
| NFA-07 | Interoperabilität | Externe Systeme |

```

```

|  |  |  |  |
| --- | --- | --- | --- |
| 1.5 User Stories |  |  |  |
| User-Story-ID | Rolle | Kurzbezeichnung | Beschreibung |
| US-M-01 | Mieter:in | Schaden melden | "Mieter:innen können Schäden digital mit allen relevanten Informationen und Medien erfassen und absenden." |
| US-M-02 | Mieter:in | Status einsehen | "Mieter:innen können den aktuellen Bearbeitungsstatus ihrer Schadensmeldung einsehen." |
| US-M-03 | Mieter:in | Benachrichtigungen erhalten | "Mieter:innen werden bei relevanten Statusänderungen automatisch informiert." |
| US-M-04 | Mieter:in | Termine vereinbaren | "Mieter:innen können Termine zur Schadensbehebung online vereinbaren." |
| US-V-01 | Hausverwaltung | Dringlichkeit erkennen | "Die Hausverwaltung kann Schadensmeldungen anhand von Dringlichkeitsstufen priorisieren." |
| US-V-02a | Hausverwaltung | Dokumente einsehen | "Die Hausverwaltung kann alle zu einem Schaden gehörenden Dokumente zentral einsehen." |
| US-V-02b | Hausverwaltung | Versionen nachvollziehen | "Die Hausverwaltung kann Dokumentversionen und Zeitpunkte revisionssicher nachvollziehen." |
| US-V-03 | Hausverwaltung | Historie & Filter | "Die Hausverwaltung kann vergangene Schadensmeldungen strukturiert einsehen und filtern." |
| US-V-04 | Hausverwaltung | Kontaktdaten einsehen | "Die Hausverwaltung kann rollenabhängige Kontaktdaten zu Schadensfällen einsehen." |
| US-H-01 | Handwerker:in | Auftragsinformationen einsehen | "Handwerker:innen können vollständige Schadensinformationen inklusive Medien einsehen." |
| US-H-02a | Handwerker:in | Arbeitsnachweise erfassen | "Handwerker:innen können Arbeitsnachweise digital zu einem Auftrag hinterlegen." |
| US-H-02b | Handwerker:in | Auftrag abschließen | "Handwerker:innen können Aufträge nach Abschluss als „durchgeführt“ kennzeichnen." |
| US-H-03 | Handwerker:in | Terminvorschläge erhalten | "Handwerker:innen erhalten Terminvorschläge auf Basis ihrer Verfügbarkeiten." |

```

```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 2. Traceability-Matrix (Kernmatrix) |  |  |  |  |
| User Story | Systemziel(e) | Use Case(s) | Funktionale Anforderung (Cluster) | Nicht-funktionale Anforderungen |
| US-M-01 Schaden melden | SZ-01, SZ-03 | UC-01 | FA-SE-01, FA-DN-05 | NFA-01, NFA-02 |
| US-M-02 Status einsehen | SZ-02 | UC-03 | FA-ST-02 | NFA-01, NFA-04 |
| US-M-03 Benachrichtigungen | SZ-02, SZ-03 | UC-02, UC-09 | FA-TK-07 | NFA-02, NFA-04 |
| US-M-04 Termine vereinbaren | SZ-03 | UC-09 | FA-TK-07 | NFA-01, NFA-07 |
| US-V-01 Dringlichkeit priorisieren | SZ-05, SZ-02 | UC-04 | FA-PÜ-03 | NFA-01 |
| US-V-02a Dokumente einsehen | SZ-04, SZ-01 | UC-06 | FA-DN-05 | NFA-02, NFA-03 |
| US-V-02b Versionen nachvollziehen | SZ-04 | UC-06 | FA-DN-05 | NFA-02, NFA-05 |
| US-V-03 Historie & Filter | SZ-07, SZ-04 | UC-05 | FA-PÜ-03, FA-ST-02 | NFA-05 |
| US-V-04 Kontaktdaten einsehen | SZ-03, SZ-06 | UC-10 | FA-HP-06, FA-TK-07 | NFA-03 |
| US-H-01 Auftragsinfos einsehen | SZ-06, SZ-01 | UC-07 | FA-HP-06, FA-DN-05 | NFA-02 |
| US-H-02a Arbeitsnachweise | SZ-04, SZ-06 | UC-08 | FA-HP-06, FA-DN-05 | NFA-02 |
| US-H-02b Auftrag abschließen | SZ-04, SZ-06 | UC-08 | FA-HP-06, FA-ST-02 | NFA-02 |
| US-H-03 Terminvorschläge | SZ-03, SZ-06 | UC-09 | FA-TK-07, FA-HP-06 | NFA-07 |