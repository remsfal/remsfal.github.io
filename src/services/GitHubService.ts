
export interface User {
  id: number;
  login: string;
  url: string;
  html_url: string;
  avatar_url: string;
}

export interface Label {
  id: number;
  name: string;
  color: string;
  description: string;
}

export enum IssueState {
  Open = 'open',
  InProgress = 'in_progress',
  Closed = 'closed'
}

export interface Issue {
  id: number;
  number: number;
  title: string;
  state: string;
  url: string;
  html_url: string;
  assignee: User;
  labels: Label[];
  body: string;
  updated_at: string;
}

// Statusanzeige
export function getReadableStatus(issue: { state: string; assignee?: User | null }): string {
  if (issue.state === IssueState.Closed) return 'Abgeschlossen';
  if (issue.assignee) return 'In Bearbeitung';
  return 'Offen';
}

async function fetchIssuesFromMultipleRepos(repoNames: string[]): Promise<Issue[]> {
  const allIssues:Issue[] = [];

  for (const repo of repoNames) {
    try {
      // Make an asynchronous fetch call to GitHub API to get issues with the "thesis" label from the current repository
      const response = await fetch(`https://api.github.com/repos/${repo}/issues?labels=thesis&state=all`, {
        headers: {
          'Accept': 'application/json'
        }
      });
    
      if (!response.ok) {
        throw new Error('Network response was not ok for repo: ' + repo);
      }

      const issues = await response.json()
      const filteredIssues = issues.filter((issue: Issue) => !('pull_request' in issue))
      allIssues.push(...filteredIssues)
    } catch (error) {
      console.error('Error fetching issues:', error);
      return []; // Return an empty array if an error occurs
    }
  }

  return allIssues.sort(
    (a: Issue, b: Issue) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
}

export default fetchIssuesFromMultipleRepos;
