// Load transaction data from /data/transactions.json
fetch("data/transactions.json")
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector("#transactions-table tbody");

        data.forEach(entry => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${entry.date}</td>
                <td>${entry.team}</td>
                <td>${entry.added}</td>
                <td>${entry.dropped}</td>
                <td>${entry.transactions_remaining}</td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error loading transactions:", error);
    });
