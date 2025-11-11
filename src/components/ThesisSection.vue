<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import fetchIssues, { type Issue, IssueState } from '@/services/GitHubService.ts'
import ThesisCard from '@/components/ThesisCard.vue'



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

const statusOptions = [
  { label: 'Alle', value: 'all' },
  { label: 'In Bearbeitung', value: IssueState.InProgress },
  { label: 'Offen', value: IssueState.Open },
  { label: 'Abgeschlossen', value: IssueState.Closed }
];

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
  <div class="py-12 px-4">
    <!-- Controls Section -->
    <div class="flex flex-col md:flex-row gap-5 mb-8">
      <!-- Suche -->
      <div class="flex-1">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Suchen Sie nach Projekten..."
          class="w-full px-5 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-green-800"
        >
      </div>

      <!-- Filter -->
      <div>
        <select v-model="filterStatus" class="px-5 py-3 border-2 border-gray-200 rounded-lg text-base min-w-[200px] bg-white"
        >
          <option
v-for="option in statusOptions"
                  :key="option.value"
                  :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- Issues Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      <ThesisCard
        v-for="issue in filteredIssues"
        :key="issue.id"
        :issue="issue"
      />
    </div>
  </div>
</template>

