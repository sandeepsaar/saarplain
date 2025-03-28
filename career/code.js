document.addEventListener("DOMContentLoaded", function () {
    const jobsData = [
        {
            id: 1,
            title: "Full Stack Java Developer",
            description: "Develop and maintain web applications using Java and Spring Boot.",
            slug: "full-stack-java-developer"
        }
        // Add more jobs as needed
    ];

    function renderJobs(jobs) {
        const jobList = document.getElementById("jobList");
        jobList.innerHTML = "";
        if (jobs.length === 0) {
            jobList.innerHTML = `<p class='text-center text-muted'>No jobs found</p>`;
            return;
        }
        jobs.forEach(job => {
            jobList.innerHTML += `
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="card job-card p-3">
                        <h5 class="color-primary fw-bold fs-4">${job.title}</h5>
                        <p class="text-muted">${job.description}</p>
                        <button class="btn btn-primary" onclick="window.location.href='/career/${job.slug}'">View Details</button>
                    </div>
                </div>
            `;
        });
    }

    function searchJobs() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const filteredJobs = jobsData.filter(job => job.title.toLowerCase().includes(searchTerm));
        renderJobs(filteredJobs);
    }

    document.getElementById("searchBtn").addEventListener("click", searchJobs);
    document.getElementById("searchInput").addEventListener("keyup", searchJobs);

    renderJobs(jobsData);
});