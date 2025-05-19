document.addEventListener('DOMContentLoaded', function() {
    // Portfolio items data
    const portfolioItems = [
        {
            id: 1,
            title: "Web Design Project",
            category: "web",
            image: "https://source.unsplash.com/random/600x900/?webdesign"
        },
        {
            id: 2,
            title: "Mobile App UI",
            category: "web",
            image: "https://source.unsplash.com/random/600x900/?appdesign"
        },
        {
            id: 3,
            title: "Brand Identity",
            category: "graphic",
            image: "https://source.unsplash.com/random/600x900/?branding"
        },
        {
            id: 4,
            title: "Product Photography",
            category: "photo",
            image: "https://source.unsplash.com/random/600x900/?product"
        },
        {
            id: 5,
            title: "E-commerce Website",
            category: "web",
            image: "https://source.unsplash.com/random/600x900/?ecommerce"
        },
        {
            id: 6,
            title: "Logo Design",
            category: "graphic",
            image: "https://source.unsplash.com/random/600x900/?logo"
        },
        {
            id: 7,
            title: "Nature Photography",
            category: "photo",
            image: "https://source.unsplash.com/random/600x900/?nature"
        },
        {
            id: 8,
            title: "Dashboard UI",
            category: "web",
            image: "https://source.unsplash.com/random/600x900/?dashboard"
        },
        {
            id: 9,
            title: "Poster Design",
            category: "graphic",
            image: "https://source.unsplash.com/random/600x900/?poster"
        },
        {
            id: 10,
            title: "Portrait Photography",
            category: "photo",
            image: "https://source.unsplash.com/random/600x900/?portrait"
        },
        {
            id: 11,
            title: "Landing Page",
            category: "web",
            image: "https://source.unsplash.com/random/600x900/?landingpage"
        },
        {
            id: 12,
            title: "Packaging Design",
            category: "graphic",
            image: "https://source.unsplash.com/random/600x900/?packaging"
        }
    ];

    // Initialize portfolio grid
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    function displayPortfolioItems(items) {
        portfolioGrid.innerHTML = '';
        
        items.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = `portfolio-item ${item.category}`;
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="item-info">
                    <h3>${item.title}</h3>
                    <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItem);
        });
    }
    
    // Display all items initially
    displayPortfolioItems(portfolioItems);
    
    // Filter portfolio items
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            if (filterValue === 'all') {
                displayPortfolioItems(portfolioItems);
            } else {
                const filteredItems = portfolioItems.filter(item => item.category === filterValue);
                displayPortfolioItems(filteredItems);
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Highlight active navigation item on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
    
    // Mobile menu toggle (would need additional HTML/CSS for full implementation)
    // This is a placeholder for future enhancement
});
