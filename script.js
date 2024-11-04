// dropdown functionality
const categoryToggle = document.getElementById('category-toggle');
const dropdown = document.querySelector('.category-dropdown');

categoryToggle.addEventListener('mouseenter', function() {
    dropdown.classList.add('show');
});

dropdown.addEventListener('mouseenter', function() {
    dropdown.classList.add('show');
});

categoryToggle.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if (!dropdown.matches(':hover')) {
            dropdown.classList.remove('show');
        }
    }, 100);
});

dropdown.addEventListener('mouseleave', function() {
    dropdown.classList.remove('show');
});

// hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
});
