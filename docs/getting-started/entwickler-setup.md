---
title: Entwickler Setup
description: Schritt-für-Schritt-Anleitung zum lokalen Starten aller REMSFAL Backend-Microservices und des Frontends mit mvn und npm
---

# Entwickler Setup

Diese Anleitung beschreibt, wie du alle drei Backend-Microservices sowie das Frontend lokal mit `mvn`
bzw. `npm` startest — genau wie in den README-Dateien der jeweiligen GitHub-Repositories beschrieben.
Damit erhältst du Live-Reload für Backend und Frontend und kannst direkt am Code arbeiten.

Einen Überblick über die Architektur findest du auf der [Getting Started](/getting-started/) Seite.
Möchtest du das Projekt stattdessen ohne lokale Entwicklungsumgebung ausprobieren, nutze das
[Docker Setup](/getting-started/docker-setup).

## Voraussetzungen

- **Java 17** oder höher
- **Maven 3.8.1** oder höher (alternativ das im Backend-Repository enthaltene `mvnw` Wrapper-Skript)
- **Node.js 18+** und `npm`
- **Docker** oder **Podman**, um PostgreSQL, Cassandra, MinIO und Kafka lokal als Container zu betreiben

## 1. Repositories klonen

```sh
git clone https://github.com/remsfal/remsfal-backend.git
git clone https://github.com/remsfal/remsfal-frontend.git
```

## 2. Infrastruktur starten (PostgreSQL, Cassandra, MinIO, Kafka)

Im `remsfal-backend` Repository liegt ein `docker-compose.yml`, das alle von den Microservices
benötigten Datenbanken sowie Kafka startet:

```sh
cd remsfal-backend
docker compose up -d
```

> **Hinweis:** Die `docker-compose.yml` nutzt die `include:`-Direktive, die nur von neueren Versionen
> von Docker Compose unterstützt wird. Stelle sicher, dass Docker Desktop bzw. die Docker Compose CLI
> aktuell ist.

## 3. Backend-Projekt bauen

Vor dem ersten Start müssen alle Module einmal gebaut werden:

```sh
./mvnw clean install
```

## 4. Alle drei Backend-Microservices im Dev-Modus starten

Jeder Microservice läuft unabhängig und sollte in einem **eigenen Terminal** gestartet werden. Der
Quarkus Dev-Modus kompiliert Änderungen automatisch neu (Live-Reload).

**Terminal 1 — remsfal-platform** (Login, Nutzer, Liegenschaften, Organisationen — Port 8080)

```sh
./mvnw compile quarkus:dev -pl remsfal-services/remsfal-platform
```

**Terminal 2 — remsfal-ticketing** (Mängel, Aufgaben, Chat, Angebote — Port 8081)

```sh
./mvnw compile quarkus:dev -pl remsfal-services/remsfal-ticketing
```

**Terminal 3 — remsfal-notification** (Benachrichtigungen — Port 8082)

```sh
./mvnw compile quarkus:dev -pl remsfal-services/remsfal-notification
```

> **Hinweis:** Die Notification-Microservice versendet im Dev-Modus standardmäßig keine echten
> E-Mails (`%dev.quarkus.mailer.mock=true`). Möchtest du echten Mailversand testen, richte eine
> `.env`-Datei unter `remsfal-services/remsfal-notification/.env` ein — Details dazu findest du im
> [README des Moduls](https://github.com/remsfal/remsfal-backend/blob/main/remsfal-services/remsfal-notification/README.md).

Jeder Microservice bringt eine Quarkus Dev UI mit, erreichbar unter `http://localhost:<port>/q/dev/`.
Google-OAuth-Zugangsdaten für die lokale Entwicklung sind bereits als Standardwerte in der
`application.properties` der `remsfal-platform`-Microservice hinterlegt, sodass der Login-Flow ohne
zusätzliche Konfiguration funktioniert.

## 5. Frontend starten

Öffne ein **viertes Terminal**:

```sh
cd remsfal-frontend
npm ci
npm run dev
```

Das Frontend ist danach unter `http://localhost:5173` erreichbar. Der
integrierte Vite-Dev-Server leitet Anfragen an `/api` an die `remsfal-platform`-Microservice
(Port 8080) und Anfragen an `/ticketing` an die `remsfal-ticketing`-Microservice (Port 8081) weiter
(siehe `vite.config.ts`), sodass du dich nicht um CORS kümmern musst.

## Zusammenfassung

| Terminal | Befehl | Zweck | Port |
|---|---|---|---|
| 1 | `docker compose up -d` (in `remsfal-backend`) | PostgreSQL, Cassandra, MinIO, Kafka | 5432, 9042, 9000/9001, 9092 |
| 2 | `./mvnw compile quarkus:dev -pl remsfal-services/remsfal-platform` | Platform-Microservice | 8080 |
| 3 | `./mvnw compile quarkus:dev -pl remsfal-services/remsfal-ticketing` | Ticketing-Microservice | 8081 |
| 4 | `./mvnw compile quarkus:dev -pl remsfal-services/remsfal-notification` | Notification-Microservice | 8082 |
| 5 | `npm run dev` (in `remsfal-frontend`) | Frontend | 5173 |

Sobald alle fünf Prozesse laufen, kannst du die Anwendung unter `http://localhost:5173` im Browser
öffnen.
