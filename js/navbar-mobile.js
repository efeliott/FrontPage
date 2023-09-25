// Toggle mobile menu
document.getElementById('mobile-menu-button').addEventListener('click', function(event) {
    var mobileDropdown = document.getElementById('mobile-dropdown');
    if (mobileDropdown.style.display === 'block') {
        mobileDropdown.style.display = 'none';
    } else {
        mobileDropdown.style.display = 'block';
    }

    // Empêcher la propagation du clic pour éviter de fermer immédiatement
    // la liste déroulante après l'ouverture.
    event.stopPropagation();
});

// Fermer la liste déroulante mobile si l'utilisateur clique en dehors de la navbar
document.addEventListener('click', function(event) {
    var mobileDropdown = document.getElementById('mobile-dropdown');
    if (mobileDropdown.style.display === 'block' && !event.target.closest('.mobile-navbar')) {
        mobileDropdown.style.display = 'none';
    }
});

// Empêcher la propagation du clic dans la liste déroulante pour éviter de le fermer immédiatement
document.getElementById('mobile-dropdown').addEventListener('click', function(event) {
    event.stopPropagation();
});
