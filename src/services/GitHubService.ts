
export interface User {
  id: number;
  login: string;
  url: string;
  html_url: string;
  avatar_url: string;
}

export interface Issue {
  id: number;
  number: number;
  title: string;
  state: string;
  url: string;
  html_url: string;
  assignee: User;
  body: string;
}

async function fetchIssuesFromMultipleRepos(repoNames):Issue[] {
  const allIssues:Issue[] = [];

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
