// Efeito Máquina de escrever/Digitação

export default function initDigitacao() {
    function digitacao(elemento) {
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
    
    subtitulo.classList.add('active');

    digitacao(titulo);

    setTimeout(() => {
        digitacao(subtitulo);
        subtitulo.classList.remove('active');
    }, 1600)

}