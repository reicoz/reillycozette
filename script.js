function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

/* Dark mode */
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

/* Scroll Animation */

const sr = ScrollReveal({
    origin: "top",
    distance: "0px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-text", { delay: 100 });
sr.reveal(".text-info", { delay: 100 });
sr.reveal(".text-btn", { delay: 100 });
sr.reveal(".social_icons", { delay: 100 });

sr.reveal(".project-box", { interval: 100});
sr.reveal(".top-header", { interval: 100});
sr.reveal(".view", { delay: 100});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100});
srLeft.reveal(".contact-info", { delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

/* Active Link */

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive());
