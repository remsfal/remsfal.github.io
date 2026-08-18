---
title: Docker Setup
description: Das komplette REMSFAL-Projekt inklusive Datenbanken, Kafka und Frontend per Docker Compose starten
---

# Docker Setup

Mit dem folgenden Docker Compose Setup startest du das **komplette REMSFAL-Projekt** — alle drei
Backend-Microservices, deren Datenbanken (PostgreSQL, Cassandra, MinIO), Apache Kafka sowie das
Frontend — ganz ohne lokale Entwicklungsumgebung. Es werden ausschließlich fertige Container-Images
aus der [GitHub Container Registry](https://github.com/orgs/remsfal/packages) verwendet, ein lokaler
Build ist nicht nötig.

Möchtest du stattdessen aktiv am Code mitentwickeln, nutze das
[Entwickler Setup](/getting-started/entwickler-setup) mit `mvn` und `npm`.

## Voraussetzungen

- **Docker** oder **Podman** mit Docker Compose (Version mit Unterstützung für das `condition:`
  Attribut bei `depends_on`, in aktuellen Docker-Desktop-Versionen standardmäßig enthalten)
- Mindestens **4 GB** freier Arbeitsspeicher für die Container (insbesondere Cassandra)

## 1. Dateien herunterladen

Lade dir die beiden folgenden Dateien in ein gemeinsames, leeres Verzeichnis herunter:

<div class="docker-download-links">

- [📄 docker-compose.yml](/getting-started/docker-compose.yml)
- [📄 nginx.conf](/getting-started/nginx.conf)

</div>

Alternativ per Kommandozeile:

```sh
mkdir remsfal-docker && cd remsfal-docker
curl -O https://remsfal.de/getting-started/docker-compose.yml
curl -O https://remsfal.de/getting-started/nginx.conf
```

## 2. Stack starten

```sh
docker compose up -d
```

Beim ersten Start werden folgende Images aus der GitHub Container Registry (`ghcr.io/remsfal/*`)
heruntergeladen:

- `ghcr.io/remsfal/remsfal-platform:latest`
- `ghcr.io/remsfal/remsfal-ticketing:latest`
- `ghcr.io/remsfal/remsfal-notification:latest`
- `ghcr.io/remsfal/remsfal-frontend:latest`

Alle Images sind öffentlich, ein Login bei der Registry ist nicht erforderlich.

## 3. Anwendung öffnen

Nach dem Start (die erste Initialisierung von Cassandra und den Datenbank-Migrationen kann etwas
Zeit in Anspruch nehmen) ist die Anwendung unter folgender Adresse erreichbar:

`http://localhost:8090`

Den Fortschritt kannst du mit folgendem Befehl beobachten:

```sh
docker compose logs -f
```

## Was wird gestartet?

| Service | Beschreibung | Port (Host) |
|---|---|---|
| `reverse-proxy` | Bündelt Frontend und Backend unter einem gemeinsamen Origin | **8090** |
| `remsfal-frontend` | Vue 3 SPA | — (nur intern) |
| `remsfal-platform` | Login, Nutzer, Liegenschaften, Organisationen | 8080 |
| `remsfal-ticketing` | Mängel, Aufgaben, Chat, Angebote | 8081 |
| `remsfal-notification` | Benachrichtigungen | 8082 |
| `postgres` | Datenbank der Platform-Microservice | 5432 |
| `cassandra` | Datenbank der Ticketing-Microservice | 9042 |
| `minio` | Dokumentenablage der Ticketing-Microservice | 9000/9001 |
| `kafka-broker` | Event-Bus zwischen den Microservices | 9092 |

> **Warum ein Reverse Proxy?** Das Frontend-Image enthält nur die statische Single-Page-Application
> und ruft die Backend-Microservices über relative Pfade auf (`/api`, `/ticketing`, `/notification`).
> Der mitgelieferte `nginx.conf` bündelt Frontend und Backend deshalb unter `http://localhost:8090` —
> genau wie es der Vite-Dev-Server auch während der lokalen Frontend-Entwicklung tut.

## Stack stoppen

```sh
docker compose down
```

Um zusätzlich alle Datenbank-Volumes zu löschen (setzt den Zustand komplett zurück):

```sh
docker compose down -v
```

## Hinweise

- Der Notification-Microservice ist standardmäßig auf `QUARKUS_MAILER_MOCK=true` konfiguriert —
  E-Mails werden geloggt statt tatsächlich versendet. Für echten Mailversand passe die
  `QUARKUS_MAILER_*` Umgebungsvariablen in der `docker-compose.yml` an.
- Die Google-OAuth-Konfiguration in der `remsfal-platform`-Microservice ist auf Entwicklungs-Zugangsdaten
  voreingestellt und **nicht für den produktiven Betrieb geeignet**. Details zur Konfiguration für den
  produktiven Einsatz findest du im
  [README der remsfal-platform Microservice](https://github.com/remsfal/remsfal-backend/blob/main/remsfal-services/remsfal-platform/README.md).
- Alle Images werden bei jedem Merge nach `main` automatisch aktualisiert (Tag `latest`). Führe
  `docker compose pull && docker compose up -d` aus, um auf den neuesten Stand zu aktualisieren.
