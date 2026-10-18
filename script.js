/* ===============================
   MOBILE MENU
================================ */

const menuButton = document.getElementById("menuButton");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* ===============================
   CLOSE MOBILE MENU
================================ */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* ===============================
   ACTIVE NAV LINK
================================ */

const sections = document.querySelectorAll("section");

const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >=
            sectionTop - sectionHeight / 3
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ===============================
   CONTACT FORM
================================ */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    const phoneNumber =
        "2349028052768";


    const whatsappMessage =
        `Hello David,%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A%0A` +
        `Message: ${encodeURIComponent(message)}`;


    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );


    contactForm.reset();

});