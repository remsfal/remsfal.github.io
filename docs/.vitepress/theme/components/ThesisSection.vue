<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import fetchIssues, { type Issue, IssueState } from '../../services/GitHubService'
import ThesisCard from './ThesisCard.vue'

const issues = ref([] as Issue[]);
const searchQuery = ref('');
const filterStatus = ref<'all' | IssueState>('all')

onMounted(async () => {
  try {
    issues.value = await fetchIssues(['remsfal/remsfal-backend', 'remsfal/remsfal-frontend']);
  } catch (error) {
    console.error('Failed to fetch issues:', error);
  }
});

const order: Record<IssueState, number> = {
  [IssueState.Open]: 1,
  [IssueState.InProgress]: 2,
  [IssueState.Closed]: 3
}

const filteredIssues = computed(() => {
  return issues.value
    .filter((issue: Issue) => {
      const matchesStatus =
        filterStatus.value === 'all' ||
        issue.state === filterStatus.value

      const matchesSearch =
        issue.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        issue.body?.toLowerCase().includes(searchQuery.value.toLowerCase())

      return matchesStatus && matchesSearch
    })
    .sort((a: Issue, b: Issue) => {
      if (order[a.state as IssueState] !== order[b.state as IssueState]) {
        return order[a.state as IssueState] - order[b.state as IssueState]
      }
      return (a.title || '').localeCompare(b.title || '')
    })
});
</script>

<template>
  <div class="thesis-section">
    <!-- Controls Section -->
    <div class="thesis-controls">
      <!-- Suche -->
      <div class="thesis-search-wrapper">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Suchen Sie nach Projekten..."
          class="thesis-search"
        >
      </div>

      <!-- Filter -->
      <div class="thesis-filter-wrapper">
        <select
          v-model="filterStatus"
          class="thesis-filter"
        >
          <option value="all">Alle</option>
          <option :value="IssueState.InProgress">In Bearbeitung</option>
          <option :value="IssueState.Open">Offen</option>
          <option :value="IssueState.Closed">Abgeschlossen</option>
        </select>
      </div>
    </div>

    <!-- Issues Grid -->
    <div class="thesis-grid">
      <ThesisCard
        v-for="issue in filteredIssues"
        :key="issue.id"
        :issue="issue"
      />
    </div>
  </div>
</template>

<style scoped>
.thesis-section {
  padding: 3rem 0;
}

.thesis-controls {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .thesis-controls {
    flex-direction: row;
  }
}

.thesis-search-wrapper {
  flex: 1;
}

.thesis-search {
  width: 100%;
  padding: 0.75rem 1.25rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: border-color 0.2s;
}

.thesis-search:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.thesis-filter-wrapper {
  min-width: 200px;
}

.thesis-filter {
  width: 100%;
  padding: 0.75rem 1.25rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: border-color 0.2s;
}

.thesis-filter:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.thesis-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}
</style>
