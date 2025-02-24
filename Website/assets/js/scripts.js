document.addEventListener("DOMContentLoaded", () => {
    // ✅ DARK MODE TOGGLE
    let darkmode = localStorage.getItem('darkmode');
    const modeToggle = document.getElementById('mode-toggle');
    const lightVideo = document.getElementById("light-video");
    const darkVideo = document.getElementById("dark-video");

    const enableDarkmode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
        switchVideo(true);
    };

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', 'null');
        switchVideo(false);
    };

    const switchVideo = (isDarkMode) => {
        if (isDarkMode) {
            lightVideo.style.display = "none";
            darkVideo.style.display = "block";
            darkVideo.play();
            lightVideo.pause();
        } else {
            lightVideo.style.display = "block";
            darkVideo.style.display = "none";
            lightVideo.play();
            darkVideo.pause();
        }
    };

    if (darkmode === 'active') enableDarkmode();
    else disableDarkmode();

    modeToggle.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode');
        darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    });

    // ✅ SCROLL ANIMATION - Show elements when they come into view
    function checkScroll() {
        document.querySelectorAll(".scroll-fade").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once on load

    // ✅ CUSTOM CURSOR LOGIC
    const outerCursor = document.querySelector(".cursor.outer");
    const innerCursor = document.querySelector(".cursor.inner");
    const interactiveElements = document.querySelectorAll("a, button, .game-card");

    // Move the cursor smoothly
    window.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;

        outerCursor.style.transform = `translate(${x}px, ${y}px)`;
        innerCursor.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Add hover effect to interactive elements
    interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            outerCursor.classList.add("hover");
            innerCursor.classList.add("hover");
        });

        el.addEventListener("mouseleave", () => {
            outerCursor.classList.remove("hover");
            innerCursor.classList.remove("hover");
        });
    });
});
