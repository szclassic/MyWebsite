// Adding functionality to the tabs
function openTab(tabId, event) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let content of tabContents) {
        content.classList.remove('active');
    }

    // Removing active class from all buttons
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let button of tabButtons) {
        button.classList.remove('active');
    }

    // Showing the selected tab content and activating the button
    if (document.getElementById(tabId)) {
        document.getElementById(tabId).classList.add('active');
    }
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Adding active class to current page's tab button
document.addEventListener('DOMContentLoaded', function() {
    // Getting current page filename
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    
    // Mapping of pages to their corresponding tab indices
    const pageMap = {
        'home': 0,
        'projects': 1,
        'resume': 2
    };

    // Finding and activating the correct tab
    const tabButtons = document.getElementsByClassName('tab-button');
    if (tabButtons.length > 0 && pageMap.hasOwnProperty(currentPage)) {
        const activeIndex = pageMap[currentPage];
        tabButtons[activeIndex].classList.add('active');
    }
});

// Adding hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
