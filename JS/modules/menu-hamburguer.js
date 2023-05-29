//Menu Hamburguer
export default function menuHamburguer(){    
    const botaoMenuHamburguer = document.getElementById("botao-menu-hamburguer");
    const menu = document.getElementById("container__menu-escondido");  

    menu.style.display = 'none';

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
}