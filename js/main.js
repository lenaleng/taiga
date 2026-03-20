document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav > ul');
    
    if (mobileMenu && navUl) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navUl.classList.toggle('active');
        });
    }

    const dropdowns = document.querySelectorAll('.dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.parentElement.classList.toggle('active');
            }
        });
    });
});
