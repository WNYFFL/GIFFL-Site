// Load team data from /data/teams.json
fetch("data/teams.json")
    .then(response => response.json())
    .then(data => {
        const grid = document.getElementById("teams-grid");

        data.forEach(team => {
            const card = document.createElement("a");
            card.className = "quick-link";

            // If you later create team subpages, link to them here:
            // Example: team-slackers.html
            // For now, cards are non-navigational placeholders.
            card.href = "#";

            card.innerHTML = `
                <img src="${team.logo}" 
                     alt="${team.teamName} logo" 
                     style="width: 100px; height: auto; margin-bottom: 8px;"><br>
                <strong>${team.teamName}</strong><br>
                ${team.owner}<br>
                <span style="font-size: 12px;">${team.city || ""}</span>
            `;

            grid.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error loading teams:", error);
    });
