// Load commissioner data from /data/commissioner.json
fetch("data/commissioner.json")
    .then(response => response.json())
    .then(data => {
        // Announcements list
        const announcementsList = document.getElementById("announcements-list");

        data.announcements.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${item.date}</strong>: ${item.message}`;
            announcementsList.appendChild(li);
        });

        // Commissioner notes
        const notesSection = document.getElementById("commissioner-notes");
        if (data.notes) {
            notesSection.textContent = data.notes;
        }
    })
    .catch(error => {
        console.error("Error loading commissioner data:", error);
    });
