//Menu Hamburguer
export default function menuMobile(){    
   const menuBotao = document.querySelector('[data-menu="button"]');
   const menulist = document.querySelector('[data-menu="list"]');

   document.onclick = function(event) {
        const targetDataMenu = event.target.getAttribute('data-menu');

        if (targetDataMenu !== "button" && targetDataMenu !== "list") {
            menulist.classList.remove('active');
            menuBotao.classList.remove('active');
        }
    }

   function toggleMenu() {
        menulist.classList.toggle('active');
        menuBotao.classList.toggle('active');       
    }
    menuBotao.addEventListener('click', toggleMenu);
}
