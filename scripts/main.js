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
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4 mb-4';
            
            col.innerHTML = `
                <div class="portfolio-item ${item.category}">
                    <img src="${item.image}" class="img-fluid" alt="${item.title}">
                    <div class="portfolio-overlay text-white">
                        <h3 class="fw-bold">${item.title}</h3>
                        <p class="text-capitalize">${item.category}</p>
                    </div>
                </div>
            `;
            
            portfolioGrid.appendChild(col);
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
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (this.checkValidity()) {
            // Form is valid - process submission
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
            this.classList.remove('was-validated');
        } else {
            // Form is invalid - show validation errors
            this.classList.add('was-validated');
        }
    }, false);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
