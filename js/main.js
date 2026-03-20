document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav > ul');
    
    if (mobileMenu && navUl) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navUl.classList.toggle('active');
        });
    }

    const dropdownLinks = document.querySelectorAll('nav > ul > li > a');
    dropdownLinks.forEach(link => {
        if (link.nextElementSibling && link.nextElementSibling.tagName === 'UL') {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    link.parentElement.classList.toggle('active');
                }
            });
        }
    });
});
