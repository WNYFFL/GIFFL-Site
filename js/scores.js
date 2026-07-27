// Load weekly scores from /data/scores.json
fetch("data/scores.json")
    .then(response => response.json())
    .then(data => {
        const weekSelector = document.getElementById("week-selector");
        const tableBody = document.querySelector("#scores-table tbody");

        // Populate week selector (Weeks 1–16)
        Object.keys(data).forEach(week => {
            const option = document.createElement("option");
            option.value = week;
            option.textContent = `Week ${week}`;
            weekSelector.appendChild(option);
        });

        // Display scores for the selected week
        function loadWeek(weekNumber) {
            const weekData = data[weekNumber];
            tableBody.innerHTML = ""; // Clear previous rows

            weekData.forEach(entry => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${entry.team}</td>
                    <td>${entry.points}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Load Week 1 by default
        loadWeek("1");

        // Update table when user selects a different week
        weekSelector.addEventListener("change", () => {
            loadWeek(weekSelector.value);
        });
    })
    .catch(error => {
        console.error("Error loading weekly scores:", error);
    });
