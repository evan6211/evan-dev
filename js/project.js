/* ==================================
   PROJECT DATA
================================== */

const projectData = [
    {
        id: "arduino",
        number: "01",
        category: "IOT / HARDWARE",
        accent: "#7589ff",
        symbol: "⌁",
        label: "ARDUINO",
        image: "assets/images/projects/Arduino.png",

        title: {
            en: "Clap Controlled LED",
            id: "Lampu LED Sensor Tepukan"
        },

        description: {
            en: "An Arduino LED project controlled through sound detection.",
            id: "Proyek lampu LED Arduino yang dikendalikan melalui deteksi suara."
        },

        overview: {
            en: "This project uses an Arduino, a sound sensor, and an LED. One clap turns the LED on, while two claps within a defined interval turn it off. Sensor sensitivity is adjusted to reduce false triggers.",
            id: "Proyek ini menggunakan Arduino, sensor suara, dan LED. Satu tepukan menyalakan LED, sedangkan dua tepukan dalam interval tertentu mematikannya. Sensitivitas sensor diatur agar tidak mudah terpicu oleh suara lain."
        },

        tools: ["Arduino", "C++", "Sound Sensor", "LED"],

        source: ""
    },

    {
        id: "debian",
        number: "02",
        category: "LINUX / SERVER",
        accent: "#ba91ff",
        symbol: ">_",
        label: "DEBIAN 12",
        image: "assets/images/projects/debian.png",

        title: {
            en: "Debian 12 Server Lab",
            id: "Lab Debian 12 Server"
        },

        description: {
            en: "A virtual Linux environment for learning server administration.",
            id: "Lingkungan Linux virtual untuk mempelajari administrasi server."
        },

        overview: {
            en: "A Debian 12 virtual machine used to practise Linux commands, server configuration, and DNS services.",
            id: "Mesin virtual Debian 12 yang digunakan untuk berlatih perintah Linux, konfigurasi server, dan layanan DNS."
        },

        tools: ["Debian 12", "Linux", "VirtualBox", "DNS"],

        source: ""
    },

    {
        id: "mikrotik",
        number: "03",
        category: "NETWORKING",
        accent: "#59bdff",
        symbol: "⌘",
        label: "MIKROTIK",
        image: "assets/images/projects/mikrotik.jpeg",

        title: {
            en: "MikroTik Network Lab",
            id: "Lab Jaringan MikroTik"
        },

        description: {
            en: "Network practice involving routing, DNS, and Debian connectivity.",
            id: "Praktik jaringan yang mencakup routing, DNS, dan koneksi Debian."
        },

        overview: {
            en: "A networking lab involving MikroTik configuration, routing, internet connectivity, and DNS resolution. The setup also tests communication between MikroTik and a Debian virtual machine.",
            id: "Praktik jaringan yang mencakup konfigurasi MikroTik, routing, koneksi internet, dan resolusi DNS. Pengujian juga dilakukan pada komunikasi antara MikroTik dan mesin virtual Debian."
        },

        tools: ["MikroTik", "WinBox", "TCP/IP", "DNS", "Debian"],

        source: ""
    },

    {
        id: "oreo",
        number: "04",
        category: "WEB DEVELOPMENT",
        accent: "#73a5ff",
        symbol: "</>",
        label: "Churros Oreo Website",
        image: "assets/images/projects/churos.png",

        title: {
            en: "Churros Oreo Website Concept",
            id: "Konsep Website Churros Oreo"
        },

        description: {
            en: "A brand-inspired website concept focused on visual design and layout.",
            id: "Konsep website terinspirasi brand dengan fokus pada desain visual dan tata letak."
        },

        overview: {
            en: "Website concept inspired by a work assignment to create the Churros Oreo brand for a school assignment, with responsive and interactive visuals",
            id: "Konsep website yang terinspirasi dari tugas kerja membuat brand Churros Oreo untuk tugas sekolah, dengan visual yang responsif dan interaktif"
        },

        tools: ["HTML", "CSS", "JavaScript"],

        source: "https://github.com/evan6211/churros-oreo",
        live: "https://churros-oreo.vercel.app/"
    },

    {
        id: "kopi",
        number: "05",
        category: "WEB DEVELOPMENT",
        accent: "#d7a477",
        symbol: "☕",
        label: "Cavan Coffee Website",
        image: "assets/images/projects/cavan.png",

        title: {
            en: "Cavan Coffee Website Concept",
            id: "Konsep Website Cavan Coffee"
        },

        description: {
            en: "A coffee-brand website concept with a focus on presentation and responsive design.",
            id: "Konsep website brand kopi dengan fokus pada presentasi produk dan desain responsif."
        },

        overview: {
            en: "A website concept inspired by Cavan Coffee. Showcase your own implementation, page layout, menu presentation, and responsive behaviour. This is a personal concept, not the official brand website.",
            id: "Konsep website yang terinspirasi dari Cavan Coffee. Tampilkan implementasimu sendiri, tata letak halaman, presentasi menu, dan tampilan responsif. Ini adalah konsep pribadi, bukan website resmi brand."
        },

        tools: ["HTML", "CSS", "JavaScript"],

        source: "https://github.com/evan6211/cavan-coffee",
        live: "https://evan6211.github.io/cavan-coffee/"
    },

    {
        id: "Ragil69",
        number: "06",
        category: "WEB DEVELOPMENT",
        accent: "#69d8bf",
        symbol: "{ }",
        label: "Ragil69 tour travel Website",
        image: "assets/images/projects/ragil.png",

        title: {
            en: "Ragil69 tour Travel Website",
            id: "Website Ragil69 tour Travel"
        },

        description: {
            en: "A website about Ragil69 Tour Travel, focusing on product presentation and responsive design.",
            id: "Website tentang Tour Travel Ragil69. dengan fokus pada presentasi produk dan desain responsif."
        },

        overview: {
            en: "This website is created for tour and travel service. with an attractive and responsive display. This website displays content in two languages, responsive layout, animated project cards, and more. made as an example for tour and travel service companies.",
            id: "Website ini di buat untuk jasa layanan tour dan travel. dengan tampilan yang menarik dan responsif. Website ini menampilkan konten dua bahasa, tata letak responsif, kartu proyek animasi dan lainnya.di buat untuk contoh untuk perusahaan jasa layanan tour dan travel."
        },

        tools: ["HTML", "CSS", "JavaScript"],

        source: "https://github.com/evan6211/ragil-69-tour-travel",
        live: "https://evan6211.github.io/ragil-69-tour-travel/"
    }
];


/* ==================================
   CAROUSEL
================================== */

const projectsCarousel = document.querySelector("#projectsCarousel");
const projectsTrack = document.querySelector("#projectsTrack");
const projectPrev = document.querySelector("#projectPrev");
const projectNext = document.querySelector("#projectNext");
const projectCounter = document.querySelector("#projectCounter");
const projectProgress = document.querySelector("#projectProgress");

let activeProjectIndex = 0;
let carouselTimer = null;
let dragStartX = 0;
let dragDeltaX = 0;
let isDragging = false;
let dragMoved = false;
let startTranslateX = 0;

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);


/* ==================================
   LANGUAGE HELPER
================================== */

function projectLanguage() {
    return typeof currentLanguage !== "undefined"
        ? currentLanguage
        : "en";
}

function projectText(value) {
    if (typeof value === "string") return value;
    return value[projectLanguage()] || value.en || "";
}


/* ==================================
   RENDER CARDS
================================== */

function renderProjectCards() {
    if (!projectsTrack) return;

    projectsTrack.innerHTML = projectData.map((project, index) => `
        <article
            class="project-card"
            data-index="${index}"
            style="--project-accent: ${project.accent}"
        >
            <div class="project-visual">

                <div class="project-art">
                    <span class="project-art-symbol">
                        ${project.symbol}
                    </span>

                    <span class="project-art-label">
                        ${project.category}
                    </span>

                    <strong>${project.label}</strong>

                    <small>
                        ${project.title.en}
                    </small>
                </div>

                <img
                    src="${project.image}"
                    alt="${project.title.en}"
                    loading="lazy"
                >

                <span class="project-number">
                    ${project.number}
                </span>
            </div>

            <div class="project-info">

                <p class="project-category">
                    ${project.category}
                </p>

                <h3 data-project-title="${index}">
                    ${projectText(project.title)}
                </h3>

                <p
                    class="project-description"
                    data-project-description="${index}"
                >
                    ${projectText(project.description)}
                </p>

                <div class="project-tags">
                    ${project.tools.slice(0, 3).map(tool => `
                        <span>${tool}</span>
                    `).join("")}
                </div>

                <button
                    class="project-details-btn"
                    type="button"
                    data-open-project="${index}"
                    data-i18n="project-view"
                >
                    View Details <span>↗</span>
                </button>

            </div>
        </article>
    `).join("");

    projectsTrack.querySelectorAll(".project-visual img").forEach(img => {
        img.addEventListener("error", () => {
            img.style.display = "none";
        });

        img.addEventListener("load", () => {
            if (img.naturalWidth > 0) {
                img.style.display = "block";
            }
        });
    });

    projectsTrack.querySelectorAll("[data-open-project]").forEach(button => {
        button.addEventListener("click", () => {
            if (dragMoved) return;

            const index = Number(button.dataset.openProject);
            openProjectModal(index);
        });
    });
}


/* ==================================
   POSITION CAROUSEL
================================== */

function updateCarousel(animate = true) {
    if (!projectsTrack || !projectsCarousel) return;

    const cards = projectsTrack.querySelectorAll(".project-card");
    const activeCard = cards[activeProjectIndex];

    if (!activeCard) return;

    if (!animate || reducedMotion.matches) {
        projectsTrack.classList.add("no-transition");
    } else {
        projectsTrack.classList.remove("no-transition");
    }

    const carouselWidth = projectsCarousel.clientWidth;
    const cardWidth = activeCard.getBoundingClientRect().width;

    const cardLeft = activeCard.offsetLeft;

    const offset = (carouselWidth - cardWidth) / 2;

    projectsTrack.style.transform =
        `translate3d(${offset - cardLeft}px, 0, 0)`;

    cards.forEach((card, index) => {
        card.classList.toggle("is-active", index === activeProjectIndex);
        card.setAttribute(
            "aria-current",
            index === activeProjectIndex ? "true" : "false"
        );
    });

    const displayNumber = String(activeProjectIndex + 1).padStart(2, "0");
    const totalNumber = String(projectData.length).padStart(2, "0");

    if (projectCounter) {
        projectCounter.textContent = `${displayNumber} / ${totalNumber}`;
    }

    if (projectProgress) {
        projectProgress.style.width =
            `${((activeProjectIndex + 1) / projectData.length) * 100}%`;
    }

    if (!animate || reducedMotion.matches) {
        requestAnimationFrame(() => {
            projectsTrack.classList.remove("no-transition");
        });
    }
}


function moveProject(direction) {
    activeProjectIndex =
        (activeProjectIndex + direction + projectData.length)
        % projectData.length;

    updateCarousel();
    restartAutoplay();
}


/* ==================================
   AUTOPLAY
================================== */

function stopAutoplay() {
    if (carouselTimer !== null) {
        clearInterval(carouselTimer);
        carouselTimer = null;
    }
}

function startAutoplay() {
    stopAutoplay();

    if (reducedMotion.matches) return;

    carouselTimer = setInterval(() => {
        if (
            !document.hidden &&
            !isDragging &&
            !document.querySelector(".project-modal.active")
        ) {
            moveProject(1);
        }
    }, 4500);
}

function restartAutoplay() {
    startAutoplay();
}

if (projectPrev) {
    projectPrev.addEventListener("click", () => moveProject(-1));
}

if (projectNext) {
    projectNext.addEventListener("click", () => moveProject(1));
}

if (projectsCarousel) {
    projectsCarousel.addEventListener("mouseenter", stopAutoplay);
    projectsCarousel.addEventListener("mouseleave", startAutoplay);

    projectsCarousel.addEventListener("focusin", stopAutoplay);
    projectsCarousel.addEventListener("focusout", startAutoplay);

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) stopAutoplay();
        else startAutoplay();
    });
}


/* ==================================
   DRAG / SWIPE
================================== */

if (projectsCarousel) {
    projectsCarousel.addEventListener("pointerdown", event => {
        if (event.target.closest("button")) return;

        isDragging = true;
        dragMoved = false;
        dragStartX = event.clientX;
        dragDeltaX = 0;

        const transform = getComputedStyle(projectsTrack).transform;
        const matrix = new DOMMatrixReadOnly(transform);

        startTranslateX = matrix.m41;

        projectsTrack.classList.add("no-transition");
        projectsCarousel.classList.add("is-dragging");

        stopAutoplay();
    });

    projectsCarousel.addEventListener("pointermove", event => {
        if (!isDragging) return;

        dragDeltaX = event.clientX - dragStartX;

        if (Math.abs(dragDeltaX) > 7) {
            dragMoved = true;
        }

        projectsTrack.style.transform =
            `translate3d(${startTranslateX + dragDeltaX}px, 0, 0)`;
    });

    function finishDrag() {
        if (!isDragging) return;

        isDragging = false;

        projectsTrack.classList.remove("no-transition");
        projectsCarousel.classList.remove("is-dragging");

        if (Math.abs(dragDeltaX) > 55) {
            activeProjectIndex =
                (activeProjectIndex + (dragDeltaX < 0 ? 1 : -1)
                    + projectData.length) % projectData.length;
        }

        updateCarousel();
        startAutoplay();

        setTimeout(() => {
            dragMoved = false;
        }, 100);
    }

    projectsCarousel.addEventListener("pointerup", finishDrag);
    projectsCarousel.addEventListener("pointercancel", finishDrag);
    projectsCarousel.addEventListener("lostpointercapture", finishDrag);
}


/* ==================================
   PROJECT DETAIL MODAL
================================== */

const projectModal = document.querySelector("#projectModal");
const modalPanel = projectModal?.querySelector(".project-modal-panel");
const modalVisual = document.querySelector("#modalVisual");
const modalNumber = document.querySelector("#modalNumber");
const modalVisualLabel = document.querySelector("#modalVisualLabel");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalTags = document.querySelector("#modalTags");
const modalOverview = document.querySelector("#modalOverview");
const modalActions = document.querySelector("#modalActions");

let previouslyFocusedElement = null;
let openedProjectIndex = null;


function openProjectModal(index) {
    const project = projectData[index];

    if (!project || !projectModal) return;

    openedProjectIndex = index;
    previouslyFocusedElement = document.activeElement;

    // Update gambar modal
    modalVisual.querySelector("img")?.remove();

    if (project.image) {
        const image = document.createElement("img");

        image.src = project.image;
        image.alt = projectText(project.title);
        image.className = "modal-project-image";
        image.draggable = false;

        image.addEventListener("error", () => {
            image.remove();
        }, { once: true });

        modalVisual.prepend(image);
    }

    // Update informasi proyek
    modalNumber.textContent = project.number;
    modalVisualLabel.textContent = project.label;
    modalCategory.textContent = project.category;

    modalVisual.style.setProperty(
        "--project-accent",
        project.accent
    );

    modalTitle.textContent = projectText(project.title);
    modalDescription.textContent = projectText(project.description);
    modalOverview.textContent = projectText(project.overview);

    // Update daftar teknologi
    modalTags.replaceChildren();

    project.tools.forEach((tool) => {
        const tag = document.createElement("span");
        tag.textContent = tool;
        modalTags.appendChild(tag);
    });

    // Update tautan proyek
    modalActions.replaceChildren();

    if (project.live) {
        addModalLink(
            project.live,
            projectText({
                en: "Live Preview ↗",
                id: "Lihat Website ↗"
            })
        );
    }

    if (project.source) {
        addModalLink(
            project.source,
            projectText({
                en: "Source Code ↗",
                id: "Source Code ↗"
            })
        );
    }

    // Tampilkan modal
    projectModal.classList.add("active");
    projectModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    stopAutoplay();
    modalPanel?.focus();
}


function addModalLink(url, label) {
    const link = document.createElement("a");

    link.href = url;
    link.textContent = label;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    modalActions.appendChild(link);
}

function closeProjectModal() {
    if (!projectModal) return;

    projectModal.classList.remove("active");
    projectModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    openedProjectIndex = null;

    if (previouslyFocusedElement?.isConnected) {
        previouslyFocusedElement.focus();
    }

    startAutoplay();
}

if (projectModal) {
    projectModal.querySelectorAll("[data-close-modal]").forEach(element => {
        element.addEventListener("click", closeProjectModal);
    });
}

document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        projectModal?.classList.contains("active")
    ) {
        closeProjectModal();
    }
});


/* ==================================
   UPDATE LANGUAGE
================================== */

function refreshProjectLanguage() {
    if (!projectsTrack) return;

    projectsTrack.querySelectorAll("[data-project-title]").forEach(element => {
        const project = projectData[Number(element.dataset.projectTitle)];
        element.textContent = projectText(project.title);
    });

    projectsTrack.querySelectorAll("[data-project-description]").forEach(element => {
        const project = projectData[Number(element.dataset.projectDescription)];
        element.textContent = projectText(project.description);
    });

    projectsTrack.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (
            typeof translations !== "undefined" &&
            translations[projectLanguage()]?.[key]
        ) {
            element.textContent = translations[projectLanguage()][key];
        }
    });

    if (openedProjectIndex !== null) {
        openProjectModal(openedProjectIndex);
    }
}

window.addEventListener("languageChanged", refreshProjectLanguage);

window.addEventListener("resize", () => updateCarousel(false));


/* ==================================
   INITIALIZE
================================== */

renderProjectCards();

requestAnimationFrame(() => {
    updateCarousel(false);
    startAutoplay();
});