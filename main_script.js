/*------------Toggle Nav---------------*/
let navToggle = document.querySelector(".nav-toggler");

navToggle.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    // hide scrolling
    document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
    // hide section
    let hideSection = document.querySelector("section.active");
    hideSection.classList.toggle("fade-out");
}

function toggleNavbar() {
    // toggle nav
    let navToggler = document.querySelector("nav");
    navToggler.classList.toggle("active");
}
/*----------Active Section------------*/
document.addEventListener("click", (eo) => {
    navToggle.classList.add("hide");
    if (eo.target.classList.contains("link-item") && eo.target.hash !== "") {
        //testing condition console.log("hey every body");
        // let hash = eo.target.hash;
        //testing if it's working right || not console.log(hash);
        if (eo.target.classList.contains("link-item")) {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            let activeSection = document.querySelector("section.active");
            activeSection.classList.remove("active", "fade-out");

            document.querySelector(eo.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggle.classList.remove("hide");
        }, 1000);
    }
});