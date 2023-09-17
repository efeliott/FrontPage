document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne les liens "Products" et "Resources" par leur classe
    const productsLink = document.querySelector('.products-link');
    const resourcesLink = document.querySelector('.resources-link');
    
    // Sélectionne les menus déroulants correspondants
    const dropdownMenuProducts = document.querySelector('.dropdown-menu-products');
    const dropdownMenuResources = document.querySelector('.dropdown-menu-resources');
    
    // Initialise une variable pour suivre si le curseur est sur l'un des menus déroulants ou les liens
    let cursorOnDropdown = false;
    let activeDropdown = null; // Variable pour stocker le menu déroulant actif
    
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

    // Gestionnaire d'événement pour masquer le menu déroulant "Products" lorsque l'utilisateur quitte le lien "Products"
    productsLink.addEventListener("mouseleave", function() {
        // Vérifie si le curseur n'est pas sur le menu déroulant "Products"
        if (!cursorOnDropdown) {
            // Défini un délai de 400 millisecondes avant de masquer le menu déroulant "Products"
            setTimeout(function() {
                // Vérifie à nouveau si le curseur n'est pas sur le menu déroulant
                if (!cursorOnDropdown) {
                    dropdownMenuProducts.classList.remove('active');
                }
            }, 400);
        }
    });

    // Gestionnaires d'événements pour suivre le survol du menu déroulant "Products"
    dropdownMenuProducts.addEventListener("mouseenter", function() {
        cursorOnDropdown = true;
        // Annule le délai de masquage si le curseur est sur le menu déroulant "Products"
        clearTimeout(timeoutId);
    });

    dropdownMenuProducts.addEventListener("mouseleave", function() {
        cursorOnDropdown = false;
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

    // Gestionnaire d'événement pour masquer le menu déroulant "Resources" lorsque l'utilisateur quitte le lien "Resources"
    resourcesLink.addEventListener("mouseleave", function() {
        // Vérifie si le curseur n'est pas sur le menu déroulant "Resources"
        if (!cursorOnDropdown) {
            // Défini un délai de 400 millisecondes avant de masquer le menu déroulant "Resources"
            setTimeout(function() {
                // Vérifie à nouveau si le curseur n'est pas sur le menu déroulant
                if (!cursorOnDropdown) {
                    dropdownMenuResources.classList.remove('active');
                }
            }, 400);
        }
    });

    // Gestionnaires d'événements pour suivre le survol du menu déroulant "Resources"
    dropdownMenuResources.addEventListener("mouseenter", function() {
        cursorOnDropdown = true;
        // Annule le délai de masquage si le curseur est sur le menu déroulant "Resources"
        clearTimeout(timeoutId);
    });

    dropdownMenuResources.addEventListener("mouseleave", function() {
        cursorOnDropdown = false;
    });
});
