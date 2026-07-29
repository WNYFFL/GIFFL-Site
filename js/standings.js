// Load scores and auto-generate standings (points + transactions)
Promise.all([
    fetch("data/scores.json").then(r => r.json()),
    fetch("data/transactions.json").then(r => r.json())
])
.then(([scores, transactions]) => {

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
            points: 0,
            transactions_left: 5 // default if no transactions yet
        };
    });

    // Add up all weekly points
    Object.values(scores).forEach(week => {
        week.forEach(entry => {
            totals[entry.team].points += entry.points;
        });
    });

    // Pull latest transactions_remaining for each team
    transactions.forEach(entry => {
        totals[entry.team].transactions_left = entry.transactions_remaining;
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
            <td>${row.transactions_left}</td>
        `;
        table.appendChild(tr);
    });
})
.catch(err => console.error("Error loading standings:", err));
