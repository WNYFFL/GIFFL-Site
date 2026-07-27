// Load standings data from /data/standings.json
fetch("data/standings.json")
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector("#standings-table tbody");

        data.forEach(team => {
            const row = document.createElement("tr");

            // Calculate points per week (rounded to 2 decimals)
            const pointsPerWeek = (team.totalPoints / team.weeksPlayed).toFixed(2);

            row.innerHTML = `
                <td>${team.teamName}</td>
                <td>${team.totalPoints}</td>
                <td>${pointsPerWeek}</td>
                <td>${team.transactionsLeft}</td>
                <td>${team.championshipPath}</td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error loading standings:", error);
    });
