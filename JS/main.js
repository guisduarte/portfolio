
// Voltar ao topo

const btnVoltar = document.querySelector(".btn-voltar");
btnVoltar.addEventListener("click", function() {
    //window.scrollTo(0, 0,);
    window.scroll({
        top: 0,
        behavior: "smooth",
      });
});


//Rolar página 
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


//Menu Hamburguer
const botaoMenuHamburguer = document.getElementById("botao-menu-hamburguer");
const menu = document.getElementById("container__menu-escondido");

botaoMenuHamburguer.addEventListener("click", mostraMenu);

function mostraMenu() {
    if(menu.style.display === 'none') {
        menu.style.display = 'block';
        this.style.backgroundColor = 'aqua';
    } else {
        menu.style.display = 'none';
        this.style.backgroundColor = '';
    }
}