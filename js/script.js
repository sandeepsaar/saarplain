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

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var productImg = document.getElementById("ProductImg");
    var smallImgs = document.querySelectorAll(".small-img");

    smallImgs.forEach(function (img) {
      img.addEventListener("click", function () {
        productImg.src = this.src;
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const tabsBox = document.querySelector(".tabs-box"),
        allTabs = tabsBox?.querySelectorAll(".tab"),
        arrowIcons = document.querySelectorAll(".icon i");

    let isDragging = false;

    const handleIcons = (scrollVal) => {
        let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
        arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
        arrowIcons[1].parentElement.style.display =
            maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    };

    arrowIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            let scrollAmount = icon.id === "left" ? -340 : 340;
            tabsBox.scrollLeft += scrollAmount;
            handleIcons(tabsBox.scrollLeft);
        });
    });

    allTabs?.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Add active class
            tabsBox.querySelector(".active")?.classList.remove("active");
            tab.classList.add("active");

            // Scroll to the section with offset
            const targetId = tab.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            const offset = 100; // Adjust based on your fixed tab height

            if (targetSection) {
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Initial icon visibility update
    handleIcons(tabsBox.scrollLeft);
});

document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtns = document.querySelectorAll(".whatsapp-btn");
  
    whatsappBtns.forEach((btn) => {
      const productName = btn.getAttribute("data-product");
      const phoneNumber = "919876543210"; // Your number
      const message = `Hello! Want to enquire about Product: ${productName}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
      btn.setAttribute("href", whatsappURL);
    });
  });


//   career form 
// document.addEventListener('DOMContentLoaded', function () {
//     const applyForm = document.querySelector('.job-form'); 
//     if (applyForm) {
//       applyForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         console.log("Form submitted!");
//       });
//     }
//   });
document.addEventListener('DOMContentLoaded', function () {
    const applyBtn = document.getElementById('applyBtn');
    const jobForm = document.getElementById('jobApplicationForm');
  
    // Show form on button click
    applyBtn.addEventListener('click', function () {
      jobForm.classList.remove('hidden');
    });
  
    // Handle form submit
    jobForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Collect form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const resume = document.getElementById('resume').files[0]?.name || 'No file';
  
      console.log("Form submitted:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Resume:", resume);
    });
  });


//   side icons 
document.addEventListener('DOMContentLoaded', () => {
    // Get the mail popup element
    const mailPopup = document.getElementById('mailPopup');
  
    // Floating mail button
    const floatingMailBtn = document.getElementById('floatingMailBtn');
    if (floatingMailBtn && mailPopup) {
      floatingMailBtn.addEventListener('click', function (e) {
        e.preventDefault();
        mailPopup.style.display = 'flex';
      });
    }
  
    // Mobile bar mail button
    const mobileMailBtn = document.getElementById('mobileMailBtn');
    if (mobileMailBtn && mailPopup) {
      mobileMailBtn.addEventListener('click', function (e) {
        e.preventDefault();
        mailPopup.style.display = 'flex';
      });
    }
  
    // Close popup when clicking outside or on close button
    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('popup-overlay') || e.target.classList.contains('close-popup')) {
        if (mailPopup) {
          mailPopup.style.display = 'none';
        }
      }
    });
  
    // Scroll example safety (if you're using scrollLeft somewhere)
    const scrollableElement = document.getElementById('scrollableDiv');
    if (scrollableElement) {
      scrollableElement.scrollLeft = 100; // Just example usage
    }
  
    // You can add more logic safely below here
  });
  
  
  