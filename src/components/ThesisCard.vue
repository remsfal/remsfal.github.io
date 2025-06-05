<script setup lang="ts">
import type { Issue } from '@/services/GitHubService'
import MarkdownIt from 'markdown-it'
import { computed } from 'vue'

const props = defineProps<{
  issue: Issue
}>()

const md = new MarkdownIt()

// Berechne Status-Text anhand von GitHub-Daten
const statusText = computed(() => {
  return props.issue.assignee ? 'In Bearbeitung' : 'Offen'
})

const statusColor = computed(() => {
  return props.issue.assignee ? 'bg-blue-500' : 'bg-purple-500'
})

const renderedBody = computed(() => md.render(props.issue.body))
</script>

<template>
  <div class="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-lg">
    <!-- Status -->
    <div class="flex justify-between items-center mb-4">
      <span :class="`text-white text-sm px-3 py-1 rounded-full ${statusColor}`">
        {{ statusText }}
      </span>

      <!-- Assignee -->
      <div v-if="issue.assignee" class="flex items-center gap-2">
        <img :src="issue.assignee.avatar_url" alt="avatar" class="w-8 h-8 rounded-full border" />
        <span class="text-sm text-gray-600">@{{ issue.assignee.login }}</span>
      </div>
    </div>

    <!-- Titel -->
    <h3 class="text-xl font-semibold text-green-900 mb-2">{{ issue.title }}</h3>

    <!-- Beschreibung (Markdown gerendert) -->
    <div class="prose prose-sm max-w-none text-gray-700 mb-4" v-html="renderedBody" />

    <!-- Labels -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="label in issue.labels"
        :key="label.id"
        class="text-xs px-2 py-1 rounded"
        :style="{ backgroundColor: '#' + label.color, color: 'white' }"
      >
        {{ label.name }}
      </span>
    </div>

    <!-- Link -->
    <a :href="issue.html_url" target="_blank" class="text-green-700 text-sm font-medium hover:underline">
      Details anzeigen →
    </a>
  </div>
</template>

<style scoped>
/* Optional: Für Markdown-Text (prose) ansprechender gestalten */
.prose :where(p):not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
