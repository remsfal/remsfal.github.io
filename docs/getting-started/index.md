---
title: Getting Started
description: Überblick über die REMSFAL Microservice-Architektur und die beteiligten Repositories
---

# Getting Started

REMSFAL ist eine Open-Source Facility-Management-Software, die aus einem **Frontend** und mehreren
unabhängigen **Backend-Microservices** besteht. Diese Seite gibt dir einen Überblick über die
Architektur, bevor du das Projekt lokal einrichtest.

Für die eigentliche Einrichtung stehen dir zwei Wege zur Verfügung:

- **[Entwickler Setup](/getting-started/entwickler-setup)** — Backend und Frontend werden direkt mit
  `mvn` und `npm` gestartet. Empfohlen, wenn du aktiv am Code mitentwickeln möchtest.
- **[Docker Setup](/getting-started/docker-setup)** — Das komplette Projekt wird per `docker compose`
  aus fertigen Container-Images gestartet. Empfohlen, wenn du REMSFAL nur ausprobieren oder als
  Ganzes lokal betreiben möchtest.

## Architekturüberblick

```
┌──────────────────────┐
│  remsfal-frontend    │  Vue 3 SPA (Vite, TypeScript, PrimeVue, Tailwind CSS)
└──────────┬───────────┘
           │ HTTP (REST, JWT via Cookie)
           ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                         remsfal-backend                                  │
│                                                                          │
│  ┌────────────────────┐  ┌────────────────────┐  ┌─────────────────────┐ │
│  │  remsfal-platform  │  │  remsfal-ticketing │  │ remsfal-notification│ │
│  │  Port 8080         │  │  Port 8081         │  │  Port 8082          │ │
│  │  Login, Nutzer,    │  │  Mängel, Aufgaben, │  │  Benachrichtigungen │ │
│  │  Liegenschaften,   │  │  Chat, Angebote,   │  │  (E-Mail)           │ │
│  │  Organisationen    │  │  Dokumente         │  │                     │ │
│  └─────────┬──────────┘  └─────────┬──────────┘  └──────────┬──────────┘ │
│            │                       │                        │            │
│      PostgreSQL              Cassandra + MinIO          (kein Storage)   │
│                                                                          │
│            └───────────────┬───────┴────────────────────────┘            │
│                            ▼                                             │
│                     Apache Kafka (Event-Bus)                             │
└──────────────────────────────────────────────────────────────────────────┘
```

### Frontend — `remsfal-frontend`

Das [`remsfal-frontend`](https://github.com/remsfal/remsfal-frontend) ist eine Single-Page-Application
(SPA) auf Basis von **Vue 3**, **Vite** und **TypeScript**, gestylt mit **Tailwind CSS** und
**PrimeVue**-Komponenten. Es kommuniziert ausschließlich über REST-Schnittstellen mit den
Backend-Microservices und verwendet dafür einen typsicheren API-Client, der aus den OpenAPI-Spezifikationen
der Microservices generiert wird.

### Backend — `remsfal-backend`

Das [`remsfal-backend`](https://github.com/remsfal/remsfal-backend) ist als Maven-Multi-Modul-Projekt
organisiert und baut auf dem **Quarkus**-Framework (Java) auf. Es besteht aus drei eigenständigen
Microservices, die jeweils über einen eigenen Port und eigene Datenhaltung verfügen:

| Microservice            | Zuständigkeit                                                          | Port | Datenhaltung        |
|--------------------------|-------------------------------------------------------------------------|------|----------------------|
| **remsfal-platform**      | Login/Authentifizierung (OAuth/JWT), Nutzerverwaltung, Liegenschaften, Organisationen | 8080 | PostgreSQL           |
| **remsfal-ticketing**     | Mängel-/Aufgabenmanagement, Chat, Angebote, Dokumentenablage             | 8081 | Cassandra + MinIO    |
| **remsfal-notification**  | Versand von Benachrichtigungen (z. B. E-Mails) an Nutzer:innen           | 8082 | —                    |

Zusätzlich enthält das Backend-Repository zwei gemeinsam genutzte Bibliotheken:

- **remsfal-core** — Business-Modelle und API-Interfaces, die von allen Microservices genutzt werden
- **remsfal-gaeb** — XML-Bindings für den GAEB DA XML Standard 3.3 (Baugewerbe-Datenaustausch)

### Kommunikation zwischen den Microservices

Die Microservices sind lose über **Apache Kafka** gekoppelt: Ereignisse wie neue Nutzer oder
Statusänderungen an Mängeln werden als Events veröffentlicht und von den jeweils interessierten
Microservices konsumiert. Synchron werden nur wenige Schnittstellen aufgerufen, etwa die Prüfung von
JWT-Zugriffstoken durch die `remsfal-platform`-Microservice (Bereitstellung der öffentlichen Schlüssel
unter `/api/v1/authentication/jwks`).

## Repository-Übersicht

| Repository | Beschreibung |
|---|---|
| [remsfal/remsfal-frontend](https://github.com/remsfal/remsfal-frontend) | Vue 3 SPA (Frontend) |
| [remsfal/remsfal-backend](https://github.com/remsfal/remsfal-backend) | Quarkus Multi-Modul-Projekt mit allen drei Backend-Microservices |
| [remsfal/remsfal-ocr](https://github.com/remsfal/remsfal-ocr) | OCR-Dienst zur Texterkennung in hochgeladenen Dokumenten |

Bereit? Wähle den passenden Einstieg für dich:

- Du möchtest Code beitragen oder debuggen → **[Entwickler Setup](/getting-started/entwickler-setup)**
- Du möchtest REMSFAL einfach nur lokal starten → **[Docker Setup](/getting-started/docker-setup)**
