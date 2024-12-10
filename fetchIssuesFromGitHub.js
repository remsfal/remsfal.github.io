// Token für die Authentifizierung bei der GitHub API
const token = '';

// Funktion, die alle Issues eines bestimmten Repositories abfragt
const requestReposIssues = (name) => {
    fetch(`https://api.github.com/repos/${name}/issues?labels=thesis`, // URL für die Issues des Repositories
        {
            headers: { // Header zur Authentifizierung und API-Version
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${token}` // Nutzung des persönlichen Tokens
            }
        })
        .then(response => response.json()) // Antwort in JSON umwandeln
        .then(data => {
            console.log(data) // Ausgabe der Daten im Konsolenfenster
        })
}

requestReposIssues('remsfal/remsfal-backend');