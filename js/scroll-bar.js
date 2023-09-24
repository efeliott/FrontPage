// Sélectionnez la barre de navigation
const navBar = document.querySelector('.nav-bar');
const navBarMobile = document.querySelector('.mobile-navbar');

// Gestionnaire d'événement pour détecter le scroll
window.addEventListener('scroll', function() {
    // Si la position de défilement (scrollY) est supérieure à 100 pixels, ajoutez la classe "scrolled"
    if (window.scrollY > 100) {
        navBar.classList.add('scrolled');
        navBarMobile.classList.add('scrolled');
    } else {
        // Sinon, retirez la classe "scrolled"
        navBar.classList.remove('scrolled');
        navBarMobile.classList.remove('scrolled');
    }
});
