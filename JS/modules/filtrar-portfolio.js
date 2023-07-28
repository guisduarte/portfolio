export default function filtrarPotfolio() {

  const teclogias = document.querySelectorAll(".tecnologias span");  
  const projetos = document.querySelectorAll(".card");

  const listaDeProjetos = Array.from(projetos)
  
  teclogias.forEach(function(tecnologia) {
    tecnologia.addEventListener("click", () => {
      const tecnologiaSelecionada = tecnologia.dataset.tecnologia;

      const projetosFiltrados = listaDeProjetos.filter((projeto) => {
        return tecnologiaSelecionada === "todos" || projeto.dataset.tecnologias.split(",").includes(tecnologiaSelecionada);
      });
  
      listaDeProjetos.forEach((projeto) => {        
        if (projetosFiltrados.includes(projeto)) {
          projeto.style.display = "block";
        } else {
          projeto.style.display = "none";
        }
        
      });

    });

  });
  
}
