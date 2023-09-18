// Fonction pour mettre à jour la position de l'image en fonction du défilement
function updateParallaxImagePosition() {
    const parallaxImage = document.querySelector('.parallaxe-image');
    const scrollY = window.scrollY;
  
    // Réglez la vitesse de défilement en ajustant la valeur de 0.3 selon vos préférences
    const scrollSpeed = 0.3;
  
    // Calculez la nouvelle position de l'image
    const newPosition = -scrollY * scrollSpeed;
  
    // Appliquez la transformation CSS pour déplacer l'image
    parallaxImage.style.transform = `translateY(${newPosition}px)`;
  }
  
  // Écoutez l'événement de défilement pour mettre à jour la position de l'image
  window.addEventListener('scroll', updateParallaxImagePosition);
  
  // Appelez la fonction initiale pour configurer la position de départ
  updateParallaxImagePosition();
  