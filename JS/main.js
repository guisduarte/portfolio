let btnVoltar = document.querySelector(".btn-voltar");
btnVoltar.addEventListener("click", function() {
    window.scrollTo(0, 0,);
});


function rolar() {
    let obj = event.target.dataset.nome;
    document.getElementById(obj).scrollIntoView({behavior: "smooth"});    
}

function inicia() {    
    document.querySelector("#btn-sobre-mim").addEventListener("click",rolar);
    document.querySelector("#btn-portfolio").addEventListener("click",rolar);
    document.querySelector("#btn-contato").addEventListener("click",rolar);

}

window.addEventListener("load", inicia);

