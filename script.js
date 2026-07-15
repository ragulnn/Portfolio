/* ==========================================
   TYPING ANIMATION
========================================== */

const words = [
    "DevOps Engineer",
    "Cloud Engineer",
    "Azure Engineer",
    "Platform Engineer",
    "Kubernetes Enthusiast",
    "Terraform Developer",
    "CI/CD Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   NAVBAR SHADOW
========================================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.35)";

        navbar.style.background =
            "rgba(15,23,42,.95)";

    } else {

        navbar.style.boxShadow = "none";

        navbar.style.background =
            "rgba(15,23,42,.75)";

    }

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.2

});

document.querySelectorAll(
".about-card,.skill-box,.project-card,.certificate-card,.education-card,.contact-box"
).forEach(el=>{

    el.classList.add("fade-in");

    observer.observe(el);

});


/* ==========================================
   HERO IMAGE PARALLAX
========================================== */

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth/2-e.pageX)/35;

    let y = (window.innerHeight/2-e.pageY)/35;

    heroImage.style.transform=
    `translate(${x}px,${y}px)`;

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn,.btn-outline").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});


/* ==========================================
   CURRENT YEAR
========================================== */

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Ragul M • DevOps & Cloud Engineer`;

}


/* ==========================================
   LOADING ANIMATION
========================================== */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});


document.body.style.opacity="0";

document.body.style.transition="opacity .8s ease";


/* ==========================================
   END
========================================== */
