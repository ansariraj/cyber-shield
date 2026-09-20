// Cyber Shield
// Simple JavaScript file for the project

console.log("Cyber Shield website loaded successfully.");


// Highlight navigation link while scrolling

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#00d9ff";
        }

    });

});

/* ============================= */
/* GOOGLE FORM QR CODE */
/* ============================= */

const surveyLink =
    "https://forms.gle/jT95xNW5V6qpwcbh6";

const qrScript = document.createElement("script");

qrScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";

qrScript.onload = function () {

    new QRCode(document.getElementById("qrcode"), {
        text: surveyLink,
        width: 175,
        height: 175
    });

};

document.head.appendChild(qrScript);