<script setup lang="ts">
import { ref, computed } from 'vue';

const searchQuery = ref('');
const filterStatus = ref('all');

const issues = ref([
  {
    id: 1,
    title: "Implementierung und Evaluation eines Java-basierten HAProxy Stream Processing Offload Agent zur Event Transformation nach Kafka",
    status: "in_progress",
    labels: ["Backend", "Java", "Kafka"],
    priority: "high",
    description: "Entwicklung eines leistungsfähigen Stream Processing Agents zur Integration von HAProxy mit Kafka-basierten Event-Systemen.",
    url: "haproxy-stream-processing-agent"
  },
  {
    id: 2,
    title: "Implementierung und Evaluation einer Vue.js Single Page Application zur Konfiguration des HAProxy als API Gateway",
    status: "open",
    labels: ["Frontend", "Vue.js", "API"],
    priority: "medium",
    description: "Entwicklung einer modernen Benutzeroberfläche zur vereinfachten Konfiguration und Verwaltung von HAProxy als API Gateway.",
    url: "haproxy-vue-configuration"
  },
  {
    id: 3,
    title: "Implementation und Evaluation eines File Upload Konzeptes mittels JAX-RS zur ausfallsicheren Speicherung und effizienten Verwaltung unterschiedlicher Dateitypen",
    status: "open",
    labels: ["Backend", "Storage"],
    priority: "medium",
    description: "Entwicklung eines robusten File-Upload-Systems mit Fokus auf Ausfallsicherheit und effizientes Dateimanagement.",
    url: "file-upload-system"
  },
  {
    id: 4,
    title: "Vergleich und Bewertung von Online-Ticketsystemen für Hausverwaltungen und deren Auswirkungen auf die Kommunikation",
    status: "in_progress",
    labels: ["Research", "Analysis"],
    priority: "high",
    description: "Umfassende Analyse und Bewertung verschiedener Ticketsystem-Lösungen für den Einsatz in Hausverwaltungen.",
    url: "ticketsystem-comparison"
  },
  {
    id: 5,
    title: "Konzeption und prototypische Refaktorisierung einer Monolithischen-Architektur hin zu einer Microservice-Architektur",
    status: "in_progress",
    labels: ["Architecture", "Backend"],
    priority: "high",
    description: "Strategische Transformation einer bestehenden Monolith-Architektur in eine moderne Microservice-Struktur.",
    url: "monolith-to-microservice"
  }
]);

const statusOptions = [
  { label: 'Alle', value: 'all' },
  { label: 'In Bearbeitung', value: 'in_progress' },
  { label: 'Offen', value: 'open' },
  { label: 'Abgeschlossen', value: 'completed' }
];

const filteredIssues = computed(() => {
  return issues.value.filter(issue => {
    const matchesStatus = filterStatus.value === 'all' || issue.status === filterStatus.value;
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        issue.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesStatus && matchesSearch;
  });
});

const getStatusColor = (status) => {
  return {
    'in_progress': '#2563eb',
    'open': '#9333ea',
    'completed': '#16a34a'
  }[status] || '#6b7280';
};

const getStatusText = (status) => {
  return {
    'in_progress': 'In Bearbeitung',
    'open': 'Offen',
    'completed': 'Abgeschlossen'
  }[status] || status;
};

const getPriorityIcon = (priority) => {
  return {
    'high': '🔴',
    'medium': '🟡',
    'low': '🟢'
  }[priority] || '⚪';
};
</script>

<template>
  <div class="issues-container">

    <!-- Controls Section -->
    <div class="controls-section">
      <div class="search-box">
        <input
            type="text"
            v-model="searchQuery"
            placeholder="Suchen Sie nach Projekten..."
            class="search-input"
        >
      </div>
      <div class="filter-box">
        <select v-model="filterStatus" class="filter-select">
          <option v-for="option in statusOptions"
                  :key="option.value"
                  :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- Issues Grid -->
    <div class="issues-grid">
      <div v-for="issue in filteredIssues"
           :key="issue.id"
           class="issue-card">
        <div class="issue-header">
          <span class="priority-indicator" :title="`Priorität: ${issue.priority}`">
            {{ getPriorityIcon(issue.priority) }}
          </span>
          <span class="status-badge"
                :style="{ backgroundColor: getStatusColor(issue.status) }">
            {{ getStatusText(issue.status) }}
          </span>
        </div>
        <router-link :to="`/issues/${issue.url}`" class="issue-title-link">
          <h3 class="issue-title">{{ issue.title }}</h3>
        </router-link>
        <p class="issue-description">{{ issue.description }}</p>
        <div class="issue-footer">
          <div class="labels">
            <span v-for="label in issue.labels"
                  :key="label"
                  class="label">
              {{ label }}
            </span>
          </div>
          <router-link :to="`/issues/${issue.url}`" class="details-link">
            Details anzeigen →
          </router-link>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.issues-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero-header {
  text-align: center;
  padding: 60px 20px;
  margin: -20px -20px 40px -20px;
  background: linear-gradient(135deg, #2e6022 0%, #4a8c3c 50%, #2e6022 100%);
}

.brand-name {
  font-size: 64px;
  font-weight: 800;
  background: linear-gradient(45deg, #ffffff 10%, #a8e063 50%, #ffffff 90%);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 8s linear infinite;
  margin-bottom: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.page-title {
  color: white;
  font-size: 36px;
  margin: 0;
  margin-bottom: 10px;
}

.subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  margin: 0;
}

.controls-section {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.search-box {
  flex: 1;
}

.search-input {
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #2e6022;
}

.filter-select {
  padding: 12px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  min-width: 200px;
  background-color: white;
}

.issues-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.issue-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.issue-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.issue-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.priority-indicator {
  font-size: 20px;
}

.status-badge {
  padding: 6px 12px;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.issue-title {
  font-size: 18px;
  font-weight: 600;
  color: #2e6022;
  margin: 0 0 12px 0;
  line-height: 1.4;
}

.issue-description {
  color: #4b5563;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
}

.issue-title-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.issue-title-link:hover .issue-title {
  color: #4a8c3c;
}

.issue-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.labels {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.label {
  padding: 4px 8px;
  background-color: #f3f4f6;
  border-radius: 4px;
  font-size: 12px;
  color: #4b5563;
}



@keyframes shine {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

@media (max-width: 768px) {
  .hero-header {
    padding: 40px 20px;
  }

  .brand-name {
    font-size: 48px;
  }

  .page-title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 18px;
  }

  .controls-section {
    flex-direction: column;
  }

  .issues-grid {
    grid-template-columns: 1fr;
  }
}
</style>