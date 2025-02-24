document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("mode-toggle");
    const body = document.body;

    // Check if user has a preferred theme stored in localStorage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleBtn.textContent = "☀️"; // Change icon to Sun
    }

    // Toggle Dark/Light Mode
    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        // Store the preference in localStorage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            toggleBtn.textContent = "☀️"; // Sun icon for light mode
        } else {
            localStorage.setItem("theme", "dark");
            toggleBtn.textContent = "🌙"; // Moon icon for dark mode
        }
    });

    // Scroll Animation - Show elements when they come into view
    function checkScroll() {
        document.querySelectorAll(".scroll-fade").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once on load
});
