async function fetchIssuesFromMultipleRepos(repoNames) {
  const allIssues = [];

  for (const repo of repoNames) {
    try {
      // Make an asynchronous fetch call to GitHub API to get issues with the "thesis" label from the current repository
      const response = await fetch(`https://api.github.com/repos/${repo}/issues?labels=thesis`, {
        headers: {
          'Accept': 'application/json'
        }
      });
    
      if (!response.ok) {
        throw new Error('Network response was not ok for repo: ' + repo);
      }
      
      const issues = await response.json(); // Parse the response JSON to get issues data
      allIssues.push(...issues); // Add fetched issues to the allIssues array
    } catch (error) {
      console.error('Error fetching issues:', error);
      return []; // Return an empty array if an error occurs
    }
  }

  console.log('Fetched issues from all repositories:', allIssues);
  return allIssues;
}
export default fetchIssuesFromMultipleRepos;

// Example usage
// fetchIssuesFromMultipleRepos(['remsfal/remsfal-backend', 'remsfal/remsfal-frontend']); // Example of how to use the function with repository names
