<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import Card from 'primevue/card';
import { ref, onMounted } from 'vue';
import fetchIssues from '@/services/fetchIssuesFromGitHub.js';

const issues = ref([]);

onMounted(async () => {
  try {
    issues.value = await fetchIssues(['remsfal/remsfal-backend', 'remsfal/remsfal-frontend']);
  } catch (error) {
    console.error('Failed to fetch issues:', error);
  }
});

</script>

<template>
  <BaseLayout>
    <!-- Iterate over the fetched issues and display each in a Card component -->
    <div v-for="issue in issues" :key="issue.id || issue.title" class="col-12 md:col-6 issue-card">
      <Card class="fixed-height-card">
        <template #title>
          <span class="issue-title">{{ issue.title }}</span>
        </template>
        <template #footer>
          <span class="issue-footer">Status: {{ issue.state }}</span>
        </template>
      </Card>
    </div>
  </BaseLayout>
</template>

<style scoped>
.fixed-height-card {
  height: 300px;
}
</style>