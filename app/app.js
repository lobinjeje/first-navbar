const menuIcon = document.querySelector('.btn');
const navbar = document.querySelector('.sidebar')

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change");
});