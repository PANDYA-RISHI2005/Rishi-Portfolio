/**
 * Portfolio Interaction & Engine Script
 */

// ==========================================================================
// 1. PROJECTS DATA
// ==========================================================================
//
// IMPORTANT:
// - Add newest projects at any time.
// - "date" decides which projects appear in "All".
// - All = ONLY the 4 most recent projects.
// - Individual categories = ALL projects in that category.
// - No image is required.
//
// ==========================================================================

const projectsData = [

    // ==========================================================
    // WEB PROGRAMMING
    // ==========================================================

    /*
    {
        id: 1,
        title: "My Web Application",
        category: "web",
        date: "2026-08-21",

        description:
            "A responsive web application developed using modern frontend technologies.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        github:
            "https://github.com/yourusername/project-name",

        demo:
            "https://your-demo-link.com"
    },
    */


    // ==========================================================
    // DATA ANALYSIS
    // ==========================================================

    
    {
        id: 2,
        title: "Student Performance Analyzer",
        category: "data-analysis",
        date: "2026-08-19",

        description:
            "A Python-based data analysis project that cleans, analyzes, and visualizes student performance data.",

        tech: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn"
        ],

        github:
            "https://github.com/PANDYA-RISHI2005/Data-Science-Projects/tree/main/01_Data_Analysis/Student_performance_Analyzer",

        demo: ""
    },

    {
    id: 3,
    title: "Sales Data Analysis",
    category: "data-analysis",
    date: "2026-08-30",

    description:
        "An exploratory data analysis project that analyzes retail sales, profit, products, customer segments, regions, discounts, and sales trends using the Superstore dataset.",

    tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook"
    ],

    github:
        "https://github.com/PANDYA-RISHI2005/Data-Science-Projects/tree/main/01_Data_Analysis/Sales_Data_Analysis",

    demo: ""
},
    


    // ==========================================================
    // MACHINE LEARNING
    // ==========================================================

    /*
    {
        id: 3,
        title: "House Price Prediction",
        category: "machine-learning",
        date: "2026-08-18",

        description:
            "A machine learning model that predicts house prices using important property features.",

        tech: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "NumPy"
        ],

        github:
            "https://github.com/yourusername/house-price-prediction",

        demo: ""
    },
    */


    // ==========================================================
    // DEEP LEARNING
    // ==========================================================

    /*
    {
        id: 4,
        title: "Eco-Scan AI",
        category: "deep-learning",
        date: "2026-08-15",

        description:
            "A deep learning based waste classification system that identifies different types of waste from images and provides recycling guidance.",

        tech: [
            "Python",
            "TensorFlow",
            "Keras",
            "OpenCV",
            "Streamlit"
        ],

        github:
            "https://github.com/yourusername/eco-scan-ai",

        demo:
            "https://your-demo-link.com"
    },
    */


    // ==========================================================
    // ARTIFICIAL INTELLIGENCE
    // ==========================================================

    /*
    {
        id: 5,
        title: "AI Assistant",
        category: "ai",
        date: "2026-08-10",

        description:
            "An artificial intelligence project designed to assist users with intelligent responses and automated tasks.",

        tech: [
            "Python",
            "AI",
            "NLP"
        ],

        github:
            "https://github.com/yourusername/ai-assistant",

        demo:
            ""
    },
    */


    // ==========================================================
    // GAMING
    // ==========================================================

    /*
    {
        id: 6,
        title: "Python Arcade Game",
        category: "gaming",
        date: "2026-08-05",

        description:
            "A simple interactive game developed to explore game logic, controls, scoring, and user interaction.",

        tech: [
            "Python",
            "Pygame"
        ],

        github:
            "https://github.com/yourusername/python-game",

        demo:
            ""
    }
    */

];


// ==========================================================================
// 2. PROJECT CATEGORY NAMES
// ==========================================================================

const projectCategoryNames = {
    web: "Web Programming",
    "data-analysis": "Data Analysis",
    "machine-learning": "Machine Learning",
    "deep-learning": "Deep Learning",
    ai: "Artificial Intelligence",
    gaming: "Gaming"
};


// ==========================================================================
// 3. CUSTOM CURSOR
// ==========================================================================

const initCustomCursor = () => {

    const cursor = document.querySelector('.custom-cursor');
    const dot = document.querySelector('.custom-cursor-dot');

    if (!cursor || !dot) return;

    let posX = 0;
    let posY = 0;

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.opacity = '1';
        dot.style.opacity = '1';

        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;

    });

    const animateCursor = () => {

        const dx = mouseX - posX;
        const dy = mouseY - posY;

        posX += dx * 0.15;
        posY += dy * 0.15;

        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;

        requestAnimationFrame(animateCursor);

    };

    animateCursor();

    const hoverElements = document.querySelectorAll(
        'a, button, input, textarea, .filter-btn, .skill-pill'
    );

    hoverElements.forEach(el => {

        el.addEventListener('mouseenter', () => {

            cursor.style.width = '35px';
            cursor.style.height = '35px';

            cursor.style.backgroundColor =
                'rgba(99, 102, 241, 0.1)';

            cursor.style.borderColor =
                'var(--secondary-color)';

        });

        el.addEventListener('mouseleave', () => {

            cursor.style.width = '20px';
            cursor.style.height = '20px';

            cursor.style.backgroundColor =
                'transparent';

            cursor.style.borderColor =
                'var(--primary-color)';

        });

    });

};


// ==========================================================================
// 4. THEME TOGGLE
// ==========================================================================

const initThemeToggle = () => {

    const themeToggleBtn =
        document.getElementById('theme-toggle-btn');

    if (!themeToggleBtn) return;

    const themeIcon =
        themeToggleBtn.querySelector('i');

    if (!themeIcon) return;

    const savedTheme =
        localStorage.getItem('theme');

    const prefersLight =
        window.matchMedia(
            '(prefers-color-scheme: light)'
        ).matches;


    if (
        savedTheme === 'light' ||
        (!savedTheme && prefersLight)
    ) {

        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');

        themeIcon.className =
            'fa-solid fa-sun';

    } else {

        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');

        themeIcon.className =
            'fa-solid fa-moon';

    }


    themeToggleBtn.addEventListener('click', () => {

        if (
            document.body.classList.contains('dark-theme')
        ) {

            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');

            themeIcon.className =
                'fa-solid fa-sun';

            localStorage.setItem(
                'theme',
                'light'
            );

        } else {

            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');

            themeIcon.className =
                'fa-solid fa-moon';

            localStorage.setItem(
                'theme',
                'dark'
            );

        }

    });

};


// ==========================================================================
// 5. MOBILE MENU
// ==========================================================================

const initMobileMenu = () => {

    const toggleBtn =
        document.querySelector('.mobile-nav-toggle');

    const overlay =
        document.querySelector('.mobile-nav-overlay');

    const mobileLinks =
        document.querySelectorAll('.mobile-link');

    if (!toggleBtn || !overlay) return;


    const toggleMenu = () => {

        toggleBtn.classList.toggle('open');

        overlay.classList.toggle('open');

        document.body.classList.toggle(
            'overflow-hidden'
        );

    };


    toggleBtn.addEventListener(
        'click',
        toggleMenu
    );


    mobileLinks.forEach(link => {

        link.addEventListener('click', () => {

            toggleBtn.classList.remove('open');

            overlay.classList.remove('open');

            document.body.classList.remove(
                'overflow-hidden'
            );

        });

    });

};


// ==========================================================================
// 6. ACTIVE SECTION NAVIGATION
// ==========================================================================

const initScrollSpy = () => {

    const sections =
        document.querySelectorAll('section');

    const navLinks =
        document.querySelectorAll('.nav-link');


    const options = {

        root: null,

        rootMargin:
            '-30% 0px -60% 0px',

        threshold: 0

    };


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const activeId =
                            entry.target.getAttribute(
                                'id'
                            );


                        navLinks.forEach(link => {

                            link.classList.remove(
                                'active'
                            );


                            if (
                                link.getAttribute(
                                    'href'
                                ) === `#${activeId}`
                            ) {

                                link.classList.add(
                                    'active'
                                );

                            }

                        });

                    }

                });

            },
            options
        );


    sections.forEach(section => {

        observer.observe(section);

    });

};


// ==========================================================================
// 7. PROJECT ENGINE
// ==========================================================================

const initProjectsEngine = () => {

    const grid =
        document.getElementById(
            'projects-grid'
        );

    const filterButtons =
        document.querySelectorAll(
            '.filter-btn'
        );


    if (!grid) return;


    // ----------------------------------------------------------
    // Render Projects
    // ----------------------------------------------------------

    const renderProjects = (
        filter = 'all'
    ) => {

        // Always clear the grid
        grid.innerHTML = '';


        // ------------------------------------------------------
        // If there are no projects
        // ------------------------------------------------------

        if (projectsData.length === 0) {

            grid.innerHTML = `

                <div class="project-empty-state card-glass">

                    <i class="fa-solid fa-folder-open empty-icon"></i>

                    <h3>No Projects Added Yet</h3>

                    <p>
                        Projects will appear here when they
                        are added to the projectsData array
                        in logic.js.
                    </p>

                    <p class="hint">
                        Add your projects individually by category.
                    </p>

                </div>

            `;

            return;

        }


        // ------------------------------------------------------
        // SORT PROJECTS BY DATE
        // Newest first
        // ------------------------------------------------------

        const sortedProjects =
            [...projectsData].sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            );


        // ------------------------------------------------------
        // FILTER LOGIC
        // ------------------------------------------------------

        let filteredProjects;


        if (filter === 'all') {

            // IMPORTANT:
            // ALL shows ONLY the 4 most recent projects.

            filteredProjects =
                sortedProjects.slice(0, 4);

        } else {

            // CATEGORY shows ALL projects
            // belonging to that category.

            filteredProjects =
                sortedProjects.filter(
                    project =>
                        project.category === filter
                );

        }


        // ------------------------------------------------------
        // No matching projects
        // ------------------------------------------------------

        if (filteredProjects.length === 0) {

            const categoryName =
                projectCategoryNames[filter] ||
                'this category';


            grid.innerHTML = `

                <div
                    class="project-empty-state card-glass"
                    style="grid-column: 1 / -1;"
                >

                    <i
                        class="fa-solid fa-folder-open empty-icon"
                    ></i>

                    <h3>
                        No ${categoryName} Projects Yet
                    </h3>

                    <p>
                        Add a project to this category
                        in logic.js.
                    </p>

                </div>

            `;

            return;

        }


        // ------------------------------------------------------
        // CREATE PROJECT CARDS
        // ------------------------------------------------------

        filteredProjects.forEach(project => {

            const card =
                document.createElement('div');


            card.className =
                'project-card card-glass';


            // --------------------------------------------------
            // Technologies
            // --------------------------------------------------

            const techHtml =
                project.tech
                    .map(
                        tech =>
                            `<span class="tech-tag">${tech}</span>`
                    )
                    .join('');


            // --------------------------------------------------
            // GitHub Link
            // --------------------------------------------------

            let linksHtml = '';


            if (project.github) {

                linksHtml += `

                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link-btn"
                    >

                        <i class="fa-brands fa-github"></i>

                        GitHub

                    </a>

                `;

            }


            // --------------------------------------------------
            // Demo Link
            // --------------------------------------------------

            if (project.demo) {

                linksHtml += `

                    <a
                        href="${project.demo}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link-btn btn-accent-hover"
                    >

                        <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        Live Demo

                    </a>

                `;

            }


            // --------------------------------------------------
            // Category Name
            // --------------------------------------------------

            const categoryName =
                projectCategoryNames[
                    project.category
                ] || project.category;


            // --------------------------------------------------
            // Project Card HTML
            // --------------------------------------------------

            card.innerHTML = `

                <div class="project-body">

                    <div class="project-title-row">

                        <h3>
                            ${project.title}
                        </h3>

                        <span class="project-badge">
                            ${categoryName}
                        </span>

                    </div>


                    <div class="project-date">

                        <i class="fa-regular fa-calendar"></i>

                        ${project.date}

                    </div>


                    <p>
                        ${project.description}
                    </p>


                    <div class="project-tech">

                        ${techHtml}

                    </div>


                    <div class="project-links">

                        ${linksHtml}

                    </div>

                </div>

            `;


            grid.appendChild(card);

        });

    };


    // ----------------------------------------------------------
    // Initial Display
    // ----------------------------------------------------------

    renderProjects('all');


    // ----------------------------------------------------------
    // Filter Buttons
    // ----------------------------------------------------------

    filterButtons.forEach(button => {

        button.addEventListener(
            'click',
            () => {

                filterButtons.forEach(btn => {

                    btn.classList.remove(
                        'active'
                    );

                });


                button.classList.add(
                    'active'
                );


                const selectedFilter =
                    button.getAttribute(
                        'data-filter'
                    );


                renderProjects(
                    selectedFilter
                );

            }
        );

    });

};


// ==========================================================================
// 8. CONTACT FORM
// ==========================================================================

const initContactForm = () => {

    const form =
        document.getElementById(
            'contact-form'
        );

    const toast =
        document.getElementById(
            'toast'
        );


    if (!form || !toast) return;


    form.addEventListener(
        'submit',
        (e) => {

            e.preventDefault();


            const nameInput =
                document
                    .getElementById('name')
                    .value
                    .trim();


            const emailInput =
                document
                    .getElementById('email')
                    .value
                    .trim();


            const messageInput =
                document
                    .getElementById('message')
                    .value
                    .trim();


            if (
                nameInput === '' ||
                emailInput === '' ||
                messageInput === ''
            ) {

                return;

            }


            toast.classList.add(
                'show'
            );


            form.reset();


            setTimeout(() => {

                toast.classList.remove(
                    'show'
                );

            }, 4000);

        }
    );

};


// ==========================================================================
// 9. INITIALIZE EVERYTHING
// ==========================================================================

document.addEventListener(
    'DOMContentLoaded',
    () => {

        initCustomCursor();

        initThemeToggle();

        initMobileMenu();

        initScrollSpy();

        initProjectsEngine();

        initContactForm();

    }
);
