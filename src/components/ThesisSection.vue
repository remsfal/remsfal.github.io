<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import fetchIssues, { type Issue } from '@/services/GitHubService.ts'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
const issues = ref([] as Issue[]);
const searchQuery = ref('');
const filterStatus = ref('all');

onMounted(async () => {
  try {
    issues.value = await fetchIssues(['remsfal/remsfal-backend', 'remsfal/remsfal-frontend']);
  } catch (error) {
    console.error('Failed to fetch issues:', error);
  }
});

const statusOptions = [
  { label: 'Alle', value: 'all' },
  { label: 'In Bearbeitung', value: 'in_progress' },
  { label: 'Offen', value: 'open' },
  { label: 'Abgeschlossen', value: 'completed' }
];

const filteredIssues = computed(() => {
  return issues.value.filter(issue => {
    const matchesStatus = filterStatus.value === 'all' || issue.state === filterStatus.value;
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      issue.body.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesStatus && matchesSearch;
  });
});
// Convert Markdown to HTML
const renderMarkdown = (markdown: string) => {
  return md.render(markdown)
} 

const getStatusColor = (status: string) => {
  return {
    'in_progress': String('#2563eb'),
    'open': String('#9333ea'),
    'completed': String('#16a34a')
  }[status] || '#6b7280';
};

const getStatusText = (status: string) => {
  return {
    'in_progress': String('In Bearbeitung'),
    'open': String('Offen'),
    'completed': String('Abgeschlossen')
  }[status] || status;
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
          <span class="status-badge"
                :style="{ backgroundColor: getStatusColor(issue.state) }">
            {{ getStatusText(issue.state) }}
          </span>
        </div>
        <a :href="issue.html_url" target="_blank" class="issue-title-link">
          <h3 class="issue-title">{{ issue.title }}</h3>
        </a>
     <div class="issue-description" v-html="renderMarkdown(issue.body)"></div>
        <div class="issue-footer">
          <div class="labels">
            <span v-for="label in issue.labels"
                  :key="label.id"
                  class="label"
                  :style="{ backgroundColor: '#' + label.color }">
              {{ label.name }}
            </span>
          </div>
          <a :href="issue.html_url" target="_blank" class="details-link">
            Details anzeigen →
          </a>
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
  word-break: break-word;
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
  border-radius: 4px;
  font-size: 12px;
  color: #4b5563;
}

@keyframes shine {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

@media (max-width: 768px) {
  .controls-section {
    flex-direction: column;
  }

  .issues-grid {
    grid-template-columns: 1fr;
  }
}</style>