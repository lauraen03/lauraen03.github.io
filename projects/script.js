document.querySelector('.hamburger').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
});
