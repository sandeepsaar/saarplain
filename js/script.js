// Initialize Swiper.js for the carousel
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: "fade",
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("queryForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            company: document.getElementById("company").value,
            query: document.getElementById("query").value,
        };

        fetch("EmailClient.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(result => {
                let messageElem = document.getElementById("formMessage");
                if (result.success) {
                    messageElem.textContent = "Query Submitted Successfully!";
                    messageElem.style.color = "green";
                    document.getElementById("queryForm").reset();
                } else {
                    messageElem.textContent = "Submission failed! Try again later.";
                    messageElem.style.color = "red";
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const counterConfig = {
        "Established": { target: 2005, increment: 6, timeout: 1, suffix: "" },
        "Manufacturing Units": { target: 4, increment: 1, timeout: 500, suffix: "" },
        "Products": { target: 68, increment: 1, timeout: 30, suffix: "+" },
        "Clients": { target: 1700, increment: 3, timeout: 1, suffix: "+" }
    };

    const container = document.getElementById("counter-container");

    Object.entries(counterConfig).forEach(([key, config]) => {
        const col = document.createElement("div");
        col.classList.add("col-md-3");

        const box = document.createElement("div");
        box.classList.add("counter-box");

        const number = document.createElement("div");
        number.classList.add("counter-number");
        number.innerText = "0";

        const label = document.createElement("h4");
        label.classList.add("counter-label");
        label.innerText = key;

        box.appendChild(number);
        box.appendChild(label);
        col.appendChild(box);
        container.appendChild(col);

        startCounter(number, config.target, config.increment, config.timeout, config.suffix);
    });
});

function startCounter(element, target, increment, timeout, suffix) {
    let current = 0;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.innerText = current + suffix;
    }, timeout);
}
