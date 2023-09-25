document.addEventListener("DOMContentLoaded", function() {
  const productsLinkMobile = document.querySelector(".products-link-mobile");
  const resourcesLinkMobile = document.querySelector(".resources-link-mobile");
  const dropdownMenuProducts = document.querySelector(".dropdown-menu-products");
  const dropdownMenuResources = document.querySelector(".dropdown-menu-resources");
  const documentBody = document.querySelector("body");

  productsLinkMobile.addEventListener("click", function(event) {
    event.preventDefault();
    toggleDropdown(dropdownMenuProducts);
    hideDropdown(dropdownMenuResources);
  });

  resourcesLinkMobile.addEventListener("click", function(event) {
    event.preventDefault();
    toggleDropdown(dropdownMenuResources);
    hideDropdown(dropdownMenuProducts);
  });

  documentBody.addEventListener("click", function(event) {
    if (!event.target.closest(".mobile-dropdown")) {
      hideDropdown(dropdownMenuProducts);
      hideDropdown(dropdownMenuResources);
    }
  });

  function toggleDropdown(element) {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  }

  function hideDropdown(element) {
    element.classList.remove("active");
  }
});