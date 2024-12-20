<script setup>
import BaseLayout from "@/components/BaseLayout.vue";
import Card from 'primevue/card';
import { ref, onMounted } from 'vue';
import fetchIssues from '../fetchIssuesFromGitHub.js';  // Import the correct function

// Create a reactive reference to store the fetched issues
const issues = ref([]);

// Use the onMounted lifecycle hook to perform operations after the component is mounted
onMounted(async () => {
  try {
    // Fetch issues and assign them to the issues reference
    issues.value = await fetchIssues(['remsfal/remsfal-backend', 'remsfal/remsfal-frontend']); // Use the imported fetchIssues function
  } catch (error) {
    // Log an error message if fetching issues fails
    console.error('Failed to fetch issues:', error);
  }
});

</script>

<template>
  <BaseLayout>
    <!-- Iterate over the fetched issues and display each in a Card component -->
    <div v-for="issue in issues" :key="issue.id || issue.title" class="col-12 md:col-6 issue-card">
      <Card>
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