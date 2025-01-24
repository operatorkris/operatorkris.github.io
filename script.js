document.addEventListener("DOMContentLoaded", function() {
    const reposSection = document.getElementById("repos");
    const username = "operatorkris"; // Replace with your GitHub username

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const repoDiv = document.createElement("div");
                repoDiv.classList.add("repo");
                repoDiv.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description || "No description available."}</p>
                `;
                reposSection.appendChild(repoDiv);
            });
        })
        .catch(error => console.error("Error fetching repositories:", error));
});
