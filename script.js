import portfolioData from "./data.js";

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) {
        node.className = className;
    }
    if (text !== undefined) {
        node.textContent = text;
    }
    return node;
}

function link(label, href, className = "text-link") {
    const anchor = el("a", className, label);
    anchor.href = href;
    const shouldOpenInNewTab = !href.startsWith("#") && !href.startsWith("mailto:");
    anchor.target = shouldOpenInNewTab ? "_blank" : "_self";
    if (shouldOpenInNewTab) {
        anchor.rel = "noopener noreferrer";
    }
    return anchor;
}

function renderHero() {
    const { basic } = portfolioData;
    document.title = `${basic.name} | ${basic.role}`;

    qs("#hero-title").textContent = basic.name;
    qs("#hero-role").textContent = basic.role;
    qs("#hero-intro").textContent = basic.intro;
    qs("#hero-location").textContent = basic.location;
    qs("#hero-photo").src = basic.profileImage;
    qs("#hero-photo").alt = `${basic.name} portrait`;
    qs("#nav-resume").href = basic.resumeLink;
}

function renderExperience() {
    const list = qs("#experience-list");

    portfolioData.experience.forEach((item) => {
        const card = el("article", "timeline-card");
        const header = el("div", "card-header");
        const titleWrap = el("div");

        titleWrap.append(el("p", "meta", item.period), el("h3", "", `${item.company} - ${item.title}`));
        header.append(titleWrap);

        card.append(header, el("p", "summary", item.summary), pointList(item.points), tagList(item.tags));
        list.append(card);
    });
}

function renderProjects() {
    const grid = qs("#project-grid");

    portfolioData.projects.forEach((project) => {
        grid.append(projectCard(project));
    });

    renderArchivedProjects();
}

function projectCard(project) {
    const card = el("article", "project-card");

    if (project.image) {
        const preview = el("button", "project-preview");
        preview.type = "button";
        preview.setAttribute("aria-label", `Open ${project.name} screenshot`);

        const image = document.createElement("img");
        image.src = project.image;
        image.alt = `${project.name} screenshot`;
        image.loading = "lazy";

        preview.append(image);
        preview.addEventListener("click", () => openImageDialog(project.image, `${project.name} screenshot`));
        card.append(preview);
    }

    const actions = el("div", "inline-links");
    if (project.link) {
        actions.append(link("Live", project.link));
    }
    if (project.github) {
        actions.append(link("Code", project.github));
    }

    const header = el("div", "project-card-header");
    const titleWrap = el("div");
    titleWrap.append(el("p", "meta", project.type), el("h3", "", project.name));
    header.append(titleWrap);
    if (actions.children.length) {
        header.append(actions);
    }

    card.append(
        header,
        el("p", "summary", project.summary),
        pointList(project.points),
        tagList(project.stack)
    );

    return card;
}

function renderArchivedProjects() {
    const archiveGrid = qs("#archive-grid");
    const archiveToggle = qs("#archive-toggle");

    portfolioData.archivedProjects.forEach((project) => {
        archiveGrid.append(projectCard(project));
    });

    archiveToggle.addEventListener("click", () => {
        const isExpanded = archiveToggle.getAttribute("aria-expanded") === "true";
        archiveToggle.setAttribute("aria-expanded", String(!isExpanded));
        archiveGrid.hidden = isExpanded;
        archiveToggle.textContent = isExpanded ? "show archived builds" : "hide archived builds";
    });
}

function renderAchievements() {
    const grid = qs("#achievement-grid");

    portfolioData.achievements.forEach((achievement) => {
        const card = el("article", "achievement-card");

        if (achievement.image) {
            const preview = el("button", "achievement-preview");
            preview.type = "button";
            preview.setAttribute("aria-label", `Open ${achievement.title} photo`);

            const image = document.createElement("img");
            image.src = achievement.image;
            image.alt = `${achievement.title} prize photo`;
            image.loading = "lazy";

            preview.append(image);
            preview.addEventListener("click", () => openImageDialog(achievement.image, `${achievement.title} prize photo`));
            card.append(preview);
        }

        card.append(el("h3", "", achievement.title), el("p", "summary", achievement.detail));
        if (achievement.link) {
            card.append(link("Certificate", achievement.link));
        }
        grid.append(card);
    });
}

function renderSkills() {
    const board = qs("#skill-board");
    portfolioData.skills.forEach((skillGroup) => {
        const card = el("article", "skill-card");
        card.append(el("h3", "", skillGroup.group), tagList(skillGroup.items));
        board.append(card);
    });
}

function renderEducation() {
    const educationList = qs("#education-list");
    portfolioData.education.forEach((education) => {
        const card = el("article", "education-box");
        card.append(
            el("h3", "", education.institution),
            el("p", "summary", `${education.degree} / ${education.period}`),
            el("p", "meta", education.result)
        );
        educationList.append(card);
    });
}

function renderLeadership() {
    const leadershipList = qs("#leadership-list");
    portfolioData.leadership.forEach((entry) => {
        const card = el("article", "leadership-card");
        card.append(el("h3", "", `${entry.organization} - ${entry.role}`), el("p", "summary", entry.summary));
        leadershipList.append(card);
    });
}

function renderContact() {
    qs("#contact-pitch").textContent = portfolioData.contact.pitch;
    qs("#footer-copy").textContent = `${new Date().getFullYear()} ${portfolioData.basic.name}.`;

    const socials = qs("#social-links");
    socials.append(link(portfolioData.basic.email, `mailto:${portfolioData.basic.email}`, "social-link primary"));
    portfolioData.social.forEach((social) => socials.append(link(social.label, social.href, "social-link")));
}

function initializeDialog() {
    const dialog = qs("#image-dialog");
    qs("#dialog-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
}

function openImageDialog(src, caption) {
    const dialog = qs("#image-dialog");
    qs("#dialog-image").src = src;
    qs("#dialog-image").alt = caption;
    qs("#dialog-caption").textContent = caption;

    if (typeof dialog.showModal === "function") {
        dialog.showModal();
    } else {
        dialog.setAttribute("open", "");
    }
}

function pointList(points) {
    const list = el("ul", "point-list");
    points.forEach((point) => list.append(el("li", "", point)));
    return list;
}

function tagList(tags) {
    const wrap = el("div", "tag-list");
    tags.forEach((tag) => wrap.append(el("span", "", tag)));
    return wrap;
}

function initializeNavigationState() {
    const links = qsa(".site-nav a");
    const sections = links.map((item) => qs(item.getAttribute("href"))).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
        const active = entries.find((entry) => entry.isIntersecting);
        if (!active) {
            return;
        }
        links.forEach((item) => item.classList.toggle("active", item.getAttribute("href") === `#${active.target.id}`));
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0.1 });

    sections.forEach((section) => observer.observe(section));
}

function initialize() {
    renderHero();
    renderExperience();
    renderProjects();
    renderAchievements();
    renderSkills();
    renderEducation();
    renderLeadership();
    renderContact();
    initializeDialog();
    initializeNavigationState();
}

document.addEventListener("DOMContentLoaded", initialize);
