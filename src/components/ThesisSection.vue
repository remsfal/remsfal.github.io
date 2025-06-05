<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import fetchIssues, { type Issue } from '@/services/GitHubService.ts'
import ThesisCard from '@/components/ThesisCard.vue'

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
</script>

<template>
  <div class="py-12 px-4">
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

    <!-- Issues Grid using ThesisCard -->
    <div class="issues-grid">
      <ThesisCard
        v-for="issue in filteredIssues"
        :key="issue.id"
        :issue="issue"
      />
    </div>
  </div>
</template>

<style scoped>
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

@media (max-width: 768px) {
  .controls-section {
    flex-direction: column;
  }

  .issues-grid {
    grid-template-columns: 1fr;
  }
}
</style>