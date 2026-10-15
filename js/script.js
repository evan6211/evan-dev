const card = document.querySelector(".profile-card");

if (card) {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -6;

        const rotateY =
            ((x - centerX) / centerX) * 6;

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(10px)
        `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    });

}

/* ================================
   MOBILE MENU
================================ */

const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}

/* ================================
   LANGUAGE SWITCHER
================================ */

const translations = {

    en: {

        // =========================
        // NAVBAR
        // =========================

        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-journey": "Journey",
        "nav-contact": "Contact",


        // =========================
        // HERO
        // =========================

        "hero-greeting": "Hello, I'm",

        "hero-subtitle":
            "IT Student & Web Developer",

        "hero-description":
            "I build websites, explore computer networks, and learn about cybersecurity.",

        "hero-projects":
            "View Projects",

        "hero-contact":
            "Contact Me",

        "card-role":
            "IT Student",


        // =========================
        // ABOUT
        // =========================

        "about-title":
            "About Me",

        "about-text":
            "I'm an IT student from Indonesia who enjoys learning how technology works, from building websites and configuring networks to exploring Linux, IoT, and cybersecurity.",


        // =========================
        // SKILLS
        // =========================

        "skills-title":
            "Skills",

        "skills-intro":
            "Some of the technologies and areas I work with.",

        "skill-web-title":
            "Web Development",

        "skill-web-text":
            "Building responsive and interactive websites using modern web technologies.",

        "skill-network-title":
            "Networking",

        "skill-network-text":
            "Learning and configuring computer networks and MikroTik devices.",

        "skill-linux-title":
            "Linux & Server",

        "skill-linux-text":
            "Working with Debian Linux and basic server administration.",

        "skill-iot-title":
            "IoT & Hardware",

        "skill-iot-text":
            "Building simple hardware projects using Arduino and sensors.",



        "projects-title": "Projects",
        "projects-intro": "A collection of projects I've built while exploring technology.",
        "projects-hint": "Drag, swipe, or use the arrows",
        "project-view": "View Details",
        "modal-tools-title": "Technologies & Tools",
        "modal-overview-title": "Project Overview",



        // =========================
        // JOURNEY
        // =========================

        "journey-title":
            "My Journey",

        "journey-2024-title":
            "Started SMK",

        "journey-2024-text":
            "Started learning Computer and Network Engineering.",

        "journey-2025-title":
            "Exploring IT",

        "journey-2025-text":
            "Started working with web development, networking, and Linux.",

        "journey-2026-title":
            "Building Projects",

        "journey-2026-text":
            "Worked on IoT, networking, server, and web projects.",


        // =========================
        // CONTACT
        // =========================

        "contact-label": "CONTACT ME",
        "contact-title": "Let's create something meaningful.",
        "contact-text": "Interested in collaborating, discussing technology, or just saying hello? I'm always open to messages.",
        "contact-button": "Send Email",
        "contact-github": "Explore my projects and code",
        "contact-email": "Send me a message",
        "contact-status": "Keep learning, keep creating.",


        // =========================
        // FOOTER
        // =========================

        "footer-text":
            "© 2026 Evan. All rights reserved."

    },


    // =========================================================
    // INDONESIAN
    // =========================================================

    id: {

        // =========================
        // NAVBAR
        // =========================

        "nav-home":
            "Beranda",

        "nav-about":
            "Tentang",

        "nav-skills":
            "Keahlian",

        "nav-projects":
            "Proyek",

        "nav-journey":
            "Perjalanan",

        "nav-contact":
            "Kontak",


        // =========================
        // HERO
        // =========================

        "hero-greeting":
            "Halo, saya",

        "hero-subtitle":
            "Siswa IT & Web Developer",

        "hero-description":
            "Saya membuat website, mempelajari jaringan komputer, dan mendalami cybersecurity.",

        "hero-projects":
            "Lihat Proyek",

        "hero-contact":
            "Hubungi Saya",

        "card-role":
            "Siswa IT",


        // =========================
        // ABOUT
        // =========================

        "about-title":
            "Tentang Saya",

        "about-text":
            "Saya adalah siswa IT dari Indonesia yang senang mempelajari cara kerja teknologi, mulai dari membuat website dan mengonfigurasi jaringan hingga mengeksplorasi Linux, IoT, dan cybersecurity.",


        // =========================
        // SKILLS
        // =========================

        "skills-title":
            "Keahlian",

        "skills-intro":
            "Beberapa teknologi dan bidang yang sedang saya pelajari dan kerjakan.",

        "skill-web-title":
            "Web Development",

        "skill-web-text":
            "Membuat website yang responsif dan interaktif menggunakan teknologi web modern.",

        "skill-network-title":
            "Jaringan",

        "skill-network-text":
            "Mempelajari dan mengonfigurasi jaringan komputer serta perangkat MikroTik.",

        "skill-linux-title":
            "Linux & Server",

        "skill-linux-text":
            "Menggunakan Debian Linux dan mempelajari dasar administrasi server.",

        "skill-iot-title":
            "IoT & Hardware",

        "skill-iot-text":
            "Membuat proyek hardware sederhana menggunakan Arduino dan sensor.",



        "projects-title": "Proyek",
        "projects-intro": "Kumpulan proyek yang saya buat selama mempelajari teknologi.",
        "projects-hint": "Geser kartu atau gunakan tombol panah",
        "project-view": "Lihat Detail",
        "modal-tools-title": "Teknologi & Peralatan",
        "modal-overview-title": "Tentang Proyek",

        // =========================
        // JOURNEY
        // =========================

        "journey-title":
            "Perjalanan Saya",

        "journey-2024-title":
            "Memulai SMK",

        "journey-2024-text":
            "Mulai mempelajari Teknik Komputer dan Jaringan.",

        "journey-2025-title":
            "Mengeksplorasi IT",

        "journey-2025-text":
            "Mulai mendalami web development, jaringan, dan Linux.",

        "journey-2026-title":
            "Membangun Proyek",

        "journey-2026-text":
            "Mengerjakan berbagai proyek IoT, jaringan, server, dan website.",


        // =========================
        // CONTACT
        // =========================


        "contact-label": "HUBUNGI SAYA",
        "contact-title": "Mari ciptakan sesuatu yang bermakna.",
        "contact-text": "Tertarik untuk bekerja sama, berdiskusi tentang teknologi, atau sekadar menyapa? Saya selalu terbuka untuk menerima pesan.",
        "contact-button": "Kirim Email",
        "contact-github": "Jelajahi proyek dan kode saya",
        "contact-email": "Kirim pesan kepada saya",
        "contact-status": "Terus belajar, terus berkarya.",


        // =========================
        // FOOTER
        // =========================

        "footer-text":
            "© 2026 Evan. Hak cipta dilindungi."

    }

};


let currentLanguage = "en";

const languageSwitch =
    document.querySelector("#languageSwitch");


function changeLanguage(language) {

    const elements =
        document.querySelectorAll("[data-i18n]");


    // Fade out
    elements.forEach((element) => {

        element.classList.add("language-changing");

    });


    // Tunggu animasi fade out
    setTimeout(() => {

        elements.forEach((element) => {

            const key =
                element.getAttribute("data-i18n");

            const translation =
                translations[language][key];

            if (translation) {
                element.textContent = translation;
            }

        });


        currentLanguage = language;

        languageSwitch.textContent =
            language === "en" ? "ID" : "EN";


        // Fade in
        requestAnimationFrame(() => {

            elements.forEach((element) => {

                element.classList.remove(
                    "language-changing"
                );

            });
            window.dispatchEvent(new Event("languageChanged"));
        });

    }, 350);

}


if (languageSwitch) {

    languageSwitch.addEventListener("click", () => {

        const newLanguage =
            currentLanguage === "en"
                ? "id"
                : "en";

        changeLanguage(newLanguage);

    });

}