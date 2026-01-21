const apiUrl = "https://j661edabgj.execute-api.us-east-1.amazonaws.com/dev/jobs";

// POST JOB
function postJob() {
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: document.getElementById("title").value,
            company: document.getElementById("company").value,
            location: document.getElementById("location").value,
            description: document.getElementById("description").value
        })
    })
    .then(res => res.json())
    .then(() => alert("✅ Job Posted Successfully"))
    .catch(err => {
        console.error(err);
        alert("❌ Error posting job");
    });
}

// GET JOBS
function getJobs() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const jobs = document.getElementById("jobs");
            jobs.innerHTML = "";

            data.forEach(job => {
                jobs.innerHTML += `
                    <li>
                        <b>${job.title}</b> - ${job.company} (${job.location})<br>
                        ${job.description}
                    </li><br>
                `;
            });
        })
        .catch(err => {
            console.error(err);
            alert("❌ Error loading jobs");
        });
}