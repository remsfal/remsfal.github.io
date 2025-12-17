<script setup lang="ts">
import type { Issue } from '../../services/GitHubService'
import { getReadableStatus } from '../../services/GitHubService'
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
  <div class="thesis-card">
    <div class="thesis-card-content">
      <div class="thesis-header">
        <!-- Status -->
        <span :class="`thesis-status ${statusColor}`">
          {{ statusText }}
        </span>

        <!-- Assignee -->
        <div v-if="issue.assignee" class="thesis-assignee">
          <img
            :src="issue.assignee.avatar_url"
            :alt="`Avatar of ${issue.assignee.login}`"
            class="thesis-avatar"
          />
          <span class="thesis-login">@{{ issue.assignee.login }}</span>
        </div>
      </div>

      <!-- Titel -->
      <h3 class="thesis-title">
        {{ issue.title }}
      </h3>

      <!-- Beschreibung (Markdown gerendert) -->
      <div class="thesis-body" v-html="renderedBody" />

      <!-- Labels -->
      <div class="thesis-labels">
        <span
          v-for="label in issue.labels"
          :key="label.id"
          class="thesis-label"
          :style="{ backgroundColor: '#' + label.color, color: 'white' }"
        >
          {{ label.name }}
        </span>
      </div>

      <!-- Link -->
      <a
        :href="issue.html_url"
        target="_blank"
        class="thesis-link"
      >
        Details anzeigen →
      </a>
    </div>
  </div>
</template>

<style scoped>
.thesis-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.thesis-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.thesis-card-content {
  padding: 1.5rem;
}

.thesis-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.thesis-status {
  color: white;
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
}

.bg-green-500 {
  background-color: #22c55e;
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.bg-purple-500 {
  background-color: #a855f7;
}

.thesis-assignee {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.thesis-avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: 1px solid var(--vp-c-divider);
}

.thesis-login {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.thesis-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.5rem;
  word-wrap: break-word;
  hyphens: auto;
}

.thesis-body {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  word-wrap: break-word;
  line-height: 1.6;
}

.thesis-body :deep(p) {
  margin: 0.5rem 0;
}

.thesis-body :deep(ul),
.thesis-body :deep(ol) {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.thesis-labels {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.thesis-label {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  word-wrap: break-word;
}

.thesis-link {
  color: var(--vp-c-brand-1);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  word-wrap: break-word;
}

.thesis-link:hover {
  text-decoration: underline;
}
</style>
