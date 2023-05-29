//Rolar página 
export default function rolarPagina() {
    const menuItems = document.querySelectorAll('.menu a[href^="#"], .menu-lista__link a[href^="#"]' );
    
    menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
    })

    function getScrollTopByHref(element) {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.target) - 80;
        scrollToPosition(to);
    }

    function scrollToPosition(to) {
        window.scroll({
            top: to,
            behavior: "smooth",
        });
        smoothScrollTo(0, to);
    }
}