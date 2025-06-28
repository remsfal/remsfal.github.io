<script setup lang="ts">
import type { Issue } from '@/services/GitHubService'
import { getReadableStatus } from '@/services/GitHubService'
import Card from 'primevue/card'
import MarkdownIt from 'markdown-it'
import { computed } from 'vue'
import DOMPurify from 'dompurify'

const props = defineProps<{
  issue: Issue
}>()

const md = new MarkdownIt()

// Berechne Status-Text anhand von GitHub-Daten
const statusText = computed(() => getReadableStatus(props.issue))

const statusColor = computed(() => {
  if (props.issue.state === 'closed') return 'bg-green-500'
  if (props.issue.assignee) return 'bg-blue-500'
  return 'bg-purple-500'
})

// Sicher gerenderter Markdown-Text
const renderedBody = computed(() => {
  const raw = md.render(props.issue.body || '')
  return DOMPurify.sanitize(raw)
})
</script>

<template>
  <Card class="rounded-2xl shadow-md transition hover:-translate-y-1 hover:shadow-lg">
    <template #content>
      <div class="flex justify-between items-center mb-4">
    <!-- Status -->
      <span :class="`text-white text-sm px-3 py-1 rounded-full ${statusColor}`">
        {{ statusText }}
      </span>

      <!-- Assignee -->
      <div v-if="issue.assignee" class="flex items-center gap-2">
        <img
          :src="issue.assignee.avatar_url"
          alt="Avatar of {{issue.assignee.login}}"
          class="w-8 h-8 rounded-full border"
        />
        <span class="text-sm text-gray-600">@{{ issue.assignee.login }}</span>
      </div>
    </div>

    <!-- Titel -->
    <h3 class="text-xl font-semibold text-green-900 mb-2">
      {{ issue.title }}
    </h3>

    <!-- Beschreibung (Markdown gerendert) -->
    <div
      class="prose prose-sm max-w-none text-gray-700 mb-4" v-html="renderedBody" />

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
    <a
      :href="issue.html_url"
      target="_blank"
      class="text-green-700 text-sm font-medium hover:underline"
    >
      Details anzeigen →
    </a>
    </template>
  </Card>
</template>
