const systemInfo = {
    browser: navigator.userAgent,
    operatingSystem: navigator.userAgentData?.platform
        || navigator.platform
        || "Unknown",
    language: navigator.language,
    languages: navigator.languages.join(", "),
    browserVendor: navigator.vendor || "Unknown",
    cookiesEnabled: navigator.cookieEnabled,
    internetConnection: navigator.onLine,
    cpuCores: navigator.hardwareConcurrency || "Unknown",
    screenResolution: `${screen.width} × ${screen.height}`,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
};

localStorage.setItem(
    "cvSystemInfo",
    JSON.stringify(systemInfo)
);

const savedInfo = JSON.parse(
    localStorage.getItem("cvSystemInfo")
);

const systemInfoContainer = document.getElementById("system-info");

if (systemInfoContainer && savedInfo) {
    const list = document.createElement("ul");

    for (const [key, value] of Object.entries(savedInfo)) {
        const item = document.createElement("li");
        item.textContent = `${key}: ${value}`;
        list.appendChild(item);
    }

    systemInfoContainer.appendChild(list);
}

const variantNumber = 20;

async function loadReviews() {
    const reviewsList = document.getElementById("reviews-list");
    const reviewsStatus = document.getElementById("reviews-status");

    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const comments = await response.json();

        reviewsList.replaceChildren();

        comments.forEach((comment) => {
            const article = document.createElement("article");
            article.className = "review-card";

            const title = document.createElement("h3");
            title.textContent = comment.name;

            const message = document.createElement("p");
            message.textContent = comment.body;

            const email = document.createElement("p");
            email.className = "review-email";
            email.textContent = `Author: ${comment.email}`;

            article.append(title, message, email);
            reviewsList.appendChild(article);
        });

        reviewsStatus.textContent =
            `Loaded reviews: ${comments.length}`;
    } catch (error) {
        reviewsStatus.textContent =
            "Failed to load reviews. Please try again later.";

        console.error("Error loading reviews:", error);
    }
}

loadReviews();

const contactModal = document.getElementById("contact-modal");
const closeModalButton = document.getElementById("close-modal");

if (contactModal && closeModalButton) {
    setTimeout(() => {
        contactModal.hidden = false;
        document.body.classList.add("modal-open");
    }, 60000);

    closeModalButton.addEventListener("click", () => {
        contactModal.hidden = true;
        document.body.classList.remove("modal-open");
    });

    contactModal.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            contactModal.hidden = true;
            document.body.classList.remove("modal-open");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !contactModal.hidden) {
            contactModal.hidden = true;
            document.body.classList.remove("modal-open");
        }
    });
}

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    const currentHour = new Date().getHours();

    let currentTheme =
        currentHour >= 7 && currentHour < 21
            ? "light"
            : "dark";

    function applyTheme(theme) {
        document.body.classList.toggle(
            "dark-theme",
            theme === "dark"
        );

        themeToggle.textContent =
            theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode";

        themeToggle.setAttribute(
            "aria-pressed",
            String(theme === "dark")
        );
    }

    applyTheme(currentTheme);

    themeToggle.addEventListener("click", () => {
        currentTheme =
            currentTheme === "light"
                ? "dark"
                : "light";

        applyTheme(currentTheme);
    });
}