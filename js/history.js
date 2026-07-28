// Load history data from /data/history.json
fetch("data/history.json")
    .then(response => response.json())
    .then(data => {
        // Champions table
        const championsBody = document.querySelector("#champions-table tbody");

        data.champions.forEach(season => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${season.year}</td>
                <td>${season.champion}</td>
                <td>${season.runnerUp}</td>
                <td>${season.totalPoints}</td>
            `;

            championsBody.appendChild(row);
        });

        // Records list
        const recordsList = document.getElementById("records-list");

        data.records.forEach(record => {
            const li = document.createElement("li");
            li.textContent = `${record.title}: ${record.value}`;
            recordsList.appendChild(li);
        });

        // Historical notes (optional)
        const notesSection = document.getElementById("historical-notes");
        if (notesSection && data.notes) {
            notesSection.textContent = data.notes;
        }
    })
    .catch(error => {
        console.error("Error loading history:", error);
    });
