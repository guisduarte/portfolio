// Efeito Máquina de escrever/Digitação

export default  function digitacao(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
  
    textoArray.forEach((letra, i) => {
       setTimeout(function() {
        elemento.innerHTML += letra;
       }, 100 * i)
    });
}
  
const titulo = document.querySelector(".titulo__principal h1");
const subtitulo = document.querySelector(".titulo__principal h2");
    
digitacao(titulo);
digitacao(subtitulo);
