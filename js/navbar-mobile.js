// Toggle mobile menu
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    var mobileDropdown = document.getElementById('mobile-dropdown');
    if (mobileDropdown.style.display === 'block') {
        mobileDropdown.style.display = 'none';
    } else {
        mobileDropdown.style.display = 'block';
    }
});
