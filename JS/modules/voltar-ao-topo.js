
// Botão Voltar ao topo
export default function voltarAoTopo() {    
  const btnVoltar = document.querySelector(".btn-voltar");  

  btnVoltar.addEventListener("click", function() {
    //window.scrollTo(0, 0,);
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  })
};