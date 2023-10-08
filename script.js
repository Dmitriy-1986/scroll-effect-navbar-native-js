const header = document.querySelector('.header');
let isScrolled = false;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= 1000 && !isScrolled) {
        header.classList.add('fixed-header');
        isScrolled = true;
    } else if (scrollTop === 0 && isScrolled) {
        header.classList.remove('fixed-header');
        isScrolled = false;
    }
});