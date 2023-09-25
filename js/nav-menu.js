document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne les liens "Products" et "Resources" par leur classe
    const productsLink = document.querySelector('.products-link');
    const resourcesLink = document.querySelector('.resources-link');
    
    // Sélectionne les menus déroulants correspondants
    const dropdownMenuProducts = document.querySelector('.dropdown-menu-products');
    const dropdownMenuResources = document.querySelector('.dropdown-menu-resources');
    
    // Initialise des variables pour suivre si le curseur est sur l'un des menus déroulants ou les liens
    let cursorOnDropdown = false;
    let activeDropdown = null;

    // Gestionnaire d'événement pour le survol du lien "Products"
    productsLink.addEventListener("mouseenter", function() {
        // Ferme immédiatement le menu déroulant actif
        if (activeDropdown !== null) {
            activeDropdown.classList.remove('active');
        }
        
        // Ajoutez la classe "active" pour afficher le menu déroulant "Products"
        dropdownMenuProducts.classList.add('active');
        
        // Met à jour le menu déroulant actif
        activeDropdown = dropdownMenuProducts;
    });

    // Gestionnaire d'événement pour masquer le menu déroulant "Products" lorsque le curseur quitte le lien "Products"
    productsLink.addEventListener("mouseleave", function() {
        // Supprime la classe "active" pour masquer le menu déroulant "Products" après un court délai
        setTimeout(function() {
            if (!cursorOnDropdown) {
                dropdownMenuProducts.classList.remove('active');
            }
        }, 100); // Délai de 100 millisecondes
    });

    // Gestionnaire d'événement de clic pour afficher le menu déroulant "Products"
    productsLink.addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le lien de suivre le lien
        dropdownMenuProducts.classList.toggle('active'); // Affiche ou masque le menu déroulant
        activeDropdown = dropdownMenuProducts;
    });

    // Gestionnaire d'événement pour le survol du lien "Resources"
    resourcesLink.addEventListener("mouseenter", function() {
        // Ferme immédiatement le menu déroulant actif
        if (activeDropdown !== null) {
            activeDropdown.classList.remove('active');
        }

        // Ajoutez la classe "active" pour afficher le menu déroulant "Resources"
        dropdownMenuResources.classList.add('active');

        // Met à jour le menu déroulant actif
        activeDropdown = dropdownMenuResources;
    });

    // Gestionnaire d'événement pour masquer le menu déroulant "Resources" lorsque le curseur quitte le lien "Resources"
    resourcesLink.addEventListener("mouseleave", function() {
        // Supprime la classe "active" pour masquer le menu déroulant "Resources" après un court délai
        setTimeout(function() {
            if (!cursorOnDropdown) {
                dropdownMenuResources.classList.remove('active');
            }
        }, 100); // Délai de 100 millisecondes
    });

    // Gestionnaire d'événement de clic pour afficher le menu déroulant "Resources"
    resourcesLink.addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le lien de suivre le lien
        dropdownMenuResources.classList.toggle('active'); // Affiche ou masque le menu déroulant
        activeDropdown = dropdownMenuResources;
    });

    // Gestionnaires d'événements pour suivre le survol du menu déroulant "Resources"
    dropdownMenuResources.addEventListener("mouseenter", function() {
        cursorOnDropdown = true;
    });

    dropdownMenuResources.addEventListener("mouseleave", function() {
        cursorOnDropdown = false;
        // Supprime la classe "active" pour masquer le menu déroulant "Resources" lorsque le curseur le quitte
        dropdownMenuResources.classList.remove('active');
    });
});
