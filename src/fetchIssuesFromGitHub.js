const token = 'PERSONAL_ACCESS_TOKEN'; // Store the GitHub personal access token
async function fetchIssuesFromMultipleRepos(repoNames) {
  const allIssues = []; // Initialize an array to store all fetched issues

  for (const repo of repoNames) { // Loop through each repository name in the provided array
    try {
      // Make an asynchronous fetch call to GitHub API to get issues with the "thesis" label from the current repository
      const response = await fetch(`https://api.github.com/repos/${repo}/issues?labels=thesis`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json', // Set the API version
          'Authorization': `token ${token}` // Use the stored token for authorization
        }
      });
    
      if (!response.ok) { // Check if the response is not OK
        throw new Error('Network response was not ok for repo: ' + repo); // Throw an error if the response is not ok
      }
      
      const issues = await response.json(); // Parse the response JSON to get issues data
      allIssues.push(...issues); // Add fetched issues to the allIssues array
    } catch (error) {
      console.error('Error fetching issues:', error); // Log any errors that occur during the fetch
      return []; // Return an empty array if an error occurs
      console.error('Error fetching issues from repo:', repo, error); // Log the specific repository where the error occurred
    }
  }

  console.log('Fetched issues from all repositories:', allIssues); // Log all fetched issues

  return allIssues; // Return the array of all fetched issues
}
export default fetchIssuesFromMultipleRepos; // Export the function as default

// Example usage
// fetchIssuesFromMultipleRepos(['remsfal/remsfal-backend', 'remsfal/remsfal-frontend']); // Example of how to use the function with repository names
