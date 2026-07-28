// Load schedule data from /data/schedule.json
fetch("data/schedule.json")
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector("#schedule-table tbody");

        data.forEach(week => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${week.week}</td>
                <td>${week.matchup}</td>
                <td>${week.notes || ""}</td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error loading schedule:", error);
    });
