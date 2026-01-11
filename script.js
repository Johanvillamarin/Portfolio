const projects = [
    {
        id: 1,
        title: "Portfolio Personal",
        description: "Portafolio moderno y elegante construido con HTML, CSS y JavaScript. Diseño totalmente responsive",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        link: "https://github.com/Johanvillamarin/Portfolio",
        demo: "#"
    },
    {
        id: 2,
        title: "Tienda Online",
        description: "Tienda en linea con productos y un carrito de compras con un diseño responsive",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        link: "https://github.com/Johanvillamarin/Tienda-Online",
        demo: "#"
    },
    {
        id: 3,
        title: "Juego de Aviones en Java",
        description: "Juego de aviones por turnos construido utilizando Java,el cual se puede jugar desde la terminal", 
        tags: ["Java"],
        link: "https://github.com/cantsbee/top-panchos/tree/main/proyecto%20final%20programacion/juego",
        demo: "#"
    }
];

const skills = [
    { name: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3/Modules", "Vite"] },
    { name: "Backend", items: ["Node.js", "Python", "SQL"] },
    { name: "Herramientas", items: ["Git", "GitHub", "VS Code", "Terminal"] }
];

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    updateCopyrightYear();
    initSmoothScroll();
});

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = skills.map(category => `
        <div class="glass skill-card">
            <h3 class="skill-category">${category.name}</h3>
            <ul class="skill-list">
                ${category.items.map(item => `
                    <li class="skill-item">${item}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="glass project-card">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            
            <div class="project-tags">
                ${project.tags.map(tag => `
                    <span class="project-tag">${tag}</span>
                `).join('')}
            </div>

            <div class="project-links">
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="link-with-icon">
                    Ver Código
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
            </div>
        </div>
    `).join('');
}

function updateCopyrightYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
