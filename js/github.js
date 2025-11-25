let allRepos = []; // store repos globally

// Fetch repos once
fetch("https://api.github.com/users/Yousef-Div123/repos?sort=updated&direction=desc&per_page=3")
    .then(res => res.json())
    .then(res => {
        allRepos = res; // save fetched repos
        renderRepos(allRepos); // initial render
    });


// Render function
function renderRepos(repos) {
    const container = document.getElementById("github-container");
    container.innerHTML = "";
    if(repos.length === 0){
        container.innerHTML += "<h3>No recent projects with this language</h3>"
    }
    for (let repo of repos) {
        let name = repo.name;
        let description = repo.description ? repo.description : "No description found.";
        let lang = repo.language ? repo.language : "Unknown";
        let stars = repo.stargazers_count;
        let updatedAt = new Date(repo.updated_at).toISOString().split("T")[0];
        let url = repo.html_url;

        let data = `
            <div class="repo-card">
                <h3 class="repo-name">${name}</h3>
                <p class="repo-desc">${description}</p>

                <div class="repo-meta">
                    <span class="repo-lang">${lang}</span>
                    <span class="repo-stars">⭐ ${stars}</span>
                    <span class="repo-updated">Updated: ${updatedAt}</span>
                </div>

                <a class="repo-btn" href="${url}" target="_blank">
                    View on GitHub
                </a>
            </div>
        `;

        container.innerHTML += data;
    }
}

document.getElementById("language-filter").addEventListener("change", function () {
    const selected = this.value;

    if (selected === "all") {
        renderRepos(allRepos);
    } else {
        const filtered = allRepos.filter(repo => repo.language === selected);
        renderRepos(filtered);
    }
});
