// Load scores and auto-generate standings (total points only)
fetch("data/scores.json")
    .then(response => response.json())
    .then(scores => {

        const teams = [
            "West End Slackers",
            "Nine Below Zero",
            "Jeraldo's Parents",
            "Team #4"
        ];

        // Initialize totals
        const totals = {};
        teams.forEach(team => {
            totals[team] = {
                team: team,
                points: 0
            };
        });

        // Add up all weekly points
        Object.values(scores).forEach(week => {
            week.forEach(entry => {
                totals[entry.team].points += entry.points;
            });
        });

        // Convert to array and sort by total points
        const standingsArray = Object.values(totals).sort((a, b) => {
            return b.points - a.points;
        });

        // Render standings table
        const table = document.getElementById("standings-table");

        standingsArray.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${row.team}</td>
                <td>${row.points}</td>
            `;
            table.appendChild(tr);
        });
    })
    .catch(err => console.error("Error loading standings:", err));
