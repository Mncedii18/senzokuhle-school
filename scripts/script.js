// Grab the toggle button and the navigation list
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul');

// Toggle the 'active' class when the hamburger icon is clicked
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
        }

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjusts for the fixed header height
                behavior: 'smooth'
            });
        }
    });
});

// Matric Results Combination Chart Initialization
document.addEventListener('DOMContentLoaded', function() {
    const chartElement = document.getElementById('matricResultsChart');
    
    if (chartElement) {
        new Chart(chartElement, {
            type: 'bar', // The base chart type
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024', '2025'], // The Years
                datasets: [
                    {
                        type: 'bar',
                        label: 'Overall Pass Rate (%)',
                        data: [39.1, 47.4, 35.3, 94.1, 93.8, 43.8], 
                        backgroundColor: '#800000', // School Maroon
                        borderRadius: 4 // Softens the top edges of the bars
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Allows it to fit the CSS height dynamically
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100, // Caps the graph at 100%
                        title: {
                            display: true,
                            text: 'Percentage (%)',
                            font: { weight: 'bold' }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false // Hovering anywhere in the column shows both stats
                    },
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }
});
